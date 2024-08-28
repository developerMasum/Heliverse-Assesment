import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://heliverse-server-eight.vercel.app/api/users",
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
