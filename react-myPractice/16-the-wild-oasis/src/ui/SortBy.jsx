// 29003 - client-side sorting cabins

import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    const nextSort = e.target.value;

    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("sortBy", nextSort);

    // 关键：排序变化后回到第一页，避免越界 range
    if (nextParams.get("page")) nextParams.set("page", "1");

    setSearchParams(nextParams);
  }

  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
