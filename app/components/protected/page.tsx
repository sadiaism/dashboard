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

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin");
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;
