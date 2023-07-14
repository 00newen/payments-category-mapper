import React, { createContext, useState, useEffect, ReactNode } from 'react';

const DEFAULT_CATEGORIES = [
  'Rent',
  'Insurance',
  'Spotify',
  'Hello Fresh',
  'Asami School',
  'Asami Dance Class',
  'Cleaning Lady',
  'Bunq',
  'Groceries',
  'Home Utilities And Deco',
  'Children Clothing Toys',
  'Health Expenses Children',
  'Transportation',
  'Coffe Snacks',
  'Lunch/Dinner Out',
  'Lunch/Dinner TakeAway',
  'Activity Out',
  'Courses/Services',
  'Shared Gifts',
  'Other',
];

interface LocalStorageProviderProps {
  children: ReactNode;
}

export const LocalStorageContext = createContext({
  paymentCategories: [],
  removePaymentCategory: (removedCategory: string): void => {
    // console.log('thing ', removedCategory);
  },
  setPaymentCategories: (paymentCategories: string[]): void => {
    localStorage.setItem('paymentCategories', JSON.stringify(paymentCategories));
  },
  addFilterToCategory: (category: string, filter: string): void => {
    // console.log('adding filter', filter, 'to', category);
  },
  getExistingFiltersForCategory: (category: string): string[] => {
    // console.log('getting filters for', category);
    const storedFilters = localStorage.getItem(category);
    return storedFilters ? JSON.parse(storedFilters) : [category];
  },
});

export const LocalStorageProvider = ({ children }: LocalStorageProviderProps) => {
  const [paymentCategories, setPaymentCategories] = useState(() => {
    const storedCategories = localStorage.getItem('paymentCategories');
    return storedCategories ? JSON.parse(storedCategories) : DEFAULT_CATEGORIES;
  });

  useEffect(() => {
    localStorage.setItem('paymentCategories', JSON.stringify(paymentCategories));
  }, [paymentCategories]);

  const removePaymentCategory = (removedCategory: string) => {
    setPaymentCategories(paymentCategories.filter((category: string) => category !== removedCategory));
  };

  const addFilterToCategory = (category: string, addedFilter: string) => {
    const existingFilters = getExistingFiltersForCategory(category);
    if (!filterAlreadyExists(existingFilters, addedFilter)) {
      existingFilters.push(addedFilter);
    }
    // console.log('got filters: ', existingFilters);
    localStorage.setItem(category, JSON.stringify(existingFilters));
  };
  const filterAlreadyExists = (existingFilters: string[], addedFilter: string) => {
    for (const filter of existingFilters) {
      if (filter == addedFilter) {
        return true;
      }
    }
    return false;
  };

  const getExistingFiltersForCategory = (category: string) => {
    const storedFilters = localStorage.getItem(category);
    return storedFilters ? JSON.parse(storedFilters) : [category];
  };

  return (
    <LocalStorageContext.Provider
      value={{
        paymentCategories,
        setPaymentCategories,
        removePaymentCategory,
        addFilterToCategory,
        getExistingFiltersForCategory,
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};
