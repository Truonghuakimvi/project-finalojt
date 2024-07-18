import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../libs/interceptor";

export interface LoginCredentials {
  email: string;
  password: string;
}
export const login = createAsyncThunk("auth/login", async () => {
  try {
    const response = await axiosInstance.get(`/employees`, {});
    return response.data;
  } catch (error: unknown) {
    console.log(error);
  }
});
