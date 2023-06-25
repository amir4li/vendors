"use client"

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  useEffect(()=> {
    redirect("/vendors")
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
};

