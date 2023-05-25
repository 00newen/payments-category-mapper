import "./App.css";
import CategoryTableRow from "./CategoryTableRow";
import CategoryRow from "./CategoryRow";
import React, { useState, useEffect } from "react";

function PaymentsCategoryMapper() {
  const [data, setData] = useState<Array<{ category: string; amount: number }>>([]);

  const paymentsCategories = [
    "Rent",
    "Insurance",
    "Spotify",
    "HelloFresh",
    "AsamiSchool",
    "AsamiDanceClass",
    "CleaningLady",
    "Bunq",
    "Groceries",
    "HomeUtilitiesAndDeco",
    "ChildrenClothingToys",
    "HealthExoensesChildren",
    "Transportation",
    "CoffeSnacks",
    "Lunch/DinnerOut",
    "Lunch/DinnerTakeAway",
    "ActivityOut",
    "Courses/Services",
    "SharedGifts",
    "Other",
  ];

  useEffect(() => {
    // Code to read the CSV file and set the data state
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Payments Category Mapper</h1>
      </header>
      <div>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Total Expenses</th>
            </tr>
          </thead>
          <tbody>
            {paymentsCategories.map((category) => (
              <CategoryTableRow key={category} category={category} totalExpenses={0} />
            ))}
            {data.map((categoryData) => (
              <CategoryTableRow
                key={categoryData.category}
                category={categoryData.category}
                totalExpenses={categoryData.amount}
              />
            ))}
            <CategoryRow data={data} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentsCategoryMapper;
