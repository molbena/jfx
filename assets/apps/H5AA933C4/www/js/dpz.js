function splitData_BJ(rawData) {
	var rcode = []; //代码
	var rnew = []; //最新价
	var rzf = []; //涨幅
	var rzd = []; //涨跌
	var rcjl = []; //成交量
	var rccl = []; //持仓量
	var rzjs = []; //昨结算
	var rzhenfu = []; //	振幅
	var xline;
	rawData = rawData.split("\n");

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[1])) {

			rcode.push(xline[0]);
			rnew.push(xline[1]);
			rzf.push(xline[2]);
			rzd.push(xline[3]);
			rcjl.push(xline[4]);
			rccl.push(xline[5]);
			rzjs.push(xline[6]);
			rzhenfu.push(xline[7]);


		}
	}

	return {
		rcode: rcode,
		rnew: rnew,
		rzf: rzf,
		rzd: rzd,
		rcjl: rcjl,
		rccl: rccl,
		rzjs: rzjs,
		rzhenfu: rzhenfu
	};
}

//-----------------------------------------------------------------------------
function splitData_ZJTJ(rawData) {
	var rcode = []; //代码
	var rnew = []; //最新价
	var rzf = []; //涨幅
	var rzhenfu = []; //	振幅

	var rtdh1 = []; //
	var rtdh2 = []; //
	var rtdh3 = []; //

	var rdh1 = []; //
	var rdh2 = []; //
	var rdh3 = []; //

	var rsh1 = []; //
	var rsh2 = []; //
	var rsh3 = []; //

	var xline;
	rawData = rawData.split("\n");

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[7])) {

			rcode.push(xline[1]);
			rnew.push(parseFloat(xline[3]));
			rzf.push(parseFloat(xline[2]));
			rzhenfu.push(parseFloat(xline[4]));


			rtdh1.push(parseFloat(xline[5]));
			rtdh2.push(parseFloat(xline[6]));
			rtdh3.push(parseFloat(xline[7]));
			rdh1.push(parseFloat(xline[8]));
			rdh2.push(parseFloat(xline[9]));
			rdh3.push(parseFloat(xline[10]));
			rsh1.push(parseFloat(xline[11]));
			rsh2.push(parseFloat(xline[12]));
			rsh3.push(parseFloat(xline[13]));


		}
	}

	return {
		rcode: rcode,
		rnew: rnew,
		rzf: rzf,
		rzhenfu: rzhenfu,

		rtdh1: rtdh1,
		rtdh2: rtdh2,
		rtdh3: rtdh3,
		rdh1: rdh1,
		rdh2: rdh2,
		rdh3: rdh3,
		rsh1: rsh1,
		rsh2: rsh2,
		rsh3: rsh3

	};
}

//-----------------------------------------------------------------------------
function BubSort_ZJ(rawData, itit, lx) {
	// itit -  
	var xline;
	var xcode = [];
	var xnew = [];
	var res = []; //序号
	var raw = [];

	var len = 0; //长度
	var isj;

	if (itit == "rnew") {
		isj = 3;
	} else if (itit == "rzf") {
		isj = 2;
	} else if (itit == "rzhenfu") {
		isj = 4;
	} else if (itit == "rtdh1") {
		isj = 5;
	} else if (itit == "rtdh2") {
		isj = 6;
	} else if (itit == "rtdh3") {
		isj = 7;
	} else if (itit == "rdh1") {
		isj = 8;
	} else if (itit == "rdh2") {
		isj = 9;
	} else if (itit == "rdh3") {
		isj = 10;
	} else if (itit == "rsh1") {
		isj = 11;
	} else if (itit == "rsh2") {
		isj = 12;
	} else if (itit == "rsh3") {
		isj = 13;
	} else if (itit == "") {
		isj = 3;
	}

	rawData = rawData.split("\n");

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (xline[7] != null) {

			xcode.push(xline[1]);
			xnew.push(parseFloat(xline[isj]).toFixed(2));
			//xzf.push(parseFloat(xline[2]));
			len++;

		}
	}

	//const len = rawData.length;

	for (var i = 0; i < len; i++) {
		raw.push(parseFloat(xnew[i]));

	}

	var org = xnew.sort(function(x, y) {
		if (lx == "ASC") {
			return x - y;
		} else if (lx == "DESC") {
			return y - x;
		} else {
			return x - y;
		}

	});


	for (var i = 0; i < len; i++) {
		for (var j = 0; j < len; j++) {
			if (raw[i] == org[j]) {
				res[i] = j;
				org[j] = -1;
				break;
			}
		}
	}
	//console.log(raw); 
	//console.log(org); 
	// console.log(res);

	return res;

}

//-----------------------------------------------------------------------------
function BubSort_BJ(rawData, itit, lx) {
	// itit -  
	var xline;
	var xcode = [];
	var xnew = [];
	var res = []; //序号
	var raw = [];

	var len = 0; //长度

	var isj;

	if (itit == "rnew") {
		isj = 1;
	} else if (itit == "rzf") {
		isj = 2;
	} else if (itit == "rzd") {
		isj = 3;
	} else if (itit == "rcjl") {
		isj = 4;
	} else if (itit == "rccl") {
		isj = 5;
	} else if (itit == "rzjs") {
		isj = 6;
	} else if (itit == "rzhenfu") {
		isj = 7;
	} else if (itit == "") {
		isj = 1;
	}


	rawData = rawData.split("\n");

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (xline[7] != null) {

			xcode.push(xline[1]);
			xnew.push(parseFloat(xline[isj]).toFixed(2));
			len++;

		}
	}

	//const len = rawData.length;

	for (var i = 0; i < len; i++) {
		raw.push(parseFloat(xnew[i]));

	}

	var org = xnew.sort(function(x, y) {
		if (lx == "ASC") {
			return x - y;
		} else if (lx == "DESC") {
			return y - x;
		} else {
			return x - y;
		}

	});


	for (var i = 0; i < len; i++) {
		for (var j = 0; j < len; j++) {
			if (raw[i] == org[j]) {
				res[i] = j;
				org[j] = -1;
				break;
			}
		}
	}
	//console.log(raw); 
	//console.log(org); 
	// console.log(res);

	return res;

}

//-----------------------------------------------------------------------------
//区分资金线		
function splitData_ZLT(rawData) {
	var categoryData = [];
	var spj = [];
	var bbd = [];
	var zijin_td = [];
	var zijin_d = [];
	var zijin_s = [];
	var zijin_j = [];
	var zijin_dd = [];
	var zijin_ddf = [];
	var xh = [];

	var sspj = [];
	var sbbd = [];
	var szijin_td = [];
	var szijin_d = [];
	var szijin_s = [];
	var szijin_j = [];

	var szijin_dd = [];
	var szijin_ddf = [];
	var dd_color = [];

	rawData = rawData.split("\n");
	//alert(rawData.length);
	var xline;
	var temp1 = []; //特大户
	var temp2 = []; //大户
	var temp3 = []; //散户
	var temp4 = [];
	var ema = [];

	var sta = 0;
	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[1])) {
			var leftxt;
			leftxt = xline[0].substr(6, 4);
			if (((leftxt >= "0900") && (leftxt <= "0920")) || ((leftxt >= "2100") && (leftxt <= "2120"))) {
				sta = i;
				break;
			}
		}
	}
	var ip = 0;

	for (var i = sta; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[1])) {
			var tim;
			tim = xline[0];
			tim = tim.substr(6, 2) + ":" + tim.substr(8, 2);
			categoryData.push(tim);

			spj.push(parseFloat(xline[1]));



			temp1.push(parseFloat(xline[2])); //.toFixed(2)
			temp2.push(parseFloat(xline[3]));
			temp3.push(parseFloat(xline[4]));
			temp4.push(parseFloat(xline[9]));
			xh.push(ip);
			ip++;

		}
	}
	var tp;
	var tmp_td = [];
	var tmp_d = [];
	var tmp_s = [];
	var tmp_dd = [];
	var tmpp = [];
	var ydma = [];

	for (var i = 0; i < temp1.length; i++) {

		tp = (temp1[i] - temp1[0]) / 1300;  //特大户
		tmp_td.push(parseFloat(tp));
		
		tp = (temp2[i] - temp2[0]) / 150;  //大户
		tmp_d.push(parseFloat(tp));

		tp = (temp3[i] - temp3[0]) / 150;  //散户
		tmp_s.push(parseFloat(tp));


		tp = (temp4[i] - temp4[0]) / 1000; //大单
		tmp_dd.push(parseFloat(tp));


		//zijin_dd.push(tp.toFixed(2));
	}
	//alert(tmp_dd);
	ema = calculateEMA(8, spj);
	ydma = calculate_YDMA(spj);
	var fmin = calculate_Min(spj);
	 
    zijin_td = calculateEMA(5, tmp_td);
	zijin_d = calculateEMA(7, tmp_d);
	zijin_s = calculateEMA(13, tmp_s);
	zijin_dd = calculateEMA(5, tmp_dd);
	 
	var tmpj;

	for (var i = 0; i < tmpp.length; i++) {
		//var tmp;
		//tmp = parseFloat(tmpp[i]) + parseFloat(zijin_s[i]) / 2;
		//zijin_td.push(tmp.toFixed(3));
		tmpj = parseFloat(zijin_td[i]) + parseFloat(zijin_d[i]) + parseFloat(zijin_s[i]);
		zijin_j.push(tmpj.toFixed(3));
	}

	
	for (var i = 0; i < spj.length; i++) {
		var tmp;
		tmp = (parseFloat(ydma[i]) + parseFloat(ema[i]) * 0.18 - 1.18 * fmin) * 6 - 2500;
		bbd.push(tmp.toFixed(2));

		if (zijin_dd[i] >= 0) {
			dd_color.push('#f00');
			zijin_ddf.push(null);
		} else {
			//dd_color.push('#5ebd00');
			dd_color.push('#00b800');
			zijin_ddf.push(zijin_dd[i]);
		}
	}


	for (var i = 0; i < spj.length; i++) {
		sspj.push("[" + xh[i] + "," + spj[i] + "]");
		sbbd.push("[" + xh[i] + "," + bbd[i] + "]");
		szijin_td.push("[" + xh[i] + "," + zijin_td[i] + "]");
		szijin_d.push("[" + xh[i] + "," + zijin_d[i] + "]");
		szijin_s.push("[" + xh[i] + "," + zijin_s[i] + "]");
		szijin_j.push("[" + xh[i] + "," + zijin_j[i] + "]");
		szijin_dd.push("[" + xh[i] + "," + zijin_dd[i] + "]");
		szijin_ddf.push("[" + xh[i] + "," + zijin_ddf[i] + "]");
		
	}
	sspj = "[" + sspj + "]";
	sspj = eval(sspj);
	sbbd = "[" + sbbd + "]";
	sbbd = eval(sbbd);
	szijin_td = "[" + szijin_td + "]";
	szijin_td = eval(szijin_td);
	szijin_d = "[" + szijin_d + "]";
	szijin_d = eval(szijin_d);
	szijin_s = "[" + szijin_s + "]";
	szijin_s = eval(szijin_s);
	szijin_j = "[" + szijin_j + "]";
	szijin_j = eval(szijin_j);
	szijin_dd = "[" + szijin_dd + "]";
	szijin_dd = eval(szijin_dd);
	
	szijin_ddf = "[" + szijin_ddf + "]";
	szijin_ddf = eval(szijin_ddf);

	// alert(zijin_dd);

	return {
		categoryData: categoryData,
		spj: spj,
		bbd: bbd,
		xh: xh,
		zijin_td: zijin_td,
		zijin_d: zijin_d,
		zijin_s: zijin_s,
		zijin_j: zijin_j,
		zijin_dd: zijin_dd,
		sspj: sspj,
		sbbd: sbbd,
		szijin_td: szijin_td,
		szijin_d: szijin_d,
		szijin_s: szijin_s,
		szijin_j: szijin_j,
		szijin_dd: szijin_dd,
		szijin_ddf: szijin_ddf,
		dd_color: dd_color
	};
}

//-----------------------------------------------------------------------------
function calculateEMA(dayCount, data) {
	var result = [];
	var res;
	if (dayCount > 0) {
		result.push(parseFloat(data[0]));
		res = data[0];
		for (var i = 1; i < data.length; i++) {
			res = (2 * parseFloat(data[i]) + (dayCount - 1) * res) / (dayCount + 1);
			result.push(res.toFixed(3));
		}

	}

	return result;
}

//--------------------------------------------------------------------------
function calculate_YDMA(data) {
	var result = [];
	var res, psum;
	if (data.length > 0) {
		result.push(parseFloat(data[0]));
		res = parseFloat(data[0]);
		psum = parseFloat(data[0]);
		for (var i = 1; i < data.length; i++) {
			psum = psum + parseFloat(data[i]);
			res = psum / (i + 1);
			result.push(res.toFixed(3));
		}

	}

	return result;
}

//--------------------------------------------------------------------------

//--------------------------------------------------------------------------
function toFix(num1, num2) {
	if (typeof(num1) == 'undefined') {
		return num1
	} else {
		return Number(num1.toFixed(num2))
	}
}
//--------------------------------------------------------------------------
function TimeToDataCount(tim, code) {
	var res = 225;
	var incode = code.substr(0, 2);
	incode = incode.replace("2", "");
	incode = incode.replace("1", "");

	if ((tim >= "08:55") && (tim <= "20:30")) {
		res = 225;
	} else {
		if (incode == "au") {
			res = 332;
		} else if (incode == "ag") {
			res = 332;
		} else if (incode == "sc") {
			res = 332;
		} else if (incode == "al") {
			res = 242;
		} else if (incode == "cu") {
			res = 242;
		} else if (incode == "zn") {
			res = 242;
		} else if (incode == "ni") {
			res = 242;
		} else if (incode == "sn") {
			res = 242;
		} else if (incode == "pb") {
			res = 242;
		} else if (incode == "ss") {
			res = 242;
		} else {
			res = 122;
		}

	}

	return res;

}
//-----------------------------------------------------------------------------
function Get_Full_Code(rawData, jhcode) {
	var rescode;
	var tmp;
	var rcode = [];
	var rcode2 = [];
	rawData = rawData.split("\n");
	for (var i = 0; i < rawData.length; i++) {
		tmp = rawData[i].substr(3);
		rcode2 = rawData.split(",");
		if (jhcode == rcode2[0].substr(0, 2)) {
			rescode = rcode2[0];
		}

	}

	return {
		rescode: rescode,
	};
}
//-----------------------------------------------------------------------------
function splitData_FXB(rawData) {
	var categoryData = [];
	var spj = [];
	var bbd = [];
	var zijin_td = [];
	var zijin_d = [];
	var zijin_s = [];
	var zijin_dd = [];
	var bbd_bd = [];
	var sbbd_bd = [];
	var ztbar = [];
	var xh = [];

	var sspj = [];
	var sbbd = [];
	var szijin_td = [];
	var szijin_d = [];
	var szijin_s = [];
	var szijin_dd = [];
	var szijin_dd_1 = []; //大于0
	var szijin_dd_2 = [];//  小于0
 	var dd_color = [];
	var bbd_color = [];

	rawData = rawData.split("\n");
	//alert(rawData.length);
	var xline;
	var temp1 = []; //特大户
	var temp2 = []; //大户
	var temp3 = []; //散户
	var temp4 = [];
	var ema = [];

	var sta = 0;
	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[1])) {
			var leftxt;
			leftxt = xline[0].substr(6, 4);
			if (((leftxt >= "0900") && (leftxt <= "0920")) || ((leftxt >= "2100") && (leftxt <= "2120"))) {
				sta = i;
				break;
			}
		}
	}
	var ip = 0;

	for (var i = sta; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[1])) {
			var tim;
			tim = xline[0];
			tim = tim.substr(6, 2) + ":" + tim.substr(8, 2);
			categoryData.push(tim);

			spj.push(parseFloat(xline[1]));

			temp1.push(parseFloat(xline[2])); //.toFixed(2)
			temp2.push(parseFloat(xline[3]));
			temp3.push(parseFloat(xline[4])); // - parseFloat(xline[4]) / 20

			temp4.push(parseFloat(xline[2]));
			xh.push(ip);
			ip++;

		}
	}
	var tp;
	var tmp_td = [];
	var tmp_d = [];
	var tmp_s = [];
	var tmp_dd = [];
	var tmpp = [];


	for (var i = 0; i < temp1.length; i++) {

		tp = (temp1[i] - temp1[0]) / 1000;  //特单
		tmp_td.push(parseFloat(tp));
		
		
		tp = (temp2[i] - temp2[0]) / 300;   //大单
		tmp_d.push(parseFloat(tp));

		tp = (temp3[i] - temp3[0]) / 140; //小单
		tmp_s.push(parseFloat(tp));

		tp = (temp4[i] - temp4[0]) / 1300;
		tmp_dd.push(parseFloat(tp));


		//zijin_dd.push(tp.toFixed(2));
	}

	var pspj = [],
		avg_pspj;
	for (var i = 0; i < spj.length; i++) {
		pspj.push((parseFloat(spj[i]) - parseFloat(spj[0]) + parseFloat(tmp_td[i]) * 50 + parseFloat(tmp_d[i]) * 10) *
			20);
	}
	 
	ema = calculateEMA(144, spj);
	avg_pspj = calculateEMA(144, pspj);
	 

	zijin_s = calculateEMA(12, tmp_s);
	zijin_d = calculateEMA(7, tmp_d);
	tmpp = calculateEMA(13, tmp_td);

	for (var i = 0; i < tmpp.length; i++) {
		var tmp;
		tmp = parseFloat(tmpp[i]);
		zijin_td.push(tmp.toFixed(3));
	}

	zijin_dd = calculateEMA(5, tmp_dd);
	
	for (var i = 0; i < spj.length; i++) {
		var tmp;
		tmp = parseFloat(ema[i]);
		bbd.push(tmp.toFixed(3));
		if (i > 0) {
			bbd_bd.push(parseFloat(avg_pspj[i]) - parseFloat(avg_pspj[i - 1]));
		} else {
			bbd_bd.push(0);
		}

		if (bbd_bd[i] >= 0) {
			bbd_color.push('#ff0000');
		} else {
			bbd_color.push('#00aa00');
		}
	}


	for (var i = 0; i < spj.length; i++) {
		sspj.push("[" + xh[i] + "," + spj[i] + "]");
		sbbd.push("[" + xh[i] + "," + bbd[i] + "]");
		
		//开盘(open)，收盘(close)，最低(lowest)，最高(highest)
		if (spj[i] > bbd[i]){
			 ztbar.push("[" + parseFloat(bbd[i]) + "," + parseFloat(spj[i]) + "," +
				parseFloat(bbd[i]) + "," + parseFloat(spj[i]) + "]");	
		} else {
			 ztbar.push("[" + parseFloat(bbd[i]) + "," + parseFloat(spj[i]) + "," +
				parseFloat(spj[i]) + "," + parseFloat(bbd[i]) + "]");	
		}
		
		szijin_td.push("[" + xh[i] + "," + zijin_td[i] + "]");
		szijin_d.push("[" + xh[i] + "," + zijin_d[i] + "]");
		szijin_s.push("[" + xh[i] + "," + zijin_s[i] + "]");
		szijin_dd.push("[" + xh[i] + "," + zijin_dd[i] + "]");
		sbbd_bd.push("[" + xh[i] + "," + bbd_bd[i] + "]");
		if (zijin_dd[i] >= 0) {
			dd_color.push('#ff0000');
			szijin_dd_1.push("[" + xh[i] + "," + zijin_dd[i] + "]");
		} else {
			dd_color.push('#55aa00');
			szijin_dd_1.push("[" + xh[i] + ",null]");
		}
	}
	sspj = "[" + sspj + "]";  sspj = eval(sspj);
	sbbd = "[" + sbbd + "]";  sbbd = eval(sbbd);
	szijin_td = "[" + szijin_td + "]";  szijin_td = eval(szijin_td);
	szijin_d = "[" + szijin_d + "]";  szijin_d = eval(szijin_d);
	szijin_s = "[" + szijin_s + "]";  szijin_s = eval(szijin_s);
	szijin_dd = "[" + szijin_dd + "]";  szijin_dd = eval(szijin_dd); //大单 其实是特大户资金
	
	szijin_dd_1 = "[" + szijin_dd_1 + "]";  szijin_dd_1 = eval(szijin_dd_1);
	
	sbbd_bd = "[" + sbbd_bd + "]";  sbbd_bd = eval(sbbd_bd);
	
	
	ztbar = "[" + ztbar + "]";  ztbar = eval(ztbar);
	// alert(zijin_dd);

	return {
		categoryData: categoryData,
		spj: spj,
		bbd: bbd,
		
		bbd_bd: bbd_bd,
		sbbd_bd: sbbd_bd,
		xh: xh,
		zijin_td: zijin_td,
		zijin_d: zijin_d,
		zijin_s: zijin_s,
		zijin_dd: zijin_dd,
		sspj: sspj,
		sbbd: sbbd,
		szijin_td: szijin_td,
		szijin_d: szijin_d,
		szijin_s: szijin_s,
		szijin_dd: szijin_dd,
		szijin_dd_1:szijin_dd_1,
		dd_color: dd_color,
		bbd_color: bbd_color,
		ztbar: ztbar,
	};
}
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
