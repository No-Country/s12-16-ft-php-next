import { axiosClient } from "@/services/axiosClient";
import { create } from "zustand";

const useStore = create((set) => ({
  articles: [],
  currentPage: 1,
  totalPages: 1,
  totalItems: 0,
  fetchArticles: async (page = 1) => {
    try {
      const response = await axiosClient.get(`/article?page=${page}`);
      const { data } = response.data;
      set((state) => ({
        articles: data.data || [],
        currentPage: data.current_page,
        totalPages: data.last_page,
        totalItems: data.total,
      }));
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  },
}));

export default useStore;
