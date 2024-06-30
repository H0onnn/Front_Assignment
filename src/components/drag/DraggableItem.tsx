import { MouseEvent, KeyboardEvent } from "react"
import { useSelectedItemsContext } from "context/SelectedItemContext"
import { Draggable } from "react-beautiful-dnd"
import { Item } from "types/column"
import { cn, getItemStyle } from "utils"

interface DraggableItemProps {
  item: Item
  index: number
  invalidDrop: boolean
}

export const DraggableItem = ({ item, index, invalidDrop }: DraggableItemProps) => {
  const { selectedItems, handleSelect } = useSelectedItemsContext()
  const isSelected = selectedItems.includes(item.id)

  const handleItemClick = (id: string, e: MouseEvent<HTMLDivElement>) => {
    handleSelect(id, e.ctrlKey || e.metaKey)
  }

  const handleItemKeyDown = (id: string, e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleSelect(id, e.ctrlKey || e.metaKey)
    }
  }

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          role="button"
          tabIndex={0}
          onClick={(e) => handleItemClick(item.id, e)}
          onKeyDown={(e) => handleItemKeyDown(item.id, e)}
          className={cn([
            getItemStyle({
              isDragging: snapshot.isDragging,
              draggableStyle: provided.draggableProps.style,
              invalidDrop,
              isSelected,
            }),
          ])}
        >
          <div className="flex flex-col space-y-2 items-start">
            <div className="flex space-x-1 items-center">
              <p className="text-xs text-gray-500">{item.title}</p>
            </div>
            <p className="text-sm text-gray-800">{item.description}</p>
          </div>

          {snapshot.isDragging && selectedItems.length > 0 && (
            <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-center">
              {selectedItems.length}
            </div>
          )}
        </div>
      )}
    </Draggable>
  )
}
