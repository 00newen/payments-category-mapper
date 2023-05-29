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
    console.log('thing', removedCategory);
  },
  setPaymentCategories: (paymentCategories: string[]): void => {
    localStorage.setItem('paymentCategories', JSON.stringify(paymentCategories));
  },
});

export const LocalStorageProvider = ({ children }: LocalStorageProviderProps) => {
  const [paymentCategories, setPaymentCategories] = useState(() => {
    const storedCategories = localStorage.getItem('paymentCategories');
    return storedCategories ? JSON.parse(storedCategories) : DEFAULT_CATEGORIES;
  });

  useEffect(() => {
    // Update localStorage whenever paymentCategories change
    localStorage.setItem('paymentCategories', JSON.stringify(paymentCategories));
  }, [paymentCategories]);

  const removePaymentCategory = (removedCategory: string) => {
    setPaymentCategories(paymentCategories.filter((category: string) => category !== removedCategory));
  };

  return (
    <LocalStorageContext.Provider value={{ paymentCategories, setPaymentCategories, removePaymentCategory }}>
      {children}
    </LocalStorageContext.Provider>
  );
};
