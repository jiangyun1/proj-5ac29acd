<script>
	export default {
		onLaunch: function() {
			uni.getSystemInfo({
			    success: (e) => {
			      let statusBar = 0  //状态栏高度
			      let customBar = 0  // 状态栏高度 + 导航栏高度  
			      let navbar = 0 // 自定义标题与胶囊对齐高度
			      
			      
			      // #ifdef MP
			      statusBar = e.statusBarHeight
			      customBar = e.statusBarHeight + 45
			      if (e.platform === 'android') {
			        this.$store.commit('SET_SYSTEM_IOSANDROID', false)
			        customBar = e.statusBarHeight + 50
			      }
			      // #endif
			      
			      
			      // #ifdef MP-WEIXIN
			      statusBar = e.statusBarHeight
			      const custom = wx.getMenuButtonBoundingClientRect()
			      customBar = custom.bottom + custom.top - e.statusBarHeight
			 
			      navbar = (custom.top - e.statusBarHeight) * 2 + custom.height
			      // #endif
			 
			 
			      // #ifdef MP-ALIPAY
			      statusBar = e.statusBarHeight
			      customBar = e.statusBarHeight + e.titleBarHeight
			      // #endif
			 
			 
			      // #ifdef APP-PLUS
			      console.log('app-plus', e)
			      statusBar = e.statusBarHeight
			      customBar = e.statusBarHeight + 45
			      // #endif
			 
			 
			      // #ifdef H5
			      statusBar = 0
			      customBar = e.statusBarHeight + 45
			      // #endif
			 
			    }
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		
	}
</script>

<style >
	
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
