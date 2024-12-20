import { createApi } from "@reduxjs/toolkit/query/react";
import customBaseQuery from "./fetchBase";
import { BreedsResponse, IBreed } from "../../interface/breed";

export const apiCaller = createApi({
  reducerPath: "apiCaller",
  refetchOnMountOrArgChange: 30,
  baseQuery: customBaseQuery(),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    /**
     * truyền kiểu dữ liệu cho các endpoint <'response trả về', 'kiểu tuyền vào'>
     */
    getBreeds: builder.query<IBreed[], void>({
      query: () => "breeds", // Đường dẫn API để lấy dữ liệu giống chó
      transformResponse: (response: BreedsResponse) => response.data, // Trỏ đến phần 'data' trong phản hồi API
    }),
  }),
});

export const { useGetBreedsQuery } = apiCaller;
