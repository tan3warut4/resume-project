export interface TaskProps {
  id: string
  title: string
  content: string
  tag: string[]
}
interface Column {
  id: string
  title: string
  taskId: string[]
}
export interface initialDataProps {
  tasks: Record<string, TaskProps>
  columns: Record<string, Column>
  columnOrder: string[]
}

export const initialData = {
  tasks: {
    "task-1": { id: "task-1", title: 'task-1', tag: ["frontend", "leetCode"], content: "task-1 content" },
    "task-2": { id: "task-2", title: 'task-2', tag: ["frontend", "systemDesign"], content: "task-2 content" },
    "task-3": { id: "task-3", title: 'task-3', tag: ["frontend", "backend"], content: "task-3 content" },
    "task-4": { id: "task-4", title: 'task-4', tag: ["frontend", "backend"], content: "task-4 content" },
    "task-5": { id: "task-5", title: 'task-5', tag: ["frontend", "backend"], content: "task-5 content" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Todo 🎯",
      taskId: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress 🌟",
      taskId: ["task-3", "task-4"],
    },
    "column-3": {
      id: "column-3",
      title: "Done ✅",
      taskId: ["task-5"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
