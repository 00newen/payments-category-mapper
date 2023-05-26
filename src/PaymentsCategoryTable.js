import React from 'react';
import CategoryRow from './CategoryRow';

function PaymentsCategoryTable(props) {
  const { categories } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Total Expenses</th>
        </tr>
      </thead>
      <tbody>
        {categories.map(category => (
          <CategoryRow
            key={category.categoryName}
            category={category.categoryName}
            totalExpenses={category.totalExpenses}
          />
        ))}
      </tbody>
    </table>
  );
}

export default PaymentsCategoryTable;
