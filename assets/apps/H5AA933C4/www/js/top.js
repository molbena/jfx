//-----------------------------------------------------------------------------
//处理持仓数据 - 持仓曲线
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
//-----------------------------------------------------------------------------
//处理持仓数据- 盈利曲线
function splitData_CC_YL(rawData, perorg) {
	var categoryData = [];
	var values = [];
	var zd = [];

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

	//持仓量
	var ccl_1 = [];
	var ccl_2 = [];
	var ccl_3 = [];
	var ccl_4 = [];
	var ccl_5 = [];
	var ccl_6 = [];
	var ccl_7 = [];
	var ccl_8 = [];
	var ccl_9 = [];
	var ccl_10 = [];
	var ccl_z = [];


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
	var per;
	
	var la_jg = [];  var la_cc = [];  var la_bd = [];  var la_bj = [];      

	rawData = rawData.split("\n");
	//alert(rawData.length);
	var xline;

	per = parseFloat(perorg);

	zd.push(0);
	var ip = 0;

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[2])) {
			var labb = xline[0];
			//2022-10-19
			//0123456789
			categoryData.push(labb.substr(5, 2) + "月" + labb.substr(8, 2));
			//开盘(open) 4，收盘(close) 1，最低(lowest) 3， 最高(highest) 2  

			values.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
				parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");

			cc_hig.push(parseFloat(xline[2]));
			cc_lo.push(parseFloat(xline[3]));
			cc_clos.push(parseFloat(xline[1]));
			cc_ope.push(parseFloat(xline[4]));

			if (i > 0) {
				zd.push(cc_clos[i] - cc_clos[i - 1]);
			}

			//ccl_z.push(parseFloat(xline[5]));
			ccl_z.push(parseFloat(xline[8]) + parseFloat(xline[11]) +parseFloat(xline[14]) +parseFloat(xline[17])
			     +parseFloat(xline[20])  +parseFloat(xline[23])  +parseFloat(xline[26])  +parseFloat(xline[29]) 
				 +parseFloat(xline[32]) +parseFloat(xline[35]) );
 
			cc_jg1.push(xline[7]);
			cc_jg2.push(xline[10]);
			cc_jg3.push(xline[13]);
			cc_jg4.push(xline[16]);
			cc_jg5.push(xline[19]);
			cc_jg6.push(xline[22]);
			cc_jg7.push(xline[25]);
			cc_jg8.push(xline[28]);
			cc_jg9.push(xline[31]);
			cc_jg10.push(xline[34]);

			ccl_1.push(parseFloat(xline[8]));
			ccl_2.push(parseFloat(xline[11]));
			ccl_3.push(parseFloat(xline[14]));
			ccl_4.push(parseFloat(xline[17]));
			ccl_5.push(parseFloat(xline[20]));
			ccl_6.push(parseFloat(xline[23]));
			ccl_7.push(parseFloat(xline[26]));
			ccl_8.push(parseFloat(xline[29]));
			ccl_9.push(parseFloat(xline[32]));
			ccl_10.push(parseFloat(xline[35]));
			ip++;

		}
	}

	var sum1 = 0,
		sum2 = 0,
		sum3 = 0,
		sum4 = 0,
		sum5 = 0,
		sum6 = 0,
		sum7 = 0,
		sum8 = 0,
		sum9 = 0,
		sum10 = 0,
		sumz = 0;
	var tmp;
	for (var i = 0; i < cc_clos.length; i++) {
		tmp = ccl_1[i] * zd[i] * per * 1.23 / 10000;
		sum1 = sum1 + tmp;
		cc_cc1[i] = sum1.toFixed(0);
		cc_bd1[i] = tmp.toFixed(0);

		tmp = ccl_2[i] * zd[i] * per * 1.23 / 10000;
		sum2 = sum2 + tmp;
		cc_cc2[i] = sum2.toFixed(0);
		cc_bd2[i] = tmp.toFixed(0);

		tmp = ccl_3[i] * zd[i] * per * 1.23 / 10000;
		sum3 = sum3 + tmp;
		cc_cc3[i] = sum3.toFixed(0);
		cc_bd3[i] = tmp.toFixed(0);

		tmp = ccl_4[i] * zd[i] * per * 1.23 / 10000;
		sum4 = sum4 + tmp;
		cc_cc4[i] = sum4.toFixed(0);
		cc_bd4[i] = tmp.toFixed(0);

		tmp = ccl_5[i] * zd[i] * per * 1.23 / 10000;
		sum5 = sum5 + tmp;
		cc_cc5[i] = sum5.toFixed(0);
		cc_bd5[i] = tmp.toFixed(0);

		tmp = ccl_6[i] * zd[i] * per * 1.23 / 10000;
		sum6 = sum6 + tmp;
		cc_cc6[i] = sum6.toFixed(0);
		cc_bd6[i] = tmp.toFixed(0);

		tmp = ccl_7[i] * zd[i] * per * 1.23 / 10000;
		sum7 = sum7 + tmp;
		cc_cc7[i] = sum7.toFixed(0);
		cc_bd7[i] = tmp.toFixed(0);

		tmp = ccl_8[i] * zd[i] * per * 1.23 / 10000;
		sum8 = sum8 + tmp;
		cc_cc8[i] = sum8.toFixed(0);
		cc_bd8[i] = tmp.toFixed(0);

		tmp = ccl_9[i] * zd[i] * per * 1.23 / 10000;
		sum9 = sum9 + tmp;
		cc_cc9[i] = sum9.toFixed(0);
		cc_bd9[i] = tmp.toFixed(0);

		tmp = ccl_10[i] * zd[i] * per * 1.23 / 10000;
		sum10 = sum10 + tmp;
		cc_cc10[i] = sum10.toFixed(0);
		cc_bd10[i] = tmp.toFixed(0);

		tmp = ccl_z[i] * zd[i] * per * 1.23 / 10000;
		sumz = sumz + tmp;
		cc_ccz[i] = sumz.toFixed(0);
		cc_bdz[i] = tmp.toFixed(0);

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
//-----------------------------------------------------------------------------

//处理富赢数据
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

//-----------------------------------------------------------------------------
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

//-----------------------------------------------------------------------------
//处理持仓数据
function splitData_Top10_CC(rawData) {
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

//-----------------------------------------------------------------------------
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

//-----------------------------------------------------------------------------
//处理富赢席位数据 - 持仓曲线
function splitData_XW(rawData) {
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


	var cc_bd1 = [];
	var cc_bd2 = [];
	var cc_bd3 = [];
	var cc_bd4 = [];
	var cc_bd5 = [];

	var cc_hig = [];
	var cc_lo = [];
	var cc_clos = [];
	var cc_ope = [];

	rawData = rawData.split("\n");
	//alert(rawData.length);
	var xline;
	cc_bd1.push(0);
	cc_bd2.push(0);
	cc_bd3.push(0);
	cc_bd4.push(0);
	cc_bd5.push(0);

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
				cc_bd1.push(parseFloat(cc_cc1[i] - cc_cc1[i - 1]));
				cc_bd2.push(parseFloat(cc_cc2[i] - cc_cc2[i - 1]));
				cc_bd3.push(parseFloat(cc_cc3[i] - cc_cc3[i - 1]));
				cc_bd4.push(parseFloat(cc_cc4[i] - cc_cc4[i - 1]));
				cc_bd5.push(parseFloat(cc_cc5[i] - cc_cc5[i - 1]));
			}

		}
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

//-----------------------------------------------------------------------------
//处理富赢席位数据- 盈利曲线
function splitData_XW_YL(rawData, perorg) {
	var categoryData = [];
	var values = [];
	var zd = [];


	var cc_jg1 = [];
	var cc_jg2 = [];
	var cc_jg3 = [];
	var cc_jg4 = [];
	var cc_jg5 = [];


	//持仓量
	var ccl_1 = [];
	var ccl_2 = [];
	var ccl_3 = [];
	var ccl_4 = [];
	var ccl_5 = [];



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


	var cc_hig = [];
	var cc_lo = [];
	var cc_clos = [];
	var cc_ope = [];
	var per;

	rawData = rawData.split("\n");
	//alert(rawData.length);
	var xline;

	per = parseFloat(perorg);

	zd.push(0);

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[2])) {
			var labb = xline[0];
			//2022-10-19
			//0123456789
			categoryData.push(labb.substr(5, 2) + "月" + labb.substr(8, 2));
			//开盘(open) 4，收盘(close) 1，最低(lowest) 3， 最高(highest) 2  

			values.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
				parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");

			cc_hig.push(parseFloat(xline[2]));
			cc_lo.push(parseFloat(xline[3]));
			cc_clos.push(parseFloat(xline[1]));
			cc_ope.push(parseFloat(xline[4]));

			if (i > 0) {
				zd.push(cc_clos[i] - cc_clos[i - 1]);
			}

			cc_jg1.push("机构");
			cc_jg2.push("私募");
			cc_jg3.push("大户");
			cc_jg4.push("中户");
			cc_jg5.push("散户");

			ccl_1.push(parseFloat(xline[5]));
			ccl_2.push(parseFloat(xline[6]));
			ccl_3.push(parseFloat(xline[7]));
			ccl_4.push(0 - parseFloat(xline[5]) - parseFloat(xline[6]) - parseFloat(xline[7]) - parseFloat(xline[8]));
			ccl_5.push(parseFloat(xline[8]));


		}
	}

	var sum1 = 0,
		sum2 = 0,
		sum3 = 0,
		sum4 = 0,
		sum5 = 0;
	var tmp;
	for (var i = 0; i < cc_clos.length; i++) {
		tmp = ccl_1[i] * zd[i] * per * 1.23 / 10000;
		sum1 = sum1 + tmp;
		cc_cc1[i] = sum1.toFixed(0);
		cc_bd1[i] = tmp.toFixed(0);

		tmp = ccl_2[i] * zd[i] * per * 1.23 / 10000;
		sum2 = sum2 + tmp;
		cc_cc2[i] = sum2.toFixed(0);
		cc_bd2[i] = tmp.toFixed(0);

		tmp = ccl_3[i] * zd[i] * per * 1.23 / 10000;
		sum3 = sum3 + tmp;
		cc_cc3[i] = sum3.toFixed(0);
		cc_bd3[i] = tmp.toFixed(0);

		tmp = ccl_4[i] * zd[i] * per * 1.23 / 10000;
		sum4 = sum4 + tmp;
		cc_cc4[i] = sum4.toFixed(0);
		cc_bd4[i] = tmp.toFixed(0);

		tmp = ccl_5[i] * zd[i] * per * 1.23 / 10000;
		sum5 = sum5 + tmp;
		cc_cc5[i] = sum5.toFixed(0);
		cc_bd5[i] = tmp.toFixed(0);


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

//-----------------------------------------------------------------------------
//处理富赢席位数据 - 统计数据
function splitData_XW_TJ(rawData) {

	var cc_cc1 = [];
	var cc_cc2 = [];
	var cc_cc3 = [];
	var cc_cc4 = [];
	var cc_cc5 = [];
	
	var categoryData=[];


	var cc_bd1 = [];
	var cc_bd2 = [];
	var cc_bd3 = [];
	var cc_bd4 = [];
	var cc_bd5 = [];

	var new_cc = []; //最新持仓
	var new_bd = []; //最新变动
	var jg = [];

	var new_tj5 = []; //5日统计
	var new_tj10 = []; //10日统计


	jg.push("机构");
	jg.push("私募");
	jg.push("大户");
	jg.push("中户");
	jg.push("散户");



	rawData = rawData.split("\n");
	//alert(rawData.length);
	var xline;
	cc_bd1.push(0);
	cc_bd2.push(0);
	cc_bd3.push(0);
	cc_bd4.push(0);
	cc_bd5.push(0);

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[2])) {
			var lab = xline[0];
			//2022-10-19
			//0123456789
			categoryData.push(lab);

			cc_cc1.push(parseFloat(xline[5]) / 10000);
			cc_cc2.push(parseFloat(xline[6]) / 10000);
			cc_cc3.push(parseFloat(xline[7]) / 10000);
			cc_cc5.push((0 - parseFloat(xline[5]) - parseFloat(xline[6]) - parseFloat(xline[7]) - parseFloat(xline[
				8])) / 10000);
			cc_cc4.push(parseFloat(xline[8]) / 10000);
			if (i > 0) {
				cc_bd1.push(parseFloat(cc_cc1[i] - cc_cc1[i - 1]));
				cc_bd2.push(parseFloat(cc_cc2[i] - cc_cc2[i - 1]));
				cc_bd3.push(parseFloat(cc_cc3[i] - cc_cc3[i - 1]));
				cc_bd4.push(parseFloat(cc_cc4[i] - cc_cc4[i - 1]));
				cc_bd5.push(parseFloat(cc_cc5[i] - cc_cc5[i - 1]));
			}


		}
	}

	var len = cc_cc1.length - 1;
	if (len >= 0) {
		new_cc.push(cc_cc1[len].toFixed(1));
		new_cc.push(cc_cc2[len].toFixed(1));
		new_cc.push(cc_cc3[len].toFixed(1));
		new_cc.push(cc_cc5[len].toFixed(1));
		new_cc.push(cc_cc4[len].toFixed(1));

		new_bd.push(cc_bd1[len].toFixed(1));
		new_bd.push(cc_bd2[len].toFixed(1));
		new_bd.push(cc_bd3[len].toFixed(1));
		new_bd.push(cc_bd5[len].toFixed(1));
		new_bd.push(cc_bd4[len].toFixed(1));
	}


	var tj1 = 0,
		tj2 = 0,
		tj3 = 0,
		tj4 = 0,
		tj5 = 0;
	for (var i = len - 5; i <= len; i++) {
		tj1 = tj1 + cc_bd1[i];
		tj2 = tj2 + cc_bd2[i];
		tj3 = tj3 + cc_bd3[i];
		tj4 = tj4 + cc_bd5[i];
		tj5 = tj5 + cc_bd4[i];
	}
	new_tj5.push(tj1.toFixed(1));
	new_tj5.push(tj2.toFixed(1));
	new_tj5.push(tj3.toFixed(1));
	new_tj5.push(tj4.toFixed(1));
	new_tj5.push(tj5.toFixed(1));


	tj1 = 0;
	tj2 = 0;
	tj3 = 0;
	tj4 = 0;
	tj5 = 0;
	for (var i = len - 10; i <= len; i++) {
		tj1 = tj1 + cc_bd1[i];
		tj2 = tj2 + cc_bd2[i];
		tj3 = tj3 + cc_bd3[i];
		tj4 = tj4 + cc_bd5[i];
		tj5 = tj5 + cc_bd4[i];
	}
	new_tj10.push(tj1.toFixed(1));
	new_tj10.push(tj2.toFixed(1));
	new_tj10.push(tj3.toFixed(1));
	new_tj10.push(tj4.toFixed(1));
	new_tj10.push(tj5.toFixed(1));



	return {
		jg: jg,
		new_cc: new_cc,
		new_bd: new_bd,
		new_tj5: new_tj5,
		new_tj10: new_tj10,
		categoryData:categoryData,

	};
}


//-----------------------------------------------------------------------------
//处理持仓数据 - 持仓曲线
function splitData_CCQJ(rawData) {
	var code = [];
	var categoryData = [];
	var values = [];

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

	var cc_ccz = [];
	var cc_bdz = [];
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


	//
	var icategoryData = [];
	var ivalues = [];

	var icc_jg1 = [];
	var icc_jg2 = [];
	var icc_jg3 = [];
	var icc_jg4 = [];
	var icc_jg5 = [];
	var icc_jg6 = [];
	var icc_jg7 = [];
	var icc_jg8 = [];
	var icc_jg9 = [];
	var icc_jg10 = [];

	var icc_ccz = [];
	var icc_bdz = [];
	var icc_cc1 = [];
	var icc_cc2 = [];
	var icc_cc3 = [];
	var icc_cc4 = [];
	var icc_cc5 = [];
	var icc_cc6 = [];
	var icc_cc7 = [];
	var icc_cc8 = [];
	var icc_cc9 = [];
	var icc_cc10 = [];

	var icc_bd1 = [];
	var icc_bd2 = [];
	var icc_bd3 = [];
	var icc_bd4 = [];
	var icc_bd5 = [];
	var icc_bd6 = [];
	var icc_bd7 = [];
	var icc_bd8 = [];
	var icc_bd9 = [];
	var icc_bd10 = [];

	var icc_hig = [];
	var icc_lo = [];
	var icc_clos = [];
	var icc_ope = [];

	var orgdata = rawData.split("\n");
	//alert(rawData.length);
	var xline;

	var icode = 0;
	for (var i = 0; i < orgdata.length; i++) {

		if (orgdata[i].length >= 3) {

			if (orgdata[i].includes("{{}}")) {

				code[icode] = orgdata[i].replace("{{}}code", "").trim();
				categoryData[icode] = icategoryData;

				ivalues = "[" + ivalues + "]";
				ivalues = eval(ivalues);
				values[icode] = ivalues;
				cc_hig[icode] = icc_hig;
				cc_lo[icode] = icc_lo;
				cc_clos[icode] = icc_clos;
				cc_ope[icode] = icc_ope;

				cc_jg1[icode] = icc_jg1;
				cc_jg2[icode] = icc_jg2;
				cc_jg3[icode] = icc_jg3;
				cc_jg4[icode] = icc_jg4;
				cc_jg5[icode] = icc_jg5;
				cc_jg6[icode] = icc_jg6;
				cc_jg7[icode] = icc_jg7;
				cc_jg8[icode] = icc_jg8;
				cc_jg9[icode] = icc_jg9;
				cc_jg10[icode] = icc_jg10;

				cc_ccz[icode] = icc_ccz;
				cc_bdz[icode] = icc_bdz;
				cc_cc1[icode] = icc_cc1;
				cc_cc2[icode] = icc_cc2;
				cc_cc3[icode] = icc_cc3;
				cc_cc4[icode] = icc_cc4;
				cc_cc5[icode] = icc_cc5;
				cc_cc6[icode] = icc_cc6;
				cc_cc7[icode] = icc_cc7;
				cc_cc8[icode] = icc_cc8;
				cc_cc9[icode] = icc_cc9;
				cc_cc10[icode] = icc_cc10;

				cc_bd1[icode] = icc_bd1;
				cc_bd2[icode] = icc_bd2;
				cc_bd3[icode] = icc_bd3;
				cc_bd4[icode] = icc_bd4;
				cc_bd5[icode] = icc_bd5;
				cc_bd6[icode] = icc_bd6;
				cc_bd7[icode] = icc_bd7;
				cc_bd8[icode] = icc_bd8;
				cc_bd9[icode] = icc_bd9;
				cc_bd10[icode] = icc_bd10;


				icode++;

				icategoryData = [];
				ivalues = [];
				icc_hig = [];
				icc_lo = [];
				icc_clos = [];
				icc_ope = [];

				icc_jg1 = [];
				icc_jg2 = [];
				icc_jg3 = [];
				icc_jg4 = [];
				icc_jg5 = [];
				icc_jg6 = [];
				icc_jg7 = [];
				icc_jg8 = [];
				icc_jg9 = [];
				icc_jg10 = [];

				icc_ccz = [];
				icc_bdz = [];
				icc_cc1 = [];
				icc_cc2 = [];
				icc_cc3 = [];
				icc_cc4 = [];
				icc_cc5 = [];
				icc_cc6 = [];
				icc_cc7 = [];
				icc_cc8 = [];
				icc_cc9 = [];
				icc_cc10 = [];

				icc_bd1 = [];
				icc_bd2 = [];
				icc_bd3 = [];
				icc_bd4 = [];
				icc_bd5 = [];
				icc_bd6 = [];
				icc_bd7 = [];
				icc_bd8 = [];
				icc_bd9 = [];
				icc_bd10 = [];



			} else {
				xline = orgdata[i].split(",");
				//2022-10-19
				//0123456789
				if (!isNaN(xline[1])) {
					icategoryData.push(xline[0].substr(5, 2) + "/" + xline[0].substr(8, 2));
					//开盘(open) 4，收盘(close) 1，最低(lowest) 3， 最高(highest) 2  
					//xline[4]    xline[1]

					ivalues.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
						parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");

					icc_hig.push(parseFloat(xline[2]));
					icc_lo.push(parseFloat(xline[3]));
					icc_clos.push(parseFloat(xline[1]));
					icc_ope.push(parseFloat(xline[4]));

					icc_ccz.push(parseFloat(xline[5]));
					icc_bdz.push(parseFloat(xline[6]));

					icc_jg1.push(xline[7]);
					icc_cc1.push(parseFloat(xline[8]));
					icc_bd1.push(parseFloat(xline[9]));
					icc_jg2.push(xline[10]);
					icc_cc2.push(parseFloat(xline[11]));
					icc_bd2.push(parseFloat(xline[12]));
					icc_jg3.push(xline[13]);
					icc_cc3.push(parseFloat(xline[14]));
					icc_bd3.push(parseFloat(xline[15]));
					icc_jg4.push(xline[16]);
					icc_cc4.push(parseFloat(xline[17]));
					icc_bd4.push(parseFloat(xline[18]));
					icc_jg5.push(xline[19]);
					icc_cc5.push(parseFloat(xline[20]));
					icc_bd5.push(parseFloat(xline[21]));
					icc_jg6.push(xline[22]);
					icc_cc6.push(parseFloat(xline[23]));
					icc_bd6.push(parseFloat(xline[24]));
					icc_jg7.push(xline[25]);
					icc_cc7.push(parseFloat(xline[26]));
					icc_bd7.push(parseFloat(xline[27]));
					icc_jg8.push(xline[28]);
					icc_cc8.push(parseFloat(xline[29]));
					icc_bd8.push(parseFloat(xline[30]));
					icc_jg9.push(xline[31]);
					icc_cc9.push(parseFloat(xline[32]));
					icc_bd9.push(parseFloat(xline[33]));
					icc_jg10.push(xline[34]);
					icc_cc10.push(parseFloat(xline[35]));
					icc_bd10.push(parseFloat(xline[36]));
				}
			}



		}
	}




	//alert(values[0][0]);

	return {
		categoryData: categoryData,
		values: values,
		cc_hig: cc_hig,
		cc_lo: cc_lo,
		cc_clos: cc_clos,
		cc_ope: cc_ope,
		code: code,
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

//-----------------------------------------------------------------------------

function Layout_CCQJ_Old(tot, main_h) {
	//tot - 总高度

	var hcc = [];
	var pcc = [];
	var per_tit;
	var per_h;
	var main_h;

	//main_h=120;
	per_tit = 1;
	//per_h=60;
	per_h = (tot - per_tit * 12 - 18 - main_h - 10) / 11;
	per_h = parseInt(per_h);

	for (var i = 0; i < 20; i++) {
		hcc.push(10);
		pcc.push(0);
	}

	//主图
	hcc[0] = main_h;
	pcc[0] = per_tit;

	//附图  综合10  
	hcc[1] = per_h + 10;
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

//-----------------------------------------------------------------------------

//处理持仓全景图
function splitData_CCQJ2(rawData) {
	var code = [];
	var categoryData = [];
	var values = [];
	var icategoryData = [];
	var ivalues = [];

	var cc_ccz3 = [];
	var cc_ccz5 = [];
	var cc_ccz10 = [];
	var icc_ccz3 = [];
	var icc_ccz5 = [];
	var icc_ccz10 = [];

	var cc_bdz3 = [];
	var cc_bdz5 = [];
	var cc_bdz10 = [];
	var icc_bdz3 = [];
	var icc_bdz5 = [];
	var icc_bdz10 = [];

	var cc_hig = [];
	var cc_lo = [];
	var cc_clos = [];
	var cc_ope = [];
	var icc_hig = [];
	var icc_lo = [];
	var icc_clos = [];
	var icc_ope = [];

	var orgdata = rawData.split("\n");
	//alert(rawData.length);
	var xline;

	var icode = 0;
	for (var i = 0; i < orgdata.length; i++) {

		if (orgdata[i].length >= 3) {

			if (orgdata[i].includes("{{}}")) {

				code[icode] = orgdata[i].replace("{{}}code", "").trim();
				categoryData[icode] = icategoryData;

				ivalues = "[" + ivalues + "]";
				ivalues = eval(ivalues);
				values[icode] = ivalues;
				cc_hig[icode] = icc_hig;
				cc_lo[icode] = icc_lo;
				cc_clos[icode] = icc_clos;
				cc_ope[icode] = icc_ope;

				cc_ccz10[icode] = icc_ccz10;
				cc_bdz10[icode] = icc_bdz10;
				cc_ccz3[icode] = icc_ccz3;
				cc_bdz3[icode] = icc_bdz3;
				cc_ccz5[icode] = icc_ccz5;
				cc_bdz5[icode] = icc_bdz5;


				icode++;

				icategoryData = [];
				ivalues = [];
				icc_hig = [];
				icc_lo = [];
				icc_clos = [];
				icc_ope = [];
				icc_ccz10 = [];
				icc_bdz10 = [];
				icc_ccz3 = [];
				icc_bdz3 = [];
				icc_ccz5 = [];
				icc_bdz5 = [];


			} else {
				xline = orgdata[i].split(",");
				//2022-10-19
				//0123456789
				if (!isNaN(xline[1])) {
					icategoryData.push(xline[0].substr(5, 2) + "/" + xline[0].substr(8, 2));
					//开盘(open) 4，收盘(close) 1，最低(lowest) 3， 最高(highest) 2  
					//xline[4]    xline[1]

					ivalues.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
						parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");

					icc_hig.push(parseFloat(xline[2]));
					icc_lo.push(parseFloat(xline[3]));
					icc_clos.push(parseFloat(xline[1]));
					icc_ope.push(parseFloat(xline[4]));

					icc_ccz10.push(parseFloat(xline[8]) + parseFloat(xline[11]) +parseFloat(xline[14]) +parseFloat(xline[17])
			          +parseFloat(xline[20])  +parseFloat(xline[23])  +parseFloat(xline[26])  +parseFloat(xline[29]) 
				      +parseFloat(xline[32]) +parseFloat(xline[35]) );
				 
				 
					icc_ccz3.push(parseFloat(xline[8]) + parseFloat(xline[11]) + parseFloat(xline[14])); //8   11  14     
					icc_ccz5.push(parseFloat(xline[8]) + parseFloat(xline[11]) + parseFloat(xline[14]) + parseFloat(
						xline[17]) + parseFloat(xline[20])); //8   11  14   17  20

					icc_bdz10.push(parseFloat(xline[9]) + parseFloat(xline[12]) +parseFloat(xline[15]) +parseFloat(xline[18]) 
			           +parseFloat(xline[21])  +parseFloat(xline[24])  +parseFloat(xline[27])  +parseFloat(xline[30]) 
				       +parseFloat(xline[33]) +parseFloat(xline[36]) );
				 
					icc_bdz3.push(parseFloat(xline[9]) + parseFloat(xline[12]) + parseFloat(xline[15])); //9   12  15
					icc_bdz5.push(parseFloat(xline[9]) + parseFloat(xline[12]) + parseFloat(xline[15]) + parseFloat(
						xline[18]) + parseFloat(xline[21])); //9   12  15   18  21


				}
			}



		}
	}




	//alert(values[0][0]);

	return {
		categoryData: categoryData,
		values: values,
		cc_hig: cc_hig,
		cc_lo: cc_lo,
		cc_clos: cc_clos,
		cc_ope: cc_ope,
		code: code,
		//cc_jg1: cc_jg1,
		cc_ccz3: cc_ccz3,
		cc_ccz5: cc_ccz5,
		cc_ccz10: cc_ccz10,

		cc_bdz3: cc_bdz3,
		cc_bdz5: cc_bdz5,
		cc_bdz10: cc_bdz10,

	};
}


//-----------------------------------------------------------------------------
function Layout_CCQJ(tot, main_h) {
	//tot - 总高度

	var hcc = [];
	var pcc = [];
	var per_tit;
	var per_h;
	var main_h;

	//main_h=120;
	per_tit = 20;
	//per_h=60;
	per_h = (tot - per_tit * 4 - 20 - main_h) / 3;
	per_h = parseInt(per_h);

	for (var i = 0; i < 20; i++) {
		hcc.push(10);
		pcc.push(0);
	}

	//主图
	hcc[0] = main_h;
	pcc[0] = per_tit;

	//1  top3
	hcc[1] = per_h;
	pcc[1] = pcc[0] + hcc[0] + per_tit;

	//2  top5
	hcc[2] = per_h;
	pcc[2] = pcc[1] + hcc[1] + per_tit;

	//3  top10
	hcc[3] = per_h;
	pcc[3] = pcc[2] + hcc[2] + per_tit;


	return {
		hcc: hcc,
		pcc: pcc,
	};

}

//-----------------------------------------------------------------------------
function Layout_XWQJ(tot, main_h) {
	//tot - 总高度

	var hcc = [];
	var pcc = [];
	var per_tit;
	var per_h;
	var main_h;

	//main_h=120;
	per_tit = 16;
	//per_h=60;
	per_h = (tot - per_tit * 6 - 20 - main_h) / 5;
	per_h = parseInt(per_h);

	for (var i = 0; i < 20; i++) {
		hcc.push(10);
		pcc.push(0);
	}

	//主图
	hcc[0] = main_h;
	pcc[0] = per_tit;

	//1  T
	hcc[1] = per_h;
	pcc[1] = pcc[0] + hcc[0] + per_tit;

	//2  S
	hcc[2] = per_h;
	pcc[2] = pcc[1] + hcc[1] + per_tit;

	//3  G
	hcc[3] = per_h;
	pcc[3] = pcc[2] + hcc[2] + per_tit;

	//3  A
	hcc[4] = per_h;
	pcc[4] = pcc[3] + hcc[3] + per_tit;

	//3  C
	hcc[5] = per_h;
	pcc[5] = pcc[4] + hcc[4] + per_tit;

	return {
		hcc: hcc,
		pcc: pcc,
	};

}

//-----------------------------------------------------------------------------
//处理席位全景图
function splitData_XWQJ(rawData) {
	var code = [];
	var categoryData = [];
	var values = [];
	var icategoryData = [];
	var ivalues = [];

	var cc_cct = [];
	var cc_ccs = [];
	var cc_ccg = [];
	var cc_cca = [];
	var cc_ccc = [];
	var icc_cct = [];
	var icc_ccs = [];
	var icc_ccg = [];
	var icc_cca = [];
	var icc_ccc = [];

	var cc_bdt = [];
	var cc_bds = [];
	var cc_bdg = [];
	var cc_bda = [];
	var cc_bdc = [];
	var icc_bdt = [];
	var icc_bds = [];
	var icc_bdg = [];
	var icc_bda = [];
	var icc_bdc = [];

	var orgdata = rawData.split("\n");
	//alert(rawData.length);
	var xline;

	var iip = 0;
	var icode = 0;
	for (var i = 0; i < orgdata.length; i++) {

		if (orgdata[i].length >= 3) {

			if (orgdata[i].includes("{{}}")) {

				code[icode] = orgdata[i].replace("{{}}code", "").trim();
				categoryData[icode] = icategoryData;

				ivalues = "[" + ivalues + "]";
				ivalues = eval(ivalues);
				values[icode] = ivalues;

				cc_cct[icode] = icc_cct;
				cc_ccs[icode] = icc_ccs;
				cc_ccg[icode] = icc_ccg;
				cc_cca[icode] = icc_cca;
				cc_ccc[icode] = icc_ccc;

				cc_bdt[icode] = icc_bdt;
				cc_bds[icode] = icc_bds;
				cc_bdg[icode] = icc_bdg;
				cc_bda[icode] = icc_bda;
				cc_bdc[icode] = icc_bdc;

				icode++;

				icategoryData = [];
				ivalues = [];

				icc_cct = [];
				icc_ccs = [];
				icc_ccg = [];
				icc_cca = [];
				icc_ccc = [];
				icc_bdt = [];
				icc_bds = [];
				icc_bdg = [];
				icc_bda = [];
				icc_bdc = [];
				iip = 0;

			} else {
				xline = orgdata[i].split(",");
				//2022-10-19
				//0123456789
				if (!isNaN(xline[1])) {
					icategoryData.push(xline[0].substr(5, 2) + "/" + xline[0].substr(8, 2));
					//开盘(open) 4，收盘(close) 1，最低(lowest) 3， 最高(highest) 2  
					//xline[4]    xline[1]

					ivalues.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
						parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");


					icc_cct.push(parseFloat(xline[5]));
					icc_ccs.push(parseFloat(xline[6]));
					icc_ccg.push(parseFloat(xline[7]));
					icc_cca.push(0 - parseFloat(xline[5]) - parseFloat(xline[6]) - parseFloat(xline[7]) - parseFloat(
						xline[8]));
					icc_ccc.push(parseFloat(xline[8])); //中户
					if (iip > 0) {
						icc_bdt.push(parseFloat(icc_cct[iip]) - parseFloat(icc_cct[iip - 1]));
						icc_bds.push(parseFloat(icc_ccs[iip]) - parseFloat(icc_ccs[iip - 1]));
						icc_bdg.push(parseFloat(icc_ccg[iip]) - parseFloat(icc_ccg[iip - 1]));
						icc_bda.push(parseFloat(icc_cca[iip]) - parseFloat(icc_cca[iip - 1]));
						icc_bdc.push(parseFloat(icc_ccc[iip]) - parseFloat(icc_ccc[iip - 1]));
					} else {
						icc_bdt.push(0);
						icc_bds.push(0);
						icc_bdg.push(0);
						icc_bda.push(0);
						icc_bdc.push(0);
					}

					iip++;


				}
			}



		}
	}


	return {
		categoryData: categoryData,
		values: values,
		code: code,
		//cc_jg1: cc_jg1,
		cc_cct: cc_cct,
		cc_ccs: cc_ccs,
		cc_ccg: cc_ccg,
		cc_cca: cc_cca,
		cc_ccc: cc_ccc,

		cc_bdt: cc_bdt,
		cc_bds: cc_bds,
		cc_bdg: cc_bdg,
		cc_bda: cc_bda,
		cc_bdc: cc_bdc,

	};
}


//-----------------------------------------------------------------------------

//处理富赢席位数据 - 持仓曲线
function splitData_CC10_TJ(rawData) {
	var code = [];
 
	var top3_1 = [];  // 9
	var top3_3 = [];  // 10
	var top3_5 = [];  // 11
	var top3_10 = [];  // 12
 
    var top5_1 = [];  // 5
    var top5_3 = [];  // 6
    var top5_5 = [];  // 7
    var top5_10 = [];  // 8
	
	var top10_1 = [];  // 1
	var top10_3 = [];  // 2
	var top10_5 = [];  // 3
	var top10_10 = [];  // 4
	 

	rawData = rawData.split("\n");
	 

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[2])) {
			code.push(xline[0]);
            top10_1.push( parseFloat(xline[1]) );  // 1
            top10_3.push( parseFloat(xline[2]) );  // 2
            top10_5.push( parseFloat(xline[3]) );  // 3
            top10_10.push( parseFloat(xline[4]) );  // 4
			
			top5_1.push( parseFloat(xline[5]) );  // 5
			top5_3.push( parseFloat(xline[6]) );  // 6
			top5_5.push( parseFloat(xline[7]) );  // 7
			top5_10.push( parseFloat(xline[8]) );  // 8
			
			top3_1.push( parseFloat(xline[9]) );  // 9
			top3_3.push( parseFloat(xline[10]) );  // 10
			top3_5.push( parseFloat(xline[11]) );  // 11
			top3_10.push( parseFloat(xline[12]) );  // 12 

		}
	}


	return {
		code: code,
		
		top3_1: top3_1,
		top3_3: top3_3,
		top3_5: top3_5,
		top3_10: top3_10,
		
		top5_1: top5_1,
		top5_3: top5_3,
		top5_5: top5_5,
		top5_10: top5_10,
		
		top10_1: top10_1,
		top10_3: top10_3,
		top10_5: top10_5,
		top10_10: top10_10, 

	};
}

//-----------------------------------------------------------------------------
/* 富赢数据异动统计 */
function splitData_GV10_TJ(rawData) {
	var code = [];
 
	var topt_1 = [];  // 9
	var topt_3 = [];  // 10
	var topt_5 = [];  // 11
	var topt_10 = [];  // 12
 
    var tops_1 = [];  // 5
    var tops_3 = [];  // 6
    var tops_5 = [];  // 7
    var tops_10 = [];  // 8
	
 

	rawData = rawData.split("\n");
	 

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[2])) {
			code.push(xline[0]);
            topt_1.push( parseFloat(xline[1]) );  // 1
            topt_3.push( parseFloat(xline[2]) );  // 2
            topt_5.push( parseFloat(xline[3]) );  // 3
            topt_10.push( parseFloat(xline[4]) );  // 4
			
			tops_1.push( parseFloat(xline[5]) );  // 5
			tops_3.push( parseFloat(xline[6]) );  // 6
			tops_5.push( parseFloat(xline[7]) );  // 7
			tops_10.push( parseFloat(xline[8]) );  // 8
 

		}
	}


	return {
		code: code,
		
		topt_1: topt_1,
		topt_3: topt_3,
		topt_5: topt_5,
		topt_10: topt_10,
		
		tops_1: tops_1,
		tops_3: tops_3,
		tops_5: tops_5,
		tops_10: tops_10,
 

	};
}
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------



//-----------------------------------------------------------------------------



//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------



//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
