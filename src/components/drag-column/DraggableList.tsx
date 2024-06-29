import { DraggableItem } from "./DraggableItem"
import { Item } from "types/column"

interface DraggableListProps {
  items: Item[]
}

export const DraggableList = ({ items }: DraggableListProps) => (
  <>
    {items.map((item, index) => (
      <DraggableItem key={item.id} item={item} index={index} />
    ))}
  </>
)
