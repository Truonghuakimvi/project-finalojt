import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../libs/interceptor";

export interface LoginCredentials {
  email: string;
  password: string;
}
export const login = createAsyncThunk(
  "auth/login",
  async (data: LoginCredentials) => {
    try {
      const response = await axiosInstance.post(`/auth/login`, {
        email: data.email,
        password: data.password,
      });
      return response.data;
    } catch (error: unknown) {
      console.log(error);
    }
  }
);
