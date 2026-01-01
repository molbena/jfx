/**
 * 演示程序当前的 “注册/登录” 等操作，是基于 “本地存储” 完成的
 * 当您要参考这个演示程序进行相关 app 的开发时，
 * 请注意将相关方法调整成 “基于服务端Service” 的实现。
 **/
(function ($, owner) {
	/**
	 * 用户登录
	 **/
	owner.login = function (loginInfo, callback) {
		callback = callback || $.noop;
		loginInfo = loginInfo || {};
		loginInfo.account = loginInfo.account || '';
		loginInfo.password = loginInfo.password || '';
		if (loginInfo.account.length < 11) {
			return callback('账号/手机号最短为 11 个字符');
		}
		if (loginInfo.password.length < 6) {
			return callback('密码最短为 6 个字符');
		}
		var users = JSON.parse(localStorage.getItem('$users') || '[]');
		var authed = users.some(function (user) {
			return loginInfo.account == user.account && loginInfo.password == user.password;
		});
		if (authed) {
			return owner.createState(loginInfo.account, callback);
		} else {
			return callback('用户名或密码错误');
		}
	};

	owner.createState = function (name, callback) {
		var state = owner.getState();
		state.account = name;
		state.token = "token123456789";
		owner.setState(state);
		return callback();
	};

	/**
	 * 新用户注册
	 **/
	owner.reg = function (regInfo, callback) {
		callback = callback || $.noop;
		regInfo = regInfo || {};
		regInfo.account = regInfo.account || '';
		regInfo.password = regInfo.password || '';
		if (regInfo.account.length < 11) {
			return callback('s手机号码需要 11 个字符');
		}
		if (regInfo.password.length < 6) {
			return callback('密码最短需要 6 个字符');
		}
		/* if (!checkEmail(regInfo.email)) {
		    return callback('邮箱地址不合法');
		} */
		//var users = JSON.parse(localStorage.getItem('$users') || '[]');
		var users = []; //用户名 密码 本地只保存一组，覆盖模式
		users.push(regInfo);
		localStorage.setItem('$users', JSON.stringify(users));
		return callback();
	};

	/**
	 * 获取当前状态
	 **/
	owner.getState = function () {
		var stateText = localStorage.getItem('$state') || "{}";
		return JSON.parse(stateText);
	};

	/**
	 * 设置当前状态
	 **/
	owner.setState = function (state) {
		state = state || {};
		localStorage.setItem('$state', JSON.stringify(state));
		//var settings = owner.getSettings();
		//settings.gestures = '';
		//owner.setSettings(settings);
	};

	var checkEmail = function (email) {
		email = email || '';
		return (email.length > 3 && email.indexOf('@') > -1);
	};

	/**
	 * 获取应用本地配置
	 **/
	owner.setSettings = function (settings) {
		settings = settings || {};
		localStorage.setItem('$settings', JSON.stringify(settings));
	}

	/**
	 * 设置应用本地配置
	 **/
	owner.getSettings = function () {
		var settingsText = localStorage.getItem('$settings') || "{}";
		return JSON.parse(settingsText);
	}

}(mui, window.app = {}));


function postData(url, data, callback, waitingDialog) {

	mui.ajax(url, {
		data: data,
		dataType: 'text',
		type: 'get',
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		timeout: 20000,
		success: callback,
		error: function (xhr, type, errorThrown) {
			waitingDialog.close();
			mui.alert("<网络连接失败，请重新尝试一下>", "错误", "OK", null);
		}
	});
}

function postData_GX(url, data, callback) {

	mui.ajax(url, {
		data: data,
		dataType: 'text',
		type: 'get',
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		timeout: 20000,
		success: callback,
		error: function (xhr, type, errorThrown) {

		}
	});
}

(function ($) {
	$.enterfocus = function (selector, callback) {
		var boxArray = [].slice.call(document.querySelectorAll(selector));
		for (var index in boxArray) {
			var box = boxArray[index];
			box.addEventListener('keyup', function (event) {
				if (event.keyCode == 13) {
					var boxIndex = boxArray.indexOf(this);
					if (boxIndex == boxArray.length - 1) {
						if (callback) callback();
					} else {
						//console.log(boxIndex);
						var nextBox = boxArray[++boxIndex];
						nextBox.focus();
					}
				}
			}, false);
		}
	};
}(window.mui = window.mui || {}));


function time_to_count(dat) {
	// 格式化成月/日，只在第一个刻度显示年份
	var texts;
	var hh, mm, ss,mon,dd, tdate, yy;
	//alert(dat);
	if (typeof (dat) != "undefined") {
		
		tdate = new Date(dat.replace(/-/g,"/"));
		//alert(dat);
		yy = tdate.getFullYear();
		mon=tdate.getMonth();
		dd=tdate.getDate();
		hh = tdate.getHours();
		mm = tdate.getMinutes();
		ss = tdate.getSeconds();
		 
		texts = (yy-2000)*3600*24*31  +  mon*3600*24*31  + dd*3600*24   +  hh*3600+ mm*60+ ss;
	} else {
		texts = 0;
	}
	return texts;
}
