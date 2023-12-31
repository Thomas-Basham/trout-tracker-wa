import React, { useState } from "react";
import useApiData from "../hooks/useApiData";

import { DateRange } from "../components/DateRangePicker";
import DateRangePicker from "../components/DateRangePicker";
import SelectedDateRange from "@/components/SelectedDateRange";
import StockChart from "../components/StockChart";
import TotalStockedByHatcheryChart from "../components/HatcheryChart";
import SortableTable from "../components/SortableTable";
import dynamic from "next/dynamic";
const FishingMap = dynamic(() => import("../components/fishMap"), {
  ssr: false,
});

export default function Home() {
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  const [selectedDateRange, setSelectedDateRange] = useState<DateRange>({
    startDate: today.toISOString(),
    endDate: sevenDaysAgo.toISOString(),
  });

  const handleDateChange = (dateRange: DateRange) => {
    setSelectedDateRange(dateRange);
  };

  // Helper Function to format a date in a readable way
  const formatDate = (dateStr: string | undefined | null) => {
    if (dateStr) {
      const date = new Date(dateStr);
      return `${String(date.getMonth() + 1).padStart(2, "0")}/${String(
        date.getDate()
      ).padStart(2, "0")}/${date.getFullYear()}`;
    } else return "";
  };

  const {
    stockedLakesData,
    hatcheryTotals,
    // derbyLakesData,
    totalStockedByDate,
    dateDataUpdated,
    loading,
  } = useApiData(selectedDateRange);

  return (
    <>
      <section
        id="date-widget"
        className="z-0 lg:max-w-5xl sm:max-w-screen w-full font-mono text-sm mb-10"
      >
        <h2 className="lg:text-5xl md:text-4xl sm:text-2xl mb-5">
          Trout stocked in Washington State
        </h2>
        <DateRangePicker onDateChange={handleDateChange} />
        <SelectedDateRange
          formatDate={formatDate}
          selectedDateRange={selectedDateRange}
          today={today}
        />
      </section>
      <section id="map-widget" className="z-0  w-screen mb-10">
        <FishingMap
          selectedDateRange={selectedDateRange}
          stockedLakesData={stockedLakesData}
          loading={loading}
        />
      </section>
      <section
        id="table-and-charts"
        className="z-0 max-w-screen w-full items-center justify-between font-mono text-sm lg:flex flex-col mb-10 gap-10"
      >
        <SortableTable
          data={stockedLakesData}
          formatDate={formatDate}
          loading={loading}
        />

        <StockChart data={totalStockedByDate} loading={loading} />

        <TotalStockedByHatcheryChart data={hatcheryTotals} loading={loading} />
      </section>
    </>
  );
}
