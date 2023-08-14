<template>
	<view>
		<view class="steps_box">
			<view :class="addressindex > index ? 'steps_list steps_list_acitve' : 'steps_list'" v-for="(item, index) in datalist" :key="index" v-if="addressindex >= index">
				<span @click="check_site(index)">{{ item }}</span>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'stepsList',
	data() {
		return {};
	},
	props: {
		datalist: {},
		addressindex: {}
	},
	methods: {
		check_site(n) {
			this.$emit('click', n);
		}
	}
};
</script>

<style>
.steps_box {
	width: 100%;
	padding: 30upx;
	box-sizing: border-box;
}
.steps_list {
	position: relative;
	padding: 0 30px;
	height: 40px;
	border-left: 2px solid #ccc;
}
.steps_list_acitve {
	border-left: 2px solid #54be2b !important;
}
.steps_list_acitve :after {
	background: #54be2b !important;
}
.steps_list :after {
	content: '';
	display: block;
	position: absolute;
	margin-left: -6px;
	top: 0;
	left: -2px;
	width: 14px;
	height: 14px;
	line-height: 22px;
	text-align: center;
	background: #ccc;
	color: #fff;
	font-size: 14px;
	border-radius: 50%;
}
</style>
