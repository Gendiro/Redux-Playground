import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostItem } from "../types/post.ts";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllPosts: build.query<PostItem[], number>({
      query: (limit = 5) => ({
        url: "/posts",
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Post"],
    }),
    createPost: build.mutation<PostItem, PostItem>({
      query: (post: PostItem) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: build.mutation<PostItem, PostItem>({
      query: (post: PostItem) => ({
        url: `/posts/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: build.mutation<PostItem, PostItem>({
      query: (post: PostItem) => ({
        url: `/posts/${post.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});
