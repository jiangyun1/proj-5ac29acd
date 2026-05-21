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
		
		<scroll-view :scroll-top="scrollTop"
			scroll-y="true" class="scroll-Y" 
			style="height: 640px;"
			>
			<!-- 横向滚动 -->
			<view class="mt-60 scroll-h">
				<scroll-view class="scroll-view_H" scroll-x="true"  scroll-left="120">
					<view class="scroll-view_Hs  ">
						<view class="defa" v-for="(value,index) in headerList" 
							:key="index" :class="active == value.id?'bgBlue':'color1'"
							@tap="tapInfo(value.id)">
							<view class="header-box">
								<view class="header-box-title" :class="active == value.id?'color2':'color1'">
									<view class="header-box-titles">{{value.number}}</view>
									<view class="header-box-title-span">{{value.type}}</view>
								</view>
								<view class="header-text" :class="active == value.id?'color2':'color1'">
									{{value.name}}
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			
			<!-- 列表 -->
			<view class="content-list">
				<view class="list-item mt-20" v-for="(item,index) in 4" :key="index">
					<view class="list-title">
						<view class="list-titles">经输尿管镜支架置入术</view>
						<view class="list-title-box blue">欧阳信</view>
						<view class="list-title-box orange">待核实</view>
					</view>
					<view class="font-title">笔录人员：李主任</view>
					<view class="font-title">违规类型：重复收费</view>
					<view class="font-title u-flex">
						<view>违规项目金额（元)：325,32</view>
						<view class="list-time"> 2023/03/13~2023/03/18</view>
					</view>
				</view>
			</view>
			
			
			<view class="add" >
				<image @click="addTo" src="../../static/add.png"></image>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navTitle:"任务单",
				headerList:[
					{
						id:0,
						name:"任务数量",
						type:"项",
						number:"12"
					},
					{
						id:2,
						name:"任务进度",
						type:"%",
						number:"12"
					},
					{
						id:3,
						name:"违规金额",
						type:"万",
						number:"12"
					},
					{
						id:4,
						name:"医疗金额",
						type:"万",
						number:"12"
					},
					{
						id:5,
						name:"任务数量",
						type:"项",
						number:"12"
					},
					{
						id:6,
						name:"任务数量",
						type:"项",
						number:"12"
					},
				],
				active:0,
				
				
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
			// 获取胶囊的位置
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			// const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度
			// this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info
			// 	.statusBarHeight)
			// this.windowWidth = menuButtonInfo.left
		},
		methods: {
			tapInfo(e) {
				// console.log(this.headerList )//是数组，数组也有indexOf
				// if (this.rSelect.indexOf(e) == -1) {
				// 	console.log(e)//打印下标
				// 	this.rSelect.push(e);//选中添加到数组里
				// } else {
				// 	this.rSelect.splice(this.rSelect.indexOf(e), 1); //取消
				// }
				this.active = e
			},
			addTo(){
				uni.navigateTo({
					url:"/pages/doubtes/doubtes"
				})
			}
		}
	}
</script>

<style>
.scroll-h{
	width: 100%;
	height: 170rpx;
	background: #fff;
	overflow:hidden;
	white-space:nowrap;
}
.scroll-view_Hs{
	display: flex;
	flex-wrap: nowrap;
}
.defa{
	width: 110rpx;
	height: 80rpx;
	background: #F6F7FB;
	border-radius: 16rpx;
	margin-left: 24rpx;
	margin-top: 15rpx;
	text-align: center;
	justify-content: center;
	padding: 20rpx;
}
.header-box-title{
	display: flex;
	font-weight: bold;
	
}
.header-box-titles{
	font-size: 40rpx;
}
.header-box-title-span{
	font-size: 20rpx!important;
	position: relative;
	top: 20rpx;
	left: 8rpx;
}
.header-text{
	font-size: 22rpx;
	font-weight: 400;
	color: #666666;
}
.bgBlue{
	width: 120rpx;
	height: 90rpx;
	background: linear-gradient(180deg, #4BB9FA 0%, #2E72FF 100%);
	padding: 20rpx;
	border-radius: 16rpx;
	color: #fff !important;
}
.color2{
	color: #fff;
}
.color1{
	color: #1E2842;
}


/* 列表 */
.list-item{
	width: 750rpx;
	height: 205rpx;
	background: #FFFFFF;
	padding: 35rpx 30rpx;
}
.list-title{
	display: flex;
}
.list-titles{
	font-size: 31rpx;
	font-weight: bold;
	color: #333333;
}
.list-title-box{
	width: 100rpx;
	font-size: 20rpx;
	font-weight: 700;
	letter-spacing: 2rpx;
	padding: 8rpx 10rpx;
	margin-left: 25rpx;
	text-align: center;
}
.blue{
	background: #E5F1FF;
	color: #0277FC;
}
.orange{
	background-color: #FFEFE5;
	color: #FF6600;
}
.font-title{
	font-size: 25rpx;
	font-weight: 400;
	color: #333;
	margin-top: 20rpx;
	letter-spacing: 2rpx;
	justify-content: space-between;
}
.list-time{
	position:relative;
	left: -50rpx;
}
.add{
	position: fixed;
	bottom: 100rpx;
	left: 80%;
	width: 126rpx;
	height: 126rpx;
	background: #fff;
	border-radius: 50%;
}
.add image{
	width: 100%;
	height: 100%;
}
</style>
