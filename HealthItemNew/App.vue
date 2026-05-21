<script>
	import Vue from 'vue';
	export default {
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					}
					// #endif

					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			});
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style>
	 @import 'common/uni.css';
	/*项目定义的样式文件*/
	/* @import '@/wxcomponents/vant/common/index.wxss';
	@import 'common/style.css'; */

	/* 设置以下全局字体，以保证在不同设备上提供最佳的视觉体验 */
	page {
		font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
	}
	.content {
		width: 100%;
		height: 100%;
		background: #F6F7FB;
	}
	.nav-headers{
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 99;
	}
	.van-header{
		padding-left: 13rpx;
	}
	.nav-logo {
		height: 64rpx;
		width: 64rpx;
		position: relative;
		top: 7rpx;
	}
	.nav-logo image{
		height: 100%;
		width: 100%;
	}
	.nav-exchange{
		width: 48rpx;
		height: 38rpx;
		position: relative;
		top: 8rpx;
		left: 16rpx;
	}
	.nav-exchange image{
		width: 100%;
		height: 100%;
	}
	.nav-title {
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		margin-left: 22rpx
	}
	.w-100{
		width: 100%;
	}
	.u-flex{
		display: flex;
	}
	.bg-white{
		background: #fff;
	}
	.m-25{
		margin: 0 25rpx;
	}
	.mt-20{
		margin-top:20rpx
	}
	.mt-60{
		margin-top: 60px;
	}
	.mt-10{
		margin-top: 10rpx;
	}
	.list-item{
		width: 100vw;
		height: 298rpx;
		background: #FFFFFF;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
	}
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
	}
	.modal-content {
		background-color: #fff;
		width: 100% !important;
		height: 800rpx;
		border-radius: 8rpx;
		position: fixed;
		bottom: 0rpx;
	}
</style>
