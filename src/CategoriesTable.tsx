import React, { RefCallback, useContext, useState } from 'react';
import CategoryTableRow from 'CategoriesTableRow';
import { LocalStorageContext } from 'helpers/LocalStorageContext';

interface CategoryTableRowProps {
  categories: string[];
}

const CategoriesTable: React.FC<CategoryTableRowProps> = ({ categories }) => {
  const [newCategory, setCategory] = useState('');
  const { removePaymentCategory } = useContext(LocalStorageContext);

  const addPaymentCategory = () => {
    if (newCategory == '') {
      return;
    }
    console.log('adding cat?', newCategory);
    categories.push(newCategory);
    setCategory('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      event.preventDefault();
      addPaymentCategory();
    }
  };

  return (
    <div className='categories-table'>
      <div className='add-payment'>
        <input
          type='text'
          placeholder='Category Name'
          value={newCategory}
          onChange={(e) => setCategory(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addPaymentCategory}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Total Expenses</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <CategoryTableRow
              key={category}
              category={category}
              totalExpenses={0}
              removeEntry={removePaymentCategory}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
