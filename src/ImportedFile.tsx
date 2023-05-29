import React from 'react';

interface ImportedFileInterface {
  transactionsData: [];
}

const ImportedFile: React.FC<ImportedFileInterface> = ({ transactionsData }) => {
  console.log('inside the file imported component:', transactionsData);
  if (!transactionsData) {
    return <div>Load file first</div>;
  }

  return (
    <>
      <div>
        {transactionsData.map((transaction, index) => (
          <div key={index}>Date: {transaction}</div>
        ))}
      </div>
    </>
  );
};

export default ImportedFile;
