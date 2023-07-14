import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Route, Outlet, Link } from 'react-router-dom';
import { LocalStorageContext } from 'helpers/LocalStorageContext';
import Papa, { ParseResult } from 'papaparse';
import CategoriesTable from 'components/CategoriesTable';
import ImportedFile from 'components/ImportedFile';
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
        setTransactionsData(results.data as []);
      },
    });
  };

  return (
    <div>
      <div className='App'>
        <header className='text-xl p-6 mx-auto bg-blue-500'>
          <h1>Payments Category Mapper</h1>
        </header>

        <nav>
          <ul className='flex flex-row'>
            <li className='p-2 rounded border m-2'>
              <Link to='/'>Home</Link>
            </li>
            <li className='p-2 rounded border m-2'>
              <Link to='/instructions'>Instructions</Link>
            </li>
          </ul>
        </nav>

        <div className='file-importer p-6 rounded-xl shadow-lg'>
          <input type={'file'} accept={'.csv'} onChange={handleOnChange} />
        </div>

        <Outlet />

        <div className='p-6 m-6 rounded-xl border relative'>
          <ImportedFile transactionsData={transactionsData} paymentCategories={paymentCategories}></ImportedFile>
        </div>

        <div>
          <CategoriesTable categories={paymentCategories} transactionsData={transactionsData}></CategoriesTable>
        </div>
      </div>
    </div>
  );
}

export default PaymentsCategoryMapper;
