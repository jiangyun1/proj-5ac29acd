<template>
	<view class="content">
		<!-- 疑难点 -->
		<view>
			<view class="topTabBar">
				<view class="grid" v-for="(item, tbIndex) in handlingType" :key="tbIndex" @tap="showType(tbIndex)">
					<view class="text" :class="[tbIndex == tabbarIndex ? 'active' : '']">{{ item.value }}</view>
					<view :class="[tbIndex == tabbarIndex ? 'actives' : '']"></view>
				</view>
			</view>
			<view class="" >
				<view v-if="tabbarIndex == 0">
				   <TabsOne></TabsOne>
				</view>
				
				<view v-if="tabbarIndex == 1">
				   <view class="">
						<text>我是内容</text>
					 <text>我是内容</text>
				   </view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import TabsOne from '../../components/tabsOne.vue'	
	export default {
		data() {
			return {
				tabbarIndex:0,
				handlingType: [
					{
						value: '基础信息'
					},
					{
						value: '对应病例'
					},
					{
						value: '检查疑点'
					}
				],
			};  
		},
		components:{TabsOne},
		methods: {
			showType(tbIndex) {
				//跳转订单列表类型
				this.tabbarIndex = tbIndex;
				// if(this.tabbarIndex == 0){
				  
				// }
				// if(this.tabbarIndex == 1){
					
				// }
				// console.info(this.tabbarIndex)
			},
		}
	}
</script>

<style>
.topTabBar {
    width: 100%;
	height: 80rpx;
	display: flex;
	justify-content: space-around;
}
.grid {
	width: 20%;
	height: 80rpx;
	align-items: center;
	font-size: 28rpx;
	font-weight: 400;
	color: #333333;
	letter-spacing: 2rpx;
}
.text {
	height: 76rpx;
	display: flex;
	align-items: center;
}
.active {
	font-weight: bold;
	color: #333333;
}
.actives{
	width: 28rpx;
	height: 6rpx;
	background: #0277FC;
	margin-top: -10rpx;
}
/* .infoList {
	background-color: #FFFFFF;
	margin-bottom: 20upx;
	padding: 20upx;
	border-radius: 15upx;
} */

</style>
