import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchApi<T>(
  uri: string,
  {
    method = "GET",
    body,
    headers = {},
    isFormData = false,
  }: {
    method?: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
    body?: Record<string, any>;
    headers?: Record<string, any>;
    isFormData?: boolean;
  },
) {
  const authToken = "33e90d42-8d5e-48cd-a61a-3a12dd99c559";
  if (authToken) {
    headers = { ...headers, "x-api-key": authToken };
  }
  headers = {
    "x-api-key": authToken,
    // 'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
  };
  if (!isFormData) headers["Content-Type"] = "application/json";
  let options: Record<string, any> = {
    method,
    headers,
  };
  if (body) {
    if (isFormData) {
      const formData = new FormData();
      for (const key in body) {
        if (body[key]) formData.append(key, body[key]);
        // else formData.append(key, '')
      }
      options = { ...options, body: formData };
    } else options = { ...options, body: JSON.stringify(body) };
  }
  try {
    const responseRaw = await fetch(
      "https://jsugauta1.pythonanywhere.com" + uri,
      options,
    );
    const response = (await responseRaw.json()) as T;

    if (responseRaw.status >= 400) {
      throw response;
    }
    return response;
  } catch (error) {
    const controlledError = error as { error?: { message: string } };
    if (controlledError) {
      throw new Error(controlledError.error?.message || "Something went wrong");
    }
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
}
