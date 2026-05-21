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
			<view v-if="tabbarIndex == 0">
				<view class="bg-white modal-one">
					<view class="title">基础信息</view>
					<view>疑点名称：{{addForm.task.doubtName}}</view>
					<view>违规项目类型：{{addForm.task.typeName}}</view>
					<view>笔录人员：{{addForm.task.recordUserName}}</view>
					<view>现场取证：{{addForm.task.url}}</view>
					<view>违规项目单价(元）：{{addForm.task.violationMount}}</view>
					<view>违规项目数量：{{addForm.task.violationNum}}</view>
					<view>违规项目金额（元）：{{addForm.task.violationTotal}}</view>
					<view>统筹金额(元）：{{addForm.task.totalAmount}}</view>
					<view class="u-flex">违规依据：
						<view class="item-list">
							{{addForm.task.violationBasis}}
						</view>
					</view>
					<view class="u-flex">违规内容：
						<view class="item-list">
							{{addForm.task.violationText}}
						</view>
					</view>
					<view class="u-flex">取数规则：
						<view class="item-list">
							{{addForm.task.roleName}}
						</view>
					</view>
					<!-- <view>所属项目：广州市 黄埔区</view> -->
					<!-- <view>所属医院：和人医院</view> -->
				</view>

			</view>

			<view v-if="tabbarIndex == 1">
				<view class="bg-white modal-two mt-20">
					<view class="title">对应病例</view>
					<view class="table-header">
						<view class="table-headers">病人名称</view>
						<view class="table-headers">住院号</view>
						<view class="table-headers">入院日期</view>
						<view class="table-headers">出院日期</view>
					</view>
					<view class="table-content">
						<view class="table-content-item" v-for="(item,index) in addForm.caseList" :key="index">
							<view class="u-flex table-list">
								<view class="content-items">{{item.name}}</view>
								<view class="content-items">{{item.admissionNumber}}</view>
								<view class="content-items">{{item.admissionDate}}</view>
								<view class="content-items">{{item.dischargeDate}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="tabbarIndex == 2">
				<view class="bg-white modal-three mt-20">
					<view class="title">对应病例</view>
					<!-- 		<view class="u-flex list-item">
							<view>是否在xx目录</view>
							<view class="radio-item">
								<label class="radio">
									<radio value="r1" color="#3fa0f8" :checked="addForm.task.existDirectory=='1'?true:false" />已查实
								</label>
								<label class="radio">
									<radio value="r2" color="#3fa0f8" :checked="addForm.task.existDirectory=='0'?true:false"/>否
								</label>
							</view>
						</view> -->
					<view class="u-flex list-item">
						<view>是否已固定证据</view>
						<view class="radio-item">
							<label class="radio">
								<radio value="r1" color="#3fa0f8"
									:checked="addForm.task.stabEvidence=='1'?true:false" />已查实
							</label>
							<label class="radio">
								<radio value="r2" color="#3fa0f8"
									:checked="addForm.task.stabEvidence=='0'?true:false" />否
							</label>
						</view>
					</view>
					<view class="u-flex list-item">
						<view>是否金额已确定</view>
						<view class="radio-item">
							<label class="radio">
								<radio value="r1" color="#3fa0f8" :checked="addForm.task.stabAmount=='1'?true:false" />
								已查实
							</label>
							<label class="radio">
								<radio value="r2" color="#3fa0f8" :checked="addForm.task.stabAmount=='0'?true:false" />否
							</label>
						</view>
					</view>
					<view>
						<view>任务状态</view>
						<view class="mt-10 radio-conents-item">
							<label class="radio-items">
								<radio value="r1" :checked="addForm.task.status=='1'?true:false" color="#3fa0f8" />待分配
							</label>
							<label class="radio-items">
								<radio value="r2" color="#3fa0f8" :checked="addForm.task.status=='2'?true:false" />待检查
							</label>
							<label class="radio-items">
								<radio value="r3" color="#3fa0f8" :checked="addForm.task.status=='3'?true:false" />有问题
							</label>
							<label class="radio-items">
								<radio value="r4" color="#3fa0f8" :checked="addForm.task.status=='4'?true:false" />没问题
							</label>
						</view>
					</view>

					<!-- <view class="btn mt-60">开始检查</view> -->
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import {
		getDetail
	} from '@/api/common/index.js'
	export default {
		data() {
			return {
				addForm: {},
				tabbarIndex: 0,
				handlingType: [{
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
		components: {

		},
		onLoad(option) {
			getDetail(option.id).then(res => {
				this.addForm = res.data
				res.data.caseList.forEach(item => {
					const date = new Date(item.admissionDate);
					const date1 = new Date(item.dischargeDate);
					const year = date.getFullYear();
					const month = date.getMonth() + 1; // 月份是从0开始的，所以需要加1  
					const day = date.getDate();
					const year1 = date1.getFullYear();
					const month1 = date1.getMonth() + 1; // 月份是从0开始的，所以需要加1  
					const day1 = date1.getDate();
					item.admissionDate = `${year}-${month}-${day}`
					item.dischargeDate = `${year1}-${month1}-${day1}`
					// this.convertedTimestamp = date.toLocaleString()
				})
			})
			console.log(option, 'dd')
		},
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

	.actives {
		width: 28rpx;
		height: 6rpx;
		background: #0277FC;
		margin-top: -10rpx;
	}

	.bg-white {
		background: #fff;
		padding: 27rpx 30rpx;
		font-size: 28rpx;
		font-weight: 400;
		color: #333;
		line-height: 48rpx;
		letter-spacing: 2rpx;
	}

	.modal-one {
		width: 100%;
		height: 1020rpx;
	}

	.modal-two {
		width: 100%;
		height: 420rpx;
	}

	.title {
		font-size: 34rpx;
		color: #333333;
	}

	.item-list {
		width: 70%;
	}

	.table-header {
		width: 690rpx;
		height: 64rpx;
		line-height: 64rpx;
		background: #F5F7FA;
		margin-top: 15rpx;
		display: flex;
	}

	.table-headers {
		font-size: 26rpx;
		font-weight: 400;
		color: #333333;
		letter-spacing: 2rpx;
		flex: 1;
		text-align: center;
	}

	.table-list {
		width: 690rpx;
	}

	.table-content-item {
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

	.content-items {
		width: 25%;
	}

	.list-item {
		height: 78rpx;
		line-height: 78rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #333333;
		letter-spacing: 2rpx;
		display: flex;
		justify-content: space-between;
	}

	.radio-item {
		position: relative;
		margin-right: 60rpx;
		margin-left: 20rpx
	}

	.radio-conents-item {
		width: 100%;
		margin-top: 25rpx;
	}

	.radio-items {
		width: 25%;
		margin-top: 15rpx;
		margin-right: 20rpx;
	}

	.btn {
		width: 662rpx;
		height: 88rpx;
		line-height: 88rpx;
		background: linear-gradient(135deg, #2697FF 0%, #0278FC 100%);
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		opacity: 1;
		border: 1rpx solid rgba(0, 0, 0, 0);
		font-size: 32rpx;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
		position: relative;
		left: 50%;
		margin-left: -331rpx;
	}
</style>