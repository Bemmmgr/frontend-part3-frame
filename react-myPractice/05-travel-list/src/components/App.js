import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 6, packed: true },
  { id: 3, description: "charger", quantity: 3, packed: false },
];

export default function App() {
  // section - 07004 - state & lifting state up
  // multiple sibling components need same state - move that state up as global state
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // 07006 - child to parent communication
  function handleDeleteItem(id) {
    // filter out the id(item) we got
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // 07007 - updating an item Complex immutable operation
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  // 07011 - clear
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure youwant to delete all items",
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
