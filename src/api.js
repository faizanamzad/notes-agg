import axios from 'axios';

export const fetchDept = (deptId) => {
  return axios.get(`/api/info/${deptId}`)
              .then(resp => resp.data.docs)
};

export const fetchDeptList = () => {
  return axios.get('/api/info')
              .then(resp => resp.data.courses);
};
