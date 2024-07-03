const API_URL = import.meta.env.BACKEND_URL || 'http://localhost:3000';

export const getTasks = async () => {
    const response = await fetch(`${API_URL}/api/tasks`)
    if (!response.ok) {
        throw new Error('Failed to fetch tasks');
    }
    const data = await response.json();
    return data;
}