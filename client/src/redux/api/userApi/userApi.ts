/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: any) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),
    deleteUser: build.mutation({
      query: (id: string) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: `/${data?.id}`,
        method: "PUT",
        body: data?.updateData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = dashboardApi;
