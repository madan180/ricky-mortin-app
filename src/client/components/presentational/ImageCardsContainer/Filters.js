import React from "react";
export default ({ sortBy }) => {
  const onChange = e => {
    let { name, value } = e.target;
    console.log(name, value);
    sortBy(value);
  };
  return (
    <div>
      Filter
      <select onChange={onChange}>
        <option value="1"> Accending </option>
        <option value="2"> Decending </option>
      </select>
    </div>
  );
};
