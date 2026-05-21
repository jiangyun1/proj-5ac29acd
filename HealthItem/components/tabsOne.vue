<template>
	<view>
		<view class="bg-white modal-one">
			<view class="title">基础信息</view>
			<view>疑点名称：疑点名称1</view>
			<view>违规项目类型：重复收费</view>
			<view>笔录人员：手术室护士长</view>
			<view>现场取证：疑点名称1</view>
			<view>违规项目单价(元）：324.5</view>
			<view>违规项目数量：48</view>
			<view>违规项目金额（元）：1200/1000</view>
			<view>统筹金额(元）：324.8</view>
			<view class="u-flex">违规依据：
				<view class="item-list">
					《全国规范（2012）》中，所有的经尿道
                输尿管镜碎石取石术均包含留置输尿管支
                架管的步骤。
				</view>
			</view>
			<view class="u-flex">违规内容：
				<view class="item-list">
					开展“经输尿管镜碎石取石术”时，分解收
					取“经输尿管镜支架置入术”的费用。
				</view>
			</view>
			<view class="u-flex">取数规则：
				<view class="item-list">
					2021.01.01-2021.12.31； 同个病人；
					结算号相同； 内容“经输尿管镜 碎石取
					石术” 同时“经输尿管镜支架术” 而且没
					有发生“监护”
				</view>
			</view>
			<view>所属项目：广州市 黄埔区</view>
			<view>所属医院：和人医院</view>
		</view>
		
		<view class="bg-white modal-two mt-20">
			<view class="title">对应病例</view>
			<view class="table-header">
				<view class="table-headers">病人名称</view>
				<view class="table-headers">住院号</view>
				<view class="table-headers">入院日期</view>
				<view class="table-headers">出院日期</view>
			</view>
			<view class="table-content">
				<view class="table-content-item" v-for="(item,index) in 4" :key="index">
					<view class="u-flex table-list">
						<view class="content-items">何家洪</view>
						<view class="content-items">666</view>
						<view class="content-items">2023-07-16</view>
						<view class="content-items">2023-07-16</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="bg-white modal-three mt-20">
			<view class="title">对应病例</view>
			<view class="u-flex list-item">
				<view>是否在xx目录</view>
				<view class="radio-item">
					<label class="radio"><radio value="r1" color="#3fa0f8" checked="true" />已查实</label>
					<label class="radio"><radio value="r2" color="#3fa0f8" />否</label>
				</view>
			</view>
			<view class="u-flex list-item">
				<view>是否已固定证据</view>
				<view class="radio-item">
					<label class="radio"><radio value="r1" color="#3fa0f8" checked="true" />已查实</label>
					<label class="radio"><radio value="r2" color="#3fa0f8" />否</label>
				</view>
			</view>
			<view class="u-flex list-item">
				<view>是否金额已确定</view>
				<view class="radio-item">
					<label class="radio"><radio value="r1" color="#3fa0f8" checked="true" />已查实</label>
					<label class="radio"><radio value="r2" color="#3fa0f8"/>否</label>
				</view>
			</view>
			<view >
				<view>是否金额已确定</view>
				<view class="mt-10 radio-conents-item">
					<label class="radio-items"><radio value="r1" checked="true" color="#3fa0f8" />待分配</label>
					<label class="radio-items"><radio value="r2" color="#3fa0f8"/>待检查</label>
					<label class="radio-items"><radio value="r3" color="#3fa0f8"/>有问题</label>
					<label class="radio-items"><radio value="r4" color="#3fa0f8"/>没问题</label>
				</view>
			</view>
			
			<view class="btn mt-60">开始检查</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tabsOne",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.bg-white{
	background: #fff;
	padding: 27rpx 30rpx;
	font-size: 28rpx;
	font-weight: 400;
	color: #333;
	line-height: 48rpx;
	letter-spacing: 2rpx;
}
.modal-one{
	width: 100%;
	height: 1020rpx;
}
.modal-two{
	width: 100%;
	height: 420rpx;
}

.title{
	font-size: 34rpx;
	color: #333333;
}
.item-list{
	width: 70%;
}
.table-header{
	width: 690rpx;
	height: 64rpx;
	line-height: 64rpx;
	background: #F5F7FA;
	margin-top: 15rpx;
	display: flex;
}
.table-headers{
	font-size: 26rpx;
	font-weight: 400;
	color: #333333;
	letter-spacing: 2rpx;
	flex: 1;
	text-align: center;
}

.table-list{
	width: 690rpx;
}
.table-content-item{
	width: 690rpx;
	height: 78rpx;
	margin-left: 30rpx;
	line-height: 78rpx;
	font-size: 24rpx;
	font-weight: 400;
	color: #333333;
	letter-spacing: 2rpx;
	display: flex;
}
.content-items{
	width: 25%;
}
.list-item{
	height: 78rpx;
	line-height: 78rpx;
	font-size: 24rpx;
	font-weight: 400;
	color: #333333;
	letter-spacing: 2rpx;
	display: flex;
	justify-content: space-between;
}
.radio-item{
	position: relative;
	margin-right: 60rpx;
	margin-left: 20rpx
}
.radio-conents-item{
	width: 100%;
	margin-top: 25rpx;
}
.radio-items{
	width: 25%;
	margin-top: 15rpx;
	margin-right: 20rpx;
}
.btn{
	width: 662rpx;
	height: 88rpx;
	line-height: 88rpx;
	background: linear-gradient(135deg, #2697FF 0%, #0278FC 100%);
	border-radius: 8rpx 8rpx 8rpx 8rpx;
	opacity: 1;
	border: 1rpx solid rgba(0,0,0,0);
	font-size: 32rpx;font-weight: 400;
	color: #FFFFFF;
	text-align: center;
	position: relative;
	left: 50%;
	margin-left: -331rpx;
}
</style>