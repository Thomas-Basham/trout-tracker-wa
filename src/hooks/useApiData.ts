"use client";
import { useEffect } from "react";
import useSWR from "swr";

export interface StockedLake {
  id: number;
  water_name_cleaned: string;
  stocked_fish: number;
  species: string;
  weight: number;
  hatchery: string;
  date: string;
  latitude: number;
  longitude: number;
  directions: string;
  derby_participant: boolean;
}

export interface DateRange {
  recentDate: string | null | undefined;
  pastDate: string | null | undefined;
}

export interface HatcheryTotal {
  hatchery: string;
  sum_1: number;
}

export interface DerbyLake {
  lake: string;
}

export interface TotalStockedByDate {
  date: string;
  stocked_fish: number;
}

const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT;

export const route =
  ENVIRONMENT === "dev"
    ? "http://localhost:8080"
    : "https://xtczssso08.execute-api.us-west-2.amazonaws.com";

const swrOptionsDynamic = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  dedupingInterval: 10 * 60 * 1000, // 10 minutes
  cacheTTL: 60 * 60 * 1000, // 1 hour (with SWR v2+)
  keepPreviousData: true,

};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useApiData = (dateRange: DateRange) => {
  const dateQuery =
    dateRange?.pastDate && dateRange?.recentDate
      ? `?start_date=${dateRange.pastDate}&end_date=${dateRange.recentDate}`
      : "";

  const {
    data: stockedLakesData,
    error: stockedLakesError,
    isLoading: stockedLakesLoading,
  } = useSWR(
    `${route}/stocked_lakes_data${dateQuery}`,
    fetcher,
    swrOptionsDynamic
  );

  const {
    data: hatcheryTotals,
    error: hatcheryTotalsError,
    isLoading: hatcheryTotalsLoading,
  } = useSWR(
    `${route}/hatchery_totals${dateQuery}`,
    fetcher,
    swrOptionsDynamic
  );

  const {
    data: totalStockedByDate,
    error: totalStockedByDateError,
    isLoading: totalStockedByDateLoading,
  } = useSWR(
    `${route}/total_stocked_by_date_data${dateQuery}`,
    fetcher,
    swrOptionsDynamic
  );

  const {
    data: derbyLakesData,
    error: derbyLakesError,
    isLoading: derbyLakesLoading,
  } = useSWR(`${route}/derby_lakes_data`, fetcher);

  const {
    data: dateDataUpdated = "",
    error: dateDataUpdatedError,
    isLoading: dateDataUpdatedLoading,
  } = useSWR(`${route}/date_data_updated`, fetcher);

  const {
    data: hatcheryNames,
    error: hatcheryNamesError,
    isLoading: hatcheryNamesLoading,
  } = useSWR(`${route}/hatchery_names`, fetcher);
  useEffect(() => {
    console.log(stockedLakesData)
  

  }, [stockedLakesData])
  
  return {
    // Data
    stockedLakesData,
    hatcheryTotals,
    totalStockedByDate,
    derbyLakesData,
    dateDataUpdated,
    hatcheryNames,

    // Loading flags
    stockedLakesLoading,
    hatcheryTotalsLoading,
    totalStockedByDateLoading,
    derbyLakesLoading,
    dateDataUpdatedLoading,
    hatcheryNamesLoading,

    // Errors
    stockedLakesError,
    hatcheryTotalsError,
    totalStockedByDateError,
    derbyLakesError,
    dateDataUpdatedError,
    hatcheryNamesError,
  };
};

export default useApiData;
