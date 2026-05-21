<template>
	<view class="content">
		<!-- 导航栏 -->
		<view class="bg-white nav-headers">
			<!-- 状态栏 -->
			<view :style="{height:statusBarHeight + 'px'}"></view>
			<view class="van-header u-flex" 
				:style="{height:navBarHeight+'px',width:windowWidth+'px',lineHeight:navBarHeight+'px'}">
				<view  class="nav-logo" >
					<image src="../../static/logo.png"></image>
				</view>	
				<view class="nav-title">{{navTitle}}</view>
			</view>
		</view>
		
		<scroll-view :scroll-top="scrollTop" class="scroll-contents"
			scroll-y="true"  
			style="height: 700px;"
			>
			<view class="mt-60">
				<view class="mine_top">
					<view class="mine_bg">
						<image src="../../static/mine_bg.png"></image>
					</view>
					<view class="mine_top_info">
						<view class="info-img">
							<image src="../../static/logo.png"></image>
						</view>
						<view class="info-name">黄三</view>
					</view>
				</view>
				<view class="info">
					<view class="info-title">黄三 13724367321</view>
					<view class="info-span">华东大区  检查小组 </view>
				</view>
				
				<view class="list-info mt-20">
					<view class="info-list">
						<view class="info-item-icon">
							<image src="../../static/icon_1.png"></image>
						</view>
						<view class="info-list-title">地址</view>
						<view class="info-item-right">
							<image src="../../static/right.png"></image>
						</view>
					</view>
					<view class="info-list">
						<view class="info-item-icon">
							<image src="../../static/icon_2.png"></image>
						</view>
						<view class="info-list-title">修改密码</view>
						<view class="info-item-right">
							<image src="../../static/right.png"></image>
						</view>
					</view>
					<view class="info-list">
						<view class="info-item-icon">
							<image src="../../static/icon_3.png"></image>
						</view>
						<view class="info-list-title">修改手机号码</view>
						<view class="info-item-right">
							<image src="../../static/right.png"></image>
						</view>
					</view>
					<view class="info-list">
						<view class="info-item-icon">
							<image src="../../static/icon_4.png"></image>
						</view>
						<view class="info-list-title">关于我们</view>
						<view class="info-item-right">
							<image src="../../static/right.png"></image>
						</view>
					</view>
					<view class="info-list">
						<view class="info-item-icon">
							<image src="../../static/icon_4.png"></image>
						</view>
						<view class="info-list-title">退出登录</view>
						<view class="info-item-right">
							<image src="../../static/right.png"></image>
						</view>
					</view>
					
				</view>
			</view>
			<!-- <view>
				登录
			</view> -->
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navTitle:"我的",
				
				
				statusBarHeight: 20,
				navBarHeight: 45,
				windowWidth: 375
			}
		},
		created() {
			//获取手机系统信息
			const info = uni.getSystemInfoSync();
			//设置状态栏高度
			this.statusBarHeight = info.statusBarHeight;
			this.windowWidth = info.windowWidth;
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			// 获取胶囊的位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info
				.statusBarHeight)
			this.windowWidth = menuButtonInfo.left
		},
		methods: {
			selectes(){
				console.log(2313123213)
				uni.navigateTo({
					url:"/pages/consult/consult"
				})
			},
			
			details(){
				uni.navigateTo({
					url:"/pages/query/query"
				})
			}
		}
	}
</script>

<style >
.scroll-contents{
	width: 100%;
	height: 100%;
	background: #fff;
}
.mine_top{
	width: 100%;
	height: 418rpx;
}
.mine_top image{
	width: 100%;
	height:418rpx;
}
.mine_top_info{
	
}
.info-img{
	width: 120rpx;
	height: 120rpx;
	border-radius: 50%;
	position: absolute;
	top: 250rpx;
	left: 330rpx;
	z-index: 99;
	background: #fff;
}
.info-img image{
	width: 120rpx;
	height: 120rpx;
	border-radius: 50%;
}
.info-name{
	width: 120rpx;
	height: 56rpx;
	background: #0278FC;
	box-shadow: 0rpx 3rpx 6rpx 1rpx rgba(0,0,0,0.16);
	border-radius: 32rpx;
	font-size: 28rpx;
	font-weight: bold;
	color: #FFFFFF;
	line-height: 56rpx;
	letter-spacing: 2rpx;
	text-align: center;
	position: absolute;
	top: 290rpx;
	left: 450rpx;
	z-index: 9999;
}
.info{
	width: 620rpx;
	height: 88rpx;
	background: #F4F5F7;
	border-radius: 10rpx;
	margin-left: 30rpx;
	padding: 25rpx 35rpx;
}
.info-title{
	font-size: 28rpx;
	font-weight: bold;
	color: #333333;
	letter-spacing: 2rpx;
}
.info-span{
	font-size: 24rpx;
	font-weight: 400;
	color: #333333;
	line-height: 36rpx;
	letter-spacing: 2rpx;
	margin-top: 15rpx;
}
.info-list{
	width: 690rpx;
	height: 90rpx;
	line-height: 90rpx;
	margin-left: 30rpx;
	border-bottom: solid 2rpx #E5E5E5;
	display: flex;
}
.info-item-icon{
	width: 45rpx;
	height: 45rpx;
	margin-top: 10rpx;
	margin-left: 15rpx;
}
.info-item-icon image{
	width: 45rpx;
	height: 45rpx
}
.info-list-title{
	width: 580rpx;
	font-size: 28rpx;
	font-weight: 400;
	color: #666666;
	letter-spacing: 2rpx;
	margin-left: 15rpx;
}
.info-item-right{
	width: 35rpx;
	height: 35rpx;
	margin-top: 10rpx;
}
.info-item-right image{
	width: 35rpx;
	height: 35rpx;
}

</style>
