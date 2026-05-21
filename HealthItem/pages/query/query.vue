<template>
	<view class="content">
		<scroll-view :scroll-top="scrollTop"
			scroll-y="true" class="scroll-Y" 
			style="height: 700px;"
			>
			<view class="content-box">
				<view class="contents-header" @click="selectes">
					<view class="contents-img">
						<image src="../../static/anniu.png"></image>
					</view>
					<view>条件设置搜索</view>
				</view>
				<view class="content-box-span u-flex mt-10">
					<view>查询数据（3234）</view>
					<view class="font-size">违规起始时间：2023/01/21~ 2023/04/22</view>
				</view>
				<view class="box-bg">
					<view class="box-title-header">
						<view class="box-titles">经输尿管镜支架术</view>
						<view class="copy">
							<view class="copy-img">
								<image src="../../static/copy.png"></image>
							</view>
							<view>复制引用</view>
						</view>
					</view>
					<view class="box-item">
						<view class="box-item-listes" v-for="(item,index) in boxList">
							<view class="box-item-font">
								{{item.text}}
								<span v-if="item.type == 1" class="blue"> {{item.number}} </span>
								{{item.unit}}
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="page-list">
				<view class="list-content" v-for="(item,index) in 4" :key="index">
					<view class="page-list-title">
						<view class="page-title">李书童</view>
						<view class="page-time">入住院日期：2023/03/13~2023/03/18</view>
					</view>
					<view class="page-contents">
						<view class="page-contents-list">
							<view>结算单：343545432</view>
							<view>违规项目金额：325,32</view>
							<view>违规项目数量: 12</view>
						</view>
						<view class="page-contents-list">
							<view>入院号：343545432</view>
							<view>违规单价: 72元</view>
							<view>统筹金额: 162,324元</view>
						</view>
					</view>
				</view>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navTitle:"数据查询",
				boxList:[
					{
						id:1,
						type:1,
						text:'显示数据',
						number:65,
						unit:'条'
					},
					{
						id:2,
						type:2,
						text:'共计违规数量',
						number:43,
						unit:''
					},
					{
						id:3,
						type:3,
						text:'共计违规金额',
						number:"234,33",
						unit:'元'
					},
				],
				
			}
		},
		created() {
			
		},
		methods: {
			selectes(){
				console.log(2313123213)
				uni.navigateTo({
					url:"/pages/consult/consult"
				})
			}
		}
	}
</script>

<style>
.content-box{
	width: 750rpx;
	height: 362rpx;
	background: #FFFFFF;
	padding-left: 30rpx;
}
.contents-header{
	width: 686rpx;
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
}
.contents-img{
	width: 34rpx;
	height: 34rpx;
	position:relative;
	top: 7rpx;
	right: 15rpx;
}
.contents-img image{
	width: 34rpx;
	height: 34rpx;
}
.content-box-span{
	font-size: 28rpx;
	font-weight: 400;
	color: #333333;
	display: flex;
	justify-content: space-between;
	letter-spacing: 2rpx;
}
.font-size{
	font-size: 20rpx;
	position: relative;
	right:50rpx;
	top: 7rpx;
}
.box-bg{
	width: 700rpx;
	height: 182rpx;
	background: #F5F7FA;
	border-radius: 8rpx;
	margin-top: 15rpx;
}
.box-title-header{
	display: flex;
	padding: 10rpx 17rpx;
}
.box-titles{
	font-size: 28rpx;
	font-weight: bold;
	color: #333333;
}
.copy{
	font-size: 24rpx;
	font-weight: 400;
	color: #333333;
	line-height: 36rpx;
	letter-spacing: 2rpx;
	display: flex;
	position: relative;
	left: 47%;
}
.copy-img{
	width: 25rpx;
	height: 25rpx;
	position: relative;
	top: 3rpx;
	right: 10rpx;
}
.copy-img image{
	width: 25rpx;
	height: 25rpx;
}
.box-item{
	display: flex;
}
.box-item-listes{
	margin-left: 17rpx;
	height: 40rpx;
	line-height: 40rpx;
	background: rgba(58,132,255,0.04);
	border-radius: 8rpx;
	margin-top:10rpx
}
.box-item-font{
	font-size: 24rpx;
	font-weight: 400;
	color: #333333;
	padding: 3rpx 5rpx;
}
.list-content{
	width: 750rpx;
	height: 195rpx;
	background: #FFFFFF;
	padding: 20rpx 30rpx;
	margin-top: 20rpx;
}
.page-list-title{
	display: flex;
}
.page-title{
	font-size: 28rpx;
	font-weight: bold;
	color: #333333;
}
.page-time{
	width: 414rpx;
	height: 34rpx;
	line-height: 34rpx;
	background: #E5F1FF;
	border-radius: 4rpx 4rpx 4rpx 4rpx;
	font-size: 20rpx;
	font-weight: 400;
	color: #0277FC;
	letter-spacing: 2rpx;
	position: relative;
	top: 5rpx;
	left: 15rpx;
}
.page-contents{
	font-size: 26rpx;
	font-weight: 400;
	color: #666666;
	display: flex;
}
.page-contents-list{
	flex: 1;
}
.page-contents-list view{
	margin-top: 15rpx;
}
</style>
