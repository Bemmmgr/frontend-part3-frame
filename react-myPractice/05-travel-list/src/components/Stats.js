export default function Stats({ items }) {
  // 07009 - calculating statistics as (derived states
  // 某个值其实可以由现有的 props 或 state 计算出来，而不是再单独用一个 useState 去存一份
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding items to your list 🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You already got everything, ready to go 🛫"
          : `🧳 You have ${numItems} items on your list, and you have packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
