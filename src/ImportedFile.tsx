import React, { useState, useEffect } from 'react';

interface ImportedFileInterface {
  transactionsData: string[][];
}

const ImportedFile: React.FC<ImportedFileInterface> = ({ transactionsData }) => {
  const [filteringColumn, setFilteringColumn] = useState(-1);
  const [headers, setHeaders] = useState<string[]>();
  // console.log('inside the file imported component:', transactionsData);

  useEffect(() => {
    if (transactionsData[0] && transactionsData[0] != undefined) {
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
    </>
  );
};

export default ImportedFile;
