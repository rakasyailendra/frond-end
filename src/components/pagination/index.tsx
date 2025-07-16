"use client";

import { useContext } from "react";
import { AppContext } from "@/context/store";
import { AppContextType } from "@/types";

export default function Pagination() {
  const context = useContext(AppContext) as AppContextType;
  if (!context?.apiData) return null;

  const { apiData, setCurrentPage } = context;
  const { current_page, last_page, links } = apiData.meta;

  const pageLinks = links.slice(1, -1); // Remove first (prev) and last (next) links

  return (
    <nav className="mt-10">
      <ul className="flex flex-wrap items-center justify-center">
        <li>
          <button onClick={() => setCurrentPage(1)} disabled={current_page === 1} className="nav-button">
            {"<<"}
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentPage(current_page - 1)} disabled={current_page === 1} className="nav-button">
            {"<"}
          </button>
        </li>
        {pageLinks.map((link) => (
          <li key={link.label}>
            <button onClick={() => setCurrentPage(Number(link.label))} disabled={link.url === null} className={`page-button ${link.active ? "bg-orange-500 text-white" : ""}`}>
              {link.label}
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => setCurrentPage(current_page + 1)} disabled={current_page === last_page} className="nav-button">
            {">"}
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentPage(last_page)} disabled={current_page === last_page} className="nav-button">
            {">>"}
          </button>
        </li>
      </ul>
    </nav>
  );
}