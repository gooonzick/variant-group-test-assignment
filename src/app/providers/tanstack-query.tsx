import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export const TanstackQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 1000 * 60 * 2,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
