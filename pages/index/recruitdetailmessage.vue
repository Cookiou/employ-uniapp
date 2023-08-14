<template>
	<view >
			<img class="sys_logo" src="@/static/ygphoto.jpg" style="width: 100%;height: 15%;">
	<el-card>
		<h3>{{name}} </h3>
		<el-divider></el-divider>
		<h4>
		<i>{{salary}}</i><i style="float: right;">实习期：{{internship}}个月</i>
		</h4>
		<p style="margin-top: 3%;">{{posttag}}</p>
		<p style="margin-top: 8%;"><p>联系人：{{contact}}</p><p> 联系方式：{{phone}}</p><p>投递邮箱：{{email}}</p><p>联系地址：{{address}}</p></p>
<!-- 		<p style="margin-top: 8%;">湖北省黄石市黄石大道XXXX号</p> -->
	</el-card>
	<view>
		<h4 style="text-indent: 7.5%;margin-top: 6%;">职位介绍</h4>
		<p style="text-indent: 7.5%;margin-top: 6%;font-size: medium;">岗位描述</p>
		<div style="margin-left: 4%;white-space: pre-wrap;font-size: 13px;color: #303133;line-height: 1.769230769230769;margin-top: 3%;">
			{{getContent(this.responsibility)}}
		</div>
<!-- 	<el-divider></el-divider> -->
		<p style="text-indent: 7.5%;margin-top: 6%;font-size: medium;">应聘条件</p>
		<div style="margin-left: 4%;white-space: pre-wrap;font-size: 13px;color: #303133;line-height: 1.769230769230769;margin-top: 3%;">
			{{getContent(this.requirement)}}
		</div>
			<el-divider></el-divider>
		<div style=" margin-top: 10%;">
			<el-divider></el-divider>
		</div>
		<el-divider style="margin-top: 50%;"></el-divider>
	</view>
	
	<view class="fot">
		
		 <el-button type="danger" style="width: 100%;" @click="toSubmitCruit(id)">投递简历</el-button>		
	</view> 
	</view>
</template>

<script>
	import _lodash from 'lodash';
	import uniIndexedList from '@/components/uni-indexed-list/uni-indexed-list.vue';
	import stepsList from '@/components/steps-list/steps-list.vue';
	import comboxSearch from "@/components/cuihai-combox/cuihai-combox.vue"
	import uniSection from "@/components/cuihai-combox/uni-section.vue"
	import AllAddress from '../../components/wangding-pickerAddress/address_level_5.js'
	import {
		buildTextData
	} from '../../common/indexed-list.js';
	export default {
	data(){
		return{
			id:'',
			contact:'',
			phone:'',
			email:'',
			address:'',
			baseData:[],
			postData:[],
			posttag:'',
			name:'',
			salary:'',
			responsibility:'',
			requirement:'',
			internship:'',
		}
	}
	,
	mounted(){
		this.id = this.$route.params.id;
		this.getBaseInfo();
		this.getPostMessageInfo(this.id);
	},
	methods:{
		getBaseInfo(){
			uni.request({
				method: 'GET',
				url: '/apis/recruit/getBaseInfo',
				success: (res) => { 
					if (res.data.code != 0) {
						uni.showToast({
							title: '登录失败，请联系管理员！',
							icon: 'error',
							duration: 2000
						});
					}else{
						this.baseData = res.data.data;
						this.contact = this.baseData.contact;
						this.email = this.baseData.email;
						this.phone = this.baseData.phone;
						this.address = this.baseData.address;
					}
				  },
				})
		},
		getPostMessageInfo(id){
			uni.request({
				method: 'GET',
				url: '/apis/recruit/getEmployPost/' + id,
				success: (res) => { 
					if (res.data.code != 0) {
						uni.showToast({
							title: '登录失败，请联系管理员！',
							icon: 'error',
							duration: 2000
						});
					}
					else if (res.data.msg == '0003') {
						uni.showToast({
							title: '请求不到资源',
							icon: 'error',
							duration: 2000
						});
					}
					else{
						this.postData = res.data.data;
						this.name = this.postData.name;
						this.posttag = this.postData.posttag;
						this.salary = this.postData.salary;
						this.responsibility = this.postData.responsibility;
						this.requirement = this.postData.requirement;
						this.internship = this.postData.internship;
					}
				  },
				})
		},
		getContent(textcontent){
			var textcontentnew = textcontent.replaceAll('#','\r\n');
			return textcontentnew
		},
		toCruitDetialMessage(id) {
		  this.$router.push({
			path:'./submitrecruit',
			params:{
			  id: this.id,
			  
			}
		  })
		},	
		toSubmitCruit(id) {
			  this.$router.push({
				path:'./submitrecruit',
				params:{
				  id: id
				}
			  })
			},
	}
}
</script>

<style>
	.el-card {
	min-width: 380px;
	margin-right: 20px;
	transition: all .5s;
	}
	.el-card:hover{
	margin-top: -5px;
	}
	.fot{
	  position: fixed;
	  bottom: 0;
	  width: 100%;
	  line-height: var(--footer-height);
	  color: #fff;
	}
	@import '@/pages/index/index5.css';
</style>