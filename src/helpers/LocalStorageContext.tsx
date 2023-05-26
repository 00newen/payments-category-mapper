import React, { createContext, useState, useEffect, ReactNode } from 'react';

const DEFAULT_CATEGORIES = [
  'Rent',
  'Insurance',
  'Spotify',
  'HelloFresh',
  'AsamiSchool',
  'AsamiDanceClass',
  'CleaningLady',
  'Bunq',
  'Groceries',
  'HomeUtilitiesAndDeco',
  'ChildrenClothingToys',
  'HealthExpensesChildren',
  'Transportation',
  'CoffeSnacks',
  'Lunch/DinnerOut',
  'Lunch/DinnerTakeAway',
  'ActivityOut',
  'Courses/Services',
  'SharedGifts',
  'Other',
];

interface LocalStorageProviderProps {
  children: ReactNode;
}

export const LocalStorageContext = createContext({
  paymentCategories: [],
  setPaymentCategories: (paymentCategories: string[]) => {
    localStorage.setItem('paymentCategories', JSON.stringify(paymentCategories));
  },
});

export const LocalStorageProvider = ({ children }: LocalStorageProviderProps) => {
  const [paymentCategories, setPaymentCategories] = useState(() => {
    // Check if paymentCategories exist in localStorage
    const storedCategories = localStorage.getItem('paymentCategories');
    return storedCategories ? JSON.parse(storedCategories) : DEFAULT_CATEGORIES;
  });

  useEffect(() => {
    // Update localStorage whenever paymentCategories change
    localStorage.setItem('paymentCategories', JSON.stringify(paymentCategories));
  }, [paymentCategories]);

  return (
    <LocalStorageContext.Provider value={{ paymentCategories, setPaymentCategories }}>
      {children}
    </LocalStorageContext.Provider>
  );
};
