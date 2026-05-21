<template>
	<view class="content">
		<!-- 导航栏 -->
		<view class="bg-white nav-headers">
			<!-- 状态栏 -->
			<view :style="{height:statusBarHeight + 'px'}"></view>
			<view class="van-header u-flex"
				:style="{height:navBarHeight+'px',width:windowWidth+'px',lineHeight:navBarHeight+'px'}">
				<view class="nav-logo">
					<image src="../../static/logo.png"></image>
				</view>
				<view class="nav-title">{{navTitle}}</view>
			</view>
		</view>

		<scroll-view :scroll-top="scrollTop" class="scroll-contents" scroll-y="true" style="height: 700px;">
			<view class="content-box mt-60">
				<view class="contents-header" @click="selectes">
					<view class="contents-img">
						<image src="../../static/anniu.png"></image>
					</view>
					<view>条件设置搜索</view>
				</view>
				<view class="history">历史记录</view>
			</view>

			<view>
				<view class="list-item mt-20" v-for="(item,index) in 4" :key="index" @click="details">
					<view class="list-item-title">
						<view class="list-title">经输尿管镜支架术</view>
						<view class="list-time">时间条件:2023/03/13~2023/03/18</view>
					</view>
					<view class="list-font">共同条件：相同病人；相同病人；相同结算号</view>
					<view class="list-font">子条件1：经输尿管镜支架术...</view>
				</view>
			</view>

		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navTitle: "数据查询",


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
			// h5 app mp-alipay没有胶囊按钮
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			// 获取胶囊的位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info
				.statusBarHeight)
			this.windowWidth = menuButtonInfo.left
		},
		methods: {
			selectes() {
				console.log(2313123213)
				uni.navigateTo({
					url: "/pages/consult/consult"
				})
			},

			details() {
				uni.navigateTo({
					url: "/pages/query/query"
				})
			}
		}
	}
</script>

<style>
	.scroll-contents {
		width: 100%;
		height: 100%;
		background: #fff;
	}

	.content-box {
		width: 750rpx;
		height: 142rpx;
		padding-left: 30rpx;
	}

	.contents-header {
		width: 690rpx;
		height: 72rpx;
		line-height: 72rpx;
		border-radius: 8rpx;
		background: #0278FC;
		font-size: 28rpx;
		font-weight: bold;
		color: #FFFFFF;
		display: flex;
		text-align: center;
		justify-content: center;
		margin-top: 10rpx;
	}

	.contents-img {
		width: 34rpx;
		height: 34rpx;
		position: relative;
		top: 7rpx;
		right: 15rpx;
	}

	.contents-img image {
		width: 34rpx;
		height: 34rpx;
	}

	.history {
		font-size: 28rpx;
		font-weight: 400;
		color: #333333;
		line-height: 36rpx;
		letter-spacing: 2rpx;
		margin-top: 15rpx;
	}

	.list-item {
		width: 690rpx;
		height: 168rpx;
		background: #F5F7FA;
		margin-left: 30rpx;
	}

	.list-item-title {
		display: flex;
		justify-content: space-between;
		margin: 15rpx 20rpx;
	}

	.list-title {
		font-size: 28rpx;
		font-weight: bold;
		color: #333333;
		padding-top: 10rpx;
	}

	.list-time {
		font-size: 22rpx;
		font-weight: 400;
		color: #333;
		letter-spacing: 2rpx;
		position: relative;
		top: 15rpx;
	}

	.list-font {
		font-size: 26rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		margin: 15rpx 20rpx;
	}
</style>