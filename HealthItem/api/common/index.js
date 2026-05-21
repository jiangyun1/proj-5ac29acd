import { request } from '../request.js'

module.exports = {
	getLogin: (data) => request('/h5/login/h5', 'POST', data),
	getHospitalInfo: (data) => request('/admin/hospital/info/{id}', 'GET', data),
	getHospitalList:(data)=>request('/h5/user/hospitalList','GET',data)

}