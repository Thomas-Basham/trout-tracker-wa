// DataContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import useApiData from "@/hooks/useApiData";
import {
  StockedLake,
  HatcheryTotal,
  TotalStockedByDate,
} from "@/hooks/useApiData";

import { DateRange } from "@/components/DateRangePicker";

import { calculateDate } from "@/utils";

interface ApiDataContextType {
  stockedLakesData: StockedLake[] | [];
  hatcheryTotals: HatcheryTotal[] | [];
  totalStockedByDate: TotalStockedByDate[] | [];
  loading: boolean;
  selectedDateRange: DateRange;
  setSelectedDateRange: React.Dispatch<React.SetStateAction<DateRange>>;
  today: Date;
  dateDataUpdated: string;
}

const defaultState: ApiDataContextType = {
  stockedLakesData: [],
  hatcheryTotals: [],
  totalStockedByDate: [],
  loading: false,
  selectedDateRange: {
    startDate: new Date().toISOString(),
    endDate: calculateDate(7).toISOString(),
  },
  setSelectedDateRange: () => {},
  today: new Date(),
  dateDataUpdated: "",
};

const ApiDataContext = createContext<ApiDataContextType>(defaultState);

export const useApiDataContext = () => useContext(ApiDataContext);

interface ApiDataProviderProps {
  children: ReactNode;
}

export const ApiDataProvider: React.FC<ApiDataProviderProps> = ({
  children,
}) => {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange>(
    defaultState.selectedDateRange
  );
  const today = defaultState.today;
  const {
    stockedLakesData,
    hatcheryTotals,
    totalStockedByDate,
    loading,
    dateDataUpdated,
  } = useApiData(selectedDateRange);

  return (
    <ApiDataContext.Provider
      value={{
        stockedLakesData,
        hatcheryTotals,
        totalStockedByDate,
        loading,
        selectedDateRange,
        setSelectedDateRange,
        today,
        dateDataUpdated,
      }}
    >
      {children}
    </ApiDataContext.Provider>
  );
};
