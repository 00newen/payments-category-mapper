import React, { useState, useEffect, useContext } from 'react';
import { LocalStorageContext } from 'helpers/LocalStorageContext';
import Papa, { ParseResult } from 'papaparse';
import CategoriesTable from 'CategoriesTable';
import ImportedFile from 'ImportedFile';
import './App.css';

function PaymentsCategoryMapper() {
  const [transactionsData, setTransactionsData] = useState<[]>([]);
  const { paymentCategories } = useContext(LocalStorageContext);
  const [file, setFile] = useState<File | undefined>(undefined);

  useEffect(() => {
    // Code to read the CSV file and set the data state
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      setFile(e.target.files[0]);
      handleFileImport(e.target.files[0]);
    }
  };

  const handleFileImport = (file: File) => {
    Papa.parse(file, {
      dynamicTyping: true,
      complete: (results: ParseResult<File>) => {
        // console.log(results.data);
        setTransactionsData(results.data as []);
      },
    });
  };

  return (
    <div className='App'>
      <header>
        <h1>Payments Category Mapper</h1>
      </header>
      <div className='file-importer'>
        <input type={'file'} accept={'.csv'} onChange={handleOnChange} />
      </div>
      <ImportedFile transactionsData={transactionsData}></ImportedFile>
      <div>
        <CategoriesTable categories={paymentCategories}></CategoriesTable>
      </div>
    </div>
  );
}

export default PaymentsCategoryMapper;
