import React, { ReactNode, forwardRef } from "react";

interface TaskListProps {
    children: ReactNode;
}

const TaskList = forwardRef<HTMLDivElement, TaskListProps>(({ children }, ref) => {
    return (
        <div ref={ref}>
            {children}
        </div>
    );
});

TaskList.displayName = "TaskList";

export default TaskList;