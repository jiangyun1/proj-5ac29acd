<template>
	<view class="content">
		<view class="font">
			<view class="list ">时间条件：</view>
			<view class="lists u-flex">
				<view>起始时间:</view>
				<view class="right-icon">
					<image src="../../static/right.png"></image>
				</view>
			</view>
			
			<view class="list u-flex">
				<view>共同条件：</view>
				<view class="list-icon u-flex">
					<view class="list-icon-img">
						<image src="../../static/add.png"></image>
					</view>
					<view class="list-icon-imgs">
						<image src="../../static/reduce.png"></image>
					</view>
				</view>
			</view>
			<view class="lists u-flex">
				<view>共同条件:</view>
				<view class="u-flex">
					<view>请选择共同条件</view>
					<view class="right-icon">
						<image src="../../static/right.png"></image>
					</view>
				</view>
			</view>
			<view class="lists u-flex border-top">
				<view>查询条件逻辑类型:</view>
				<view class="u-flex">
					<view>选择条件逻辑类型</view>
					<view class="right-icon">
						<image src="../../static/right.png"></image>
					</view>
				</view>
			</view>
			
			<view class="list u-flex">
				<view>子条件：</view>
				<view class="list-icon u-flex">
					<view class="list-icon-img">
						<image src="../../static/add.png"></image>
					</view>
					<view class="list-icon-imgs">
						<image src="../../static/reduce.png"></image>
					</view>
				</view>
			</view>
			<view class="lists u-flex">
				<view>子条件1:</view>
				<view class="u-flex">
					<view>项目名称</view>
					<!-- <view class="right-icon">
						<image src="../../static/right.png"></image>
					</view> -->
				</view>
			</view>
			<view class="lists u-flex border-top">
				<view>操作符:</view>
				<view class="u-flex">
					<view>包含</view>
					<view class="right-icon">
						<image src="../../static/right.png"></image>
					</view>
				</view>
			</view>
			<view class="lists u-flex border-top">
				<view>值:</view>
				<view class="u-flex">
					<view>经输尿管镜支架术</view>
					<view class="right-icon">
						<image src="../../static/right.png"></image>
					</view>
				</view>
			</view>
			<view class="lists u-flex border-top">
				<view>查询条件逻辑类型</view>
				<view class="u-flex">
					<view>选择条件逻辑类型</view>
					<view class="right-icon">
						<image src="../../static/right.png"></image>
					</view>
				</view>
			</view>
			
			<view class="list u-flex">
				<view>输出类型：</view>
				<view class="list-icon u-flex">
					<view class="list-icon-img">
						<image src="../../static/add.png"></image>
					</view>
					<view class="list-icon-imgs">
						<image src="../../static/reduce.png"></image>
					</view>
				</view>
			</view>
			<view class="lists u-flex">
				<view>选择类型条件：:</view>
				<view class="u-flex">
					<view>选择类型条件：</view>
					<view class="right-icon">
						<image src="../../static/right.png"></image>
					</view>
				</view>
			</view>
			<view class="lists u-flex border-top">
				<view>输出类型内容::</view>
				<view class="u-flex">
					<view>输出类型内容:</view>
					<view class="right-icon">
						<image src="../../static/right.png"></image>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.font{
	font-size: 28rpx;
	font-weight: 400;
	color: #333333;
	line-height: 36rpx;
}
.border-top{
	border-top: solid 1rpx #E8E8E8;
}
.list{
	justify-content: space-between;
	height: 76rpx;
	line-height: 76rpx;
	margin-left: 32rpx;
}
.lists{
	justify-content: space-between;
	height: 96rpx;
	line-height: 96rpx;
	background: #fff;
	padding-left: 32rpx;
	padding-right: 32rpx;
}
.right-icon{
	width: 35rpx;
	height: 35rpx;
	margin-top: 10rpx;
	margin-left: 10rpx;
}
.right-icon image{
	width: 35rpx;
	height: 35rpx;
}
.bg-white{
	background: #fff;
}
.list-icon-img{
	width: 39rpx;
	height: 39rpx;
	margin-right: 25rpx;
	margin-top: 10rpx;
}
.list-icon-img image{
	width: 39rpx;
	height: 39rpx;
}
.list-icon-imgs{
	width: 43rpx;
	height: 43rpx;
	margin-right: 25rpx;
	margin-top: 10rpx;
}
.list-icon-imgs image{
	width: 43rpx;
	height: 43rpx;
}
</style>
