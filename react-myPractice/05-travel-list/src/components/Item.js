export default function Item({ itemObj, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={itemObj.packed}
        onChange={() => onToggleItem(itemObj.id)}
      ></input>
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      {/* at onClick we need item id, not event */}
      <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
    </li>
  );
}
