<template>
		<div v-if="detailMessageFrom=='true'">
				<img class="sys_logo" src="@/static/yglogo.png" style="width: 60%;">
		<view >
			<img class="sys_logo" src="@/static/recruitbackground.jpg" style="width: 100%;height: 15%;">
		</view>
		<!--喇叭-->
		<view>
			<uni-notice-bar showIcon="true" scrollable="true" background-color="#fff" color="red"  single="true"  :text="notice"></uni-notice-bar>
		</view>	
		  <el-tabs >
		    <el-tab-pane label="公司简介" >

					    <div style="text-indent: 7.5%;font-size: 13px;color: #303133;line-height: 1.769230769230769;">{{introduce1}}</div>
						<el-button v-if="showIntroduce == false" type="text" style="height: 5px;margin-top: ;" @click ="showIntroduce = true">展开</el-button>
					    <div v-if="showIntroduce == true" style="text-indent: 7.5%;font-size: 13px;color: #303133;line-height: 1.769230769230769;">{{introduce2}} </div>
						<div v-if="showIntroduce == true" style="text-indent: 7.5%;font-size: 13px;color: #303133;line-height: 1.769230769230769;">{{introduce4}} </div>
						<div v-if="showIntroduce == true" style="text-indent: 7.5%;font-size: 13px;color: #303133;line-height: 1.769230769230769;">{{introduce3}} </div>
						<el-button v-if="showIntroduce == true" type="text" style="height: 5px;margin-top: ;" @click ="showIntroduce = false">收起</el-button>
			</el-tab-pane>
			
		    <el-tab-pane label="招聘岗位" >
				<el-row  v-for="(item, index) in this.postList " :key="item.id"  :data="postList">
							<el-card  class="box-card " style="width: 100%; height: 10%; margin-top: 3%;"  @click.native= "toCruitDetialMessage(item.id)">
							<el-button type="text"  style="float:right; width: 11%;height: 10%;" @click="toCruitDetialMessage(item.id)"><i class="el-icon-right"></i></el-button>
							<h4 style="margin-top: 2%;">
								<i class="el-icon-collection-tag" >{{item.name}}</i>
								<i style="float:right;text-align:center;font-size: medium;margin-
								-+right: 10%;margin-top: 1%;">{{item.salary}}</i>
								
								
							</h4>
										<div style="margin-top: 4%;"></div>
								<i class="el-icon-map-location" style="float: left;">湖北省黄石市 	</i> 
								<i class="el-icon-reading" style="float:right;margin-left: 2%;">{{item.education}}</i>	
								<i class="el-icon-s-custom" style="display: flex;justify-content: center;">招{{item.appNumber}}人 </i>
				
								</el-card>
						      </el-row>
				
			</el-tab-pane>
		  </el-tabs>


		
		 

	</div>

</template>
<script>
	import _lodash from 'lodash';
	import uniIndexedList from '@/components/uni-indexed-list/uni-indexed-list.vue';
	import stepsList from '@/components/steps-list/steps-list.vue';
	import comboxSearch from "@/components/cuihai-combox/cuihai-combox.vue"
	import uniSection from "@/components/cuihai-combox/uni-section.vue"
	import {
		buildTextData
	} from '../../common/indexed-list.js';
	export default {
		
		name: 'app',
		components: {
			uniIndexedList,
			stepsList,
			comboxSearch,
			uniSection
		},
		data() { 
			return {
			showIntroduce:false,
			introduce1:"大冶特殊钢有限公司(简称:大冶特钢)是中国近代“钢铁摇篮”，地处中国矿冶之都、先进制造业基地湖北省黄石市。隶属中信泰富特钢集团，是其沿海沿江产业链的战略布局中的重要一环。大冶特钢拥有特殊钢430万吨，钢材400万吨的产能。是中国品种规格最齐全的高品质棒材、高端中厚壁无缝钢管、高合金锻材三大特钢生产基地，工艺技术和装备具备世界先进水平。",
			introduce2:'主要产品有轴承钢、汽车用钢、能源用钢、工程机械用钢、航空航天用钢等。主要服务于航天航空、海洋、核电、风电、交通、火电、油气、工程机械、重燃、船舶、石化、汽车、高铁等关键领域。',
			introduce3:'从中国第一炉电渣钢到第一根极薄壁高温合金旋压管，从第一个飞机用高温合金涡轮盘，到第一根轧制的飞机大梁(毛坏)从中国第一颗人造地球卫星，到神舟系列飞船的上天，到“嫦娥”奔月，再到“天宫”“北斗”发射升空，大冶特钢均提供了关键部件的用钢。工程机械用无缝钢管已连续13年产销量全国第一、13年全球第一，石油工具及装备用中厚壁无缝钢管连续10年产销量全国第一，大口径厚壁高压锅炉用管连续5年产销量全国第一。',
			introduce4:'大冶特钢秉承“诚信、创新、融合、卓越”的理念，牢记为客户创造价值，为员工创造幸福，为股东创造效益，为社会创造财富的企业使命，致力于为客户提供多规格、多品种、高品质的特殊钢产品及整体服务方案，致力于"创建全球最具竞争力的特钢企业集团"。',
			background:"/static",
			isOpenIntroduce:'false',
			detailMessageFrom:'true',
			notice: '大冶特殊钢有限公司招聘火热进行中！欢迎各位加入！',
			postList:[],
			isOpenCountry:false,
			source:'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5qncZnuks7CkWCLDdXMfDNelyK614I2RF4XQzOXvZJM'
		}
		},
		mounted(){
		uni.request({
			method: 'GET',
			url: '/apis/recruit/getAllEmployMessage/' + this.source,
			success: (res) => { 
				if (res.data.code != 0) {
					uni.showToast({
						title: 'code:404!服务器资源未响应！',
						icon: 'error',
						duration: 2000
					});
				}
				if (res.data.msg == '0000') {
					uni.showToast({
						title: '请求不到资源',
						icon: 'error',
						duration: 2000
					});
				}else if (res.data.msg == '0001'){
					uni.showToast({
						title: '找不到资源',
						icon: 'error',
						duration: 2000
					});
				}else if (res.data.msg == '0002'){
					uni.showToast({
						title: '系统错误',
						icon: 'error',
						duration: 2000
					});
				}else{
					this.postList = res.data.data;
				}
			  },
			})
		},
		methods: {
		toCruitDetialMessage(id) {
		  this.$router.push({
			path:'./recruitdetailmessage',
			params:{
			  id: id,
			}
		  })
		},
		getResponsibilityContent(requirement){
			var responsibility = requirement.replaceAll('#','\r\n');
			return responsibility
		},
			  },
}
</script>

<style scoped>
	.el-card {
	min-width: 380px;
	margin-right: 20px;
	transition: all .5s;
	}
	.el-card:hover{
	margin-top: -5px;
	}
	@import '@/pages/index/index5.css';
</style>
