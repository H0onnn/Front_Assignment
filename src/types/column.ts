export interface Item {
  id: string
  title: string
  description: string
}

export interface Column {
  id: string
  title: string
  subtitle: string
  items: Item[]
}
