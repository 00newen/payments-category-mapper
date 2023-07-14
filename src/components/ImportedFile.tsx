import React, { useState, useEffect, useContext } from 'react';
import SingleTransaction from 'SingleTransaction';
import { LocalStorageContext } from 'helpers/LocalStorageContext';

interface ImportedFileInterface {
  transactionsData: string[][];
  paymentCategories: string[];
}

const ImportedFile: React.FC<ImportedFileInterface> = ({ transactionsData, paymentCategories }) => {
  const [filteringColumn, setFilteringColumn] = useState(-1);
  const [headers, setHeaders] = useState<string[]>([]);
  const [txIndex, setTxIndex] = useState(1);
  const { addFilterToCategory, getExistingFiltersForCategory } = useContext(LocalStorageContext);

  useEffect(() => {
    if (transactionsData[0]) {
      const tArray = [];
      for (let i = 0; i < transactionsData[0].length; i++) {
        tArray.push(transactionsData[0][i]);
      }
      setHeaders(tArray);
      checkIfCurrentTxIsAlreadyMapped(txIndex);
    }
    checkIfCurrentTxIsAlreadyMapped(txIndex);
  }, [transactionsData]);

  const buttonClicked = (category: string) => {
    console.log('button clicked:', category);
    console.log('checking Tx:', transactionsData[txIndex][filteringColumn]);
    if (category != 'skip') {
      addFilterToCategory(category, transactionsData[txIndex][filteringColumn]);
    }
    gotoNextTransaction(txIndex + 1);
  };
  const gotoNextTransaction = (txIndex: number) => {
    if (txIndex >= transactionsData.length) {
      setTxIndex(1);
      console.log('txIndex:', 1);
    } else {
      setTxIndex(txIndex);
      console.log('txIndex:', txIndex);
    }
  };
  const checkIfCurrentTxIsAlreadyMapped = (txIndex: number) => {
    if (transactionsFileAlreadyLoaded()) {
      const currentTxFilter: string = transactionsData[txIndex][filteringColumn];
      // console.log('running check on current TX', currentTxFilter);

      for (const category of paymentCategories) {
        const categoryFilters: string[] = getExistingFiltersForCategory(category);
        // console.log('category:', category, categoryFilters);
        for (const filter of categoryFilters) {
          // console.log(filter, '/', currentTxFilter);
          if (filter == currentTxFilter) {
            // console.log('### Found pre existing filter !!!', filter, '/', currentTxFilter);
            gotoNextTransaction(txIndex + 1);
          }
        }
      }
    }
  };
  const transactionsFileAlreadyLoaded = () => {
    console.log('filteringColumn:', !filteringColumn);
    if (filteringColumn != -1) {
      return true;
    }
    return false;
  };

  const RenderInstructions = () => {
    if (transactionsData.length == 0) {
      return (
        <div>
          <h1>Load file first</h1>
        </div>
      );
    }
    return null;
  };

  const RenderFilterColumnSelector = () => {
    if (transactionsData.length != 0 && !transactionsFileAlreadyLoaded()) {
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
    return null;
  };

  const RenderSingleTransaction = () => {
    if (transactionsFileAlreadyLoaded()) {
      return (
        <div>
          <div className='absolute p-2 top-0 right-0'>The imported file has {transactionsData.length} TXs.</div>
          <div>
            <h2 className='text-sm mb-4'>Transaction no {txIndex}</h2>
            <SingleTransaction headers={headers} transaction={transactionsData[txIndex]}></SingleTransaction>
            <div className='payment-categories'>
              {paymentCategories.map((key: string, index: number) => (
                <button
                  key={key}
                  className='border border-lg m-2 p-2 rounded-xl hover:bg-blue-50'
                  onClick={() => buttonClicked(key)}
                >
                  {index}: {key}
                </button>
              ))}
              <button
                key='-1'
                className='border border-lg m-2 p-2 rounded-xl hover:bg-blue-50'
                onClick={() => buttonClicked('skip')}
              >
                / Skip
              </button>
            </div>
            <div className='border rounded p2'>
              <h2>Visible Transactions: | index: {txIndex}</h2>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <RenderInstructions></RenderInstructions>
      <RenderFilterColumnSelector></RenderFilterColumnSelector>
      <RenderSingleTransaction></RenderSingleTransaction>
    </div>
  );
};

export default ImportedFile;
