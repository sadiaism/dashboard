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
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

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
