import React, { useState, useEffect, useContext } from 'react';
import { LocalStorageContext } from 'helpers/LocalStorageContext';
import CategoriesTable from 'CategoriesTable';
import './App.css';

function PaymentsCategoryMapper() {
  // const [data, setData] = useState<Array<{ category: string; amount: number }>>([]);
  const { paymentCategories } = useContext(LocalStorageContext);

  useEffect(() => {
    // Code to read the CSV file and set the data state
  }, []);

  return (
    <div className='App'>
      <header>
        <h1>Payments Category Mapper</h1>
      </header>
      <div>
        <CategoriesTable categories={paymentCategories}></CategoriesTable>
      </div>
    </div>
  );
}

export default PaymentsCategoryMapper;
