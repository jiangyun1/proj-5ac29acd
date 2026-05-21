import config from './config'

module.exports = {

	/*
	 * url:请求的接口地址
	 * method:请求方式
	 * data: 要传递的参数
	 */
	request: function(url, method, data) {
		let fullUrl = `${config.baseUrl}${url}`
		// let tokenHead = uni.getStorageSync("tokenHead") ? uni.getStorageSync("tokenHead") : 'token'
		let token = uni.getStorageSync('tokenHead') ? uni.getStorageSync('tokenHead') : ''
		let header = {}
		header['content-type'] = 'application/json';
		header['Authorization'] = token;
		header['systemCode'] = `${config.systemCode}`;
		uni.showLoading({
			title: "加载中"
		});
		return new Promise((resolve, reject) => {
			uni.request({
				url: fullUrl,
				method: method,
				data,
				header: header,
				success: (res) => {
					if (res.data.code == 200) {
						resolve(res.data)
					} else {
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						})
						if (res.data.code == "9001") {
							uni.navigateTo({
								url: "/pages/login/index"
							})
						}

						reject(res.data.message)
					}
				},
				fail: () => {
					uni.navigateTo({
						url: "/pages/login/index"
					})
					uni.showToast({
						title: '接口请求错误',
						icon: 'none'
					})
					reject('接口请求错误')
				},
				complete: () => {
					setTimeout(() => {
						uni.hideLoading()
					}, 100)
				}
			})
		})
	}
}