import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const BASE_URL = `https://dogapi.dog/api/v2`;
const customBaseQuery = () => {
  const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
  return async (args: string | FetchArgs, api: BaseQueryApi) => {
    const response = await baseQuery(args, api, {});
    // if (response.error?.status === 401) {
    //   //logic here
    // }

    return response;
  };
};
export default customBaseQuery;
