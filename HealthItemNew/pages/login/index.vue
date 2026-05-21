<!-- 登陆 -->
<template>
	<div>
		<div class="box">
			<div class="logoimg">
				<img src="../../static/logo.png" alt="">
			</div>
			<header>
				<div class="title">逸仙医保咨询平台</div>
			</header>
			<uni-forms ref="customForm" :rules="customRules" labelWidth="80px" :modelValue="customFormData">
				<uni-forms-item label="账 号：" required name="username">
					<uni-easyinput v-model="customFormData.username" placeholder="请输入用户名" />
				</uni-forms-item>
				<uni-forms-item label="密 码：" required name="password">
					<uni-easyinput v-model="customFormData.password" type="password" placeholder="请输入密码" />
				</uni-forms-item>
				<uni-forms-item label="校验码：" required name="code">
					<uni-easyinput v-model="customFormData.code" type="code" placeholder="请输入校验码"
						 />
					<div class="code-yan" @click="getCaptcha">
						<img :src="captchaBase64" />
					</div>
				</uni-forms-item>

			</uni-forms>
			<div style="float:left;color: #43ea80;font-size: 10px;" @click='goUser()' v-show="registerStatus">没有账号？注册>>
			</div>
			<div class="log">
				<button class="login" @click='login'>登录</button>
			</div>
			<div class="enroll" v-show="wxLoginStatus">
				<p style="font-size: 10px;margin-top: 10px;">其他登录方式</p>
				<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="register">微信授权一键登录</button>
			</div>
			<!-- 轻提示 -->
			<!-- <van-toast id="van-toast" /> -->

		</div>
	</div>
</template>


<script>
	import config from '@/api/config.js'
	import {
		loginVerifyCode,
		getLogin
	} from '@/api/common/index.js'

	export default {
		data() {
			return {
				captchaBase64: '',
				uuid: "",
				customFormData: {
					username: 'yixian',
					password: '123456',
				},
				customRules: {
					username: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					passward: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}]
					},
				},
				code: '',

				pages: '',
				registerStatus: config.registerStatus,
				wxLoginStatus: config.wxLoginStatus
			}
		},

		mounted() {
			this.code = ''
			wx.login({
				success(res) {
					wx.setStorageSync('storage', res.code)
				}
			})
			this.getCaptcha()
		},

		methods: {
			getCaptcha() {
				loginVerifyCode().then(({
					data
				}) => {
					console.log(data)
					this.uuid = data.uuid
					this.captchaBase64 = 'data:image/jpeg;base64,' + data.img;
				});
			},
			login() {
				this.$refs['customForm'].validate().then(res => {
					let data = this.customFormData
					data.uuid=this.uuid
					uni.clearStorage();
					getLogin(data).then(res => {
						if (res.code === 200) {
							let authToken = res.data.token;
							let tokenHead = res.data.tokenHead;
							uni.showToast({
								title: '登录成功！', // 提示文字
								duration: 1000, // 显示时长
								mask: true, // 是否显示透明蒙层，防止触摸穿透，默认：false
								icon: 'success' // 图标，支持"success"、"loading"  error
							})
							// uni.setStorage({
							// 	key: "tokenHead",
							// 	data: tokenHead
							// })
							uni.setStorageSync('tokenHead',authToken)
							uni.setStorageSync('user', res.data)
							uni.switchTab({
								url: '/pages/index/index'
							})
						} else {
							uni.showToast({
								title: '用户名密码有误', // 提示文字
								duration: 3000, // 显示时长
								mask: true, // 是否显示透明蒙层，防止触摸穿透，默认：false
								icon: 'error' // 图标，支持"success"、"loading"  error
							})
						}
					});
				}).catch(err => {
					console.log('err', err);
				})
			},

			// 点击跳转页面
			goUser() {
				const url = '../register/main'
				mpvue.navigateTo({
					url
				})
			}
		}
	};
</script>


<style>
	.size .van-field {
		font-size: 20px;
		height: 100px;
	}
</style>

<style scoped>
	.code-yan {
		width: 80px;
		height: 38px;
		margin-left: 10px;
	}

	.box {
		width: 80%;
		height: 100%;
		margin: 0 auto;
		text-align: center;
	}

	.title {
		font-weight: 800;
		font-size: 20px;
		margin-bottom: 30px;
		margin-top: -40px;
	}

	.van-field {
		width: 80%;
	}

	.log {
		margin-top: 30px;
	}

	.login {
		background-image: linear-gradient(to right, rgba(55, 136, 254, 1), #67e0e3);
		color: #fff;
	}

	.logoimg {
		width: 100%;
		height: 200px;
		margin: 60px auto;
	}

	.logoimg img {
		width: 100px;
	}

	.register {
		outline: none;
	}

	.enroll {
		margin-top: 10px;
	}

	.btn {
		background: coral;
	}

	.username {
		width: 80%;
		margin: 0 auto;
		border-bottom: 1px solid rgb(219, 219, 219);
		text-align: left;
		direction: rtl;
	}

	.password {
		width: 80%;
		margin: 25px auto;
		border-bottom: 1px solid rgb(219, 219, 219);
		text-align: left;
		direction: rtl;
	}
</style>