import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");


  function handleSearchChange(e) {
    setSearch(e.target.value.toLowerCase());
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }


  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search);
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search={search}
        selectedCategory={selectedCategory}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


