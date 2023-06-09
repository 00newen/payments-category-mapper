import React, { useContext, useState } from 'react';
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
    // console.log('adding cat?', newCategory);
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
              totalExpenses={0}
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
