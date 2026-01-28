import { useState } from "react";
import Item from "./Item";

// 06016 - rendering the item list
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  // 07010 - sorting items
  // 07011 - clearing list
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          // passing prop through packing to each of this items
          <Item
            itemObj={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status </option>
        </select>

        <button onClick={onClearList}>Clear All</button>
      </div>
    </div>
  );
}
