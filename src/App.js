import './App.css';

function App() {
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
          {/* Code to map over the data state and render a row for each category */}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default App;
