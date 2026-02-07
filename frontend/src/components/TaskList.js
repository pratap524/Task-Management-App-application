import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onStatusChange, onDelete, loading, error }) => {
  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
        <p className="font-bold">Error loading tasks</p>
        <p>{error}</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No tasks yet. Create one to get started!</p>
      </div>
    );
  }

  // Group tasks by status
  const groupedTasks = {
    Pending: tasks.filter((t) => t.status === 'Pending'),
    'In Progress': tasks.filter((t) => t.status === 'In Progress'),
    Completed: tasks.filter((t) => t.status === 'Completed'),
  };

  return (
    <div className="space-y-8">
      {Object.entries(groupedTasks).map(([status, statusTasks]) => (
        <div key={status}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            {status}
            <span className="ml-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
              {statusTasks.length}
            </span>
          </h2>
          {statusTasks.length > 0 ? (
            <div>
              {statusTasks.map((task) => (
                <TaskItem
                  key={task._id}
                  task={task}
                  onStatusChange={onStatusChange}
                  onDelete={onDelete}
                  loading={loading}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 italic">No tasks in this category</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
