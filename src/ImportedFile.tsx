import React, { useState, useEffect } from 'react';
import SingleTransaction from 'SingleTransaction';

interface ImportedFileInterface {
  transactionsData: string[][];
  paymentCategories: string[];
}

const ImportedFile: React.FC<ImportedFileInterface> = ({ transactionsData, paymentCategories }) => {
  const [filteringColumn, setFilteringColumn] = useState(-1);
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    if (transactionsData[0]) {
      const tArray = [];
      for (let i = 0; i < transactionsData[0].length; i++) {
        tArray.push(transactionsData[0][i]);
      }
      setHeaders(tArray);
    }
  }, [transactionsData]);

  if (transactionsData.length == 0) {
    return (
      <div>
        <h1>Load file first</h1>
      </div>
    );
  }

  if (filteringColumn == -1) {
    return (
      <div>
        <h2>Please select which data to use for processing.</h2>
        <select onChange={(e) => setFilteringColumn(parseInt(e.target.value))}>
          {transactionsData.length > 0 &&
            headers &&
            headers.map((key: string, index: number) => (
              <option key={index} value={index}>
                {key}
              </option>
            ))}
        </select>
      </div>
    );
  }

  return (
    <>
      <div>The imported file has {transactionsData.length} TXs.</div>
      <div>
        <h2 className='text-sm'>this should be a single tx:</h2>
        <SingleTransaction headers={headers} transaction={transactionsData[1]}></SingleTransaction>
        <div className='payment-categories'>
          {paymentCategories.map((key: string, index: number) => (
            <button className='border border-lg m-2 p-2 rounded-xl hover:bg-blue-50'>
              {index}: {key}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImportedFile;
