// import type { Metadata } from "next";
import Header from "./Header";
import useApiData from "@/hooks/useApiData";
import { formatDate } from "@/pages";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { dateDataUpdated } = useApiData({
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
  });
  return (
    <>
      <Header />
      <main className="main mx-auto  flex min-h-screen flex-col items-center justify-between lg:p-24 ">
        {children}
      </main>
      <footer>
        <p className="text-center mb-10">
          Data was last collected on {formatDate(dateDataUpdated)} from the{" "}
          <a
            className=" text-cyan-700 hover:text-cyan-900"
            href="https://wdfw.wa.gov/fishing/reports/stocking/trout-plants/all"
            target="_blank"
            rel="noreferrer nofollow"
          >
            WDFW trout plant reports page
          </a>
          .
        </p>
      </footer>
    </>
  );
}
