function InCodetoStd(code, list) {
	var res = "";
	var rawData = [];
	var rcode = [];
	var tmp = [];
	if ((typeof(list) != 'undefined') && (list != null)) {
		rawData = list.split("\n");
		for (var i = 0; i < rawData.length; i++) {
			if (rawData[i].length > 5) {
				tmp = rawData[i].split(",");
				rcode.push(tmp[1]);
			}

		}
		var incode = code.substr(0, 2);
		var rowcode;
		incode = incode.replace("2", "");
		incode = incode.replace("1", "");
		incode = incode.toLowerCase();
		for (var i = 0; i < rcode.length; i++) {
			if (rcode[i].length > 3) {
				rowcode = rcode[i].substr(0, 2);
				rowcode = rowcode.replace("2", "");
				rowcode = rowcode.replace("1", "");
				rowcode = rowcode.toLowerCase();
				if (incode == rowcode) {
					res = rcode[i];
					break;
				}
			}
		}
	}


	return res;

}
//-----------------------------------------------------------------------------
function CodetoName_Ind(code) {
	var nam;
	nam = "2";
	if (code.length > 2) {
		code = code.substr(0, 2);
	}
	code = code.replace("2", "");
	code = code.replace("1", "");
	//alert(code);
	if (typeof(code) == 'undefined') {
		nam = code;
	} else {
		if (code == "ag") {
			nam = "沪银";
		} else if (code == "al") {
			nam = "沪铝";
		} else if (code == "au") {
			nam = "沪金";
		} else if (code == "bu") {
			nam = "沥青";
		} else if (code == "cu") {
			nam = "沪铜";
		} else if (code == "ni") {
			nam = "沪镍";
		} else if (code == "rb") {
			nam = "螺纹";
		} else if (code == "ru") {
			nam = "橡胶";
		} else if (code == "zn") {
			nam = "沪锌";
		} else if (code == "hc") {
			nam = "热卷";
		} else if (code == "CF") {
			nam = "棉花";
		} else if (code == "FG") {
			nam = "玻璃";
		} else if (code == "MA") {
			nam = "甲醇";
		} else if (code == "RM") {
			nam = "菜粕";
		} else if (code == "SR") {
			nam = "白糖";
		} else if (code == "TA") {
			nam = "PTA";
		} else if (code == "a") {
			nam = "大豆";
		} else if (code == "c") {
			nam = "玉米";
		} else if (code == "cs") {
			nam = "淀粉";
		} else if (code == "i") {
			nam = "铁矿";
		} else if (code == "jd") {
			nam = "鸡蛋";
		} else if (code == "l") {
			nam = "塑料";
		} else if (code == "m") {
			nam = "豆粕";
		} else if (code == "p") {
			nam = "棕榈";
		} else if (code == "pp") {
			nam = "PP";
		} else if (code == "y") {
			nam = "豆油";
		} else if (code == "j") {
			nam = "焦炭";
		} else if (code == "jm") {
			nam = "焦煤";
		} else if (code == "ZC") {
			nam = "郑煤";
		} else if (code == "OI") {
			nam = "郑油";
		} else if (code == "v") {
			nam = "pvc";
		} else if (code == "SM") {
			nam = "锰硅";
		} else if (code == "AP") {
			nam = "苹果";
		} else if (code == "fu") {
			nam = "燃油";
		} else if (code == "sc") {
			nam = "原油";
		} else if (code == "CJ") {
			nam = "红枣";
		} else if (code == "eg") {
			nam = "乙二醇";
		} else if (code == "sp") {
			nam = "纸浆";
		} else if (code == "pg") {
			nam = "液化气";
		} else if (code == "SA") {
			nam = "纯碱";
		} else if (code == "eb") {
			nam = "苯乙烯";
		} else if (code == "lh") {
			nam = "生猪";
		} else if (code == "UR") {
			nam = "尿素";
		} else if (code == "PF") {
			nam = "短纤";
		} else if (code == "PK") {
			nam = "花生";
		} else if (code == "SF") {
			nam = "硅铁";
		} else if (code == "sn") {
			nam = "沪锡";
		} else if (code == "pb") {
			nam = "沪铅";
		} else if (code == "ss") {
			nam = "不锈钢";
		} else if (code == "ao") {
			nam = "氧化铝";
		}else if (code == "br") {
			nam = "合成胶";
		} else if (code == "PX") {
			nam = "对二甲";
		}  else if (code == "SH") {
			nam = "烧碱";
		}  else if (code == "bc") {
			nam = "国际铜";
		}  else if (code == "ec") {
			nam = "欧线运";
		}  else if (code == "lu") {
			nam = "低硫燃";
		}  else if (code == "nr") {
			nam = "20号胶";
		}   

	}
	return nam;
}
//-----------------------------------------------------------------------------
function CodetoNF_Ind(code) {
	var nam;
	nam = "";

	//alert(code);
	if (typeof(code) == 'undefined') {
		nam = code;
	} else {
		for (var i = 0; i < code.length; i++) {
			if ((code.substr(i, 1) >= 0) && (code.substr(i, 1) <= 9)) {
				nam = nam + code.substr(i, 1);
			}
		}

	}
	return nam;
}
//-----------------------------------------------------------------------------
function Format_J(code) {
	var find;
	find = 2;
	if (code.length > 2) {
		code = code.substr(0, 2);
	}
	code = code.replace("2", "");
	code = code.replace("1", "");
	//alert(code);
	if (typeof(code) == 'undefined') {
		find = 2;
	} else {
		if (code == "ag") {
			find = 0;
		} else if (code == "al") {
			find = 0;
		} else if (code == "au") {
			find = 2;
		} else if (code == "bu") {
			find = 0;
		} else if (code == "cu") {
			find = 0;
		} else if (code == "ni") {
			find = 0;
		} else if (code == "rb") {
			find = 0;
		} else if (code == "ru") {
			find = 0;
		} else if (code == "zn") {
			find = 0;
		} else if (code == "hc") {
			find = 0;
		} else if (code == "CF") {
			find = 0;
		} else if (code == "FG") {
			find = 0;
		} else if (code == "MA") {
			find = 0;
		} else if (code == "RM") {
			find = 0;
		} else if (code == "SR") {
			find = 0;
		} else if (code == "TA") {
			find = 0;
		} else if (code == "a") {
			find = 0;
		} else if (code == "c") {
			find = 0;
		} else if (code == "cs") {
			find = 0;
		} else if (code == "i") {
			find = 1;
		} else if (code == "jd") {
			find = 0;
		} else if (code == "l") {
			find = 0;
		} else if (code == "m") {
			find = 0;
		} else if (code == "p") {
			find = 0;
		} else if (code == "pp") {
			find = 0;
		} else if (code == "y") {
			find = 0;
		} else if (code == "j") {
			find = 1;
		} else if (code == "jm") {
			find = 1;
		} else if (code == "ZC") {
			find = 0;
		} else if (code == "OI") {
			find = 0;
		} else if (code == "v") {
			find = 0;
		} else if (code == "SM") {
			find = 0;
		} else if (code == "AP") {
			find = 0;
		} else if (code == "fu") {
			find = 0;
		} else if (code == "sc") {
			find = 1;
		} else if (code == "CJ") {
			find = 0;
		} else if (code == "eg") {
			find = 0;
		} else if (code == "sp") {
			find = 0;
		} else if (code == "pg") {
			find = 0;
		} else if (code == "SA") {
			find = 0;
		} else if (code == "eb") {
			find = 0;
		} else if (code == "lh") {
			find = 0;
		} else if (code == "UR") {
			find = 0;
		} else if (code == "PF") {
			find = 0;
		} else if (code == "PK") {
			find = 0;
		} else if (code == "SF") {
			find = 0;
		} else if (code == "sn") {
			find = 0;
		} else if (code == "pb") {
			find = 0;
		} else if (code == "ss") {
			find = 0;
		} else if (code == "ao") {
			find = 0;
		}else if (code == "br") {
			find = 0;
		} else if (code == "PX") {
			find = 0;
		}  else if (code == "SH") {
			find = 0;
		}  else if (code == "bc") {
			find = 0;
		}  else if (code == "ec") {
			find = 1;
		}  else if (code == "lu") {
			find = 0;
		}  else if (code == "nr") {
			find = 0;
		}   

	}
	return find;
}
//-----------------------------------------------------------------------------
function ListCode_Ind(vcode, icode) {
	var res = -1;

	for (var i = 0; i < vcode.length; i++) {
		var codex = vcode[i].substr(0, 2);
		codex = codex.replace("2", "");
		icode = icode.replace("2", "");
		if (codex == icode) {
			res = i;
			break;
		}
	}

	return res;
}
//-----------------------------------------------------------------------------
function calculate_Min(data) {
	var res = 1000000;
	if (data.length > 0) {
		for (var i = 0; i < data.length; i++) {
			if (parseFloat(data[i]) < res)
				res = parseFloat(data[i]);
		}

	}

	return res;
}

//--------------------------------------------------------------------------
function calculate_Max(data) {
	var res = -1000000;
	if (data.length > 0) {
		for (var i = 0; i < data.length; i++) {
			if (parseFloat(data[i]) > res)
				res = parseFloat(data[i]);
		}

	}

	return res;
}

//--------------------------------------------------------------------------
function calculate_Max_3(data1, data2, data3) {
	var res = -1000000;
	if (data1.length > 0) {
		for (var i = 0; i < data1.length; i++) {
			if (parseFloat(data1[i]) > res)
				res = parseFloat(data1[i]);
		}

		for (var i = 0; i < data2.length; i++) {
			if (parseFloat(data2[i]) > res)
				res = parseFloat(data2[i]);
		}


		for (var i = 0; i < data3.length; i++) {
			if (parseFloat(data3[i]) > res)
				res = parseFloat(data3[i]);
		}


	}

	return res;
}

//--------------------------------------------------------------------------
function calculate_Min_3(data1, data2, data3) {
	var res = 1000000;
	if (data1.length > 0) {
		for (var i = 0; i < data1.length; i++) {
			if (parseFloat(data1[i]) < res)
				res = parseFloat(data1[i]);
		}

		for (var i = 0; i < data2.length; i++) {
			if (parseFloat(data2[i]) < res)
				res = parseFloat(data2[i]);
		}


		for (var i = 0; i < data3.length; i++) {
			if (parseFloat(data3[i]) < res)
				res = parseFloat(data3[i]);
		}


	}

	return res;
}



//-----------------------------------------------------------------------------
function Codeto_Name(code) {
	var nam;
	nam = "2";
	if (code.length > 2) {
		code = code.substr(0, 2);
	}
	code = code.replace("2", "");
	code = code.replace("1", "");
	//alert(code);
	if (typeof(code) == 'undefined') {
		nam = code;
	} else {
		if (code == "ag") {
			nam = "沪银";
		} else if (code == "al") {
			nam = "沪铝";
		} else if (code == "au") {
			nam = "沪金";
		} else if (code == "bu") {
			nam = "沥青";
		} else if (code == "cu") {
			nam = "沪铜";
		} else if (code == "ni") {
			nam = "沪镍";
		} else if (code == "rb") {
			nam = "螺纹";
		} else if (code == "ru") {
			nam = "橡胶";
		} else if (code == "zn") {
			nam = "沪锌";
		} else if (code == "hc") {
			nam = "热卷";
		} else if (code == "CF") {
			nam = "棉花";
		} else if (code == "FG") {
			nam = "玻璃";
		} else if (code == "MA") {
			nam = "甲醇";
		} else if (code == "RM") {
			nam = "菜粕";
		} else if (code == "SR") {
			nam = "白糖";
		} else if (code == "TA") {
			nam = "PTA";
		} else if (code == "a") {
			nam = "大豆";
		} else if (code == "c") {
			nam = "玉米";
		} else if (code == "cs") {
			nam = "淀粉";
		} else if (code == "i") {
			nam = "铁矿";
		} else if (code == "jd") {
			nam = "鸡蛋";
		} else if (code == "l") {
			nam = "塑料";
		} else if (code == "m") {
			nam = "豆粕";
		} else if (code == "p") {
			nam = "棕榈";
		} else if (code == "pp") {
			nam = "PP";
		} else if (code == "y") {
			nam = "豆油";
		} else if (code == "j") {
			nam = "焦炭";
		} else if (code == "jm") {
			nam = "焦煤";
		} else if (code == "ZC") {
			nam = "郑煤";
		} else if (code == "OI") {
			nam = "郑油";
		} else if (code == "v") {
			nam = "pvc";
		} else if (code == "SM") {
			nam = "锰硅";
		} else if (code == "AP") {
			nam = "苹果";
		} else if (code == "fu") {
			nam = "燃油";
		} else if (code == "sc") {
			nam = "原油";
		} else if (code == "CJ") {
			nam = "红枣";
		} else if (code == "eg") {
			nam = "乙二醇";
		} else if (code == "sp") {
			nam = "纸浆";
		} else if (code == "pg") {
			nam = "液化气";
		} else if (code == "SA") {
			nam = "纯碱";
		} else if (code == "eb") {
			nam = "苯乙烯";
		} else if (code == "lh") {
			nam = "生猪";
		} else if (code == "UR") {
			nam = "尿素";
		} else if (code == "PF") {
			nam = "短纤";
		} else if (code == "PK") {
			nam = "花生";
		} else if (code == "SF") {
			nam = "硅铁";
		} else if (code == "sn") {
			nam = "沪锡";
		} else if (code == "pb") {
			nam = "沪铅";
		} else if (code == "ss") {
			nam = "不锈钢";
		} else if (code == "ao") {
			nam = "氧化铝";
		}else if (code == "br") {
			nam = "合成胶";
		} else if (code == "PX") {
			nam = "对二甲";
		}  else if (code == "SH") {
			nam = "烧碱";
		}  else if (code == "bc") {
			nam = "国际铜";
		}  else if (code == "ec") {
			nam = "欧线运";
		}  else if (code == "lu") {
			nam = "低硫燃";
		}  else if (code == "nr") {
			nam = "20号胶";
		}   

	}
	return nam;
}


//-----------------------------------------------------------------------------
function Codeto_FullName(code2) {
	var nam;
	nam = "2";
	var code;
	code = code2;
	if (code.length > 2) {
		code = code.substr(0, 2);
	}
	code = code.replace("2", "");
	code = code.replace("1", "");

	var dat;
	dat = code2.replace(code, "");
	//alert(code);
	if (typeof(code) == 'undefined') {
		nam = code;
	} else {
		if (code == "ag") {
			nam = "沪银";
		} else if (code == "al") {
			nam = "沪铝";
		} else if (code == "au") {
			nam = "沪金";
		} else if (code == "bu") {
			nam = "沥青";
		} else if (code == "cu") {
			nam = "沪铜";
		} else if (code == "ni") {
			nam = "沪镍";
		} else if (code == "rb") {
			nam = "螺纹";
		} else if (code == "ru") {
			nam = "橡胶";
		} else if (code == "zn") {
			nam = "沪锌";
		} else if (code == "hc") {
			nam = "热卷";
		} else if (code == "CF") {
			nam = "棉花";
		} else if (code == "FG") {
			nam = "玻璃";
		} else if (code == "MA") {
			nam = "甲醇";
		} else if (code == "RM") {
			nam = "菜粕";
		} else if (code == "SR") {
			nam = "白糖";
		} else if (code == "TA") {
			nam = "PTA";
		} else if (code == "a") {
			nam = "大豆";
		} else if (code == "c") {
			nam = "玉米";
		} else if (code == "cs") {
			nam = "淀粉";
		} else if (code == "i") {
			nam = "铁矿";
		} else if (code == "jd") {
			nam = "鸡蛋";
		} else if (code == "l") {
			nam = "塑料";
		} else if (code == "m") {
			nam = "豆粕";
		} else if (code == "p") {
			nam = "棕榈";
		} else if (code == "pp") {
			nam = "PP";
		} else if (code == "y") {
			nam = "豆油";
		} else if (code == "j") {
			nam = "焦炭";
		} else if (code == "jm") {
			nam = "焦煤";
		} else if (code == "ZC") {
			nam = "郑煤";
		} else if (code == "OI") {
			nam = "郑油";
		} else if (code == "v") {
			nam = "pvc";
		} else if (code == "SM") {
			nam = "锰硅";
		} else if (code == "AP") {
			nam = "苹果";
		} else if (code == "fu") {
			nam = "燃油";
		} else if (code == "sc") {
			nam = "原油";
		} else if (code == "CJ") {
			nam = "红枣";
		} else if (code == "eg") {
			nam = "乙二醇";
		} else if (code == "sp") {
			nam = "纸浆";
		} else if (code == "pg") {
			nam = "液化气";
		} else if (code == "SA") {
			nam = "纯碱";
		} else if (code == "eb") {
			nam = "苯乙烯";
		} else if (code == "lh") {
			nam = "生猪";
		} else if (code == "UR") {
			nam = "尿素";
		} else if (code == "PF") {
			nam = "短纤";
		} else if (code == "PK") {
			nam = "花生";
		} else if (code == "SF") {
			nam = "硅铁";
		} else if (code == "sn") {
			nam = "沪锡";
		} else if (code == "pb") {
			nam = "沪铅";
		} else if (code == "ss") {
			nam = "不锈钢";
		} else if (code == "ao") {
			nam = "氧化铝";
		}else if (code == "br") {
			nam = "合成胶";
		} else if (code == "PX") {
			nam = "对二甲";
		}  else if (code == "SH") {
			nam = "烧碱";
		}  else if (code == "bc") {
			nam = "国际铜";
		}  else if (code == "ec") {
			nam = "欧线运";
		}  else if (code == "lu") {
			nam = "低硫燃";
		}  else if (code == "nr") {
			nam = "20号胶";
		}   

	}
	nam = nam + dat;
	return nam;
}


//-----------------------------------------------------------------------------

function Codeto_Dat(code2) {

	var code;
	code = code2;
	if (code.length > 2) {
		code = code.substr(0, 2);
	}
	code = code.replace("2", "");
	code = code.replace("1", "");

	var dat;
	dat = code2.replace(code, "");

	return dat;
}

//-----------------------------------------------------------------------------
function PerVal(code2) {

	var code;
	var res;
	code = code2;
	if (code.length > 2) {
		code = code.substr(0, 2);
	}
	code = code.replace("2", "");
	code = code.replace("1", "");

	if (typeof(code) == 'undefined') {
		res = 10;
	} else {
		if (code == "ag") {
			res = 15;
		} else if (code == "al") {
			res = 5;
		} else if (code == "au") {
			res = 1000;
		} else if (code == "bu") {
			res = 10;
		} else if (code == "cu") {
			res = 5;
		} else if (code == "ni") {
			res = 1;
		} else if (code == "rb") {
			res = 10;
		} else if (code == "ru") {
			res = 10;
		} else if (code == "zn") {
			res = 5;
		} else if (code == "hc") {
			res = 10;
		} else if (code == "CF") {
			res = 5;
		} else if (code == "FG") {
			res = 20;
		} else if (code == "MA") {
			res = 10;
		} else if (code == "RM") {
			res = 10;
		} else if (code == "SR") {
			res = 10;
		} else if (code == "TA") {
			res = 5;
		} else if (code == "a") {
			res = 10;
		} else if (code == "c") {
			res = 10;
		} else if (code == "cs") {
			res = 10;
		} else if (code == "i") {
			res = 100;
		} else if (code == "jd") {
			res = 10;
		} else if (code == "l") {
			res = 5;
		} else if (code == "m") {
			res = 10;
		} else if (code == "p") {
			res = 10;
		} else if (code == "pp") {
			res = 5;
		} else if (code == "y") {
			res = 10;
		} else if (code == "j") {
			res = 100;
		} else if (code == "jm") {
			res = 60;
		} else if (code == "ZC") {
			res = 100;
		} else if (code == "OI") {
			res = 10;
		} else if (code == "v") {
			res = 5;
		} else if (code == "SM") {
			res = 5;
		} else if (code == "AP") {
			res = 10;
		} else if (code == "fu") {
			res = 10;
		} else if (code == "sc") {
			res = 1000;
		} else if (code == "CJ") {
			res = 5;
		} else if (code == "eg") {
			res = 10;
		} else if (code == "sp") {
			res = 10;
		} else if (code == "pg") {
			res = 20;
		} else if (code == "SA") {
			res = 10;
		} else if (code == "eb") {
			res = 5;
		} else if (code == "lh") {
			res = 16;
		} else if (code == "UR") {
			res = 10;
		} else if (code == "PF") {
			res = 5;
		} else if (code == "PK") {
			res = 5;
		} else if (code == "SF") {
			res = 5;
		} else if (code == "sn") {
			res = 1;
		} else if (code == "pb") {
			res = 5;
		} else if (code == "ss") {
			res = 5;
		} else if (code == "ao") {
			res = 20;
		}else if (code == "br") {
			res = 5;
		} else if (code == "PX") {
			res = 5;
		}  else if (code == "SH") {
			res = 30;
		}  else if (code == "bc") {
			res = 5;
		}  else if (code == "ec") {
			res = 50;
		}  else if (code == "lu") {
			res = 10;
		}  else if (code == "nr") {
			res = 10;
		}    else {
			res = 10;
		}

	}

	return res;
}
//-----------------------------------------------------------------------------

var dateManager = {
	date: {},
	num: 0,
	start: function() {
		// 对象的方法中，如果调用了该对象的属性，就需要使用this
		this.num++;
		// dateManager.num++; 不要使用这种，有的时候会有冲突
		this.date["date_" + this.num] = new Date().getTime(); //第一次获取时间戳
		return "date_" + this.num
	},
	end: function(id) {
		var time = this.date[id]; //将第一次时间戳拿过来
		delete this.date[id];
		// this.num--; //运行完程序后保证dateManager.num=0,使用视情况而定
		return new Date().getTime() - time; //第二次获取时间戳，直接计算出间隔时间
	}
}

//-----------------------------------------------------------------------------

function JHCode_To_Code(jhcode, rawdata) {

	var fullcode = "";
	var nam = "";
	var codename = "";
	var namdat = "";
	if ((typeof(rawdata) != 'undefined') && (rawdata != null)) {
		if (jhcode.length > 2) {
			jhcode = jhcode.substr(0, 2);
		}
		jhcode = jhcode.replace("2", "");
		jhcode = jhcode.replace("1", "");


		var orgdata = rawdata.split("\n");

		//alert(orgdata.length);
		for (var i = 0; i < orgdata.length; i++) {
			var xline = orgdata[i].split(",");
			if (xline[1] != null) {
				if (xline[1].length > 1) {
					var tmpcode;
					tmpcode = xline[1].substr(0, 2);
					tmpcode = tmpcode.replace("2", "");
					tmpcode = tmpcode.replace("1", "");

					if (tmpcode == jhcode) {

						fullcode = xline[1].trim();
						nam = xline[2].trim();
						codename = nam + " " + fullcode;
						namdat = nam + fullcode.replace(jhcode, "");
						break;
					}


				}

			}

		}
	}


	return {
		fullcode: fullcode,
		nam: nam,
		codename: codename,
		namdat: namdat,

	};


}

//-----------------------------------------------------------------------------
function Add_ZX(nowlist, code) {
	var res = "";
	var is_con = false;
	//alert(code);

	if (code.length > 1) {
		code = code.substr(0, 2);
		code = code.replace("2", "");
		code = code.replace("1", "");
	}
	if (nowlist != null) {
		var orgdata = nowlist.split(",");
		for (var i = 0; i < orgdata.length; i++) {
			if (orgdata[i].length > 0) {
				if (orgdata[i].trim() == code.trim()) {
					is_con = true;
					break;
				}
			}

		}

	}



	if (!is_con) {
		//假如不存在 假如
		res = "," + nowlist + code + ",";
	} else {
		res = nowlist;
	}
	res = res.replace(/null/g, "");

	return {
		res: res,
		is_con: is_con,
	};

}
//-----------------------------------------------------------------------------
function Delete_ZX(nowlist, code) {
	var res;
	var is_con = false;
	//alert(code);

	if (code.length > 1) {
		code = code.substr(0, 2);
		code = code.replace("2", "");
		code = code.replace("1", "");
	}
	if (nowlist != null) {
		var orgdata = nowlist.split(",");
		for (var i = 0; i < orgdata.length; i++) {
			if (orgdata[i].length > 0) {
				if (orgdata[i].trim() == code.trim()) {
					is_con = true;
					break;
				}
			}

		}

	}

	if (is_con) {
		//假如不存在 假如
		res = nowlist.replace("," + code + ",", ",");
	} else {
		res = nowlist;
	}
	res = res.replace(/null/g, "");

	return {
		res: res,
		is_con: is_con,
	};

}
//-----------------------------------------------------------------------------
function Go_Next(listtext, code) {

	var res_code = "";
	var res_name = "";

	code = code + "2";
	if (code.length > 1) {
		code = code.substr(0, 2);
		code = code.replace("1", "2");
	}



	var orgdata = listtext.split("\n");
	var vcode = [];
	var vname = [];
	if (listtext.length > 100) {
		for (var i = 0; i < orgdata.length; i++) {
			var xline = orgdata[i].split(",");
			if (xline[1] != null) {
				vcode.push(xline[1]);
				vname.push(xline[2]);
			}

		}
	}

	//alert(vcode);
	var ipos = -1;
	for (var i = 0; i < vcode.length; i++) {
		if (vcode[i].substr(0, 2) == code) {
			ipos = i;
			break;
		}

	}


	if (ipos >= 0) {
		if (ipos < (vcode.length - 1)) {
			res_code = vcode[ipos + 1];
			res_name = vname[ipos + 1];
		} else {
			res_code = vcode[0];
			res_name = vname[0];
		}
	}

	return {
		res_code: res_code,
		res_name: res_name,
	};

}
//-----------------------------------------------------------------------------

function Go_Last(listtext, code) {

	var res_code = "";
	var res_name = "";

	code = code + "2";
	if (code.length > 1) {
		code = code.substr(0, 2);
		code = code.replace("1", "2");
	}



	var orgdata = listtext.split("\n");
	var vcode = [];
	var vname = [];
	if (listtext.length > 100) {
		for (var i = 0; i < orgdata.length; i++) {
			var xline = orgdata[i].split(",");
			if (xline[1] != null) {
				vcode.push(xline[1]);
				vname.push(xline[2]);
			}

		}
	}

	//alert(vcode);
	var ipos = -1;
	for (var i = 0; i < vcode.length; i++) {
		if (vcode[i].substr(0, 2) == code) {
			ipos = i;
			break;
		}

	}


	if (ipos >= 0) {
		if (ipos > 0) {
			res_code = vcode[ipos - 1];
			res_name = vname[ipos - 1];
		} else {
			res_code = vcode[vcode.length - 1];
			res_name = vname[vcode.length - 1];
		}
	}

	return {
		res_code: res_code,
		res_name: res_name,
	};

}
//-----------------------------------------------------------------------------

function compare_date2(dat1, dat2) {

	var res = false;
	// 格式化成月/日，只在第一个刻度显示年份
	var tdate1;
	var tdate2;
	if ((typeof(dat1) != "undefined") && (typeof(dat2) != "undefined")) {
		//alert(dat);
		if (mui.os.ios) {
			tdate1 = new Date(dat1.replace(/-/g, "/"));
			tdate2 = new Date(dat2.replace(/-/g, "/"));
		} else {
			tdate1 = new Date(dat1);
			tdate2 = new Date(dat2);
		}
	}
	if (tdate1 > tdate2) {
		res = true;
	} else {
		res = false;
	}

	return res;

}
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
