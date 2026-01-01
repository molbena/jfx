//-------------------------------------------------------------------------------
function Layout_K_1(tot, main_h) {
	//tot - 总高度

	var hcc = [];
	var pcc = [];
	var per_tit;
	var per_h;
	var main_h;

	try
	{

		//main_h=120;
		per_tit = 22;
		//per_h=60;
		per_h = (tot - per_tit * 4 - 30 - main_h) / 3;
		per_h = parseInt(per_h);

		for (var i = 0; i < 20; i++) {
			hcc.push(10);
			pcc.push(0);
		}

		//主图
		hcc[0] = main_h;
		pcc[0] = per_tit;

		//附图1   
		hcc[1] = per_h;
		pcc[1] = pcc[0] + hcc[0] + per_tit;

		//附图3 
		hcc[2] = per_h;
		pcc[2] = pcc[1] + hcc[1] + per_tit;

		//附图3 
		hcc[3] = per_h;
		pcc[3] = pcc[2] + hcc[2] + per_tit;
		
	} catch(e){
		//TODO handle the exception
	}	



	return {
		hcc: hcc,
		pcc: pcc,
	};
}
//-------------------------------------------------------------------------------
function Layout_K_3(tot, main_h) {
	//tot - 总高度

	var hcc = [];
	var pcc = [];
	var per_tit;
	var per_h;
	var main_h;

	try
	{

		//main_h=120;
		per_tit = 22;
		//per_h=60;
		per_h = (tot - per_tit * 2 - 30 - main_h) / 3;
		per_h = parseInt(per_h);

		for (var i = 0; i < 20; i++) {
			hcc.push(10);
			pcc.push(0);
		}

		//主图
		hcc[0] = main_h;
		pcc[0] = per_tit;

		//附图1   
		hcc[1] = per_h;
		pcc[1] = pcc[0] + hcc[0] + per_tit;

		//附图3 
		hcc[2] = per_h;
		pcc[2] = pcc[1] + hcc[1];

		//附图3 
		hcc[3] = per_h;
		pcc[3] = pcc[2] + hcc[2];
		
	} catch(e){
		//TODO handle the exception
	}	



	return {
		hcc: hcc,
		pcc: pcc,
	};
}
//-------------------------------------------------------------------------------
function splitData(rawData) {
	var categoryData = [];
	var values = [];
	var volumes = [];
	var zijin_td = [];
	var zijin_d = [];
	var zijin_s = [];
	
	//alert(rawData.length);
	var xline;
	var temp1 = [];
	var temp2 = [];
	var temp3 = [];
	
	try {	
		rawData = rawData.split("\n");
		for (var i = 0; i < rawData.length; i++) {
			xline = rawData[i].split(",");
			if (!isNaN(xline[2])) {
				var dat;
				dat = xline[0];
				dat = "20" + dat.substr(0, 2) + "/" + dat
					.substr(2, 2) + "/" + dat.substr(4, 2) +
					" " + dat.substr(6, 2) + ":" + dat.substr(8, 2);
				categoryData.push(dat);
				// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)  OHLC

				values.push("[" + parseFloat(xline[1]) + "," + parseFloat(xline[4]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");


				volumes.push(parseInt(xline[5]));
				temp1.push(parseFloat(xline[8]));
				temp2.push(parseFloat(xline[9]) * 10);
				temp3.push(parseFloat(xline[10]) * 10);

			}
		}
		for (var i = 0; i < temp1.length; i++) {
			zijin_td.push(temp1[i] - temp1[0]);
			zijin_d.push(temp2[i] - temp2[0]);
			zijin_s.push(temp3[i] - temp3[0]);
		}
		temp1 = [];
		temp2 = [];
		temp2 = [];
		values = "[" + values + "]";
		values = eval(values);
	} catch(e){
		//TODO handle the exception
	}		
	//alert(volumes);

	return {
		categoryData: categoryData,
		values: values,
		volumes: volumes,
		zijin_td: zijin_td,
		zijin_d: zijin_d,
		zijin_s: zijin_s
	};
}
//-------------------------------------------------------------------------------

function toFix(num1, num2) {
	if (typeof(num1) == 'undefined') {
		return num1
	} else {
		return Number(num1.toFixed(num2))
	}
	
}
//-------------------------------------------------------------------------------

function calculateMA(dayCount, data) {
	var result = [];
	try {
		for (var i = 0, len = data.values.length; i < len; i++) {
			if (i < dayCount) {
				result.push('-');
				continue;
			}
			var sum = 0;
			for (var j = 0; j < dayCount; j++) {
				sum += data.values[i - j][1];
			}
			result.push(+(sum / dayCount).toFixed(3));
		}
	} catch(e){
		//TODO handle the exception
	}	
		
	return result;
}

//-------------------------------------------------------------------------------
function calculateEMA(dayCount, data) {
	var result = [];
	var res;
	try{
		
		if (dayCount > 0) {
			result.push(data[0]);
			res = data[0];
			for (var i = 1; i < data.length; i++) {
				res = (2 * data[i] + (dayCount - 1) * res) / (dayCount + 1);
				result.push(res.toFixed(2));
			}

		}
	} catch(e){
		//TODO handle the exception
	}	

	return result;
}

//-------------------------------------------------------------------------------
function splitMenuData(rawData) {
	var rcode = [];
	try{
		
		if (rawData != null) {
			rawData = rawData.split("\n");
			for (var i = 0; i < rawData.length; i++) {
				rcode.push(rawData[i].substr(3));
			}
		}
	} catch(e){
		//TODO handle the exception
	}	

	return {
		rcode: rcode,
	};
}

//-------------------------------------------------------------------------------
//区分资金线		
function splitData_ZJ(rawData) {
	var categoryData = [];
	var values = [];
	var spj = [];
	var zijin_td = [];
	var zijin_s = [];
	
	//alert(rawData.length);
	var xline;
	var temp1 = [];
	var temp2 = [];
	//var tp;
	//var new_data = [];
    
	try{
		rawData = rawData.split("\n");
		//var xdat, xspj, xtd, xs;
		for (var i = 0; i < rawData.length; i++) {
			xline = rawData[i].split(",");
			if (!isNaN(xline[2])) {
				var dat;
				dat = xline[0];
				dat = dat.substr(4, 2) + "/" + dat.substr(6, 2) + ":" + dat.substr(8, 2);
				categoryData.push(dat);
				//xdat = dat;
				values.push("[" + parseFloat(xline[5]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[7]) + "," + parseFloat(xline[6]) + "]");
				spj.push(parseFloat(xline[1]));
				temp1.push( parseFloat(xline[2]) );
				temp2.push(( parseFloat(xline[4]) * 10 ));
				//xspj = parseFloat(xline[1]);

			}
		}
		 

		for (var i = 0; i < temp1.length; i++) {
			zijin_td.push( (parseFloat(temp1[i]) - parseFloat(temp1[0])).toFixed(2) );
			zijin_s.push( (parseFloat(temp2[i]) - parseFloat(temp2[0])).toFixed(2) );

		}
		
		zijin_td=Fun_EMA(zijin_td,7);
		zijin_s=Fun_EMA(zijin_s,7);
		
		//alert(zijin_td);
		//alert(xtd);
		/* new_data.push(xdat);
		new_data.push(xspj);
		new_data.push(xtd.toFixed(2));
		new_data.push(xs.toFixed(2)); */

		values = "[" + values + "]";
		values = eval(values);
		//alert(volumes);
	} catch(e){
		//TODO handle the exception
	}	
		
	return {
		categoryData: categoryData,
		values: values,
		spj: spj,
		zijin_td: zijin_td,
		zijin_s: zijin_s,
		//new_data: new_data
	};
}

//-------------------------------------------------------------------------------
//接下来计算顶底信号指标
function Formula_DDXH(rawData) {
	var zbvalues = [];
	var hh = [];
	var ll = [];
	var spj = [];

	var xx1 = [];
	var xx2 = [];
	var xx3 = [];
	var d1 = [];
	var d2 = [];
	var temp = [];
	var nl = [];
	var ding = [];
	var di = [];
    try{
		
		for (var i = 0; i < rawData.length; i++) {
			hh.push(rawData[i][3]);
			ll.push(rawData[i][2]);
			spj.push(rawData[i][1]);

		}
		//17 0310 2154
		//12 3456 7890
		//XX1:=(CLOSE-LLV(LOW,27))/(HHV(HIGH,27)-LLV(LOW,27))*100
		//XX2:=SMA(XX1,5,1)
		//XX3=SMA(XX2,3,1)
		//D1:=EMA(3*XX2-2*XX3,5),COLORWHITE;    ----0
		//D2:=REF(D1,1),COLORBLUE;       ------1
		var pcount;
		pcount = spj.length;
		var NN = 27; //或者92   27
		var bcs;
		for (var i = 0; i <= pcount - 1; i++) {
			bcs = Fun_HHV(hh, NN, i) - Fun_LLV(ll, NN, i);
			if (Math.abs(bcs) > 0.0001) {
				xx1.push((spj[i] - Fun_LLV(ll, NN, i)) / bcs * 100);
			} else {
				xx1.push(0);
			}
		}

		xx2 = Fun_SMA(xx1, 5, 1);
		xx3 = Fun_SMA(xx2, 3, 1);


		for (var i = 0; i <= pcount - 1; i++) {
			temp.push(xx2[i] * 3 - xx3[i] * 2);
		}

		d1 = Fun_EMA(temp, 5);
		for (var i = 0; i <= pcount - 1; i++) {
			if (i == 0) {
				d2.push(d1[0]);
			} else {
				d2.push(d1[i - 1]);
			}
		}
		// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
		for (var i = 0; i <= pcount - 1; i++) {
			if (d1[i] >= d2[i]) {
				nl.push('[' + d2[i] + ',' + d1[i] + ',' + d2[i] + ',' + d1[i] + ']');
			} else {
				nl.push('[' + d2[i] + ',' + d1[i] + ',' + d1[i] + ',' + d2[i] + ']');
			}
		}
		// 	if ((d1[i]>=d2[i])&&(d1[i-1]<d2[i-1])&&(d2[i]<15)){
		//           Series_QDD2_2->AddXY(i,20,"底",clFuchsia);
		//     }  else {
		//           Series_QDD2_2->AddXY(i,-30,"",clFuchsia);
		//     }
		// 
		//     if ((d1[i]<d2[i])&&(d1[i-1]>=d2[i-1])&&(d2[i]>85)){  //
		//           Series_QDD2_3->AddXY(i,80,"顶",clAqua);
		//     }  else {
		//          Series_QDD2_3->AddXY(i,110,"",clAqua);
		//     }
		for (var i = 0; i <= pcount - 1; i++) {
			if (i == 0) {
				ding.push(120);
				di.push(-30);
			} else {
				if ((d1[i] >= d2[i]) && (d1[i - 1] < d2[i - 1]) && (d2[i] < 15)) {
					di.push(20);
				} else {
					di.push(-30);
				}

				if ((d1[i] < d2[i]) && (d1[i - 1] >= d2[i - 1]) && (d2[i] > 85)) {
					ding.push(80);
				} else {
					ding.push(120);
				}
			}
		}

		nl = "[" + nl + "]";
		nl = eval(nl);
    } catch(e){
    	//TODO handle the exception
    }	
	
	
	return {
		d1: d1,
		d2: d2,
		nl: nl,
		ding: ding,
		di: di
	};


}

//-------------------------------------------------------------------------------
//最大值
function Fun_HHV(hhh, nn, sto) {
	var res;
	var temp;
	try
	{
		
		temp = -1000000;
		res = 0;
		var sta;
		if (sto - nn >= 0) {
			sta = sto - nn;
		} else {
			sta = 0;
		}

		for (var i = sta; i <= sto; i++) {
			if (hhh[i] > temp) {
				res = hhh[i];
				temp = hhh[i];
			}

		}
	} catch(e){
		//TODO handle the exception
	}	
	return res;
}

//-------------------------------------------------------------------------------
//最小值
function Fun_LLV(lll, nn, sto) {
	var res;
	var temp;
	try
	{
		temp = 1000000;
		res = 0;
		var sta;
		if (sto - nn >= 0) {
			sta = sto - nn;
		} else {
			sta = 0;
		}

		for (var i = sta; i <= sto; i++) {
			if (lll[i] < temp) {
				res = lll[i];
				temp = lll[i];
			}

		}
	} catch(e){
		//TODO handle the exception
	}		
	return res;
}

//-------------------------------------------------------------------------------
//SMA
function Fun_SMA(ff, nn, mm) {
	var res = [];
	var temp;
	try
	{
		res.push(ff[0]);
		if (ff.length > 0) {
			for (var i = 1; i < ff.length; i++) {
				temp = (mm * ff[i] + (nn - mm) * res[i - 1]) / nn;
				res.push(temp);
			}
		}
	} catch(e){
		//TODO handle the exception
	}	

	return res;

}

//-------------------------------------------------------------------------------
//EMA
function Fun_EMA(ff, nn) {
	var res = [];
	try
	{
		var temp;
		res.push(ff[0]);
		if (ff.length > 0) {
			for (var i = 1; i < ff.length; i++) {
				temp = (2 * ff[i] + (nn - 1) * res[i - 1]) / (nn + 1);
				res.push(temp);
			}
		}
    } catch(e){
    	//TODO handle the exception
    }	
	return res;


}

//-------------------------------------------------------------------------------、
function Fun_Slope(ff, nn, sto) {
	
	var S1=0;
	var S2=0;
	var S3=0;
	var S4=0;
	var res;
	var Bar;
    var Index;
	
    Bar=sto;
	var istop;
	if (sto>=nn){
	    istop=nn;
	} else {
	    istop=sto;
	    nn=sto;
	}
	
	for (var  i=1; i<=istop; i++)
	{
		 Index=Bar-i+1;
		 S1 = S1 +  ff[Index] * (nn-i+1);
		 S2 = S2 + ff[Index];
		 S3 = S3 + i;
		 S4 = S4 + i*i;
	
	}
	
	var temp;
	if (nn>0){
		   temp=(S4-S3*S3/nn);
		   if (Math.abs(temp)>0.001){
				res=(S1-S2*S3/nn)/temp;//线性回归的斜率
		   } else {
				res=0;
		   }
	} else {
		  res=0;
	}
		  
	return res;
		  
		  
	
}
 
//-----------------------------------------------------------------------------

//处理持仓数据
function splitData_CC(rawData) {
	var categoryData = [];
	var values = [];
	var cc_ccz = [];
	var cc_bdz = [];
	var cc_jg1 = [];
	var cc_jg2 = [];
	var cc_jg3 = [];
	var cc_jg4 = [];
	var cc_jg5 = [];
	var cc_cc1 = [];
	var cc_cc2 = [];
	var cc_cc3 = [];
	var cc_cc4 = [];
	var cc_cc5 = [];
	var cc_bd1 = [];
	var cc_bd2 = [];
	var cc_bd3 = [];
	var cc_bd4 = [];
	var cc_bd5 = [];
   
	try
	{
		rawData = rawData.split("\n");
		//alert(rawData.length);
		var xline;

		for (var i = 0; i < rawData.length; i++) {
			xline = rawData[i].split(",");
			if (!isNaN(xline[2])) {
				categoryData.push(xline[0]);
				//开盘(open)，收盘(close)，最低(lowest)，最高(highest)

				values.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");

				cc_ccz.push(parseFloat(xline[5]));
				cc_bdz.push(parseFloat(xline[6]));
				cc_jg1.push(xline[7]);
				cc_cc1.push(parseFloat(xline[8]));
				cc_jg2.push(xline[9]);
				cc_cc2.push(parseFloat(xline[10]));
				cc_jg3.push(xline[11]);
				cc_cc3.push(parseFloat(xline[12]));
				cc_jg4.push(xline[13]);
				cc_cc4.push(parseFloat(xline[14]));
				cc_jg5.push(xline[15]);
				cc_cc5.push(parseFloat(xline[16]));


			}
		}

		cc_bd1.push(0);
		cc_bd2.push(0);
		cc_bd3.push(0);
		cc_bd4.push(0);
		cc_bd5.push(0);
		for (var i = 1; i < cc_cc1.length; i++) {

			cc_bd1.push(cc_cc1[i] - cc_cc1[i - 1]);
			cc_bd2.push(cc_cc2[i] - cc_cc2[i - 1]);
			cc_bd3.push(cc_cc3[i] - cc_cc3[i - 1]);
			cc_bd4.push(cc_cc4[i] - cc_cc4[i - 1]);
			cc_bd5.push(cc_cc5[i] - cc_cc5[i - 1]);
		}

		values = "[" + values + "]";
		values = eval(values);
	} catch(e){
		//TODO handle the exception
	}	
	//alert(volumes);

	return {
		categoryData: categoryData,
		values: values,
		//cc_jg1: cc_jg1,
		cc_ccz: cc_ccz,
		cc_bdz: cc_bdz,
		cc_jg1: cc_jg1,
		cc_cc1: cc_cc1,
		cc_jg2: cc_jg2,
		cc_cc2: cc_cc2,
		cc_jg3: cc_jg3,
		cc_cc3: cc_cc3,
		cc_jg4: cc_jg4,
		cc_cc4: cc_cc4,
		cc_jg5: cc_jg5,
		cc_cc5: cc_cc5,
		cc_bd1: cc_bd1,
		cc_bd2: cc_bd2,
		cc_bd3: cc_bd3,
		cc_bd4: cc_bd4,
		cc_bd5: cc_bd5

	};
}

//-------------------------------------------------------------------------------
//处理持仓数据
function splitData_GV(rawData) {
	var categoryData = [];
	var values = [];
	var cc_cc1 = [];
	var cc_cc2 = [];
	var cc_cc3 = [];
	var cc_cc4 = [];
	var cc_cc5 = [];
	var cc_bd1 = [];
	var cc_bd2 = [];
	var cc_bd3 = [];
	var cc_bd4 = [];
	var cc_bd5 = [];
    
	try
	{
		rawData = rawData.split("\n");
		//alert(rawData.length);
		var xline;

		for (var i = 0; i < rawData.length; i++) {
			xline = rawData[i].split(",");
			if (!isNaN(xline[2])) {
				categoryData.push(xline[0]);
				//开盘(open)，收盘(close)，最低(lowest)，最高(highest)

				values.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");

				cc_cc1.push(parseFloat(xline[5]));
				cc_cc2.push(parseFloat(xline[6]));
				cc_cc3.push(parseFloat(xline[7]));
				cc_cc5.push(parseFloat(xline[8]));
				cc_cc4.push(parseFloat(0 - xline[5] - xline[6] - xline[7] - xline[8]));


			}
		}

		cc_bd1.push(0);
		cc_bd2.push(0);
		cc_bd3.push(0);
		cc_bd4.push(0);
		cc_bd5.push(0);
		for (var i = 1; i < cc_cc1.length; i++) {

			cc_bd1.push(cc_cc1[i] - cc_cc1[i - 1]);
			cc_bd2.push(cc_cc2[i] - cc_cc2[i - 1]);
			cc_bd3.push(cc_cc3[i] - cc_cc3[i - 1]);
			cc_bd4.push(cc_cc4[i] - cc_cc4[i - 1]);
			cc_bd5.push(cc_cc5[i] - cc_cc5[i - 1]);
		}

		values = "[" + values + "]";
		values = eval(values);
		//alert(volumes);
    } catch(e){
    	//TODO handle the exception
    }	
	
	return {
		categoryData: categoryData,
		values: values,
		cc_cc1: cc_cc1,
		cc_cc2: cc_cc2,
		cc_cc3: cc_cc3,
		cc_cc4: cc_cc4,
		cc_cc5: cc_cc5,
		cc_bd1: cc_bd1,
		cc_bd2: cc_bd2,
		cc_bd3: cc_bd3,
		cc_bd4: cc_bd4,
		cc_bd5: cc_bd5

	};
}

//-------------------------------------------------------------------------------
//处理持仓数据
function splitData_Top10_CC_New(rawData) {
	var categoryData = [];
	var values = [];

	var cc_jg = []; //一维数组    10个机构名称
	var cc_cc = []; //二维数组   每一行  10个持仓量
	var cc_bd = []; //二维数组   每一行  10个持仓变动
	var cc_ccz = []; //一维数组   每一行一个总的持仓量
	var cc_bdz = []; //一维数组   每一行一个总的持仓量

	var top10_cc = [];
	var top10_bd = [];
	var top10_cc_abs = [];
	var top10_bd_abs = [];
	var sum_cc_d = 0;
	var sum_cc_k = 0;
	var sum_bd_d = 0;
	var sum_bd_k = 0;

	var pie_cc = []; //持仓数组  
	var pie_bd = []; //持仓变动数组 
    
	try
	{
		rawData = rawData.split("\n");
		//alert(rawData.length);
		var xline;

		for (var i = 0; i < rawData.length; i++) {
			xline = rawData[i].split(",");
			if (!isNaN(xline[2])) {
				categoryData.push(xline[0]);
				//开盘(open 4)，收盘(close 1)，最低(lowest 3)，最高(highest 2)

				values.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");

				/* var tmp=[];
				tmp.push(xline[7]);	 tmp.push(xline[10]);	 tmp.push(xline[13]);	 tmp.push(xline[16]);
				tmp.push(xline[19]);	 tmp.push(xline[22]);	 tmp.push(xline[25]); tmp.push(xline[28]);	
						 tmp.push(xline[31]);	 tmp.push(xline[34]);	
				cc_jg.push(tmp); */

				cc_cc.push("[" + parseFloat(xline[8]) + "," + parseFloat(xline[11]) + "," + parseFloat(xline[14]) + "," +
					parseFloat(xline[17]) +
					"," + parseFloat(xline[20]) + "," + parseFloat(xline[23]) + "," + parseFloat(xline[26]) + "," +
					parseFloat(xline[29]) +
					"," + parseFloat(xline[32]) + "," + parseFloat(xline[35]) + "]");

				cc_bd.push("[" + parseFloat(xline[9]) + "," + parseFloat(xline[12]) + "," + parseFloat(xline[15]) + "," +
					parseFloat(xline[18]) +
					"," + parseFloat(xline[21]) + "," + parseFloat(xline[24]) + "," + parseFloat(xline[27]) + "," +
					parseFloat(xline[30]) +
					"," + parseFloat(xline[33]) + "," + parseFloat(xline[36]) + "]");


				cc_ccz.push(parseFloat(xline[8]) + parseFloat(xline[11]) + parseFloat(xline[14]) + parseFloat(xline[17]) +
					parseFloat(xline[20]) + parseFloat(xline[23]) + parseFloat(xline[26]) + parseFloat(xline[29]) +
					parseFloat(xline[32]) + parseFloat(xline[35]));

				cc_bdz.push(parseFloat(xline[9]) + parseFloat(xline[12]) + parseFloat(xline[15]) + parseFloat(xline[18]) +
					parseFloat(xline[21]) + parseFloat(xline[24]) + parseFloat(xline[27]) + parseFloat(xline[30]) +
					parseFloat(xline[33]) + parseFloat(xline[36]));

			}
		}

		/* 获取top10家机构 */
		for (var i = 0; i < rawData.length; i++) {
			xline = rawData[i].split(",");
			if (!isNaN(xline[2])) {
				cc_jg.push(xline[7]);
				cc_jg.push(xline[10]);
				cc_jg.push(xline[13]);
				cc_jg.push(xline[16]);
				cc_jg.push(xline[19]);
				cc_jg.push(xline[22]);
				cc_jg.push(xline[25]);
				cc_jg.push(xline[28]);
				cc_jg.push(xline[31]);
				cc_jg.push(xline[34]);
				break;

			}
		}


		values = "[" + values + "]";
		values = eval(values);
		cc_cc = "[" + cc_cc + "]";
		cc_cc = eval(cc_cc);
		cc_bd = "[" + cc_bd + "]";
		cc_bd = eval(cc_bd);

		/* 获取top10数据 */
		var icolor = []; //颜色
		var icolor2 = []; //颜色

		var ilast;
		ilast = cc_cc.length - 1;
		for (var i = 0; i < 10; i++) {
			top10_cc.push(cc_cc[ilast][i]);
			top10_bd.push(cc_bd[ilast][i]);

			top10_cc_abs.push(Math.abs(cc_cc[ilast][i]));
			top10_bd_abs.push(Math.abs(cc_bd[ilast][i]));
			if (cc_cc[ilast][i] >= 0) {
				sum_cc_d = sum_cc_d + cc_cc[ilast][i];
			}
			if (cc_cc[ilast][i] < 0) {
				sum_cc_k = sum_cc_k + Math.abs(cc_cc[ilast][i]);
			}

			if (cc_bd[ilast][i] >= 0) {
				sum_bd_d = sum_bd_d + cc_bd[ilast][i];
			}
			if (cc_bd[ilast][i] < 0) {
				sum_bd_k = sum_bd_k + Math.abs(cc_bd[ilast][i]);
			}


			//构建颜色

			if (String(i) == "0") {
				if (cc_cc[ilast][i] >= 0) {
					icolor.push("itemStyle:{color:'#aa0000'}");
				} else {
					icolor.push("itemStyle:{color:'#005100'}");
				}

				if (cc_bd[ilast][i] >= 0) {
					icolor2.push("itemStyle:{color:'#aa0000'}");
				} else {
					icolor2.push("itemStyle:{color:'#005100'}");
				}
			} else if (String(i) == "1") {
				if (cc_cc[ilast][i] >= 0) {
					icolor.push("itemStyle:{color:'#aa00ff'}");
				} else {
					icolor.push("itemStyle:{color:'#009B00'}");
				}
				if (cc_bd[ilast][i] >= 0) {
					icolor2.push("itemStyle:{color:'#aa00ff'}");
				} else {
					icolor2.push("itemStyle:{color:'#009B00'}");
				}
			} else if (String(i) == "2") {
				if (cc_cc[ilast][i] >= 0) {
					icolor.push("itemStyle:{color:'#ff0000'}");
				} else {
					icolor.push("itemStyle:{color:'#00a5a5'}");
				}
				if (cc_bd[ilast][i] >= 0) {
					icolor2.push("itemStyle:{color:'#ff0000'}");
				} else {
					icolor2.push("itemStyle:{color:'#00a5a5'}");
				}
			} else if (String(i) == "3") {
				if (cc_cc[ilast][i] >= 0) {
					icolor.push("itemStyle:{color:'#ff00ff'}");
				} else {
					icolor.push("itemStyle:{color:'#55aa7f'}");
				}
				if (cc_bd[ilast][i] >= 0) {
					icolor2.push("itemStyle:{color:'#ff00ff'}");
				} else {
					icolor2.push("itemStyle:{color:'#55aa7f'}");
				}
			} else if (String(i) == "4") {
				if (cc_cc[ilast][i] >= 0) {
					icolor.push("itemStyle:{color:' #aa0579'}");
				} else {
					icolor.push("itemStyle:{color:'#0055ff'}");
				}
				if (cc_bd[ilast][i] >= 0) {
					icolor2.push("itemStyle:{color:' #aa0579'}");
				} else {
					icolor2.push("itemStyle:{color:'#0055ff'}");
				}
			} else if (String(i) == "5") {
				if (cc_cc[ilast][i] >= 0) {
					icolor.push("itemStyle:{color:'#aa0000'}");
				} else {
					icolor.push("itemStyle:{color:'#009B00'}");
				}
				if (cc_bd[ilast][i] >= 0) {
					icolor2.push("itemStyle:{color:'#aa0000'}");
				} else {
					icolor2.push("itemStyle:{color:'#009B00'}");
				}
			} else if (String(i) == "6") {
				if (cc_cc[ilast][i] >= 0) {
					icolor.push("itemStyle:{color:'#aa00ff'}");
				} else {
					icolor.push("itemStyle:{color:'#00a5a5'}");
				}
				if (cc_bd[ilast][i] >= 0) {
					icolor2.push("itemStyle:{color:'#aa00ff'}");
				} else {
					icolor2.push("itemStyle:{color:'#00a5a5'}");
				}
			} else if (String(i) == "7") {
				if (cc_cc[ilast][i] >= 0) {
					icolor.push("itemStyle:{color:'#ff0000'}");
				} else {
					icolor.push("itemStyle:{color:'#55aa7f'}");
				}
				if (cc_bd[ilast][i] >= 0) {
					icolor2.push("itemStyle:{color:'#ff0000'}");
				} else {
					icolor2.push("itemStyle:{color:'#55aa7f'}");
				}
			} else if (String(i) == "8") {
				if (cc_cc[ilast][i] >= 0) {
					icolor.push("itemStyle:{color:'#ff00ff'}");
				} else {
					icolor.push("itemStyle:{color:'#0055ff'}");
				}
				if (cc_bd[ilast][i] >= 0) {
					icolor2.push("itemStyle:{color:'#ff00ff'}");
				} else {
					icolor2.push("itemStyle:{color:'#0055ff'}");
				}
			} else if (String(i) == "9") {
				if (cc_cc[ilast][i] >= 0) {
					icolor.push("itemStyle:{color:'#aa0579'}");
				} else {
					icolor.push("itemStyle:{color:'#55aaff'}");
				}
				if (cc_bd[ilast][i] >= 0) {
					icolor2.push("itemStyle:{color:'#aa0579'}");
				} else {
					icolor2.push("itemStyle:{color:'#55aaff'}");
				}
			}


		}

		sum_cc_d = (sum_cc_d / 10000).toFixed(1);
		sum_cc_k = (sum_cc_k / 10000).toFixed(1);
		sum_bd_d = (sum_bd_d / 10000).toFixed(1);
		sum_bd_k = (sum_bd_k / 10000).toFixed(1);

		for (var i = 0; i < 10; i++) {
			var tmp1, tmp2, ress;
			tmp1 = "value:" + top10_cc_abs[i];
			tmp2 = "name:'" + cc_jg[i] + ":" + String(top10_cc[i]) + "'";

			ress = "{" + tmp1 + "," + tmp2 + "," + icolor[i] + "}";
			pie_cc.push(ress);


			tmp1 = "value:" + top10_bd_abs[i];
			tmp2 = "name:'" + cc_jg[i] + ":" + String(top10_bd[i]) + "'";
			ress = "{" + tmp1 + "," + tmp2 + "," + icolor2[i] + "}";
			pie_bd.push(ress);

		}


		pie_cc = "[" + pie_cc + "]";
		pie_cc = eval(pie_cc);

		pie_bd = "[" + pie_bd + "]";
		pie_bd = eval(pie_bd);
		//  console.log(pie_cc); 
    } catch(e){
    	//TODO handle the exception
    }	
	
	return {
		categoryData: categoryData,
		values: values,
		//持仓 时间
		cc_jg: cc_jg,
		cc_cc: cc_cc,
		cc_bd: cc_bd,
		cc_ccz: cc_ccz,
		cc_bdz: cc_bdz,
		top10_cc: top10_cc,
		top10_bd: top10_bd,
		top10_cc_abs: top10_cc_abs,
		top10_bd_abs: top10_bd_abs,
		sum_cc_d,
		sum_cc_k,
		sum_bd_d,
		sum_bd_k,
		pie_cc: pie_cc,
		pie_bd: pie_bd


	};
}

//-------------------------------------------------------------------------------

function splitData_CS(rawData) {
	var categoryData = [];
	var values = [];
	var valuescs = [];
	var volumes = [];
	var vol_yy = [];
	var cc = [];
	var zijin_td = [];
	var zijin_d = [];
	var zijin_s = [];
	
	//alert(rawData.length);
	var xline;
	var temp1 = [];
	var temp2 = [];
	var temp3 = [];
	var fsl7 = [];
	var fsl36 = [];

    try
	{
		rawData = rawData.split("\n"); 
		//载入初始数据
		for (var i = 0; i < rawData.length; i++) {
			xline = rawData[i].split(",");
			if (!isNaN(xline[2])) {
				var dat;
				dat = xline[0];
				dat = "20" + dat.substr(0, 2) + "/" + dat
					.substr(2, 2) + "/" + dat.substr(4, 2) +
					" " + dat.substr(6, 2) + ":" + dat.substr(8, 2);
				categoryData.push(dat);
				//开盘(open)，收盘(close)，最低(lowest)，最高(highest)
				values.push("[" + parseFloat(xline[1]) + "," + parseFloat(xline[4]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");

				if (xline[4] >= xline[1]) {
					vol_yy.push('#FA255A');
				} else {
					vol_yy.push('#55aa00');
				}
				volumes.push(parseInt(xline[5]));
				cc.push(parseInt(xline[6]) / 10000);
				temp1.push(parseFloat(xline[8]));
				temp2.push(parseFloat(xline[9]) * 10);
				temp3.push(parseFloat(xline[10]) * 10);

			}
		}
		//alert(values);
		var color_r, color_g;
		var tmp1, tmp2, tmp;
		color_r = "itemStyle: {normal:{color:'#FA255A',color0:'#FA255A',borderColor:'#FA255A',borderColor0:'#FA255A'}}";
		color_g = "itemStyle: {normal:{color:'#00aa00',color0:'#00aa00',borderColor:'#00aa00',borderColor0:'#00aa00'}}";
		var val_cxh = Formula_CXH(values);
		// alert(val_cxh.zb_e[200]);

		for (var i = 0; i < values.length; i++) {
			tmp1 = "value:" + values[i];
			if (val_cxh.zb_e[i] > val_cxh.zb_b[i]) {
				tmp2 = color_r;
			} else {
				tmp2 = color_g;
			}
			tmp = "{" + tmp1 + "," + tmp2 + "}";
			valuescs.push(tmp);

		}

		var tmpfsl = Formula_FSL(values, volumes); //分水岭指标
		fsl7 = tmpfsl.res7;
		fsl36 = tmpfsl.res36;
		//alert(tmp);
		for (var i = 0; i < temp1.length; i++) {
			zijin_td.push(temp1[i] - temp1[0]);
			zijin_d.push(temp2[i] - temp2[0]);
			zijin_s.push(temp3[i] - temp3[0]);
		}
		temp1 = [];
		temp2 = [];
		temp2 = [];


		values = "[" + values + "]";
		values = eval(values);
		valuescs = "[" + valuescs + "]";
		valuescs = eval(valuescs);
		//alert(JSON.stringify(valuescs));
    } catch(e){
    	//TODO handle the exception
    }	
	
	
	return {
		categoryData: categoryData,
		values: values,
		valuescs: valuescs,
		volumes: volumes,
		cc: cc,
		vol_yy: vol_yy,
		zijin_td: zijin_td,
		zijin_d: zijin_d,
		zijin_s: zijin_s,
		fsl7: fsl7,
		fsl36: fsl36

	};
}


//-------------------------------------------------------------------------------

function splitData_FLZJ(rawData) {

	var zijin_td = [];
	var zijin_d = [];
	var zijin_s = [];
	var xline;
	var temp1 = [];
	var temp2 = [];
	var temp3 = [];
    
	try
	{
		rawData = rawData.split("\n");

		//载入初始数据
		for (var i = 0; i < rawData.length; i++) {
			xline = rawData[i].split(",");
			if (!isNaN(xline[2])) {
				temp1.push(parseFloat(xline[8]));
				temp2.push(parseFloat(xline[9]) * 10);
				temp3.push(parseFloat(xline[10]) * 10);

			}
		}

		//alert(tmp);
		for (var i = 0; i < temp1.length; i++) {
			zijin_td.push(temp1[i] - temp1[0]);
			zijin_d.push(temp2[i] - temp2[0]);
			zijin_s.push(temp3[i] - temp3[0]);
		}
    } catch(e){
    	//TODO handle the exception
    }	
	
	
	return {
		zijin_td: zijin_td,
		zijin_d: zijin_d,
		zijin_s: zijin_s,
	};
}
//-------------------------------------------------------------------------------

//计算K线程序化指标
function Formula_CXH(values1) {

	

	var hh = [];
	var ll = [];
	var spj = [];
	var zb_b = [];
	var zb_e = [];

	var xx1 = [];
	var xx2 = [];
	var xx3 = [];
	
	try
	{
		values1 = "[" + values1 + "]";
		var rawData = eval(values1);

		// 开盘 0，收盘 1，最低 2，最高 3     
		for (var i = 0; i < rawData.length; i++) {
			hh.push(rawData[i][3]);
			ll.push(rawData[i][2]);
			spj.push(rawData[i][1]);

		}
		//N:=92;
		//xx1:=(CLOSE-LLV(LOW,N))/(HHV(HIGH,N)-LLV(LOW,N))*100;
		//xx2:=SMA(xx1,23,1);
		//zb_b:SMA(xx2,23,1); // 1

		var pcount;
		pcount = spj.length;
		var NN = 92; //或者92   27
		var bcs;
		for (var i = 0; i <= pcount - 1; i++) {
			bcs = Fun_HHV(hh, NN, i) - Fun_LLV(ll, NN, i);
			if (Math.abs(bcs) > 0.0001) {
				xx1.push((spj[i] - Fun_LLV(ll, NN, i)) / bcs * 100);
			} else {
				xx1.push(0);
			}
		}

		xx2 = Fun_SMA(xx1, 23, 1);
		zb_b = Fun_SMA(xx2, 23, 1);

		//计算指标e
		//BB:=-100*(HHV(HIGH,84)-CLOSE)/(HHV(HIGH,84)-LLV(LOW,84));
		//短线:BB+100, ;
		//EBAXIAN:EMA(短线,18),COLORCYAN;  //2
		xx1 = [];
		NN = 84;
		for (var i = 0; i <= pcount - 1; i++) {
			bcs = Fun_HHV(hh, NN, i) - Fun_LLV(ll, NN, i);
			if (Math.abs(bcs) > 0.0001) {
				xx3.push(100 - (Fun_HHV(hh, NN, i) - spj[i]) / bcs * 100);
			} else {
				xx3.push(0);
			}
		}
		zb_e = Fun_EMA(xx3, 18);
    } catch(e){
    	//TODO handle the exception
    }	
	
	
	return {
		zb_b: zb_b,
		zb_e: zb_e
	};


}

//-------------------------------------------------------------------------------
function Formula_FSL(values1, vol) {
	//VAR2:=CLOSE*VOL;
	// var3=EMA(VAR2,3);
	// var4=EMA(VOL,3)
	//var5=EMA(VAR2,6)
	//var6=EMA(VOL,6);
	//var7=EMA(VAR2,12)
	//var8=EMA(VOL,12)
	//var9=EMA(VAR2,24)
	//var10=EMA(VOL,24)
	//MID:=EMA((var3/var4+var5/var6+var7/var8+var9/var10)/4,N);
	//VAR1:=MID;
	
	var spj = [];
	var var2 = [];
	var var3 = [];
	var var4 = [];
	var var5 = [];
	var var6 = [];
	var var7 = [];
	var var8 = [];
	var var9 = [];
	var var10 = [];
	var tmp = [];
	var res36 = [];
	var res7 = [];
	
	try
	{
		values1 = "[" + values1 + "]";
		var rawData = eval(values1);
		// 开盘 0，收盘 1，最低 2，最高 3     
		for (var i = 0; i < rawData.length; i++) {
			spj.push(rawData[i][1]);
		}

		for (var i = 0; i < spj.length; i++) {
			var2[i] = spj[i] * vol[i];

		}
		var3 = Fun_EMA(var2, 3);
		var4 = Fun_EMA(vol, 3);

		var5 = Fun_EMA(var2, 6);
		var6 = Fun_EMA(vol, 6);
		var7 = Fun_EMA(var2, 12);
		var8 = Fun_EMA(vol, 12);
		var9 = Fun_EMA(var2, 24);
		var10 = Fun_EMA(vol, 24);

		//MID:=EMA((var3/var4+var5/var6+var7/var8+var9/var10)/4,N);
		//VAR1:=MID; N-36
		for (var i = 0; i < spj.length; i++) {
			tmp[i] = (var3[i] / var4[i] + var5[i] / var6[i] + var7[i] / var8[i] + var9[i] / var10[i]) / 4;
		}
		var tmp2 = [];

		tmp2 = Fun_EMA(tmp, 36);
		for (var i = 0; i < spj.length; i++) res36.push(tmp2[i].toFixed(2));

		tmp2 = [];
		tmp2 = Fun_EMA(tmp, 7);
		for (var i = 0; i < spj.length; i++) res7.push(tmp2[i].toFixed(2));
    } catch(e){
    	//TODO handle the exception
    }	
	
	return {
		res7: res7,
		res36: res36
	};
}

//-----------------------------------------------------------------------------

function InCodetoStd(code, list) {
	var res;
	
	try
	{
		var rawData = [];
		var rcode = [];
		var tmp = [];
		if (list != null) {
			rawData = list.split("\n");
		}

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
    } catch(e){
    	//TODO handle the exception
    }	
 
	return res;

}
//-----------------------------------------------------------------------------
function splitData_YM1(rawData) {
	var categoryData = [];
	var values = [];

	var volumes = [];
	var vol_yy = [];
	var cc = [];
	var zijin_td = [];
	var zijin_d = [];
	var zijin_s = [];
	var zjbd_td = []; // 特大户资金变动
	var zjbd_d = []; // 大户资金变动
	var zjbd_s = []; // 散户资金变动
	var dkx = [];
	var dkxf = [];
	var mrk_d = [];
	var mrk_k = [];
	var bgmrk_d = [];
	var bgmrk_k = [];
	
	
    try
	{
		//alert(rawData.length);
		var xline;
		var temp1 = [];
		var temp2 = [];
		var temp3 = [];
		

		rawData = rawData.split("\n");
		//载入初始数据
		for (var i = 0; i < rawData.length; i++) {
			xline = rawData[i].split(",");
			if (!isNaN(xline[2])) {
				var dat;
				dat = xline[0];
				dat = "20" + dat.substr(0, 2) + "/" + dat
					.substr(2, 2) + "/" + dat.substr(4, 2) +
					" " + dat.substr(6, 2) + ":" + dat.substr(8, 2);
				categoryData.push(dat);
				//开盘(open)，收盘(close)，最低(lowest)，最高(highest)
				values.push("[" + parseFloat(xline[1]) + "," + parseFloat(xline[4]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");

				if (xline[4] >= xline[1]) {
					vol_yy.push('#FA255A');
				} else {
					vol_yy.push('#55aa00');
				}
				volumes.push(parseInt(xline[5]));
				cc.push(parseInt(xline[6]) / 10000);
				temp1.push(parseFloat(xline[8]));
				temp2.push(parseFloat(xline[9]) * 10);
				temp3.push(parseFloat(xline[10]) * 10);

			}
		}


		values = "[" + values + "]";
		values = eval(values);
		var zb_dkx = Formula_DKX(values, categoryData);

		//console.log("dkx");

		dkx = zb_dkx.dkx;
		dkxf = zb_dkx.dkxf;
		mrk_d = zb_dkx.mark_d;
		mrk_k = zb_dkx.mark_k;
		
		bgmrk_d = zb_dkx.bg_d;
		bgmrk_k = zb_dkx.bg_k;

		//console.log(dkx);
		//alert(dkx);
		for (var i = 0; i < temp1.length; i++) {
			zijin_td.push(temp1[i] - temp1[0]);
			zijin_d.push(temp2[i] - temp2[0]);
			zijin_s.push(temp3[i] - temp3[0]);
		}

		zijin_td = Fun_EMA(zijin_td, 7);
		zijin_d = Fun_EMA(zijin_d, 7);
		zijin_s = Fun_EMA(zijin_s, 7);


		//生成资金柱状图
		for (var i = 0; i < temp1.length; i++) {
			if (i > 0) {
				//开盘(open)，收盘(close)，最低(lowest)，最高(highest)
				var hx1, lx1, cha1;
				var hx2, lx2, cha2;
				var hx3, lx3, cha3;
				cha1 = Math.abs(zijin_td[i] - zijin_td[i - 1]);
				cha2 = Math.abs(zijin_d[i] - zijin_d[i - 1]);
				cha3 = Math.abs(zijin_s[i] - zijin_s[i - 1]);
				if (zijin_td[i] >= zijin_td[i - 1]) {
					hx1 = zijin_td[i] + cha1; //红色
					lx1 = zijin_td[i];
					zjbd_td.push("[" + lx1 + "," + hx1 + "," + lx1 + "," + hx1 + "]");
				} else {
					hx1 = zijin_td[i];
					lx1 = zijin_td[i] - cha1;
					zjbd_td.push("[" + hx1 + "," + lx1 + "," + lx1 + "," + hx1 + "]");
				}

				if (zijin_d[i] >= zijin_d[i - 1]) {
					hx2 = zijin_d[i] + cha2; //红色
					lx2 = zijin_d[i];
					zjbd_d.push("[" + lx2 + "," + hx2 + "," + lx2 + "," + hx2 + "]");
				} else {
					hx2 = zijin_d[i];
					lx2 = zijin_d[i] - cha2;
					zjbd_d.push("[" + hx2 + "," + lx2 + "," + lx2 + "," + hx2 + "]");
				}

				if (zijin_s[i] >= zijin_s[i - 1]) {
					hx3 = zijin_s[i] + cha3; //红色
					lx3 = zijin_s[i];
					zjbd_s.push("[" + lx3 + "," + hx3 + "," + lx3 + "," + hx3 + "]");
				} else {
					hx3 = zijin_s[i];
					lx3 = zijin_s[i] - cha3;
					zjbd_s.push("[" + hx3 + "," + lx3 + "," + lx3 + "," + hx3 + "]");
				}


			} else {
				zjbd_td.push("[" + zijin_td[i] + "," + zijin_td[i] + "," +
					zijin_td[i] + "," + zijin_td[i] + "]");
				zjbd_d.push("[" + zijin_d[i] + "," + zijin_d[i] + "," +
					zijin_d[i] + "," + zijin_d[i] + "]");
				zjbd_s.push("[" + zijin_s[i] + "," + zijin_s[i] + "," +
					zijin_s[i] + "," + zijin_s[i] + "]");
			}
		}



		zjbd_td = "[" + zjbd_td + "]";
		zjbd_td = eval(zjbd_td);
		zjbd_d = "[" + zjbd_d + "]";
		zjbd_d = eval(zjbd_d);
		zjbd_s = "[" + zjbd_s + "]";
		zjbd_s = eval(zjbd_s);
    
	} catch(e){
    	//TODO handle the exception
    }	

	return {
		categoryData: categoryData,
		values: values,
		volumes: volumes,
		cc: cc,
		vol_yy: vol_yy,
		zijin_td: zijin_td,
		zijin_d: zijin_d,
		zijin_s: zijin_s,

		zjbd_td: zjbd_td,
		zjbd_d: zjbd_d,
		zjbd_s: zjbd_s,
		dkx: dkx,
		dkxf: dkxf,
		mrk_d: mrk_d,
		mrk_k: mrk_k,
		bgmrk_d: bgmrk_d,
		bgmrk_k: bgmrk_k,

	};
}


//-------------------------------------------------------------------------------

function Formula_DKX(rawData, labdat) {

	var spj = [];
	var VAR3 = [];
	var VAR5 = [];
	var VAR7 = [];
	var VAR9 = [];
	var dkx = [];
	var dkxf = [];
	var dkxz = [];
	var JUN = [];
	var lab = [];

	var ll = [];
	var hh = [];

	var mark_d = [];
	var mark_k = [];
    var bg_d = [];
	var bg_k = [];
	try
	{ 
		//VAR3:=EMA(CLOSE,3);
		//VAR5:=EMA(XVAR2,6);
		//VAR7:=EMA(XVAR2,12);
		//VAR9:=EMA(XVAR2,24);
		//KUAI:EMA((XVAR3+XVAR5+XVAR7+XVAR9)/4,MM);

		for (var i = 0; i < rawData.length; i++) {
			spj.push(rawData[i][1]);
			hh.push(rawData[i][3]);
			ll.push(rawData[i][2]);
			lab.push(labdat[i]);
		}



		VAR3 = Fun_EMA(spj, 3);
		VAR5 = Fun_EMA(spj, 6);
		VAR7 = Fun_EMA(spj, 12);
		VAR9 = Fun_EMA(spj, 24);

		for (var i = 0; i <= VAR3.length - 1; i++) {
			JUN[i] = (VAR3[i] + VAR5[i] + VAR7[i] + VAR9[i]) / 4;
		}
		dkx = Fun_EMA(JUN, 36);

		dkxf.push(null);
		dkxz.push(null);
		bg_d.push(null);
		bg_k.push(null);
		for (var i = 1; i <= dkx.length - 1; i++) {
			if (dkx[i] < dkx[i - 1]) {
				dkxf.push(dkx[i]);
				dkxz.push(null);
				
				bg_d.push(null);
				bg_k.push(100);
			} else {
				dkxf.push(null);
				dkxz.push(dkx[i]);
				bg_d.push(100);
				bg_k.push(null);
			}
		}

		for (var i = 2; i <= dkx.length - 1; i++) {
			if ((dkx[i - 1] < dkx[i - 2]) && (dkx[i] >= dkx[i - 1])) {
				// 绿色 变成 红色
				mark_d.push("{value: 'D', xAxis: '" + lab[i] + "', yAxis: " + ll[i] + "}");
			}

			if ((dkx[i - 1] >= dkx[i - 2]) && (dkx[i] < dkx[i - 1])) {
				//  
				mark_k.push("{value: 'K', xAxis: '" + lab[i] + "', yAxis: " + hh[i] + "}");
			}
		}
		// alert(mark_d);
		mark_d = "[" + mark_d + "]";
		mark_d = eval(mark_d);

		mark_k = "[" + mark_k + "]";
		mark_k = eval(mark_k);

		// alert(mark_d);
    } catch(e){
    	//TODO handle the exception
    }	

	return {
		dkx: dkx,
		dkxf: dkxf,
		dkxz: dkxz,
		mark_d: mark_d,
		mark_k: mark_k,
		bg_d: bg_d,
		bg_k: bg_k,
	};


}


//-------------------------------------------------------------------------------

function Formula_LN(orgraw, orgvol) {
	var clos = [];
	var vol = [];
	var va = [];
	var obv = [];

	var res_vol = [];
	var res_qg = [];
	var res_qd = [];
	var res_k1 = [];
	var res_k2 = [];

	var X_1 = [],
		X_2 = [],
		X_3 = [],
		X_4 = [];
	var X_5 = [],
		X_6 = [],
		X_7 = [],
		X_8 = [];
	var tmpint_1 = [],
		tmpint_2 = [],
		tmpint_3 = [],
		tmpint_4 = [];

	try
	{
		for (var i = 0; i < orgraw.length; i++) {
			clos.push(orgraw[i][1]);
			vol.push(orgvol[i]);
			if (i > 0) {
				if (clos[i] > clos[i - 1]) {
					va.push(vol[i]);
				} else if (clos[i] < clos[i - 1]) {
					va.push(-vol[i]);
				} else {
					va.push(0);
				}
			} else {
				va.push(0);
			}
		}

		//console.log(orgraw.length);  console.log(orgraw);
		var sumx = 0;
		for (var i = 0; i < orgraw.length; i++) {
			sumx = sumx + va[i];
			obv.push(sumx);
		}


		var temp = Fun_JDMA(obv, 30);

		for (var i = 0; i < orgraw.length; i++) {
			res_vol[i] = parseFloat(obv[i] - temp[i]).toFixed(1); //  X_1
			X_1[i] = res_vol[i];
		}

		//开始计算前高
		var tmp_b = [];
		for (var i = 0; i < orgraw.length; i++) {
			if (res_vol[i] < 0) {
				tmp_b[i] = true;
			} else {
				tmp_b[i] = false;
			}
		}

		//X_2:=HHVBARS(X_1,BARSLAST(X_1<0)+1);
		temp = Fun_BarsLast_X(tmp_b);
		for (var i = 0; i < orgraw.length; i++) {
			tmpint_1[i] = temp[i] + 1;
		}


		for (var i = 0; i < orgraw.length; i++) {
			X_2[i] = Fun_HHVBARS_n(X_1, tmpint_1[i], i);
			if (i > 0) {
				tmpint_2[i] = X_2[i - 1] + 2;
			} else {
				tmpint_2[i] = 2;
			}
		}


		//XX2:=BACKSET(CROSS(0,X_1),REF(X_2,1)+2)*10000;
		tmp_b = [];
		for (var i = 0; i < orgraw.length; i++) {
			if (i > 0) {
				if ((0 < X_1[i - 1]) && (0 > X_1[i])) {
					tmp_b[i] = true;
				} else {
					tmp_b[i] = false;
				}
			} else {
				tmp_b[i] = false;
			}
		}


		tmpint_3 = Fun_BACKSET_X(tmp_b, tmpint_2);

		tmp_b = [];
		//X_3:=CROSS(BACKSET(CROSS(0,X_1),REF(X_2,1)+2),0.5);
		for (var i = 0; i < orgraw.length; i++) {
			if (i > 0) {
				if ((tmpint_3[i - 1] < 0.5) && (tmpint_3[i] > 0.5)) {
					tmp_b[i] = true;
				} else {
					tmp_b[i] = false;
				}
			} else {
				tmp_b[i] = false;
			}
		}

		for (var i = 0; i < orgraw.length; i++) {
			if (i > 0) {
				if (tmp_b[i]) {
					res_qg[i] = X_1[i];
				} else {
					res_qg[i] = res_qg[i - 1];
				}
			} else {
				res_qg[i] = 0;
			}

		}

		//alert(res_qg);
		//console.log("jd1： "+res_qg);

		//计算前低

		//X_5:=LLVBARS(X_1,BARSLAST(X_1>0)+1);
		//X_6:=CROSS(BACKSET(CROSS(X_1,0),REF(X_5,1)+2),0.5);
		//X_7:=BARSLAST(FILTERX(CROSS(0,X_1),BARSCOUNT(CLOSE)));
		tmp_b = [];
		for (var i = 0; i < orgraw.length; i++) {
			if (res_vol[i] > 0) {
				tmp_b[i] = true;
			} else {
				tmp_b[i] = false;
			}
		}

		//X_2:=HHVBARS(X_1,BARSLAST(X_1<0)+1);
		//X_5:=LLVBARS(X_1,BARSLAST(X_1>0)+1);
		temp = Fun_BarsLast_X(tmp_b);
		for (var i = 0; i < orgraw.length; i++) {
			tmpint_1[i] = temp[i] + 1;
		}

		for (var i = 0; i < orgraw.length; i++) {
			X_5[i] = Fun_LLVBARS_n(X_1, tmpint_1[i], i);
			if (i > 0) {
				tmpint_2[i] = X_5[i - 1] + 2;
			} else {
				tmpint_2[i] = 2;
			}

		}

		//X_6:=CROSS(BACKSET(CROSS(X_1,0),REF(X_5,1)+2),0.5);
		for (var i = 0; i < orgraw.length; i++) {
			if (i > 0) {
				if ((X_1[i - 1] < 0) && (X_1[i] > 0)) {
					tmp_b[i] = true;
				} else {
					tmp_b[i] = false;
				}
			} else {
				tmp_b[i] = false;
			}
		}

		tmpint_3 = Fun_BACKSET_X(tmp_b, tmpint_2);
		for (var i = 0; i < orgraw.length; i++) {
			if (i > 0) {
				if ((tmpint_3[i - 1] < 0.5) && (tmpint_3[i] > 0.5)) {
					tmp_b[i] = true;
				} else {
					tmp_b[i] = false;
				}
			} else {
				tmp_b[i] = false;
			}
		}

		for (var i = 0; i < orgraw.length; i++) {
			if (i > 0) {
				if (tmp_b[i]) {
					res_qd[i] = X_1[i];
				} else {
					res_qd[i] = res_qd[i - 1];
				}
			} else {
				res_qd[i] = 0;
			}

		}

		var vol_x1, vol_qg, vol_qd;
		for (var i = 0; i < orgraw.length; i++) {
			vol_x1 = parseFloat(res_vol[i]);
			vol_qg = parseFloat(res_qg[i]);
			vol_qd = parseFloat(res_qd[i]);
			if (vol_x1 >= 0) {
				//开盘(open)，收盘(close)，最低(lowest)，最高(highest)
				res_k1.push("[0," + vol_x1 + ",0," + vol_x1 + "]");
			} else {
				res_k1.push("[0," + vol_x1 + "," + vol_x1 + ",0]");
			}

			if (vol_x1 > vol_qg) {
				res_k2.push("[" + vol_qg + "," + vol_x1 + "," + vol_qg + "," + vol_x1 + "]");

			} else if (vol_x1 < vol_qd) {
				res_k2.push("[" + vol_qd + "," + vol_x1 + "," + vol_x1 + "," + vol_qd + "]");
			} else {
				res_k2.push("[0,0,0,0]");
			}

		}

		res_k1 = "[" + res_k1 + "]";
		res_k1 = eval(res_k1);
		res_k2 = "[" + res_k2 + "]";
		res_k2 = eval(res_k2);
		
    } catch(e){
    	//TODO handle the exception
    }	
	
	return {
		res_vol: res_vol,
		res_qg: res_qg,
		res_qd: res_qd,
		res_k1: res_k1,
		res_k2: res_k2,
	}



}

//-------------------------------------------------------------------------------
function Fun_JDMA(ff, nn) {
	var res = [];
	
	try
	{
		var datacount;
		var fsum = 0;


		if (ff.length > 0) {
			for (var i = 0; i < ff.length; i++) {
				if ((i + 1) < nn) {
					datacount = i + 1;
				} else {
					datacount = nn;
				}
				fsum = 0;
				for (var j = i; j >= i - datacount + 1; j--) {
					fsum = fsum + ff[j];

				}
				res.push((fsum / datacount).toFixed(1));
			}


		}
	} catch(e){
		//TODO handle the exception
	}	

	return res;


}
//-------------------------------------------------------------------------------
function Fun_BarsLast_X(ff) {
	var res = [];
	try
	{
		var fsum;


		if (ff.length > 0) {

			fsum = 0;
			for (var i = 0; i <= ff.length - 1; i++) {
				if (ff[i]) {
					fsum = 0;
				} else {
					fsum = fsum + 1;
				}

				res[i] = fsum;
			}
		}
	
	} catch(e){
		//TODO handle the exception
	}	

	return res;


}
//-------------------------------------------------------------------------------
function Fun_HHVBARS_n(ff, nn, sto) {
	
	var res=0;
	
	try
	{
		var datacount;
		var fmax;
		var max_i;
		if (nn > 0) {

			if ((sto + 1) < nn) {
				datacount = sto + 1;
			} else {
				datacount = nn;
			}
			fmax = ff[sto];
			max_i = sto;
			for (var j = sto; j >= sto - datacount + 1; j--) {

				if (ff[j] > fmax) {
					max_i = j;
					fmax = ff[j];
				}

			}
			res = sto - max_i;

		}
    } catch(e){
    	//TODO handle the exception
    }	

	return res;

}
//-------------------------------------------------------------------------------	  
function Fun_BACKSET_X(bb, ff) {
	var res = [];
	
	try
	{
		var datacount;
		var fmax;
		var max_i;

		if (ff.length > 0) {

			for (var i = 0; i <= ff.length - 1; i++) {
				res[i] = 0;
			}

			for (var i = 0; i <= ff.length - 1; i++) {
				if ((i + 1) < ff[i]) {
					datacount = i + 1;
				} else {
					datacount = ff[i];
				}

				if (bb[i]) {
					for (var j = i; j >= i - datacount + 1; j--) {
						res[j] = 1;
					}
				}

			}


		}
	} catch(e){
		//TODO handle the exception
	}		

	return res;


}

//-------------------------------------------------------------------------------	  
function Fun_LLVBARS_n(ff, nn, sto) {

	var res;
	
	try
	{
		var datacount;
		var fmin;
		var min_i;
		

		if (nn > 0) {

			if ((sto + 1) < nn) {
				datacount = sto + 1;
			} else {
				datacount = nn;
			}
			fmin = ff[sto];
			min_i = sto;
			for (var j = sto; j >= sto - datacount + 1; j--) {

				if (ff[j] < fmin) {
					min_i = j;
					fmin = ff[j];
				}

			}
			res = sto - min_i;
		}	
		
    } catch(e){
    	//TODO handle the exception
    }	

	

	return res;

}

//-------------------------------------------------------------------------------	  

function Formula_JHQS(rawData) {
	//江海趋势指标

	var spj = [];
	var ll = [];
	var hh = [];
	var lab = [];
	var N_QP1 = 84;
	var N_MM = 18;
	var N_N = 91;
	var N_P = 7;

	var DUAN = [];
	var HUANG = []; //黄色 中
	var EB = [];
	var BBB = []; // 长 红绿线
	var BBBf = []; //长
	var AAA = [];
	var VAR1 = [];

	var AA6 = [];
	var AA7 = [];

	var ding = [];
	var di = [];

    try
	{

		for (var i = 0; i < rawData.length; i++) {
			spj.push(rawData[i][1]);
			hh.push(rawData[i][3]);
			ll.push(rawData[i][2]);
		}

		//  EB  
		var bcs;
		//BB:=-100*(HHV(HIGH,QP1)-CLOSE)/(HHV(HIGH,QP1)-LLV(LOW,QP1));
		//短线:BB+100, COLORWHITE,linethick1;
		for (var i = 0; i <= spj.length - 1; i++) {
			bcs = Fun_HHV(hh, N_QP1, i) - Fun_LLV(ll, N_QP1, i);
			if (Math.abs(bcs) > 0.0001) {
				DUAN[i] = 100 - (Fun_HHV(hh, N_QP1, i) - spj[i]) / bcs * 100;
			} else {
				DUAN[i] = 0; // 白色 短线 
			}
		}

		//alert(DUAN);

		// DD:=MA(-100*(HHV(HIGH,QM1)-CLOSE)/(HHV(HIGH,QM1)-LLV(LOW,QM1)),QN2);
		//  中线:DD+100,colorgreen,linethick2;

		EB = Fun_EMA(DUAN, N_MM);



		//  BBB  计算红绿线
		for (var i = 0; i <= spj.length - 1; i++) {
			bcs = Fun_HHV(hh, N_N, i) - Fun_LLV(ll, N_N, i);
			if (Math.abs(bcs) > 0.0001) {
				VAR1[i] = (spj[i] - Fun_LLV(ll, N_N, i)) / bcs * 100;
			} else {
				VAR1[i] = 0;
			}
		}
		AAA = Fun_SMA(VAR1, N_P, 1);
		BBB = Fun_SMA(AAA, N_P, 1);
		

		//计算黄线
		var QN1 = 18;
		var QN2 = 9;
		for (var i = 0; i <= spj.length - 1; i++) {
			bcs = Fun_HHV(hh, QN1, i) - Fun_LLV(ll, QN1, i);
			if (Math.abs(bcs) > 0.0001) {
				VAR1[i] = (spj[i] - Fun_HHV(hh, QN1, i)) / bcs * 100;
			} else {
				VAR1[i] = 0;
			}
		}

		AAA = Fun_EMA(VAR1, QN2);
		for (var i = 0; i <= spj.length - 1; i++) {
			HUANG[i] = AAA[i] + 100;
		}



        BBBf.push(null);  
		for (var i = 1; i <= BBB.length - 1; i++) {
			if (BBB[i] < BBB[i-1]) {
				BBBf.push(BBB[i]);
			} else {
				BBBf.push(null);
			}
		}

		//信号  AA6 AA7
		var PXH = 21;
		for (var i = 0; i <= spj.length - 1; i++) {
			bcs = Fun_HHV(hh, PXH, i) - Fun_LLV(ll, PXH, i);
			if (Math.abs(bcs) > 0.0001) {
				VAR1[i] = (spj[i] - Fun_LLV(ll, PXH, i)) / bcs * 100;
			} else {
				VAR1[i] = 0;
			}
		}

		AAA = Fun_SMA(VAR1, 13, 8);
		VAR1 = Fun_SMA(AAA, 13, 8);
		for (var i = 0; i <= spj.length - 1; i++) {
			AA6[i] = Math.ceil(VAR1[i]);
		}

		//AA7
		for (var i = 0; i <= spj.length - 1; i++) {
			bcs = Fun_HHV(hh, PXH, i) - Fun_LLV(ll, PXH, i);
			if (Math.abs(bcs) > 0.0001) {
				VAR1[i] = (Fun_HHV(hh, PXH, i) - spj[i]) / bcs * 100 - 10;
			} else {
				VAR1[i] = 0;
			}
		}
		AA7 = Fun_SMA(VAR1, 21, 8);

		ding.push("[null,null,null,null]");
		di.push("[null,null,null,null]");
		for (var i = 0; i <= spj.length - 1; i++) {

			if ((AA6[i] - AA7[i]) > 85) {
				//开盘(open)，收盘(close)，最低(lowest)，最高(highest)
				ding.push("[98,90,90,98]"); //绿色
			} else {
				ding.push("[null,null,null,null]");
			}

			if ((AA6[i] - AA7[i]) < -65) {
				//开盘(open)，收盘(close)，最低(lowest)，最高(highest)
				di.push("[0,7,0,7]"); //红色
			} else {
				di.push("[null,null,null,null]");
			}
		}

		ding = "[" + ding + "]";
		ding = eval(ding);
		di = "[" + di + "]";
		di = eval(di);
		
    } catch(e){
    	//TODO handle the exception
    }	
	
	// alert(ding); 
	return {
		EB: EB,
		DUAN: DUAN,
		HUANG: HUANG,
		BBB: BBB,
		BBBf: BBBf,
		ding: ding,
		di: di,
		AA6: AA6,
		AA7: AA7,

	};


}

//-------------------------------------------------------------------------------	  

function splitData_YM2(rawData) {
	//页面2  主图指标 - 斜率突破
	var categoryData = [];
	var values = [];

	var volumes = [];
	var vol_yy = [];
	var cc = [];
	var zijin_td = [];
	var zijin_d = [];
	var zijin_s = [];
	var zjbd_td = []; // 特大户资金变动
	var zjbd_d = []; // 大户资金变动
	var zjbd_s = []; // 散户资金变动
	var sxx = [];
	var sxxf = [];
	var bxx = [];
	var mrk_d = [];
	var mrk_k = [];
	var bgmrk_d = [];
	var bgmrk_k = [];
	
	
    try
	{
		//alert(rawData.length);
		var xline;
		var temp1 = [];
		var temp2 = [];
		var temp3 = [];
		

		rawData = rawData.split("\n");
		//载入初始数据
		for (var i = 0; i < rawData.length; i++) {
			xline = rawData[i].split(",");
			if (!isNaN(xline[2])) {
				var dat;
				dat = xline[0];
				dat = "20" + dat.substr(0, 2) + "/" + dat
					.substr(2, 2) + "/" + dat.substr(4, 2) +
					" " + dat.substr(6, 2) + ":" + dat.substr(8, 2);
				categoryData.push(dat);
				//开盘(open)，收盘(close)，最低(lowest)，最高(highest)
				values.push("[" + parseFloat(xline[1]) + "," + parseFloat(xline[4]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");

				if (xline[4] >= xline[1]) {
					vol_yy.push('#FA255A');
				} else {
					vol_yy.push('#55aa00');
				}
				volumes.push(parseInt(xline[5]));
				cc.push(parseInt(xline[6]) / 10000);
				temp1.push(parseFloat(xline[8]));
				temp2.push(parseFloat(xline[9]) * 10);
				temp3.push(parseFloat(xline[10]) * 10);

			}
		}


		values = "[" + values + "]";
		values = eval(values);
		var zb_xl = Formula_XL(values, categoryData);

		//console.log("dkx");

		sxx = zb_xl.sx;
		sxxf = zb_xl.sxf;
		bxx = zb_xl.bx;
		mrk_d = zb_xl.mark_d;
		mrk_k = zb_xl.mark_k;
		
		bgmrk_d = zb_xl.bg_d;
		bgmrk_k = zb_xl.bg_k;
		
		// alert(bgmrk_d);

		//console.log(dkx);
		//alert(dkx);
		for (var i = 0; i < temp1.length; i++) {
			zijin_td.push(temp1[i] - temp1[0]);
			zijin_d.push(temp2[i] - temp2[0]);
			zijin_s.push(temp3[i] - temp3[0]);
		}

		zijin_td = Fun_EMA(zijin_td, 7);
		zijin_d = Fun_EMA(zijin_d, 7);
		zijin_s = Fun_EMA(zijin_s, 7);


		//生成资金柱状图
		for (var i = 0; i < temp1.length; i++) {
			if (i > 0) {
				//开盘(open)，收盘(close)，最低(lowest)，最高(highest)
				var hx1, lx1, cha1;
				var hx2, lx2, cha2;
				var hx3, lx3, cha3;
				cha1 = Math.abs(zijin_td[i] - zijin_td[i - 1]);
				cha2 = Math.abs(zijin_d[i] - zijin_d[i - 1]);
				cha3 = Math.abs(zijin_s[i] - zijin_s[i - 1]);
				if (zijin_td[i] >= zijin_td[i - 1]) {
					hx1 = zijin_td[i] + cha1; //红色
					lx1 = zijin_td[i];
					zjbd_td.push("[" + lx1 + "," + hx1 + "," + lx1 + "," + hx1 + "]");
				} else {
					hx1 = zijin_td[i];
					lx1 = zijin_td[i] - cha1;
					zjbd_td.push("[" + hx1 + "," + lx1 + "," + lx1 + "," + hx1 + "]");
				}

				if (zijin_d[i] >= zijin_d[i - 1]) {
					hx2 = zijin_d[i] + cha2; //红色
					lx2 = zijin_d[i];
					zjbd_d.push("[" + lx2 + "," + hx2 + "," + lx2 + "," + hx2 + "]");
				} else {
					hx2 = zijin_d[i];
					lx2 = zijin_d[i] - cha2;
					zjbd_d.push("[" + hx2 + "," + lx2 + "," + lx2 + "," + hx2 + "]");
				}

				if (zijin_s[i] >= zijin_s[i - 1]) {
					hx3 = zijin_s[i] + cha3; //红色
					lx3 = zijin_s[i];
					zjbd_s.push("[" + lx3 + "," + hx3 + "," + lx3 + "," + hx3 + "]");
				} else {
					hx3 = zijin_s[i];
					lx3 = zijin_s[i] - cha3;
					zjbd_s.push("[" + hx3 + "," + lx3 + "," + lx3 + "," + hx3 + "]");
				}


			} else {
				zjbd_td.push("[" + zijin_td[i] + "," + zijin_td[i] + "," +
					zijin_td[i] + "," + zijin_td[i] + "]");
				zjbd_d.push("[" + zijin_d[i] + "," + zijin_d[i] + "," +
					zijin_d[i] + "," + zijin_d[i] + "]");
				zjbd_s.push("[" + zijin_s[i] + "," + zijin_s[i] + "," +
					zijin_s[i] + "," + zijin_s[i] + "]");
			}
		}



		zjbd_td = "[" + zjbd_td + "]";
		zjbd_td = eval(zjbd_td);
		zjbd_d = "[" + zjbd_d + "]";
		zjbd_d = eval(zjbd_d);
		zjbd_s = "[" + zjbd_s + "]";
		zjbd_s = eval(zjbd_s);
		
		
    
	} catch(e){
    	//TODO handle the exception
    }	

	return {
		categoryData: categoryData,
		values: values,
		volumes: volumes,
		cc: cc,
		vol_yy: vol_yy,
		zijin_td: zijin_td,
		zijin_d: zijin_d,
		zijin_s: zijin_s,

		zjbd_td: zjbd_td,
		zjbd_d: zjbd_d,
		zjbd_s: zjbd_s,
		sxx: sxx,
		sxxf: sxxf,
		bxx: bxx,
		mrk_d: mrk_d,
		mrk_k: mrk_k,
		bgmrk_d: bgmrk_d,
		bgmrk_k: bgmrk_k,

	};
}

//-------------------------------------------------------------------------------	  

function Formula_XL(rawData,labdat) {
   
    var spj = [];
	var ll = [];
	var hh = [];
	var lab = [];
	var MM  =13;
	var NN = 73;
	
	var mark_d = [];
	var mark_k = [];
	
	var bg_d = [];
	var bg_k = [];
	
	var bx = [];
	var sx = [];
	var cha =[];
	
	var lop = [];

    //var sx = [];
	var sxf = [];
	var sxz = [];
 
    try
	{
		for (var i = 0; i < rawData.length; i++) {
			spj.push(rawData[i][1]);
			hh.push(rawData[i][3]);
			ll.push(rawData[i][2]);
			lab.push(labdat[i]);
		}
		  
		bx = Fun_EMA(spj,MM);
		
		 
		for (var i=0; i <= spj.length-1; i++)
		{
			  lop[i]=Fun_Slope(spj,21,i)*20+ spj[i];
		} 
		  
		sx = Fun_EMA(lop,NN);
		
		for (var i=0; i <= bx.length-1; i++){
			 cha[i] = bx[i] - sx[i];
		 }
		
		//alert(cha); 
	   
		sxf.push(null);
		sxz.push(null);
		bg_d.push(null);
		bg_k.push(null);
		for (var i = 1; i <= sx.length - 1; i++) {
			if (bx[i] < sx[i]){
				sxf.push(sx[i]);
				sxz.push(null);
				
				bg_d.push(null);
				bg_k.push(100);
				
			} else {
				sxf.push(null);
				sxz.push(sx[i]);
				
				bg_d.push(100);
				bg_k.push(null);
			}
		} 
		
		for (var i = 2; i <= sx.length - 1; i++) {
			   if ( (bx[i] >= sx[i]) &&(bx[i-1] < sx[i-1])  ){
					// 绿色 变成 红色
					mark_d.push( "{value: 'D', xAxis: '"+lab[i]+"', yAxis: "+ll[i] +"}" );
			   }	
			   
			   if ( (bx[i] < sx[i]) &&(bx[i-1] >= sx[i-1])  ){
					  //  
					 mark_k.push( "{value: 'K', xAxis: '"+lab[i]+"', yAxis: "+hh[i] +"}" );
			   }
		}	
		
		mark_d = "[" + mark_d + "]";
		mark_d = eval(mark_d);
		
		mark_k = "[" + mark_k + "]";
		mark_k = eval(mark_k);
		
	} catch(e){
		//TODO handle the exception
	}	
	
	return {
	    bx: bx,
	    sx: sx ,
		cha: cha,
		sxf: sxf,
		sxz: sxz,
		mark_d: mark_d,
		mark_k: mark_k,
		bg_d: bg_d,
		bg_k: bg_k,
	};


}



//-------------------------------------------------------------------------------	  

function Formula_BSL(rawData,labdat) {
   
    var spj = [];
	var ll = [];
	var hh = [];
	var lab = [];
 
	var macd = [];
	var kuai = [];
	var kuaif = [];
	var man = [];
	var manf = [];
	
	var N_Short = 12;
	var N_Long = 26;
	var N_Mid = 9;
	
    try
	{
		for (var i = 0; i < rawData.length; i++) {
			spj.push(rawData[i][1]);
			hh.push(rawData[i][3]);
			ll.push(rawData[i][2]);
			lab.push(labdat[i]);
		}
		
		//DIF:EMA(CLOSE,SHORT)-EMA(CLOSE,LONG); kuai
		//DEA:EMA(DIF,MID); man
		//MACD:(DIF-DEA)*2,COLORSTICK;
  
		var temp = Fun_EMA(spj,N_Short);
		var temp2 = Fun_EMA(spj,N_Long);
		
		for (var i = 0; i < spj.length; i++) {
			kuai[i] = temp[i] - temp2[i] ;  // 快线
		}
		
		man = Fun_EMA(kuai, N_Mid); // 慢线
		
		for (var i = 0; i < spj.length; i++) {
			macd[i] = (kuai[i] - man[i])*2 ;  // MACD
		} 
		
		 
		for (var i = 0; i < spj.length; i++) {
		    if (kuai[i]>=man[i]){
				manf.push(null);
			} else {
				manf.push(man[i]);
			}	
		}	
		
		
	} catch(e){
		//TODO handle the exception
	}	
	
	return {
	    kuai: kuai,
	    man: man ,
		manf: manf ,
		macd: macd,
		 
	};


}

//-------------------------------------------------------------------------------	  
function Formula_EXHY(rawData,labdat) {
    //二线合一指标
    var spj = [];
	var ll = [];
	var hh = [];
	var lab = [];
 
	var zhuli = [];
	var sanhu = [];
	var fen = [];
	var fenf = [];
	var bd = [];
	var ding = [];
	var di = [];
 
	var NN = 60;

    try
	{
		for (var i = 0; i < rawData.length; i++) {
			spj.push(rawData[i][1]);
			hh.push(rawData[i][3]);
			ll.push(rawData[i][2]);
			lab.push(labdat[i]);
		}
		
		//VAR0:=(CLOSE-LLV(LOW,60))/(HHV(HIGH,60)-LLV(LOW,60))*100;
		//VAR3:=SMA(VAR0,3,1);
		//VAR1:=SMA(VAR3,4,1)-10;
		
		var temp = []; 
		var bcs;
        for (var i = 0; i < spj.length; i++) {
        	bcs = Fun_HHV(hh, NN, i) - Fun_LLV(ll, NN, i);
        	if (Math.abs(bcs) > 0.0001) {
        		temp[i] = (spj[i] - Fun_LLV(ll, NN, i)  ) / bcs * 100;
        	} else {
        		temp[i] = 0; // 白色 短线 
        	}
        }
		
		var temp1 = Fun_SMA(temp, 3, 1);
		var temp2 = Fun_SMA(temp, 4, 1);
		for (var i = 0; i < spj.length; i++) {
			zhuli[i] = temp2[i] - 10;
			sanhu[i] = -zhuli[i];
			
			if (zhuli[i]<=8){
				fen.push(zhuli[i]);
				fenf.push(sanhu[i]);
			} else {
				fen.push(null);
				fenf.push(null);
			}
		}	
		
		//KK:=(CLOSE-LLV(LOW,27))/(HHV(HIGH,27)-LLV(LOW,27))*100;
		//DD:=SMA(KK,5,1);
		//趋势线:3*DD-2*SMA(DD,3,1);{,COLORFF6666,LINETHICK2;}
		NN=27;
		for (var i = 0; i < spj.length; i++) {
			bcs = Fun_HHV(hh, NN, i) - Fun_LLV(ll, NN, i);
			if (Math.abs(bcs) > 0.0001) {
				temp[i] = (spj[i] - Fun_LLV(ll, NN, i)  ) / bcs * 100;
			} else {
				temp[i] = 0; // 白色 短线 
			}
		} 
		temp1 = Fun_SMA(temp, 5, 1);
		temp2 = Fun_SMA(temp1, 3, 1);
		for (var i = 0; i < spj.length; i++) {
		    bd[i]= 3*temp1[i] - 2*temp2[i];	
		}	
		
		
		ding.push("[null,null,null,null]");
		di.push("[null,null,null,null]");
		for (var i = 0; i <= spj.length - 1; i++) {
		
			if (  (bd[i]<=85) && (bd[i-1]>85)  ) {
				//开盘(open)，收盘(close)，最低(lowest)，最高(highest)
				ding.push("[99,70,70,99]"); //绿色
			} else {
				ding.push("[null,null,null,null]");
			}
		
			if (  (bd[i]>=10) && (bd[i-1]<10)  ) {
				//开盘(open)，收盘(close)，最低(lowest)，最高(highest)
				di.push("[-99,-70,-99,-70]"); //红色
			} else {
				di.push("[null,null,null,null]");
			}
		}
		
		ding = "[" + ding + "]";
		ding = eval(ding);
		di = "[" + di + "]";
		di = eval(di);
		
		//if ((ZB_Data[i-1][3][3]<10)&&(chao>=10)){
 
		
		
	} catch(e){
		//TODO handle the exception
	}	
	
	return {
	    zhuli: zhuli,
	    sanhu: sanhu ,
		fen: fen,
		fenf: fenf,
		bd: bd,
		ding: ding,
		di: di,

	};


}

//-------------------------------------------------------------------------------	  

//处理top10 富赢席位数据 - 持仓曲线
function splitData_T10_XW(rawData) {
	var categoryData = [];
	var values = [];

	var cc_jg1 = [];
	var cc_jg2 = [];
	var cc_jg3 = [];
	var cc_jg4 = [];
	var cc_jg5 = [];


	var cc_cc1 = [];
	var cc_cc2 = [];
	var cc_cc3 = [];
	var cc_cc4 = [];
	var cc_cc5 = [];
	
	var cc_cc1x = [];
	var cc_cc2x = [];
	var cc_cc3x = [];
	var cc_cc4x = [];
	var cc_cc5x = [];


	var cc_bd1 = [];
	var cc_bd2 = [];
	var cc_bd3 = [];
	var cc_bd4 = [];
	var cc_bd5 = [];

	var cc_hig = [];
	var cc_lo = [];
	var cc_clos = [];
	var cc_ope = [];

	if (rawData.length>10){
		rawData = rawData.split("\n");	
	}
	
	//alert(rawData.length);
	var xline;

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[2])) {	
			cc_cc1x.push(parseFloat(xline[5]));
			cc_cc2x.push(parseFloat(xline[6]));
			cc_cc3x.push(parseFloat(xline[7]));
			cc_cc4x.push(0 - parseFloat(xline[5]) - parseFloat(xline[6]) - parseFloat(xline[7]) - parseFloat(xline[8]));
			cc_cc5x.push(parseFloat(xline[8]));
	 
		}
	}
 	
	//var sta;
	//sta = rawData.length-31;
	//if (sta < 0)   sta=0;
	
	
	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[2])) {
			var labb = xline[0];
			//2022-10-19
			//0123456789
			categoryData.push(labb.substr(5, 2) + "月" + labb.substr(8, 2));
			//开盘(open) 4，收盘(close) 1，最低(lowest) 3， 最高(highest) 2  
			//xline[4]    xline[1]

			values.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
				parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");

			cc_hig.push(parseFloat(xline[2]));
			cc_lo.push(parseFloat(xline[3]));
			cc_clos.push(parseFloat(xline[1]));
			cc_ope.push(parseFloat(xline[4]));

			cc_jg1.push("机构");
			cc_jg2.push("私募");
			cc_jg3.push("大户");
			cc_jg4.push("中户");
			cc_jg5.push("散户");

			cc_cc1.push(parseFloat(xline[5]));
			cc_cc2.push(parseFloat(xline[6]));
			cc_cc3.push(parseFloat(xline[7]));
			cc_cc4.push(0 - parseFloat(xline[5]) - parseFloat(xline[6]) - parseFloat(xline[7]) - parseFloat(xline[8]));
			cc_cc5.push(parseFloat(xline[8]));
			if (i > 0) {
				cc_bd1.push(parseFloat(cc_cc1x[i] - cc_cc1x[i - 1]));
				cc_bd2.push(parseFloat(cc_cc2x[i] - cc_cc2x[i - 1]));
				cc_bd3.push(parseFloat(cc_cc3x[i] - cc_cc3x[i - 1]));
				cc_bd4.push(parseFloat(cc_cc4x[i] - cc_cc4x[i - 1]));
				cc_bd5.push(parseFloat(cc_cc5x[i] - cc_cc5x[i - 1]));
			} else {
				cc_bd1.push(0);
				cc_bd2.push(0);
				cc_bd3.push(0);
				cc_bd4.push(0);
				cc_bd5.push(0);
			}

		}
	}
	
	
	//alert(cc_cc1);

	values = "[" + values + "]";
	values = eval(values);
	//alert(volumes);

	return {
		categoryData: categoryData,
		values: values,
		cc_hig: cc_hig,
		cc_lo: cc_lo,
		cc_clos: cc_clos,
		cc_ope: cc_ope,
		//cc_jg1: cc_jg1,

		cc_jg1: cc_jg1,
		cc_cc1: cc_cc1,
		cc_jg2: cc_jg2,
		cc_cc2: cc_cc2,
		cc_jg3: cc_jg3,
		cc_cc3: cc_cc3,
		cc_jg4: cc_jg4,
		cc_cc4: cc_cc4,
		cc_jg5: cc_jg5,
		cc_cc5: cc_cc5,

		cc_bd1: cc_bd1,
		cc_bd2: cc_bd2,
		cc_bd3: cc_bd3,
		cc_bd4: cc_bd4,
		cc_bd5: cc_bd5,

	};
}
//-------------------------------------------------------------------------------	  

function Layout_XW(tot, main_h) {
	//tot - 总高度

	var hcc = [];
	var pcc = [];
	var per_tit;
	var per_h;
	var main_h;

	//main_h=120;
	per_tit = 20;
	//per_h=60;
	per_h = (tot - per_tit * 6 - 30 - main_h) / 5;
	per_h = parseInt(per_h);

	for (var i = 0; i < 20; i++) {
		hcc.push(10);
		pcc.push(0);
	}

	//主图
	hcc[0] = main_h;
	pcc[0] = per_tit;

	//附图  综合10  
	hcc[1] = per_h;
	pcc[1] = pcc[0] + hcc[0] + per_tit;

	//第1个品种
	hcc[2] = per_h;
	pcc[2] = pcc[1] + hcc[1] + per_tit;

	//第2个品种
	hcc[3] = per_h;
	pcc[3] = pcc[2] + hcc[2] + per_tit;

	//第3个品种
	hcc[4] = per_h;
	pcc[4] = pcc[3] + hcc[3] + per_tit;

	//第4个品种
	hcc[5] = per_h;
	pcc[5] = pcc[4] + hcc[4] + per_tit;

	//第5个品种
	hcc[6] = per_h;
	pcc[6] = pcc[5] + hcc[5] + per_tit;




	return {
		hcc: hcc,
		pcc: pcc,
	};
}
//-------------------------------------------------------------------------------	  

function Layout_CC(tot, main_h) {
	//tot - 总高度

	var hcc = [];
	var pcc = [];
	var per_tit;
	var per_h;
	var main_h;

	//main_h=120;
	per_tit = 20;
	//per_h=60;
	per_h = (tot - per_tit * 12 - 30 - main_h - 20) / 11;
	per_h = parseInt(per_h);

	for (var i = 0; i < 20; i++) {
		hcc.push(10);
		pcc.push(0);
	}

	//主图
	hcc[0] = main_h;
	pcc[0] = per_tit;

	//附图  综合10  
	hcc[1] = per_h + 20;
	pcc[1] = pcc[0] + hcc[0] + per_tit;

	//第1个品种
	hcc[2] = per_h;
	pcc[2] = pcc[1] + hcc[1] + per_tit;

	//第2个品种
	hcc[3] = per_h;
	pcc[3] = pcc[2] + hcc[2] + per_tit;

	//第3个品种
	hcc[4] = per_h;
	pcc[4] = pcc[3] + hcc[3] + per_tit;

	//第4个品种
	hcc[5] = per_h;
	pcc[5] = pcc[4] + hcc[4] + per_tit;

	//第5个品种
	hcc[6] = per_h;
	pcc[6] = pcc[5] + hcc[5] + per_tit;

	//第6个品种
	hcc[7] = per_h;
	pcc[7] = pcc[6] + hcc[6] + per_tit;

	//第7个品种
	hcc[8] = per_h;
	pcc[8] = pcc[7] + hcc[7] + per_tit;

	//第8个品种
	hcc[9] = per_h;
	pcc[9] = pcc[8] + hcc[8] + per_tit;

	//第9个品种
	hcc[10] = per_h;
	pcc[10] = pcc[9] + hcc[9] + per_tit;

	//第10个品种
	hcc[11] = per_h;
	pcc[11] = pcc[10] + hcc[10] + per_tit;



	return {
		hcc: hcc,
		pcc: pcc,
	};
}
//-------------------------------------------------------------------------------
//处理top10持仓数据 - 持仓曲线
function splitData_T10_CC(rawData) {
	var categoryData = [];
	var values = [];
	var cc_ccz = [];
	var cc_bdz = [];
	var cc_jg1 = [];
	var cc_jg2 = [];
	var cc_jg3 = [];
	var cc_jg4 = [];
	var cc_jg5 = [];
	var cc_jg6 = [];
	var cc_jg7 = [];
	var cc_jg8 = [];
	var cc_jg9 = [];
	var cc_jg10 = [];

	var cc_cc1 = [];
	var cc_cc2 = [];
	var cc_cc3 = [];
	var cc_cc4 = [];
	var cc_cc5 = [];
	var cc_cc6 = [];
	var cc_cc7 = [];
	var cc_cc8 = [];
	var cc_cc9 = [];
	var cc_cc10 = [];

	var cc_bd1 = [];
	var cc_bd2 = [];
	var cc_bd3 = [];
	var cc_bd4 = [];
	var cc_bd5 = [];
	var cc_bd6 = [];
	var cc_bd7 = [];
	var cc_bd8 = [];
	var cc_bd9 = [];
	var cc_bd10 = [];

	var cc_hig = [];
	var cc_lo = [];
	var cc_clos = [];
	var cc_ope = [];
	
	var la_jg = [];  var la_cc = [];  var la_bd = [];  var la_bj = [];      

	rawData = rawData.split("\n");
	//alert(rawData.length);
	var xline;
    var ip = 0;

	//alert(rawData.length);
	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[2])) {
			var labb = xline[0];
			//2022-10-19
			//0123456789
			categoryData.push(labb.substr(5, 2) + "月" + labb.substr(8, 2));
			//开盘(open) 4，收盘(close) 1，最低(lowest) 3， 最高(highest) 2  
			//xline[4]    xline[1]

			values.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
				parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");

			cc_hig.push(parseFloat(xline[2]));
			cc_lo.push(parseFloat(xline[3]));
			cc_clos.push(parseFloat(xline[1]));
			cc_ope.push(parseFloat(xline[4]));

			//cc_ccz.push(parseFloat(xline[5]));
			//cc_bdz.push(parseFloat(xline[6]));
			cc_jg1.push(xline[7]);
			cc_cc1.push(parseFloat(xline[8]));
			cc_bd1.push(parseFloat(xline[9]));

			cc_jg2.push(xline[10]);
			cc_cc2.push(parseFloat(xline[11]));
			cc_bd2.push(parseFloat(xline[12]));

			cc_jg3.push(xline[13]);
			cc_cc3.push(parseFloat(xline[14]));
			cc_bd3.push(parseFloat(xline[15]));

			cc_jg4.push(xline[16]);
			cc_cc4.push(parseFloat(xline[17]));
			cc_bd4.push(parseFloat(xline[18]));

			cc_jg5.push(xline[19]);
			cc_cc5.push(parseFloat(xline[20]));
			cc_bd5.push(parseFloat(xline[21]));

			cc_jg6.push(xline[22]);
			cc_cc6.push(parseFloat(xline[23]));
			cc_bd6.push(parseFloat(xline[24]));

			cc_jg7.push(xline[25]);
			cc_cc7.push(parseFloat(xline[26]));
			cc_bd7.push(parseFloat(xline[27]));

			cc_jg8.push(xline[28]);
			cc_cc8.push(parseFloat(xline[29]));
			cc_bd8.push(parseFloat(xline[30]));

			cc_jg9.push(xline[31]);
			cc_cc9.push(parseFloat(xline[32]));
			cc_bd9.push(parseFloat(xline[33]));

			cc_jg10.push(xline[34]);
			cc_cc10.push(parseFloat(xline[35]));
			cc_bd10.push(parseFloat(xline[36]));
			
			cc_ccz.push(parseFloat(xline[8]) + parseFloat(xline[11]) +parseFloat(xline[14]) +parseFloat(xline[17])
			     +parseFloat(xline[20])  +parseFloat(xline[23])  +parseFloat(xline[26])  +parseFloat(xline[29]) 
				 +parseFloat(xline[32]) +parseFloat(xline[35]) );
			cc_bdz.push(parseFloat(xline[9]) + parseFloat(xline[12]) +parseFloat(xline[15]) +parseFloat(xline[18]) 
			     +parseFloat(xline[21])  +parseFloat(xline[24])  +parseFloat(xline[27])  +parseFloat(xline[30]) 
				 +parseFloat(xline[33]) +parseFloat(xline[36]) );
			
			ip++;


		}
	}
	
	var len; 
	len = ip-1;
	if (len >= 0){
		la_jg.push( cc_jg1[len] );  la_jg.push( cc_jg2[len] );  la_jg.push( cc_jg3[len] );
		la_jg.push( cc_jg4[len] );  la_jg.push( cc_jg5[len] );  la_jg.push( cc_jg6[len] );
		la_jg.push( cc_jg7[len] );  la_jg.push( cc_jg8[len] );  la_jg.push( cc_jg9[len] );	
		la_jg.push( cc_jg10[len] );  la_jg.push( "Top10" );
		
		la_cc.push(cc_cc1[len]);  la_cc.push(cc_cc2[len]);  la_cc.push(cc_cc3[len]);
		  la_cc.push(cc_cc4[len]);  la_cc.push(cc_cc5[len]);  la_cc.push(cc_cc6[len]);
		    la_cc.push(cc_cc7[len]);  la_cc.push(cc_cc8[len]);  la_cc.push(cc_cc9[len]);
			  la_cc.push(cc_cc10[len]);  la_cc.push(cc_ccz[len]);
			  
		la_bd.push(cc_bd1[len]);	la_bd.push(cc_bd2[len]);	la_bd.push(cc_bd3[len]);
		  la_bd.push(cc_bd4[len]);	la_bd.push(cc_bd5[len]);	la_bd.push(cc_bd6[len]);
		    la_bd.push(cc_bd7[len]);	la_bd.push(cc_bd8[len]);	la_bd.push(cc_bd9[len]);
		     la_bd.push(cc_bd10[len]);	la_bd.push(cc_bdz[len]);
		
		la_bj.push( categoryData[len] );	la_bj.push( cc_ope[len] );	la_bj.push( cc_hig[len] );	
		 la_bj.push( cc_lo[len] );	la_bj.push( cc_clos[len] );	
	}
	
 
	values = "[" + values + "]";
	values = eval(values);
	//alert(volumes);

	return {
		categoryData: categoryData,
		values: values,
		cc_hig: cc_hig,
		cc_lo: cc_lo,
		cc_clos: cc_clos,
		cc_ope: cc_ope,
		//cc_jg1: cc_jg1,
		la_jg: la_jg,
		la_cc: la_cc,
		la_bd: la_bd,
		la_bj: la_bj,
		
		cc_ccz: cc_ccz,
		cc_bdz: cc_bdz,
		cc_jg1: cc_jg1,
		cc_cc1: cc_cc1,
		cc_jg2: cc_jg2,
		cc_cc2: cc_cc2,
		cc_jg3: cc_jg3,
		cc_cc3: cc_cc3,
		cc_jg4: cc_jg4,
		cc_cc4: cc_cc4,
		cc_jg5: cc_jg5,
		cc_cc5: cc_cc5,
		cc_jg6: cc_jg6,
		cc_cc6: cc_cc6,
		cc_jg7: cc_jg7,
		cc_cc7: cc_cc7,
		cc_jg8: cc_jg8,
		cc_cc8: cc_cc8,
		cc_jg9: cc_jg9,
		cc_cc9: cc_cc9,
		cc_jg10: cc_jg10,
		cc_cc10: cc_cc10,
		cc_bd1: cc_bd1,
		cc_bd2: cc_bd2,
		cc_bd3: cc_bd3,
		cc_bd4: cc_bd4,
		cc_bd5: cc_bd5,
		cc_bd6: cc_bd6,
		cc_bd7: cc_bd7,
		cc_bd8: cc_bd8,
		cc_bd9: cc_bd9,
		cc_bd10: cc_bd10

	};
}

//-------------------------------------------------------------------------------

function Layout_BL(tot, main_h) {
	//tot - 总高度

	var hcc = [];
	var pcc = [];
	var per_tit;
	var per_h1,per_h2,per_h3,per_h4;
	 
 
	per_tit = 20;
	//per_h=60;
	var hother = parseInt(tot - per_tit * 3 - 30 - main_h);
	per_h1 = main_h;
	per_h2 = hother*0.3;
	per_h3 = hother*0.3;
	per_h4 = hother*0.4;
	
 
	for (var i = 0; i < 20; i++) {
		hcc.push(10);
		pcc.push(0);
	}
	
	 

	//主图
	hcc[0] = per_h1;
	pcc[0] = per_tit;

	//附图  综合10  
	hcc[1] = per_h2;
	pcc[1] = pcc[0] + hcc[0] + per_tit;

	//第1个品种
	hcc[2] = per_h3;
	pcc[2] = pcc[1] + hcc[1];

	//第2个品种
	hcc[3] = per_h4;
	pcc[3] = pcc[2] + hcc[2] + per_tit;
	
	//alert(hcc);

 
	return {
		hcc: hcc,
		pcc: pcc,
	};
}
//-------------------------------------------------------------------------------	  
function BL_Lab_FG(rdata, typ) {
   
    var res=[];
    //18/09:00
	//01234567
	//alert(typ);
    for (var i = 0; i < rdata.length; i++) {
		var lab=rdata[i].substr(3,5);
		if (typ == 'min3'){
			if ( (lab=='09:03')||(lab == '21:03') ) {
				res.push("{xAxis:'"+rdata[i]+"'}");
			}
			
		} else if (typ == 'min9'){
			if ( (lab=='09:09')||(lab == '21:09') ) {
				res.push("{xAxis:'"+rdata[i]+"'}");
			}
			
		} else if (typ == 'min15'){
			//if ( (lab=='09:15')||(lab == '21:15') ) {
			if ( (lab=='09:15') ) {	
				res.push("{xAxis:'"+rdata[i]+"'}");
			}
			
		} 
		 
         
    }
	
	res = "[" + res + "]";
	res = eval(res);
	 
	// alert(res[1]);
  
    return res;
}
//-------------------------------------------------------------------------------
 
//-------------------------------------------------------------------------------


//-------------------------------------------------------------------------------


//-------------------------------------------------------------------------------


//-------------------------------------------------------------------------------


//-------------------------------------------------------------------------------


//-------------------------------------------------------------------------------



//-------------------------------------------------------------------------------



//-------------------------------------------------------------------------------


//-------------------------------------------------------------------------------


//-------------------------------------------------------------------------------


//-------------------------------------------------------------------------------


//-------------------------------------------------------------------------------
