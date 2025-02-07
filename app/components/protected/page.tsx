// "use client"
// import React from 'react'
// import {useRouter } from 'next/navigation'
// import {useEffect } from 'react'

// export default function ProtectedRoute({children} : {children : React.ReactNode}){
//     const router = useRouter();
    

//     useEffect(() => {
//         const isLoggedIn = localStorage.getItem("isLoggedIn")
//         if (!isLoggedIn) {
//             router.push("/admin")
//         }
//     },[router])

//     return <>
//     {children}
//     </>



// }


"use client";
import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin");
    }
  }, [router]);

  return <>{children as ReactNode}</>;
};

export default ProtectedRoute;
