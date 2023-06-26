"use client"

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { Loading } from "@/components";

export default function Home() {
  useEffect(()=> {
    redirect("/vendors")
  }, []);

  return (
    <div>
      <Loading />
    </div>
  )
};

