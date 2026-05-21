const env = "development"

let config = {
    "development": {
        baseUrl: "https://api.yixianmedical.cn/",
        systemCode: "zjfh",
		//是否开放注册
		registerStatus: false,
		//是否微信一键登录
		wxLoginStatus: false,
        fileBaseUrl: ""
    },

    "production": {
        baseUrl: "http://82.156.26.245:8889/test",
        systemCode: "zjfh",
        fileBaseUrl: ""
    }
}

export default config[env]