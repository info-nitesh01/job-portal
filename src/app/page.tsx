'use client'

import FooterComponent from "@/components/FooterComponent";
import HomeBanner from "@/components/HomeBanner";
import JobCategory from "@/components/Job-Category";
import JobArea from "@/components/JobArea";
import UserNav from "@/components/UserNav";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);
  return (
    <>
      {loading ? <div className="h-dvh w-full flex items-center justify-center"><span className="loader"></span></div>
        :
        <>
          <UserNav />
          <HomeBanner />
          <JobCategory />
          <JobArea />
          <FooterComponent />
        </>
      }
    </>
  );
}
