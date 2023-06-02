import React from 'react';

interface SingleTransactionInterface {
  headers: string[];
  transaction: string[];
}

const SingleTransaction: React.FC<SingleTransactionInterface> = ({ headers, transaction }) => {
  return (
    <div>
      {headers.length > 0 &&
        headers.map((key: string, index: number) => (
          <div className='max-w-lg border rounded'>
            {key}: <span>{transaction[index]}</span>
          </div>
        ))}
    </div>
  );
};

export default SingleTransaction;
