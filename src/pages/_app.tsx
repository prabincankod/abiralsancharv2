import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools client={queryClient} initialIsOpen={false} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
