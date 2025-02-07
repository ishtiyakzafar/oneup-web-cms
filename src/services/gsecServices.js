import { apiServices } from './axios_client'

// FAQ
export const addGsecFaq = (data) => apiServices.post('/gsec/faq', data);
export const getGsecFaq = () => apiServices.get('/gsec/faq');
export const deleteGsecFaq = (id) => apiServices.delete(`/gsec/faq/${id}`);
export const updateGsecFaq = (id, data) => apiServices.put(`/gsec/faq/${id}`, data);

// Advantage
export const addAdvantage = (data) => apiServices.post('/gsec/advantage', data);
export const getAdvantage = () => apiServices.get('/gsec/advantage');
export const deleteAdvantage = (id) => apiServices.delete(`/gsec/advantage/${id}`);
export const updateAdvantage = (id, data) => apiServices.put(`/gsec/advantage/${id}`, data);

// KeyFeature
export const addKeyFeature = (data) => apiServices.post('/gsec/keyfeature', data);
export const getKeyFeature = () => apiServices.get('/gsec/keyfeature');
export const deleteKeyFeature = (id) => apiServices.delete(`/gsec/keyfeature/${id}`);
export const updateKeyFeature = (id, data) => apiServices.put(`/gsec/keyfeature/${id}`, data);

// HowToInvest
export const addHowToInvest = (data) => apiServices.post('/gsec/howtoinvest', data);
export const getHowToInvest = () => apiServices.get('/gsec/howtoinvest');
export const deleteHowToInvest = (id) => apiServices.delete(`/gsec/howtoinvest/${id}`);
export const updateHowToInvest = (id, data) => apiServices.put(`/gsec/howtoinvest/${id}`, data);

// TbillType
export const addTbillType = (data) => apiServices.post('/gsec/tbilltype', data);
export const getTbillType = () => apiServices.get('/gsec/tbilltype');
export const deleteTbillType = (id) => apiServices.delete(`/gsec/tbilltype/${id}`);
export const updateGsecsType = (endPoint, id, data) => apiServices.put(`/gsec/${endPoint}/${id}`, data);

// GsecsType
export const addGsecsType = (data) => apiServices.post('/gsec/gsectype', data);
export const getGsecsType = () => apiServices.get('/gsec/gsectype');
export const deleteGsecsType = (id) => apiServices.delete(`/gsec/gsectype/${id}`);

// SdlType
export const addSdlType = (data) => apiServices.post('/gsec/sdltype', data);
export const getSdlType = () => apiServices.get('/gsec/sdltype');
export const deleteSdlType = (id) => apiServices.delete(`/gsec/sdltype/${id}`);

// InvestInGsecHeading
export const addInvestInGsecHeading = (data) => apiServices.post('/gsec/investingsecheading', data);
export const getInvestInGsecHeading = () => apiServices.get('/gsec/investingsecheading');
export const deleteInvestInGsecHeading = (id) => apiServices.delete(`/gsec/investingsecheading/${id}`);
export const updateInvestInGsecHeading = (id, data) => apiServices.put(`/gsec/investingsecheading/${id}`, data);

// InvestInGsecData
export const addInvestInGsecData = (data) => apiServices.post('/gsec/investInGsecData', data);
export const getInvestInGsecData = () => apiServices.get('/gsec/investInGsecData');
export const deleteInvestInGsecData = (id) => apiServices.delete(`/gsec/investInGsecData/${id}`);
export const updateInvestInGsecData = (id, data) => apiServices.put(`/gsec/investInGsecData/${id}`, data);

// GsecsFeatureHeading
export const addGsecsFeatureHeading = (data) => apiServices.post('/gsec/gsecsfeatureheading', data);
export const getGsecsFeatureHeading = () => apiServices.get('/gsec/gsecsfeatureheading');
export const deleteGsecsFeatureHeading = (id) => apiServices.delete(`/gsec/gsecsfeatureheading/${id}`);
export const updateGsecsFeatureHeading = (id, data) => apiServices.put(`/gsec/gsecsfeatureheading/${id}`, data);

// GsecsFeatureTableData
export const addGsecsFeatureTableData = (data) => apiServices.post('/gsec/gsecsfeaturetabledata', data);
export const getGsecsFeatureTableData = () => apiServices.get('/gsec/gsecsfeaturetabledata');
export const deleteGsecsFeatureTableData = (id) => apiServices.delete(`/gsec/gsecsfeaturetabledata/${id}`);
export const updateGsecsFeatureTableData = (id, data) => apiServices.put(`/gsec/gsecsfeaturetabledata/${id}`, data);

// GsecsFeatureData
export const addGsecsFeatureData = (data) => apiServices.post('/gsec/gsecsfeaturedata', data);
export const getGsecsFeatureData = () => apiServices.get('/gsec/gsecsfeaturedata');
export const deleteGsecsFeatureData = (id) => apiServices.delete(`/gsec/gsecsfeaturedata/${id}`);
export const updateGsecsFeatureData = (id, data) => apiServices.put(`/gsec/gsecsfeaturedata/${id}`, data);

// BondDetail
export const addBondDetail = (data) => apiServices.post('/gsec/bonddetail', data);
export const getBondDetail = () => apiServices.get('/gsec/bonddetail');
export const deleteBondDetail = (id) => apiServices.delete(`/gsec/bonddetail/${id}`);
export const updateBondDetail = (id, data) => apiServices.put(`/gsec/bonddetail/${id}`, data);

// GsecDetail
export const addGsecDetail = (data) => apiServices.post('/gsec/gsecdetail', data);
export const getGsecDetail = () => apiServices.get('/gsec/gsecdetail');
export const deleteGsecDetail = (id) => apiServices.delete(`/gsec/gsecdetail/${id}`);
export const updateGsecDetail = (id, data) => apiServices.put(`/gsec/gsecdetail/${id}`, data);

// TbillDetail
export const addTbillDetail = (data) => apiServices.post('/gsec/tbilldetail', data);
export const getTbillDetail = () => apiServices.get('/gsec/tbilldetail');
export const deleteTbillDetail = (id) => apiServices.delete(`/gsec/tbilldetail/${id}`);
export const updateTbillDetail = (id, data) => apiServices.put(`/gsec/tbilldetail/${id}`, data);

// DatedGsec
export const addDatedGsec = (data) => apiServices.post('/gsec/datedgsec', data);
export const getDatedGsec = () => apiServices.get('/gsec/datedgsec');
export const deleteDatedGsec = (id) => apiServices.delete(`/gsec/datedgsec/${id}`);
export const updateDatedGsec = (id, data) => apiServices.put(`/gsec/datedgsec/${id}`, data);

// SdlDetail
export const addSdlDetail = (data) => apiServices.post('/gsec/sdldetail', data);
export const getSdlDetail = () => apiServices.get('/gsec/sdldetail');
export const deleteSdlDetail = (id) => apiServices.delete(`/gsec/sdldetail/${id}`);
export const updateSdlDetail = (id, data) => apiServices.put(`/gsec/sdldetail/${id}`, data);
