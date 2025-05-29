import React from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onSearchChange, onCategoryChange, onItemFormSubmit }) {
  return (
    <div className="ShoppingList">
      <ItemForm   onItemFormSubmit={onItemFormSubmit}/>
      <Filter
        onSearchChange={onSearchChange}
        onCategoryChange={onCategoryChange}
      />
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
