import React from "react";
import CategoryTableRow from "./CategoryTableRow";

interface CategoryRowProps {
  data: Array<{ category: string; amount: number }>;
}

const CategoryRow: React.FC<CategoryRowProps> = (props: CategoryRowProps) => {
  const { data } = props;

  return (
    <>
      {data.map((categoryData) => (
        <CategoryTableRow
          key={categoryData.category}
          category={categoryData.category}
          totalExpenses={categoryData.amount}
        />
      ))}
    </>
  );
};

export default CategoryRow;
