"use client";

import axios from "axios";
import { createContext, useEffect, useState, ReactNode } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { APIResponse, AppContextType } from "@/types";

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const pageFromURL = Number(params.slug) || 1;
  const sizeFromURL = Number(searchParams.get("size")) || 10;
  const sortFromURL = searchParams.get("sort") || "-published_at";

  const [currentPage, setCurrentPageState] = useState<number>(pageFromURL);
  const [pageSize, setPageSizeState] = useState<number>(sizeFromURL);
  const [sortOrder, setSortOrderState] = useState<string>(sortFromURL);

  const [apiData, setApiData] = useState<APIResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const updateURL = (page: number, size: number, sort: string) => {
    router.replace(`/${page}?size=${size}&sort=${sort}`, { scroll: false });
  };

  const setCurrentPage = (page: number) => {
    setCurrentPageState(page);
    updateURL(page, pageSize, sortOrder);
  };

  const setPageSize = (size: number) => {
    setPageSizeState(size);
    setCurrentPage(1);
    updateURL(1, size, sortOrder);
  };

  const setSortOrder = (sort: string) => {
    setSortOrderState(sort);
    setCurrentPage(1);
    updateURL(1, pageSize, sort);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // PERHATIAN: Di sini kita masih menggunakan proxy /api/ideas
        // Ini adalah status sebelum ada masalah "Backend accept only json communication."
        // dan sebelum ada instruksi untuk membuat route.ts
        const response = await axios.get<APIResponse>(
          `/api/ideas?page[number]=${currentPage}&page[size]=${pageSize}&append[]=small_image&append[]=medium_image&sort=${sortOrder}`,
          {
            headers: {
              'Accept': 'application/json'
            }
          }
        );
        setApiData(response.data);
      } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occurred.";
        setError(message);
        console.error("Failed to fetch data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, pageSize, sortOrder]);

  const contextValue: AppContextType = {
    apiData,
    pageSize,
    setPageSize,
    sortOrder,
    setSortOrder,
    currentPage,
    setCurrentPage,
    isLoading,
    error,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};