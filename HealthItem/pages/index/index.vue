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
				<view class="nav-exchange" @click="showModal = true">
					<image src="../../static/exchange.png"></image>
				</view>
			</view>
		</view>
		
		<view class="contents">
			<scroll-view :scroll-top="scrollTop" 
				scroll-y="true" class="scroll-Y" 
				style="height: 640px;"
				>
				<view class="bg-white module-one">
					<!-- 背景图 -->
					<view class="bg-img m-25">
						<image src="../../static/index_bg.png"></image>
					</view>
					<view class="module-one-font">
						<view>特色科室: 心血管内科妇产科神经内科中西医</view>
						<view>科呼吸内科麻醉科皮肤性病科血液</view>
						<view>内科核医学科口腔科病理科</view>
						<view>外科重症医学科...</view>
						<view>地址: 广州天河区东圃123号</view>
					</view>
				</view>
				
				<view class="content-list">
					<view class="bg-white list-item mt-20" 
						v-for="(item,index) in 3" :key="index">
						<view class="list-contents">
							<view class="list-top">
								<view class="list-title">联系部门</view>
								<view class="list-span">外科室，主任</view>
							</view>
							<view class="list-below">
								<view class="list-title">联系号码</view>
								<view class="list-span" >
									<span>138237293824</span>
									<image class="list-phone" src="../../static/phone.png"></image>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

		<!-- 模态框组件 -->
		<view class="modal" v-if="showModal">
			<view class="modal-content">
				<view>{{ modalTitle }}</view>
				<view>{{ modalContent }}</view>
				<view class="modal-buttons">
					<button @click="handleConfirm">确认</button>
					<button @click="showModal=false">取消</button>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import {getLogin} from '@/api/common/index.js'
	export default {
		data() {
			return {
				navTitle:"东城区朝阳门医院",
				showModal: false,

				
				statusBarHeight: 20,
				navBarHeight: 45,
				windowWidth: 375
			
			}
		},
		onLoad() {
			console.log(this.$system)
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
			// #endif
		},
		mounted() {
			getLogin().then(res=>{
				
			})
			//确认
			// handleConfirm() {
			// 	// 处理模态框确认按钮点击事件
			// 	// 可以在这个方法中执行你需要的操作
			// 	this.showModal = false; // 关闭模态框
			// },
			//取消
			// handleCancel() {
			// 	// 处理模态框取消按钮点击事件
			// 	// 可以在这个方法中执行你需要的操作
			// 	this.showModal = false; // 关闭模态框
			// }
		},
		methods: {
			
			
			
			
		}
	}
</script>

<style>
	
	/* 主体内容 */
	.module-one{
		width: 100vw;
		height: 295rpx;
		margin-top: 60px;
	}
	.bg-img{
		width: auto;
		height: 264rpx;
	}
	.bg-img image{
		width: 100%;
		height: 100%;
	}
	.module-one-font{
		margin: 30rpx 28px;
		font-size: 24rpx;
		font-weight: 400;
		color: #fff;
		line-height: 38rpx;
		letter-spacing: 2rpx;
		position: absolute;
		top: 120rpx;
	}
	.list-contents{
		margin: 32rpx;
		font-size: 28rpx;
		color: #333333;
		letter-spacing: 2rpx;
	}
	.list-top{
		width: 100%;
		height: 148rpx;
		border-bottom: solid 2rpx #E8ECEF;
		padding-top: 5rpx;
	}
	.list-below{
		width: 100%;
		height: 148rpx;
		border-top: solid 2rpx #E8ECEF;
	}
	.list-title{
		font-weight: bold;
		padding-top: 25rpx;
		margin-left: 20rpx;
	}
	.list-span{
		font-weight: 400;
		margin-left: 20rpx;
		margin-top: 15rpx;
	}
	.list-phone{
		width: 38rpx;
		height: 40rpx;
		position: relative;
		left: 55%;
	}
</style>
