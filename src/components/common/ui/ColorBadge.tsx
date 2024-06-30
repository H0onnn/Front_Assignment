const getColor = (columnType: string) => {
  switch (columnType) {
    case "To Do":
      return "255, 99, 132"
    case "In Progress":
      return "54, 162, 235"
    case "Review":
      return "255, 206, 86"
    case "Done":
      return "75, 192, 192"
  }
}

export const ColorBadge = ({ columnType }: { columnType: string }) => {
  const color = getColor(columnType)

  return (
    <div
      className="w-4 h-4 rounded-full border-2 border-solid"
      style={{ backgroundColor: `rgba(${color}, 0.5)`, borderColor: `rgb(${color})` }}
    />
  )
}
