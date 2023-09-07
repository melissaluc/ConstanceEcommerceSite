// CategoryContext.js
import { createContext, useContext, useState } from "react";

const Category2Context = createContext();

export function useCategory2() {
  return useContext(Category2Context);
}

export function Category2Provider({ children }) {
  const [selectedCategory2, setSelectedCategory2] = useState("clothing");

  const updateCategory2 = (category) => {
    setSelectedCategory2(category);
  };

  return (
    <Category2Context.Provider value={{ selectedCategory2, updateCategory2 }}>
      {children}
    </Category2Context.Provider>
  );
}
