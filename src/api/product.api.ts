import axios, { RawAxiosRequestHeaders } from "axios";
import { config } from "../config";
import { AxiosError } from "axios";

export interface ErrorValidationResponse {
  message: string;
  errors: {
    [field: string]: string[];
  };
  status: number;
}

export class ProductApi {
  private static myInstance: ProductApi | null;
  static getInstance() {
    if (this.myInstance == null) {
      this.myInstance = new ProductApi();
    }
    return this.myInstance;
  }

  apiInstance = (accessToken?: string) => {
    const headers: RawAxiosRequestHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (accessToken && accessToken != "") {
      headers.Authorization = `Bearer ${accessToken}`;
    }

    return axios.create({
      baseURL: `${config.apiUrl}`,
      headers,
    });
  };

  async createProduct(
    name: string,
    price: number,
  ) {
    try {
      const response = await this.apiInstance().post("/api/product", {
        name,
        price
      });
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError<ErrorValidationResponse> = error;
        if (axiosError.response) {
          const errorResponse: ErrorValidationResponse =
            axiosError.response.data;
          return errorResponse;
        }
      }
    }
  }

  async getProducts() {
    try {
      const response = await this.apiInstance().get("/api/product");
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError<ErrorValidationResponse> = error;
        if (axiosError.response) {
          const errorResponse: ErrorValidationResponse =
            axiosError.response.data;
          return errorResponse;
        }
      }
    }
  }

}
