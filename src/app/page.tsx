import FooterComponent from "@/components/FooterComponent";
import HomeBanner from "@/components/HomeBanner";
import JobCategory from "@/components/Job-Category";
import JobArea from "@/components/JobArea";
import UserNav from "@/components/UserNav";

export default function Home() {
  return (
    <>
      <UserNav />
      <HomeBanner />
      <JobCategory />
      <JobArea />
      <FooterComponent />
    </>
  );
}
