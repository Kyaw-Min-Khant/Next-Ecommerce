'use client'
import React, { Suspense } from "react"
import Loading from "./loading"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const Layout=({children}:{children:React.ReactNode})=>{
  const queryClient=new QueryClient()
    return (
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={(<Loading/>)}>
        {children}
      </Suspense>
      </QueryClientProvider>
    
    )
}
export default Layout