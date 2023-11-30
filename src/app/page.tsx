"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import Image from "next/image";
import useApiData from "./hooks/useApiData";
import Head from "next/head";
import Header from "./components/Header";
import { DateRange } from "./components/DateRangePicker";
import DateRangePicker from "./components/DateRangePicker";
import FishingMap from "./components/fishMap";
import StockChart from "./components/StockChart";

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
    // Do something with the selected date range, e.g., fetch data based on the date range
  };

  // const {
  //   // stockedLakesData,
  //   // hatcheryTotals,
  //   // derbyLakesData,
  //   // totalStockedByDate,
  //   // dateDataUpdated,
  //   // loading,
  // } = useApiData(selectedDateRange);
  const stockedLakesData = [
    {
      date: "Wed, 18 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Hood Park Pond Walla Walla County",
      hatchery: "Lyons Ferry Hatchery",
      lake: "Hood Park Pond Walla Walla County",
      latitude: 46.2145152,
      longitude: -119.0131341,
      species: "Rainbow",
      stocked_fish: 2505,
      weight: 3,
    },
    {
      date: "Wed, 18 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Leader Lake Okanogan County",
      hatchery: "Chelan Hatchery",
      lake: "Leader Lake Okanogan County",
      latitude: 48.3612135,
      longitude: -119.6838895,
      species: "Rainbow",
      stocked_fish: 500,
      weight: 2.4,
    },
    {
      date: "Wed, 18 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Twin Lks Ltl Stevens County",
      hatchery: "Ford Hatchery",
      lake: "Twin Lks Ltl Stevens County",
      latitude: 48.4558249,
      longitude: -117.9059909,
      species: "Rainbow",
      stocked_fish: 260,
      weight: 1,
    },
    {
      date: "Wed, 18 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Hatch Lake Stevens County",
      hatchery: "Ford Hatchery",
      lake: "Hatch Lake Stevens County",
      latitude: 48.4974622,
      longitude: -117.8065455,
      species: "Rainbow",
      stocked_fish: 130,
      weight: 1,
    },
    {
      date: "Thu, 19 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Roses Lake Chelan County",
      hatchery: "Chelan Hatchery",
      lake: "Roses Lake Chelan County",
      latitude: 47.9045409,
      longitude: -120.155072,
      species: "Rainbow",
      stocked_fish: 1584,
      weight: 2.64,
    },
    {
      date: "Thu, 19 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Fio Rito Laken Kittitas County",
      hatchery: "Goldendale Hatchery",
      lake: "Fio Rito Laken Kittitas County",
      latitude: 46.9399474,
      longitude: -120.5062846,
      species: "Rainbow",
      stocked_fish: 94,
      weight: 0.2,
    },
    {
      date: "Fri, 20 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Lost Lake Ltl Pend Oreille County",
      hatchery: "Ford Hatchery",
      lake: "Lost Lake Ltl Pend Oreille County",
      latitude: 48.8132869,
      longitude: -117.4421343,
      species: "Rainbow",
      stocked_fish: 111,
      weight: 1,
    },
    {
      date: "Mon, 23 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Jameson Lake Douglas County",
      hatchery: "Chelan Pud Hatchery",
      lake: "Jameson Lake Douglas County",
      latitude: 47.6837211,
      longitude: -119.6224262,
      species: "Rainbow",
      stocked_fish: 4590,
      weight: 2.7,
    },
    {
      date: "Mon, 23 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Lake Chelan Chelan County",
      hatchery: "Chelan Pud Hatchery",
      lake: "Lake Chelan Chelan County",
      latitude: 48.0269741,
      longitude: -120.3377317,
      species: "Rainbow",
      stocked_fish: 1890,
      weight: 2.7,
    },
    {
      date: "Mon, 23 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Wapato Lake Chelan County",
      hatchery: "Chelan Pud Hatchery",
      lake: "Wapato Lake Chelan County",
      latitude: 47.9166719,
      longitude: -120.1600674,
      species: "Rainbow",
      stocked_fish: 5000,
      weight: 2.7,
    },
    {
      date: "Mon, 23 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Gissburg Pond South Snohomish County",
      hatchery: "Whitehorse Pond",
      lake: "Gissburg Pond South Snohomish County",
      latitude: 48.0329979,
      longitude: -121.8339472,
      species: "Rainbow",
      stocked_fish: 945,
      weight: 0.9,
    },
    {
      date: "Mon, 23 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Ballinger Lake Snohomish County",
      hatchery: "Whitehorse Pond",
      lake: "Ballinger Lake Snohomish County",
      latitude: 47.7820803,
      longitude: -122.3276873,
      species: "Rainbow",
      stocked_fish: 1476,
      weight: 0.9,
    },
    {
      date: "Tue, 24 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Green Lake King County",
      hatchery: "Whitehorse Pond",
      lake: "Green Lake King County",
      latitude: 47.6798338,
      longitude: -122.3257826,
      species: "Rainbow",
      stocked_fish: 1375,
      weight: 0.9,
    },
    {
      date: "Tue, 24 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Jameson Lake Douglas County",
      hatchery: "Chelan Pud Hatchery",
      lake: "Jameson Lake Douglas County",
      latitude: 47.6837211,
      longitude: -119.6224262,
      species: "Rainbow",
      stocked_fish: 7590,
      weight: 2.7,
    },
    {
      date: "Tue, 24 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Silver Lake T28Snohomish County",
      hatchery: "Whitehorse Pond",
      lake: "Silver Lake T28Snohomish County",
      latitude: 47.8934651,
      longitude: -122.2153023,
      species: "Rainbow",
      stocked_fish: 1517,
      weight: 0.9,
    },
    {
      date: "Wed, 25 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Green Lake King County",
      hatchery: "Whitehorse Pond",
      lake: "Green Lake King County",
      latitude: 47.6798338,
      longitude: -122.3257826,
      species: "Rainbow",
      stocked_fish: 1539,
      weight: 0.9,
    },
    {
      date: "Thu, 26 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Fio Rito Laken Kittitas County",
      hatchery: "Goldendale Hatchery",
      lake: "Fio Rito Laken Kittitas County",
      latitude: 46.9399474,
      longitude: -120.5062846,
      species: "Rainbow",
      stocked_fish: 33,
      weight: 0.1,
    },
    {
      date: "Thu, 26 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Fio Rito Laken Kittitas County",
      hatchery: "Goldendale Hatchery",
      lake: "Fio Rito Laken Kittitas County",
      latitude: 46.9399474,
      longitude: -120.5062846,
      species: "Rainbow",
      stocked_fish: 23,
      weight: 0.2,
    },
    {
      date: "Fri, 27 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Big Bow Pond Douglas County",
      hatchery: "Chelan Pud Hatchery",
      lake: "Big Bow Pond Douglas County",
      latitude: 47.7790617,
      longitude: -119.7474606,
      species: "Rainbow",
      stocked_fish: 3250,
      weight: 2.5,
    },
    {
      date: "Fri, 27 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Mattoon Lake Kittitas County",
      hatchery: "Goldendale Hatchery",
      lake: "Mattoon Lake Kittitas County",
      latitude: 46.9781076,
      longitude: -120.5530429,
      species: "Rainbow",
      stocked_fish: 33,
      weight: 0.1,
    },
    {
      date: "Fri, 27 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Mattoon Lake Kittitas County",
      hatchery: "Goldendale Hatchery",
      lake: "Mattoon Lake Kittitas County",
      latitude: 46.9781076,
      longitude: -120.5530429,
      species: "Rainbow",
      stocked_fish: 117,
      weight: 0.2,
    },
    {
      date: "Fri, 27 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Pit Lake Douglas County",
      hatchery: "Chelan Pud Hatchery",
      lake: "Pit Lake Douglas County",
      latitude: 47.3762619,
      longitude: -120.1404212,
      species: "Rainbow",
      stocked_fish: 2000,
      weight: 2.5,
    },
    {
      date: "Fri, 27 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Davis Lake Ferry County",
      hatchery: "Ford Hatchery",
      lake: "Davis Lake Ferry County",
      latitude: 48.7208264,
      longitude: -118.2420699,
      species: "Rainbow",
      stocked_fish: 250,
      weight: 0.9,
    },
    {
      date: "Mon, 30 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Big Bow Pond Douglas County",
      hatchery: "Chelan Pud Hatchery",
      lake: "Big Bow Pond Douglas County",
      latitude: 47.7790617,
      longitude: -119.7474606,
      species: "Rainbow",
      stocked_fish: 3750,
      weight: 2.5,
    },
    {
      date: "Mon, 30 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Clear Lake T34Skagit County",
      hatchery: "Marblemount Hatchery",
      lake: "Clear Lake T34Skagit County",
      latitude: 48.4642735,
      longitude: -122.2340447,
      species: "Rainbow",
      stocked_fish: 468,
      weight: 0.6,
    },
    {
      date: "Mon, 30 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Putters Pond Douglas County",
      hatchery: "Chelan Pud Hatchery",
      lake: "Putters Pond Douglas County",
      latitude: 47.7790617,
      longitude: -119.7474606,
      species: "Rainbow",
      stocked_fish: 3250,
      weight: 2.5,
    },
    {
      date: "Mon, 30 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Sylvia Lake Grays Harbor County",
      hatchery: "Lk Aberdeen Hatchery",
      lake: "Sylvia Lake Grays Harbor County",
      latitude: 47.0012413,
      longitude: -123.5899848,
      species: "Rainbow",
      stocked_fish: 1100,
      weight: 1,
    },
    {
      date: "Mon, 30 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Vance Creek Adlt Pond Grays Harbor County",
      hatchery: "Lk Aberdeen Hatchery",
      lake: "Vance Creek Adlt Pond Grays Harbor County",
      latitude: 47.0272912,
      longitude: -123.4205771,
      species: "Rainbow",
      stocked_fish: 800,
      weight: 1,
    },
    {
      date: "Mon, 30 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Clear Lake T34Skagit County",
      hatchery: "Marblemount Hatchery",
      lake: "Clear Lake T34Skagit County",
      latitude: 48.4642735,
      longitude: -122.2340447,
      species: "Rainbow",
      stocked_fish: 204,
      weight: 1.7,
    },
    {
      date: "Tue, 31 Oct 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Putters Pond Douglas County",
      hatchery: "Chelan Pud Hatchery",
      lake: "Putters Pond Douglas County",
      latitude: 47.7790617,
      longitude: -119.7474606,
      species: "Rainbow",
      stocked_fish: 5750,
      weight: 2.5,
    },
    {
      date: "Fri, 03 Nov 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Kress Lake Cowlitz County",
      hatchery: "Kalama Falls Hatchery",
      lake: "Kress Lake Cowlitz County",
      latitude: 46.0465158,
      longitude: -122.8532292,
      species: "Steelhead",
      stocked_fish: 15,
      weight: 0.1,
    },
    {
      date: "Mon, 06 Nov 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Rotary Lake Yakima County",
      hatchery: "Goldendale Hatchery",
      lake: "Rotary Lake Yakima County",
      latitude: 46.6280541,
      longitude: -120.50943,
      species: "Rainbow",
      stocked_fish: 79,
      weight: 0.2,
    },
    {
      date: "Mon, 06 Nov 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Kress Lake Cowlitz County",
      hatchery: "Kalama Falls Hatchery",
      lake: "Kress Lake Cowlitz County",
      latitude: 46.0465158,
      longitude: -122.8532292,
      species: "Steelhead",
      stocked_fish: 9,
      weight: 0.1,
    },
    {
      date: "Mon, 06 Nov 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Lake Kokanee Mason County",
      hatchery: "Eells Springs",
      lake: "Lake Kokanee Mason County",
      latitude: 47.4021276,
      longitude: -123.2045661,
      species: "Rainbow",
      stocked_fish: 20,
      weight: 0.8,
    },
    {
      date: "Mon, 06 Nov 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Beaver Lks T24King County",
      hatchery: "Issaquah Hatchery",
      lake: "Beaver Lks T24King County",
      latitude: 47.5899979,
      longitude: -121.9922229,
      species: "Rainbow",
      stocked_fish: 1856,
      weight: 0.4,
    },
    {
      date: "Mon, 06 Nov 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Rotary Lake Yakima County",
      hatchery: "Goldendale Hatchery",
      lake: "Rotary Lake Yakima County",
      latitude: 46.6280541,
      longitude: -120.50943,
      species: "Rainbow",
      stocked_fish: 56,
      weight: 0.1,
    },
    {
      date: "Mon, 06 Nov 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Kitsap Lake Kitsap County",
      hatchery: "Eells Springs",
      lake: "Kitsap Lake Kitsap County",
      latitude: 47.5828719,
      longitude: -122.7084779,
      species: "Rainbow",
      stocked_fish: 376,
      weight: 0.29,
    },
    {
      date: "Tue, 07 Nov 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Beaver Lks T24King County",
      hatchery: "Issaquah Hatchery",
      lake: "Beaver Lks T24King County",
      latitude: 47.5899979,
      longitude: -121.9922229,
      species: "Rainbow",
      stocked_fish: 342,
      weight: 0.4,
    },
    {
      date: "Tue, 07 Nov 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Roses Lake Chelan County",
      hatchery: "Chelan Pud Hatchery",
      lake: "Roses Lake Chelan County",
      latitude: 47.9045409,
      longitude: -120.155072,
      species: "Rainbow",
      stocked_fish: 20253,
      weight: 2.58,
    },
    {
      date: "Wed, 08 Nov 2023 00:00:00 GMT",
      derby_participant: false,
      directions:
        "https://www.google.com/maps/search/?api=1&query=Kress Lake Cowlitz County",
      hatchery: "Kalama Falls Hatchery",
      lake: "Kress Lake Cowlitz County",
      latitude: 46.0465158,
      longitude: -122.8532292,
      species: "Steelhead",
      stocked_fish: 22,
      weight: 0.1,
    },
  ];
  const totalStockedByDate = [
    ["2023-10-18", 3395],
    ["2023-10-19", 1678],
    ["2023-10-20", 111],
    ["2023-10-23", 13901],
    ["2023-10-24", 10482],
    ["2023-10-25", 1539],
    ["2023-10-26", 56],
    ["2023-10-27", 5650],
    ["2023-10-30", 9572],
    ["2023-10-31", 5750],
    ["2023-11-03", 15],
    ["2023-11-06", 2396],
    ["2023-11-07", 20595],
    ["2023-11-08", 22],
    ["2023-11-09", 198],
    ["2023-11-13", 6774],
  ];
  return (
    <>
      <Head>
        <title>Washington Trout Stats</title>
      </Head>
      <Header />
      <main className="container mx-auto  flex min-h-screen flex-col items-center justify-between p-24 ">
        <section className="z-0 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-10">
          <div className=" w-full ">
            <DateRangePicker onDateChange={handleDateChange} />
            <h2 className="lg:text-5xl md:text-4xl sm:text-2xl mt-5">
              Trout stocked in Washington State
            </h2>
            <div id="selected-date-range" className="text-center w-full mt-5">
              {/* Display selected date range */}
              {selectedDateRange && (
                <p>
                  {selectedDateRange.startDate === today.toISOString()
                    ? "Present"
                    : selectedDateRange.startDate}{" "}
                  - {selectedDateRange.endDate}
                </p>
              )}
            </div>
          </div>
        </section>
        <section className="z-0 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-10">
          <FishingMap fishingDataList={stockedLakesData} />
        </section>
        <section className="z-0 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex  mb-10">
          <StockChart lakes={totalStockedByDate} />
        </section>
      </main>
    </>
  );
}
