import React from 'react';

interface CategoryTableRowProps {
  category: string;
  totalExpenses: number;
  removeEntry: (category: string) => void;
}

const CategoryTableRow: React.FC<CategoryTableRowProps> = ({ category, totalExpenses, removeEntry }) => {
  return (
    <tr className='even:bg-blue-100'>
      <td>
        <button onClick={() => removeEntry(category)}>-</button>
      </td>
      <td>{category}</td>
      <td>{totalExpenses}</td>
    </tr>
  );
};

export default CategoryTableRow;
