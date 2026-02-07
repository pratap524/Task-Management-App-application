import React from 'react';

const TaskItem = ({ task, onStatusChange, onDelete, loading }) => {
  const statusColors = {
    Pending: 'bg-yellow-100 text-yellow-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    Completed: 'bg-green-100 text-green-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{task.title}</h3>
          {task.description && (
            <p className="text-gray-600 text-sm mb-3">{task.description}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              statusColors[task.status]
            }`}
          >
            {task.status}
          </span>

          <select
            value={task.status}
            onChange={(e) => onStatusChange(task._id, e.target.value)}
            disabled={loading}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button
          onClick={() => onDelete(task._id)}
          disabled={loading}
          className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Delete
        </button>
      </div>

      <div className="text-gray-500 text-xs mt-3">
        Created: {new Date(task.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default TaskItem;
