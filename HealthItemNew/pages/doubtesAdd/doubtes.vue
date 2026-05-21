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
			<view class="">
				<view v-if="tabbarIndex == 0">
					<uni-row class="demo-uni-row">
						<uni-col :span="24">
							<uni-list-item ellipsis=1 title="任务编号" @click="showModal=true"
								:rightText="addForm.task.taskNo" >
								<template v-slot:footer>
								<uni-easyinput  v-model="addForm.task.taskNo" focus
									placeholder="请输入内容" @input="input"></uni-easyinput>
									</template>
							</uni-list-item>
							<uni-list-item ellipsis=1 :border="false" title="疑点名称">
								<!-- 自定义 header -->
								<template v-slot:header>
									<!-- <view class="slot-box">
				  					dd
				  				</view> -->
								</template>
								<!-- 自定义 body -->
								<template v-slot:body>
									<!-- <text class="slot-box slot-text">自定义插槽</text> -->
								</template>
								<!-- 自定义 footer-->
								<template v-slot:footer>
									<uni-easyinput v-model="addForm.task.doubtName" focus
										placeholder="请输入内容" @input="input"></uni-easyinput>
								</template></uni-list-item>
							<uni-list-item ellipsis=1 title="违规项目类型" @click="showModal=true"
								:rightText="addForm.task.typeName" link >
								<uni-easyinput  v-model="addForm.task.typeId" focus
									placeholder="请输入内容" @input="input"></uni-easyinput>
							</uni-list-item>
							<uni-list-item ellipsis=1 title="笔录人员"><template v-slot:footer>
									<uni-easyinput v-model="value" focus placeholder="请输入内容"
										@input="input"></uni-easyinput>
								</template></uni-list-item>
							<uni-list-item ellipsis=1 title="医保物价人员"><template v-slot:footer>
									<uni-easyinput v-model="value" focus placeholder="请输入内容"
										@input="input"></uni-easyinput>
								</template></uni-list-item>
							<uni-list-item ellipsis=1 title="现场取证">
								<template v-slot:footer>
									<span style="color:darkgrey;font-size: 12px;">支持文件、图片(<=5M)</span>
									<uni-file-picker limit="5" file-mediatype="all" @success="success" @select="select"
										@progress="progress" @fail="fail">
										<image src="../../static/相机1.png" style="width: 20px;height: 20px;"></image>
									</uni-file-picker>
											
								</template>
							</uni-list-item>
							<uni-list-item ellipsis=1 title="违规内容"><template v-slot:footer><uni-easyinput
									v-model="addForm.task.violationText" focus placeholder="请输入内容"
									@input="input"></uni-easyinput></template></uni-list-item>
							<uni-list-item ellipsis=1 title="违规项目单价(元）"><template v-slot:footer>
								<uni-easyinput v-model="addForm.task.violationMount" focus
									placeholder="请输入内容" @input="input"></uni-easyinput></template>
									</uni-list-item>
							<uni-list-item ellipsis=1 title="违规项目数量" ><template v-slot:footer> <uni-easyinput
									v-model="addForm.task.recordUserName" focus placeholder="请输入内容"
									@input="input"></uni-easyinput></template>
									</uni-list-item>
							<uni-list-item ellipsis=1 title="违规项目金额（元）"><template v-slot:footer> <uni-easyinput
									v-model="addForm.task.violationTotal" focus placeholder="请输入内容"
									@input="input"></uni-easyinput></template></uni-list-item>
							<uni-list-item ellipsis=1 title="统筹金额(元）"><template v-slot:footer> <uni-easyinput
									v-model="addForm.task.totalAmount" focus placeholder="请输入内容"
									@input="input"></uni-easyinput></template>
									</uni-list-item>
							<!-- <uni-list-item ellipsis=1 title="所属项目" :rightText="customerData.customerName" link
								to="/components/city/index"></uni-list-item> -->
						<!-- 	<uni-list-item ellipsis=1 title="所属医院" :rightText="customerData.customerName" link
								to="/components/city/index">
								</uni-list-item> -->
							<view>
								<span style="font-size: 12px;float: right;">数据查询</span>
								<image src="../../static/查看.png" style="width: 20px;height: 20px;float: right;"></image>

							</view>
							<uni-list-item ellipsis=1 title="取数规则" style="clear: both;">
								</uni-list-item>
							<uni-list-item ellipsis=1 title="取数规则" style="clear: both;">
								<template v-slot:body>
									<uni-easyinput type="textarea" v-model="addForm.task.roleName"
										placeholder="请输入内容"></uni-easyinput>
								</template>
							</uni-list-item>
						</uni-col>
					</uni-row>
				<view class="button-sp-area" style="margin-top: 20px;">
							<button class="mini-btn" type="primary" size="mini" style="width: 50%;" @click="setAdd">保存</button>
							<button class="mini-btn" type="default" size="mini" style="width: 50%;" @click="cancel">放弃</button>
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
									<view class="content-items"><uni-easyinput v-model="item.name" focus
									placeholder="请输入内容" @input="input"></uni-easyinput></view>
									<view class="content-items"><uni-easyinput v-model="item.admissionNumber" focus
									placeholder="请输入内容" @input="input"></uni-easyinput></view>
									<view class="content-items">
									<!-- 	<uni-easyinput v-model="item.admissionDate" focus
									placeholder="请输入内容" @input="input"></uni-easyinput> -->
									<uni-datetime-picker type="date" :clear-icon="false" v-model="item.admissionDate1" @change="maskClick({index:index},item.admissionDate)"/>
									</view>
									<view class="content-items">
										<!-- <uni-easyinput v-model="item.dischargeDate" focus
									placeholder="请输入内容" @input="input"></uni-easyinput> -->
									<uni-datetime-picker type="date" :clear-icon="false" v-model="item.dischargeDate1" @change="maskClick1({index:index},item.dischargeDate)"/>
									</view>
								</view>
							</view>
	<view>
						<image src="../../static/add.png" style="width: 20px;height: 20px;" @click="addList"></image>
						<image src="../../static/reduce.png" style="width: 22px;height: 22px;" @click="reduceList"></image>
					</view>
						</view>
					</view>
				<view class="button-sp-area" style="margin-top: 20px;">
							<button class="mini-btn" type="primary" size="mini" style="width: 50%;" @click="setAdd">保存</button>
							<button class="mini-btn" type="default" size="mini" style="width: 50%;" @click="cancel">放弃</button>
						</view>
				</view>
				<view v-if="tabbarIndex == 2">
					<view class="bg-white modal-three mt-20">
						<view class="title">对应病例</view>
				<!-- 		<view class="u-flex list-item">
							<view>是否在xx目录</view>
							<view class="radio-item">
								<label class="radio">
									<radio value="r1" color="#3fa0f8" :checked="addForm.task.existDirectory=='1'?true:false"  @click="addForm.task.existDirectory='1'"/>已查实
								</label>
								<label class="radio">
									<radio value="r2" color="#3fa0f8" :checked="addForm.task.existDirectory=='0'?true:false"  @click="addForm.task.existDirectory='0'"/>否
								</label>
							</view>
						</view> -->
						<view class="u-flex list-item">
							<view>是否已固定证据</view>
							<view class="radio-item">
								<label class="radio">
									<radio value="r1" color="#3fa0f8"  :checked="addForm.task.stabEvidence=='1'?true:false" @click="addForm.task.stabEvidence='1'"/>已查实
								</label>
								<label class="radio">
									<radio value="r2" color="#3fa0f8" :checked="addForm.task.stabEvidence=='0'?true:false" @click="addForm.task.stabEvidence='0'"/>否
								</label>
							</view>
						</view>
						<view class="u-flex list-item">
							<view>是否金额已确定</view>
							<view class="radio-item">
								<label class="radio">
									<radio value="r1" color="#3fa0f8" :checked="addForm.task.stabAmount=='1'?true:false" @click="addForm.task.stabAmount='1'"/>已查实
								</label>
								<label class="radio">
									<radio value="r2" color="#3fa0f8" :checked="addForm.task.stabAmount=='0'?true:false" @click="addForm.task.stabAmount='0'"/>否
								</label>
							</view>
						</view>
						<view>
							<view>任务状态</view>
							<view class="mt-10 radio-conents-item" >
								<label class="radio-items">
									<radio value="r1" :checked="addForm.task.status=='1'?true:false" color="#3fa0f8" @click="addForm.task.status='1'"/>待分配
								</label>
								<label class="radio-items">
									<radio value="r2" color="#3fa0f8" :checked="addForm.task.status=='2'?true:false" @click="addForm.task.status='2'"/>待检查
								</label>
								<label class="radio-items">
									<radio value="r3" color="#3fa0f8" :checked="addForm.task.status=='3'?true:false" @click="addForm.task.status='3'"/>有问题
								</label>
								<label class="radio-items">
									<radio value="r4" color="#3fa0f8" :checked="addForm.task.status=='4'?true:false" @click="addForm.task.status='4'"/>没问题
								</label>
							</view>
						</view>
							<view class="button-sp-area" style="margin-top: 20px;">
										<button class="mini-btn" type="primary" size="mini" style="width: 50%;" @click="setAdd">保存</button>
										<button class="mini-btn" type="default" size="mini" style="width: 50%;" @click="cancel">放弃</button>
									</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 模态框组件 -->
		<view class="modal" v-if="showModal">
			<view class="modal-content">
				<view class="modal-buttons">
					<!-- <span @click="handleConfirm" style="color:#0278FC;">确认</span> -->
					<span @click="showModal=false" style="color:#0278FC;float: right;">取消</span>
				</view>
				<view v-for="(item,index) in lineList" @click="selectH(item)" style="text-align: center;padding-top: 20px;">
					{{ item.showValue }}
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {
		getAddT,
		getType,
		getModify,
		getDetail
	} from '@/api/common/index.js'
	export default {
		data() {
			return {
				lineList:[],
				showModal:false,
				showM:'1',
				addForm:{
					task:{
						existDirectory:'1',
						stabEvidence:'1',
						stabAmount:'1',
						status:'1',
						hospitalId:uni.getStorageSync('hospitalId').data
					},
					checkUserList:[],
					caseList:[]
				},
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
				customerData: {
					customerName: "重复收费"
				},
				// 基础表单数据
				baseFormData: {
					name: '',
					age: '',
					introduction: '',
					sex: 2,
					hobby: [5],
					datetimesingle: 1627529992399
				},
				// 表单数据
				alignmentFormData: {
					name: '',
					age: '',
				},
				// 单选数据源
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}, {
					text: '保密',
					value: 2
				}],
				// 多选数据源
				hobbys: [{
					text: '跑步',
					value: 0
				}, {
					text: '游泳',
					value: 1
				}, {
					text: '绘画',
					value: 2
				}, {
					text: '足球',
					value: 3
				}, {
					text: '篮球',
					value: 4
				}, {
					text: '其他',
					value: 5
				}],
				// 分段器数据
				current: 0,
				items: ['左对齐', '顶部对齐'],
				// 校验表单数据
				valiFormData: {
					name: '',
					age: '',
					introduction: '',
				},
				// 校验规则
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}, {
							format: 'number',
							errorMessage: '年龄只能输入数字'
						}]
					}
				},
				// 自定义表单数据
				customFormData: {
					name: '',
					age: '',
					hobby: []
				},
				// 自定义表单校验规则
				customRules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}]
					},
					hobby: {
						rules: [{
								format: 'array'
							},
							{
								validateFunction: function(rule, value, data, callback) {
									if (value.length < 2) {
										callback('请至少勾选两个兴趣爱好')
									}
									return true
								}
							}
						]
					}

				},
				showAddM:2,
				dynamicFormData: {
					email: '',
					domains: {}
				},
				dynamicLists: [],
				dynamicRules: {
					email: {
						rules: [{
							required: true,
							errorMessage: '域名不能为空'
						}, {
							format: 'email',
							errorMessage: '域名格式错误'
						}]
					}
				}
			};
		},
		components: {},
		onLoad(option){
			this.showAddM=option.am
			console.log(option,'33')
			if(option.am==1){
				getDetail(option.id).then(res=>{
					this.addForm=res.data
					if(res.data.caseList==null){
						this.addForm.caseList=[]
					}
					res.data.caseList.forEach(item => {
						const date = new Date(item.admissionDate);
						const date1 = new Date(item.dischargeDate);
						const year = date.getFullYear();
						const month = date.getMonth() + 1; // 月份是从0开始的，所以需要加1  
						const day = date.getDate();
						const year1 = date1.getFullYear();
						const month1 = date1.getMonth() + 1; // 月份是从0开始的，所以需要加1  
						const day1 = date1.getDate();
						item.admissionDate1 = `${year}-${month}-${day}`
						item.dischargeDate1 = `${year1}-${month1}-${day1}`
						// this.convertedTimestamp = date.toLocaleString()
					})
				})
			}
		
			console.log(option,'dd')
		},
		onShow(){
			let param={
				typeCode:'violation_type'
			}
			getType(param).then(res=>{
				this.lineList=res.data
			})
		},
		methods: {
			maskClick(val,val1){
				 const dateObj = new Date(val1);  
				this.addForm.caseList[val.index].admissionDate=dateObj.getTime()
				console.log(val,val1,'sss',dateObj,this.addForm.caseList,dateObj.getTime())
			},
			maskClick1(val,val1){
				 const dateObj = new Date(val1);  
				this.addForm.caseList[val.index].dischargeDate=dateObj.getTime()
				console.log(val,val1,'sss',dateObj,this.addForm.caseList,dateObj.getTime())
			},
			cancel(){
				uni.switchTab({
					url: "/pages/task/task"
				})
			},
		selectH(val) {
				this.addForm.task.typeId = val.id
				this.addForm.task.typeName = val.showValue
				this.showModal=false
			},
			addList(){
				this.addForm.caseList.push({})
			},
			reduceList(){
				this.addForm.caseList.pop()
			},
			select(e) {
				let that = this
				// uni.showLoading({
				// 	title: "图片上传中"
				// });
			
				const tempFilePaths = e.tempFilePaths;
				uni.uploadFile({
					url: 'http://api.yatsenmed.com/upload2', //上传接口
					header: {
						'Authorization': uni.getStorageSync('tokenHead')
					},
					filePath: tempFilePaths[0],
			
					name: 'file',
					success: (uploadFileRes) => {
						// uni.hideLoading();
					
					const back = JSON.parse(uploadFileRes.data);
						console.log(back,'ddd')
						if (back.code == 200) {
							this.addForm.task.url=back.data.url
							console.log('ddd',uploadFileRes.data.url)
						} else {
							uni.showToast({
								title: back.message, // 提示文字
								duration: 3000, // 显示时长
								mask: true, // 是否显示透明蒙层，防止触摸穿透，默认：false
								icon: 'error' // 图标，支持"success"、"loading"  error
							})
							// uni.showToast(back.message)
						}
					},
					fail: () => {
						// uni.hideLoading();
						uni.showToast("图片上传失败，请联系开发！")
					},
					complete: function() {
						// uni.hideLoading();
					}
				});
			
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},
			
			// 上传成功
			success(e) {
				console.log('上传成功')
			},
			
			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			},
			
			setAdd(){
				this.addForm.task.hospitalId=uni.getStorageSync('hospitalId')
				console.log('999',this.addForm)
				if(this.showAddM==1){
					getModify(this.addForm).then(res=>{
						
					})
				}else{
				getAddT(this.addForm).then(res=>{
					console.log(res,'dddd')
					// if(res.code!=200){
					// 	console.log(res)
					// 	uni.showToast({
					// 		title: res.message, // 提示文字
					// 		duration: 3000, // 显示时长
					// 		mask: true, // 是否显示透明蒙层，防止触摸穿透，默认：false
					// 		icon: 'error' // 图标，支持"success"、"loading"  error
					// 	})
					// }else{
						
					// }
				})	
				}

			},
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