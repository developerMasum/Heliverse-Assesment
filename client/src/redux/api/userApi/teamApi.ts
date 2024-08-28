import { TResponseRedux } from "@/types/global.type";

import { baseApi } from "../../api/baseApi";
import { TUser } from "@/utils";

const teamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          args.forEach((item: any) => {
            params.append(item?.name, item?.value as string);
          });
        }

        return {
          url: "/team",
          method: "GET",
          params: params,
        };
      },
      //   providesTags: ["product"],
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    createTeam: builder.mutation({
      query: (teamInfo) => ({
        url: "/team",
        method: "POST",
        body: teamInfo,
      }),
      //   invalidatesTags: ["team"],
    }),

    getAllUsersByCategory: builder.query({
      query: (category) => {
        return {
          url: `/teams/category/${category}`,
          method: "GET",
        };
      },
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/teams/${id}`,
        method: "PUT",
      }),
      //   invalidatesTags: ["team"],
    }),

    getSingleTeam: builder.query({
      query: (teamId) => {
        return {
          url: `/team/${teamId}`,
          method: "Get",
        };
      },
      //   providesTags: ["team"],
    }),
  }),
});

export const {
  useCreateTeamMutation,
  useDeleteUserMutation,
  useGetAllUsersByCategoryQuery,
  useGetAllUsersQuery,
  useGetSingleTeamQuery,
} = teamApi;
