import React, { createContext, useState, useContext, ReactNode } from "react"

interface SelectedItemsContextProps {
  selectedItems: string[]
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>
  handleSelect: (itemId: string, isMultiSelect: boolean) => void
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

  const handleSelect = (itemId: string, isMultiSelect: boolean) => {
    setSelectedItems((prev) => {
      if (isMultiSelect) {
        return prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
      } else {
        return prev.includes(itemId) && prev.length === 1 ? [] : [itemId]
      }
    })
  }

  return (
    <SelectedItemsContext.Provider value={{ selectedItems, setSelectedItems, handleSelect }}>
      {children}
    </SelectedItemsContext.Provider>
  )
}
