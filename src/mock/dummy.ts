import { Column } from "types/column"

export const initialColumns: Column[] = [
  {
    id: "column-1",
    title: "To Do",
    items: Array.from({ length: 8 }, (_, k) => ({
      id: `column-1-item-${k}`,
      title: `To Do Item ${k + 1}`,
      description: "채용절차 최종 합격하기",
    })),
  },
  {
    id: "column-2",
    title: "In Progress",
    items: Array.from({ length: 8 }, (_, k) => ({
      id: `column-2-item-${k}`,
      title: `In Progress Item ${k + 1}`,
      description: "코딩테스트 과제",
    })),
  },
  {
    id: "column-3",
    title: "Review",
    items: Array.from({ length: 8 }, (_, k) => ({
      id: `column-3-item-${k}`,
      title: `In Review Item ${k + 1}`,
      description: "서류 검토",
    })),
  },
  {
    id: "column-4",
    title: "Done",
    items: Array.from({ length: 8 }, (_, k) => ({
      id: `column-4-item-${k}`,
      title: `Done Item ${k + 1}`,
      description: "서류 합격",
    })),
  },
]
