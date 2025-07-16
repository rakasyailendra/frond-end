"use client";

import { useContext, useState, useEffect, useRef, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AppContext } from "@/context/store";
import { AppContextType } from "@/types";

const Pagination = dynamic(() => import("@/components/pagination"));
const Dropdown = dynamic(() => import("@/components/dropdown"));
const Card = dynamic(() => import("@/components/card"));

export default function IdeasPage() {
  const context = useContext(AppContext) as AppContextType;
  const pathname = usePathname();

  const [bannerImageUrl, setBannerImageUrl] = useState("/home.jpg");
  const [showLoader, setShowLoader] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // Detect screen size for responsive loading
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Exit loading screen after data is loaded
  useEffect(() => {
    if (!context.isLoading) {
      setIsFadingOut(true);
      setTimeout(() => {
        setShowLoader(false);
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 700);
    }
  }, [context.isLoading]);

  // Load banner image from API
  useEffect(() => {
    const apiUrl = context?.apiData?.data[0]?.medium_image[0]?.url;
    if (apiUrl) {
      const img = new window.Image();
      img.src = apiUrl;
      img.onload = () => setBannerImageUrl(apiUrl);
    }
  }, [context?.apiData]);

  // Parallax scroll effect
  useLayoutEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (imageRef.current) {
            const imageScale = 1 + scrollY / 5000;
            imageRef.current.style.transform = `translateY(${scrollY * 0.1}px) scale(${imageScale})`;
          }
          if (textRef.current) {
            textRef.current.style.transform = `translateY(${scrollY * 0.6}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Loading Screen Responsive
  if (showLoader) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-700 ease-in-out ${
          isFadingOut ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
      >
        <div className="relative w-full h-full block sm:hidden">
          <Image
            src="/loading1.png"
            alt="Loading Mobile"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative w-full h-full hidden sm:block">
          <Image
            src="/loading.png"
            alt="Loading Desktop"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    );
  }

  // Error State
  if (context.error || !context.apiData) {
    return (
      <div className="min-h-screen pt-64 text-center text-2xl text-red-500">
        Error: {context.error || "Data not found."}
      </div>
    );
  }

  const { pageSize, sortOrder, apiData, setPageSize, setSortOrder } = context;
  const { meta } = apiData;

  return (
    <>
      {/* Hero Banner */}
      <div className="relative clip min-h-screen overflow-hidden bg-gray-800 flex items-center justify-center">
        <div ref={imageRef} className="absolute inset-0" style={{ willChange: "transform" }}>
          <Image
            src={bannerImageUrl}
            alt="Ideas Banner"
            fill
            priority
            className="object-cover brightness-50"
            sizes="100vw"
          />
        </div>

        <div
          ref={textRef}
          className="relative z-10 text-center text-white px-4"
          style={{ willChange: "transform" }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">ideas</h1>
          <h2 className="mt-4 text-base sm:text-xl md:text-2xl font-light tracking-wide text-gray-200">
            with suitmedia we trust
          </h2>
          <h3 className="mt-2 text-sm sm:text-md md:text-lg font-light tracking-widest text-gray-300">
            by rakasyainz
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative bg-white px-4 pb-14 sm:px-12 md:px-24">
        <div className="flex flex-col sm:flex-row my-8 ml-3">
          <p className="flex-1 text-left m-auto text-gray-600 mb-6 sm:mb-0 text-sm sm:text-base">
            Showing {meta.total > 0 ? (meta.current_page - 1) * pageSize + 1 : 0} -{" "}
            {Math.min(meta.current_page * pageSize, meta.total)} of {meta.total}
          </p>
          <div className="flex-1 flex flex-wrap justify-start sm:justify-end gap-x-2 sm:gap-x-6">
            <div className="flex items-center mb-2 sm:mb-0">
              <p className="mr-2 text-gray-500 text-sm sm:text-base">Per Page:</p>
              <Dropdown
                value={pageSize.toString()}
                options={[
                  { value: "10", label: "10" },
                  { value: "20", label: "20" },
                  { value: "50", label: "50" },
                ]}
                onChange={(val) => setPageSize(Number(val))}
              />
            </div>
            <div className="flex items-center">
              <p className="mr-2 text-gray-500 text-sm sm:text-base">Sort By:</p>
              <Dropdown
                value={sortOrder}
                options={[
                  { value: "-published_at", label: "Newest" },
                  { value: "published_at", label: "Oldest" },
                ]}
                onChange={setSortOrder}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apiData.data.map((idea) => (
            <Card key={idea.id} idea={idea} />
          ))}
        </div>

        <Pagination />
      </div>
    </>
  );
}