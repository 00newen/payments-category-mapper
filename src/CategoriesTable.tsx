import React from 'react';
import CategoryTableRow from 'CategoriesTableRow';

interface CategoryTableRowProps {
  categories: string[];
}

const CategoriesTable: React.FC<CategoryTableRowProps> = ({ categories }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Total Expenses</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <CategoryTableRow key={category} category={category} totalExpenses={0} />
        ))}
      </tbody>
    </table>
  );
};

export default CategoriesTable;
