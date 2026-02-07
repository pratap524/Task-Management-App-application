import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import taskService from './services/taskService';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch all tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await taskService.getAllTasks();
      setTasks(response.data);
    } catch (err) {
      setError('Failed to load tasks. Make sure the server is running.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      setLoading(true);
      setError('');
      const response = await taskService.createTask(taskData);
      if (response.success) {
        setTasks([response.data, ...tasks]);
      }
    } catch (err) {
      setError('Failed to add task');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      setLoading(true);
      setError('');
      const response = await taskService.updateTask(taskId, { status: newStatus });
      if (response.success) {
        setTasks(
          tasks.map((task) =>
            task._id === taskId ? { ...task, status: newStatus } : task
          )
        );
      }
    } catch (err) {
      setError('Failed to update task');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        setLoading(true);
        setError('');
        const response = await taskService.deleteTask(taskId);
        if (response.success) {
          setTasks(tasks.filter((task) => task._id !== taskId));
        }
      } catch (err) {
        setError('Failed to delete task');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Task Management System
          </h1>
          <p className="text-gray-600 text-lg">
            Organize and manage your tasks efficiently
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex justify-between items-center">
            <span>{error}</span>
            <button
              onClick={() => setError('')}
              className="text-red-700 font-bold text-2xl hover:text-red-900"
            >
              ×
            </button>
          </div>
        )}

        {/* Task Form */}
        <TaskForm onTaskAdd={handleAddTask} loading={loading} error={error} />

        {/* Task List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <TaskList
            tasks={tasks}
            onStatusChange={handleStatusChange}
            onDelete={handleDeleteTask}
            loading={loading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}

export default App;