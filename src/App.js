import { useState } from "react";
import "./App.css";
import Dropdown from "./components/dropdown";

function App() {
  const [listItems, setListItems] = useState("");
  const handleDropdownChange = (selectedOption) => {
    setListItems(selectedOption);
  };

  const options = [
    { id: 0, label: "Black", value: `#333` },
    { id: 1, label: "Red", value: `#ff2e63` },
    {
      id: 2,
      label: "Green",
      value: `#62d2a2
`,
    },
    {
      id: 3,
      label: "Blue",
      value: `#005691
`,
    },
    {
      id: 3,
      label: "Cyan",
      value: `#08d9d6
`,
    },
  ];

  return (
    <div className="mainContainer" style={{ backgroundColor: `${listItems}` }}>
      <Dropdown
        id="dropdown"
        labelText="Colors"
        options={options}
        name="roles"
        value={listItems}
        handleDropdownChange={handleDropdownChange}
      />
    </div>
  );
}

export default App;
