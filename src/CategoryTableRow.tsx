import React from "react";

interface CategoryTableRowProps {
  category: string;
  totalExpenses: number;
}

const CategoryTableRow: React.FC<CategoryTableRowProps> = ({ category, totalExpenses }) => {
  return (
    <tr>
      <td>{category}</td>
      <td>{totalExpenses}</td>
    </tr>
  );
};

export default CategoryTableRow;
