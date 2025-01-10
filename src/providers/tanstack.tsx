"use client";

import React, { FC, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
};

const TanstackQueryProvider: FC<Props> = ({ children }) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: { refetchOnWindowFocus: false, staleTime: 0, retry: true },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackQueryProvider;
