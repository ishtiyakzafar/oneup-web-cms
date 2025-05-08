import { apiServices } from './axios_client'
export const addIpoContentDetail = (data) => apiServices.post('/ipo/content', data);
export const getAllIpoContent = () => apiServices.get('/ipo/content');
export const getIpoContentsById = (id) => apiServices.get(`/ipo/content/${id}`);
export const updateIpoContentDetail = (id, data) => apiServices.put(`/ipo/content/${id}`, data);
export const deleteIpoContent = (id) => apiServices.delete(`/ipo/content/${id}`);