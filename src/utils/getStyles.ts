import { CSSProperties } from "react"
import { cn } from "./cn"

interface GetDraggableStyleProps {
  draggableStyle: CSSProperties | undefined
  isDragging: boolean
  invalidDrop: boolean
  isSelected: boolean
}

export const getItemStyle = ({
  draggableStyle,
  isDragging,
  invalidDrop,
  isSelected,
}: GetDraggableStyleProps): string => {
  return cn([
    "user-select-none p-3 rounded-md shadow-sm relative bg-white",
    isSelected && "bg-blue-100 border-2 border-blue-500",
    isDragging && "bg-green-200 shadow-lg",
    isDragging && invalidDrop && "bg-red-200 opacity-50",

    draggableStyle,
  ])
}

interface GetListStyleProps {
  isDraggingOver: boolean
  invalidDrop: boolean
}

export const getListStyle = ({ isDraggingOver, invalidDrop }: GetListStyleProps): string => {
  return cn([
    "p-4 w-[348px] min-h-[500px] h-full bg-gray-100 flex flex-col space-y-2 border border-solid border-gray-300 rounded-md overflow-y-auto",
    isDraggingOver && invalidDrop && "bg-red-400",
  ])
}
