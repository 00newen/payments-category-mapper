import React, { useContext, useEffect, useState } from 'react';
import CategoryTableRow from 'CategoriesTableRow';
import { LocalStorageContext } from 'helpers/LocalStorageContext';

interface CategoryTableRowProps {
  categories: string[];
  transactionsData: string[][];
}

const CategoriesTable: React.FC<CategoryTableRowProps> = ({ categories, transactionsData }) => {
  const [newCategory, setCategory] = useState('');
  const { removePaymentCategory, getExistingFiltersForCategory } = useContext(LocalStorageContext);

  useEffect(() => {
    console.log('inside Categories Table.', transactionsData);
  }, []);

  const addPaymentCategory = () => {
    if (newCategory == '') {
      return;
    }
    categories.push(newCategory);
    setCategory('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      event.preventDefault();
      addPaymentCategory();
    }
  };

  const getExpensesForCategory = (category: string) => {
    const filters: string[] = getExistingFiltersForCategory(category);
    // console.log('getting expenses for', category, filters);
    let expenses = 0;

    for (const transaction of transactionsData) {
      const transactionFilter: string = transaction[6]; // TODO: update this so it's taking the dinamic filtering field instead of a hard coded index
      const transactionExpense: string = transaction[2];

      for (const filter of filters) {
        console.log('transactionExpense 1:', category, '/', filter, '/', transactionFilter, transactionExpense);
        if (filter == transactionFilter) {
          expenses += parseFloat(transactionExpense);
          console.log('found expense for', category, filter, parseFloat(transactionExpense), expenses);
        }
      }
    }

    return expenses;
  };

  return (
    <div className='categories-table border rounded-xl p-6 m-6'>
      <table>
        <thead>
          <tr>
            <th>Remove</th>
            <th>Category Name</th>
            <th>Total Expenses</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <CategoryTableRow
              key={category}
              category={category}
              totalExpenses={getExpensesForCategory(category)}
              removeEntry={removePaymentCategory}
            />
          ))}
          <tr>
            <th>
              <button onClick={addPaymentCategory}>+</button>
            </th>
            <th>
              <input
                type='text'
                placeholder='Category Name'
                value={newCategory}
                onChange={(e) => setCategory(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </th>
            <th>-</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
