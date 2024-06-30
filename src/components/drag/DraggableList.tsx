import { DraggableItem } from "./DraggableItem"
import { Item } from "types/column"

interface DraggableListProps {
  items: Item[]
  invalidDrop: boolean
}

export const DraggableList = ({ items, invalidDrop }: DraggableListProps) => (
  <>
    {items.map((item, index) => (
      <DraggableItem key={item.id} item={item} index={index} invalidDrop={invalidDrop} />
    ))}
  </>
)
