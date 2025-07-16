"use client";

import { useContext } from "react";
import dynamic from "next/dynamic";
import { AppContext } from "@/context/store";
import { AppContextType } from "@/types";

// Dynamic imports for client-side components
const Pagination = dynamic(() => import("@/components/pagination"));
const Dropdown = dynamic(() => import("@/components/dropdown"));
const Card = dynamic(() => import("@/components/card"));

export default function PostList() {
  const context = useContext(AppContext) as AppContextType;

  // Render nothing if apiData is not available or if there's an error
  if (!context.apiData) {
    return null;
  }

  const { pageSize, sortOrder, apiData, setPageSize, setSortOrder } = context;
  const { meta, data } = apiData;

  return (
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
        {data.map((idea) => (
          <Card key={idea.id} idea={idea} />
        ))}
      </div>

      <Pagination />
    </div>
  );
}