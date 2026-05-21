import { request } from '../request'

module.exports = {
	getLogin: (data) => request('/h5/login', 'POST', data),
	getHospitalInfo: (data) => request('/admin/hospital/info/'+data, 'GET'),
	getHospitalList:(data)=>request('/h5/user/hospitalList','GET',data),
	indexCount:(data)=>request('/pc/count/count','GET',data),
	getTask:(data)=>request('/h5/task/index','POST',data),
	loginVerifyCode:(data)=>request('/captchaImage','get',data),
	getDetail:(data)=>request('/admin/task/detail/'+data,'GET'),
	getAddT:(data)=>request('/admin/task/add','POST',data),
	getType:(data)=>request('/admin/sysDictValue/type', 'GET',data),
	getModify:(data)=>request('/admin/task/modify','POST',data),
}