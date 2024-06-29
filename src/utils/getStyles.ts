import React from "react"
import { cn } from "./cn"

interface GetDraggableStyleProps {
  isDragging: boolean
  draggableStyle: React.CSSProperties | undefined
}

export const getItemStyle = ({ isDragging, draggableStyle }: GetDraggableStyleProps): string => {
  return cn(["user-select-none p-4 mb-2", isDragging ? "bg-green-200" : "bg-white", draggableStyle])
}

export const getListStyle = (isDraggingOver: boolean): string => {
  return cn(["p-4 w-[250px] min-h-[500px]", isDraggingOver ? "bg-blue-200" : "bg-gray-200"])
}
