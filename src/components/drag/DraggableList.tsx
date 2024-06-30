import { DraggableItem } from "./DraggableItem"
import { Item } from "types/column"

interface DraggableListProps {
  items: Item[]
  invalidDrop: boolean
}

export const DraggableList = ({ items, invalidDrop }: DraggableListProps) => {
  if (!items.length) {
    return <div className="text-gray-500 text-sm text-center">No items</div>
  }

  return (
    <>
      {items.map((item, index) => (
        <DraggableItem key={item.id} item={item} index={index} invalidDrop={invalidDrop} />
      ))}
    </>
  )
}
