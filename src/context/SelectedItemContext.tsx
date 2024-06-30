import React, { createContext, useState, useContext, ReactNode } from "react"

interface SelectedItemsContextProps {
  selectedItems: string[]
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>
  toggleItemSelection: (itemId: string) => void
}

const SelectedItemsContext = createContext<SelectedItemsContextProps | undefined>(undefined)

export const useSelectedItemsContext = () => {
  const context = useContext(SelectedItemsContext)
  if (!context) {
    throw new Error("Context는 Provider 내부에서 사용해주세요.")
  }
  return context
}

export const SelectedItemsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const toggleItemSelection = (itemId: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId],
    )
  }

  return (
    <SelectedItemsContext.Provider value={{ selectedItems, setSelectedItems, toggleItemSelection }}>
      {children}
    </SelectedItemsContext.Provider>
  )
}
