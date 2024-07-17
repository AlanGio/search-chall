import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchResult } from "../../App";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    search: builder.query<SearchResult[], string | null>({
      query: (value) => `data/?search=${value}`,
    }),
  }),
});

export const { useSearchQuery } = searchApi;
