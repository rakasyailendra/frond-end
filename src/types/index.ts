export interface Idea {
  id: number;
  title: string;
  published_at: string;
  small_image: { url: string }[];
  medium_image: { url: string }[];
}

export interface Meta {
  current_page: number;
  last_page: number;
  total: number;
  links: { url: string | null; label: string; active: boolean }[];
}

export interface APIResponse {
  data: Idea[];
  meta: Meta;
}

export interface AppContextType {
  apiData: APIResponse | null;
  pageSize: number;
  setPageSize: (size: number) => void;
  sortOrder: string;
  setSortOrder: (sort: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  isLoading: boolean;
  error: string | null;
}