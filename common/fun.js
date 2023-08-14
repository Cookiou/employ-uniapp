//h5 要调用的js文件
// #ifdef H5
import amap from '../static/maps.js';
// #endif

//获取位置信息
export function getlocation() {
	return new Promise((resolve, reject) => {
		//h5开始
		// #ifdef H5
		AMap.plugin('AMap.Geolocation', function() {
			uni.showLoading({
				title: '系统正在定位'
			});
			var geolocation = new AMap.Geolocation({
				enableHighAccuracy: true, //是否使用高精度定位，默认:true
				timeout: 10000, //超过10秒后停止定位，默认：5s
				buttonPosition: 'RB', //定位按钮的停靠位置
				buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
				zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点

			});
			geolocation.getCurrentPosition(function(status, result) {
				if (status == 'complete') {
					//这个地方的result，可能会出现报错：获得地理定位时间。得到ipLocation成功。获取地址失败，请检查您的密钥或网络。
					//可能是密匙申请错了，重新申请密匙，生成maps.js文件。
					console.log(result)
					uni.hideLoading();
					resolve(result)
				} else {
					uni.hideLoading();
					uni.showToast({
						title: '定位失败',
					});
					reject(result)
				}
			});
		});
		// #endif
		//h5结束
	})
}
