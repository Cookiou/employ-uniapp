/**
 * 通用js方法封装处理
 * Copyright (c) 2019 aidex
 */

//获取数据字典数据-只封装值
export function dictData(dictType) {
	let arr = [];
	uni.request({
		method: 'GET',
		url: '/apis/jkdk/jkdkInfo/type/' + dictType,
		success: (res) => {
			if (res.data.code == 0) {
				for (let i = 0; i < res.data.data.length; i++) {
					arr.push(res.data.data[i].dictValue)
				}
				return arr;
			}
		},
	});
}
//获取数据字典数据-封装键值
export function dictData1(dictType) {
	let arr = [];
	uni.request({
		method: 'GET',
		url: '/apis/jkdk/jkdkInfo/type/' + dictType,
		success: (res) => {
			if (res.data.code == 0) {
				for (let i = 0; i < res.data.data.length; i++) {
					arr.push({
						value: res.rows[i].dictValue,
						label: res.rows[i].dictLabel,
					})
				}
				return arr;
			}
		},
	});
}

