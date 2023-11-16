import { apiSlice } from "../root/apiSlice";

const registerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/api/register/new",
        method: "PATCH",
        body: data,
      }),
    }),


    loginUser: builder.mutation({
      query: (data) => ({
        url: "/api/register/login",
        method: "POST",
        body: data,
      }),
    }),


    getUserProfile: builder.query({
      query: (email) => ({
        url: `/api/profile/me/${email}`,
        method: "GET",
      }),
      providesTags: ["profile"],
    }),

    
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useGetUserProfileQuery } = registerApi;
