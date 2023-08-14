<script>
	export default {
		onLaunch: function() {
			//解决双标题栏问题
			  this.isWeChat();
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			isWeChat: function () {
			    let ua = window.navigator.userAgent.toLowerCase()
			    if (ua.match(/MicroMessenger/i) == 'micromessenger') {//判断微信
			      let style = document.createElement('style');
			      style.type = 'text/css';
			      style.innerHTML="uni-page-head,.uni-page-head{display:none;}";
			      document.getElementsByTagName('head').item(0).appendChild(style);
			    }
			  },
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import './common/uni.css';
	// @import "uview-ui/index.scss";
</style>
