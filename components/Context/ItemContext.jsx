import React, { createContext, useContext, useState } from 'react'

const ItemContext = createContext();

export function ItemProvider({children}) {
    const [selectedItem, setSelectedItem] = useState("");

    const setItem = (item) => {
      setSelectedItem(item);
    }
  return (
    <ItemContext.Provider value={{selectedItem, setItem}}>
        {children}
    </ItemContext.Provider>
    
  );
};

export function useItem (){
    return useContext(ItemContext);
}