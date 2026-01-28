import { useState } from "react";

// 06015 - building the layout
// 06017 - building a form & handling submissions
// 06018 - Controlled elements
export default function Form({ onAddItems }) {
  const [description, setDescrip] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    // state lift up
    onAddItems(newItem);

    // reset
    setDescrip("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescrip(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
