const URL = 'http://localhost:3000/api';

// Register function
export const register = (data) => {
  return fetch(`${URL}/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

// Login function
export const login = (data) => {
  return fetch(`${URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

// Get all jobs
export const getJobs = () => {
  return fetch(`${URL}/job`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// Create a new job
export const createJob = (data) => {
  return fetch(`${URL}/job`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
  });
};

// Update job by ID
export const updateJob = (id, data) => {
    return fetch(`${URL}/job/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data),
    })
}
// Get job by ID
export const getJobById = (id) => {
  return fetch(`${URL}/job/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

// Delete job by ID
export const deleteJob = (id) => {
  return fetch(`${URL}/job/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
};
