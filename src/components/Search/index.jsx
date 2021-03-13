import React, { useState } from "react";
import { Input } from "./style";

const Search = () => {
  const [data, setData] = useState("");

  return (
    <Input
      value={data}
      type="text"
      onChange={({ target }) => setData(target.value)}
      placeholder="Pesquisar"
    />
  );
};

export default Search;
