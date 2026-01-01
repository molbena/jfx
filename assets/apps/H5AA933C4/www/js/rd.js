function splitData_QJT_old(rawData) {
	var lab1 = [];
	var lab2 = [];
	var lab3 = [];
	var lab4 = [];
	var lab5 = [];
	var lab6 = [];
	var lab7 = [];
	var lab8 = [];

	var clos1 = [];
	var zijin_td1 = [];
	var zijin_s1 = [];
	var clos2 = [];
	var zijin_td2 = [];
	var zijin_s2 = [];
	var clos3 = [];
	var zijin_td3 = [];
	var zijin_s3 = [];
	var clos4 = [];
	var zijin_td4 = [];
	var zijin_s4 = [];
	var clos5 = [];
	var zijin_td5 = [];
	var zijin_s5 = [];
	var clos6 = [];
	var zijin_td6 = [];
	var zijin_s6 = [];
	var clos7 = [];
	var zijin_td7 = [];
	var zijin_s7 = [];
	var clos8 = [];
	var zijin_td8 = [];
	var zijin_s8 = [];

	var new_lab = [];
	var new_clos = [];
	var new_td = [];
	var new_s = [];

	var data1 = [];
	var data2 = [];
	var data3 = [];
	var data4 = [];
	var data5 = [];
	var data6 = [];
	var data7 = [];
	var data8 = [];
	rawData = rawData.split("{{}}");
	data1 = rawData[0].split("\n");
	data2 = rawData[1].split("\n");
	data3 = rawData[2].split("\n");
	data4 = rawData[3].split("\n");
	data5 = rawData[4].split("\n");
	data6 = rawData[5].split("\n");
	data7 = rawData[6].split("\n");
	data8 = rawData[7].split("\n");

	//alert(data1);
	//rawData = rawData.split("\n");
	var xline;
	var tmp_lab;
	var tmp_clos;
	var tmp_td;
	var tmp_s;
	var temp1 = [];
	var temp2 = [];
	//载入初始数据
	//处理第1品种
	for (var i = 0; i < data1.length; i++) {
		xline = data1[i].split(",");
		if (!isNaN(xline[1])) {
			lab1.push(xline[0].substr(0, 2) + "/" + xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2));
			clos1.push(parseFloat(xline[1]));
			temp1.push(parseFloat(xline[2]));
			temp2.push(parseFloat(xline[3]) * 10);

			tmp_lab = xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2);
			tmp_clos = parseFloat(xline[1]);
		}
	}

	for (var i = 0; i < temp1.length; i++) {
		zijin_td1.push(temp1[i] - temp1[0]);
		zijin_s1.push(temp2[i] - temp2[0]);
		tmp_td = temp1[i] - temp1[0];
		tmp_s = temp2[i] - temp2[0];
	}

	new_lab.push(tmp_lab);
	new_clos.push(tmp_clos);
	new_td.push(tmp_td);
	new_s.push(tmp_s);
	temp1 = [];
	temp2 = [];

	//处理第2品种
	for (var i = 0; i < data2.length; i++) {
		xline = data2[i].split(",");
		if (!isNaN(xline[1])) {
			lab2.push(xline[0].substr(0, 2) + "/" + xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2));
			clos2.push(parseFloat(xline[1]));
			temp1.push(parseFloat(xline[2]));
			temp2.push(parseFloat(xline[3]) * 10);
			tmp_lab = xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2);
			tmp_clos = parseFloat(xline[1]);

		}
	}

	for (var i = 0; i < temp1.length; i++) {
		zijin_td2.push(temp1[i] - temp1[0]);
		zijin_s2.push(temp2[i] - temp2[0]);
		tmp_td = temp1[i] - temp1[0];
		tmp_s = temp2[i] - temp2[0];
	}
	new_lab.push(tmp_lab);
	new_clos.push(tmp_clos);
	new_td.push(tmp_td);
	new_s.push(tmp_s);
	temp1 = [];
	temp2 = [];

	//处理第3品种
	for (var i = 0; i < data3.length; i++) {
		xline = data3[i].split(",");
		if (!isNaN(xline[1])) {
			lab3.push(xline[0].substr(0, 2) + "/" + xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2));
			clos3.push(parseFloat(xline[1]));
			temp1.push(parseFloat(xline[2]));
			temp2.push(parseFloat(xline[3]) * 10);
			tmp_lab = xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2);
			tmp_clos = parseFloat(xline[1]);

		}
	}

	for (var i = 0; i < temp1.length; i++) {
		zijin_td3.push(temp1[i] - temp1[0]);
		zijin_s3.push(temp2[i] - temp2[0]);
		tmp_td = temp1[i] - temp1[0];
		tmp_s = temp2[i] - temp2[0];
	}
	new_lab.push(tmp_lab);
	new_clos.push(tmp_clos);
	new_td.push(tmp_td);
	new_s.push(tmp_s);
	temp1 = [];
	temp2 = [];

	//处理第4品种
	for (var i = 0; i < data4.length; i++) {
		xline = data4[i].split(",");
		if (!isNaN(xline[1])) {
			lab4.push(xline[0].substr(0, 2) + "/" + xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2));
			clos4.push(parseFloat(xline[1]));
			temp1.push(parseFloat(xline[2]));
			temp2.push(parseFloat(xline[3]) * 10);
			tmp_lab = xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2);
			tmp_clos = parseFloat(xline[1]);

		}
	}

	for (var i = 0; i < temp1.length; i++) {
		zijin_td4.push(temp1[i] - temp1[0]);
		zijin_s4.push(temp2[i] - temp2[0]);
		tmp_td = temp1[i] - temp1[0];
		tmp_s = temp2[i] - temp2[0];
	}
	new_lab.push(tmp_lab);
	new_clos.push(tmp_clos);
	new_td.push(tmp_td);
	new_s.push(tmp_s);
	temp1 = [];
	temp2 = [];

	//处理第5品种
	for (var i = 0; i < data5.length; i++) {
		xline = data5[i].split(",");
		if (!isNaN(xline[1])) {
			lab5.push(xline[0].substr(0, 2) + "/" + xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2));
			clos5.push(parseFloat(xline[1]));
			temp1.push(parseFloat(xline[2]));
			temp2.push(parseFloat(xline[3]) * 10);
			tmp_lab = xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2);
			tmp_clos = parseFloat(xline[1]);

		}
	}

	for (var i = 0; i < temp1.length; i++) {
		zijin_td5.push(temp1[i] - temp1[0]);
		zijin_s5.push(temp2[i] - temp2[0]);
		tmp_td = temp1[i] - temp1[0];
		tmp_s = temp2[i] - temp2[0];
	}
	new_lab.push(tmp_lab);
	new_clos.push(tmp_clos);
	new_td.push(tmp_td);
	new_s.push(tmp_s);
	temp1 = [];
	temp2 = [];

	//处理第6品种
	for (var i = 0; i < data6.length; i++) {
		xline = data6[i].split(",");
		if (!isNaN(xline[1])) {
			lab6.push(xline[0].substr(0, 2) + "/" + xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2));
			clos6.push(parseFloat(xline[1]));
			temp1.push(parseFloat(xline[2]));
			temp2.push(parseFloat(xline[3]) * 10);
			tmp_lab = xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2);
			tmp_clos = parseFloat(xline[1]);

		}
	}

	for (var i = 0; i < temp1.length; i++) {
		zijin_td6.push(temp1[i] - temp1[0]);
		zijin_s6.push(temp2[i] - temp2[0]);
		tmp_td = temp1[i] - temp1[0];
		tmp_s = temp2[i] - temp2[0];
	}
	new_lab.push(tmp_lab);
	new_clos.push(tmp_clos);
	new_td.push(tmp_td);
	new_s.push(tmp_s);
	temp1 = [];
	temp2 = [];

	//处理第7品种
	for (var i = 0; i < data7.length; i++) {
		xline = data7[i].split(",");
		if (!isNaN(xline[1])) {
			lab7.push(xline[0].substr(0, 2) + "/" + xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2));
			clos7.push(parseFloat(xline[1]));
			temp1.push(parseFloat(xline[2]));
			temp2.push(parseFloat(xline[3]) * 10);
			tmp_lab = xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2);
			tmp_clos = parseFloat(xline[1]);

		}
	}

	for (var i = 0; i < temp1.length; i++) {
		zijin_td7.push(temp1[i] - temp1[0]);
		zijin_s7.push(temp2[i] - temp2[0]);
		tmp_td = temp1[i] - temp1[0];
		tmp_s = temp2[i] - temp2[0];
	}
	new_lab.push(tmp_lab);
	new_clos.push(tmp_clos);
	new_td.push(tmp_td);
	new_s.push(tmp_s);
	temp1 = [];
	temp2 = [];

	//处理第8品种
	for (var i = 0; i < data8.length; i++) {
		xline = data8[i].split(",");
		if (!isNaN(xline[1])) {
			lab8.push(xline[0].substr(0, 2) + "/" + xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2));
			clos8.push(parseFloat(xline[1]));
			temp1.push(parseFloat(xline[2]));
			temp2.push(parseFloat(xline[3]) * 10);
			tmp_lab = xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2);
			tmp_clos = parseFloat(xline[1]);

		}
	}

	for (var i = 0; i < temp1.length; i++) {
		zijin_td8.push(temp1[i] - temp1[0]);
		zijin_s8.push(temp2[i] - temp2[0]);
		tmp_td = temp1[i] - temp1[0];
		tmp_s = temp2[i] - temp2[0];
	}
	new_lab.push(tmp_lab);
	new_clos.push(tmp_clos);
	new_td.push(tmp_td);
	new_s.push(tmp_s);


	return {
		lab1: lab1,
		lab2: lab2,
		lab3: lab3,
		lab4: lab4,
		lab5: lab5,
		lab6: lab6,
		lab7: lab7,
		lab8: lab8,
		clos1: clos1,
		clos2: clos2,
		clos3: clos3,
		clos4: clos4,
		clos5: clos5,
		clos6: clos6,
		clos7: clos7,
		clos8: clos8,
		zijin_td1: zijin_td1,
		zijin_td2: zijin_td2,
		zijin_td3: zijin_td3,
		zijin_td4: zijin_td4,
		zijin_td5: zijin_td5,
		zijin_td6: zijin_td6,
		zijin_td7: zijin_td7,
		zijin_td8: zijin_td8,
		zijin_s1: zijin_s1,
		zijin_s2: zijin_s2,
		zijin_s3: zijin_s3,
		zijin_s4: zijin_s4,
		zijin_s5: zijin_s5,
		zijin_s6: zijin_s6,
		zijin_s7: zijin_s7,
		zijin_s8: zijin_s8,
		new_lab: new_lab,
		new_clos: new_clos,
		new_td: new_td,
		new_s: new_s

	};
}


//-----------------------------------------------------------------------------


function calculateEMA(dayCount, data) {
	var result = [];
	var res;
	if (dayCount > 0) {
		result.push(data[0]);
		res = data[0];
		for (var i = 1; i < data.length; i++) {
			res = (2 * data[i] + (dayCount - 1) * res) / (dayCount + 1);
			result.push(res.toFixed(2));
		}

	}

	return result;
}
//-----------------------------------------------------------------------------

function toFix(num1, num2) {
	if (typeof(num1) == 'undefined') {
		return num1
	} else {
		return Number(num1.toFixed(num2))
	}
}
//-----------------------------------------------------------------------------




function splitData_GVQJT(rawData) {
	var code = [];
	var lab1 = [];
	var lab2 = [];
	var lab3 = [];
	var lab4 = [];
	var lab5 = [];
	var lab6 = [];
	var lab7 = [];
	var lab8 = [];
	var lab9 = [];
	var lab10 = [];
	var lab11 = [];
	var lab12 = [];
	var lab13 = [];
	var lab14 = [];
	var lab15 = [];
	var lab16 = [];

	var values1 = [];
	var values2 = [];
	var values3 = [];
	var values4 = [];
	var values5 = [];
	var values6 = [];
	var values7 = [];
	var values8 = [];
	var values9 = [];
	var values10 = [];
	var values11 = [];
	var values12 = [];
	var values13 = [];
	var values14 = [];
	var values15 = [];
	var values16 = [];

	var clos1 = [];
	var clos2 = [];
	var clos3 = [];
	var clos4 = [];
	var clos5 = [];
	var clos6 = [];
	var clos7 = [];
	var clos8 = [];
	var clos9 = [];
	var clos10 = [];
	var clos11 = [];
	var clos12 = [];
	var clos13 = [];
	var clos14 = [];
	var clos15 = [];
	var clos16 = [];

	var jgcc1 = [];
	var jgcc2 = [];
	var jgcc3 = [];
	var jgcc4 = [];
	var jgcc5 = [];
	var jgcc6 = [];
	var jgcc7 = [];
	var jgcc8 = [];
	var jgcc9 = [];
	var jgcc10 = [];
	var jgcc11 = [];
	var jgcc12 = [];
	var jgcc13 = [];
	var jgcc14 = [];
	var jgcc15 = [];
	var jgcc16 = [];

	var jgbd1 = [];
	var jgbd2 = [];
	var jgbd3 = [];
	var jgbd4 = [];
	var jgbd5 = [];
	var jgbd6 = [];
	var jgbd7 = [];
	var jgbd8 = [];
	var jgbd9 = [];
	var jgbd10 = [];
	var jgbd11 = [];
	var jgbd12 = [];
	var jgbd13 = [];
	var jgbd14 = [];
	var jgbd15 = [];
	var jgbd16 = [];

	var smcc1 = [];
	var smcc2 = [];
	var smcc3 = [];
	var smcc4 = [];
	var smcc5 = [];
	var smcc6 = [];
	var smcc7 = [];
	var smcc8 = [];
	var smcc9 = [];
	var smcc10 = [];
	var smcc11 = [];
	var smcc12 = [];
	var smcc13 = [];
	var smcc14 = [];
	var smcc15 = [];
	var smcc16 = [];

	var smbd1 = [];
	var smbd2 = [];
	var smbd3 = [];
	var smbd4 = [];
	var smbd5 = [];
	var smbd6 = [];
	var smbd7 = [];
	var smbd8 = [];
	var smbd9 = [];
	var smbd10 = [];
	var smbd11 = [];
	var smbd12 = [];
	var smbd13 = [];
	var smbd14 = [];
	var smbd15 = [];
	var smbd16 = [];


	var new_lab = [];
	var new_clos = [];
	var new_td = [];
	var new_s = [];

	var data1 = [];
	var data2 = [];
	var data3 = [];
	var data4 = [];
	var data5 = [];
	var data6 = [];
	var data7 = [];
	var data8 = [];
	var data9 = [];
	var data10 = [];
	var data11 = [];
	var data12 = [];
	var data13 = [];
	var data14 = [];
	var data15 = [];
	var data16 = [];

	rawData = rawData.split("{{}}");

	data1 = rawData[0].split("\n");
	data2 = rawData[1].split("\n");
	data3 = rawData[2].split("\n");
	data4 = rawData[3].split("\n");
	data5 = rawData[4].split("\n");
	data6 = rawData[5].split("\n");
	data7 = rawData[6].split("\n");
	data8 = rawData[7].split("\n");
	data9 = rawData[8].split("\n");
	data10 = rawData[9].split("\n");
	data11 = rawData[10].split("\n");
	data12 = rawData[11].split("\n");
	data13 = rawData[12].split("\n");
	data14 = rawData[13].split("\n");
	data15 = rawData[14].split("\n");
	data16 = rawData[15].split("\n");
	//alert(rawData[1]);
	//alert(data1);
	//rawData = rawData.split("\n");
	var xline;
	var tmp_lab;
	var tmp_clos;
	var tmp_td;
	var tmp_s;
	var temp1 = [];
	var temp2 = [];
	//载入初始数据
	//处理第1品种

	/* code.push(data1[0]);  code.push(data2[0]);  code.push(data3[0]);  code.push(data4[0]);  code.push(data5[0]);
	code.push(data6[0]);  code.push(data7[0]);  code.push(data8[0]);  code.push(data9[0]);  code.push(data10[0]);
	code.push(data11[0]); code.push(data12[0]); code.push(data13[0]); code.push(data14[0]); code.push(data15[0]); 
	code.push(data16[0]); */

	//第一个品种
	for (var i = 0; i < data1.length; i++) {

		if (data1[i].length > 0) {
			if (data1[i].substr(0, 1) == ",") data1[i] = data1[i].substr(1);
			if (data1[i].indexOf("code") >= 0) code.push(data1[i].replace("code", ""));
			if (data1[i].length > 30) {
				xline = data1[i].split(",");
				if (!isNaN(xline[1])) {
					values1.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
						parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
					lab1.push(xline[0]);
					clos1.push(parseFloat(xline[1]));
					jgcc1.push(parseFloat(xline[5]));
					smcc1.push(parseFloat(xline[6]));
				}
			}
		}
	}

	jgbd1.push(0);
	smbd1.push(0);
	for (var i = 1; i < jgcc1.length; i++) {
		jgbd1.push(jgcc1[i] - jgcc1[i - 1]);
		smbd1.push(smcc1[i] - smcc1[i - 1]);
	}

	//alert(data2[2]);
	//第二个品种
	for (var i = 0; i < data2.length; i++) {
		//if (data2[i].length<10) alert(data2[i]);
		//data2[i]=data2[i].substr(1);
		if (data2[i].indexOf("code") >= 0) code.push(data2[i].replace("code", ""));
		if (data2[i].length > 30) {
			xline = data2[i].split(",");
			if (!isNaN(xline[1])) {
				values2.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab2.push(xline[0]);
				clos2.push(parseFloat(xline[1]));
				jgcc2.push(parseFloat(xline[5]));
				smcc2.push(parseFloat(xline[6]));
			}
		}

	}


	jgbd2.push(0);
	smbd2.push(0);
	for (var i = 1; i < jgcc2.length; i++) {
		jgbd2.push(jgcc2[i] - jgcc2[i - 1]);
		smbd2.push(smcc2[i] - smcc2[i - 1]);
	}

	//第三个品种
	for (var i = 0; i < data3.length; i++) {
		if (data3[i].indexOf("code") >= 0) code.push(data3[i].replace("code", ""));
		if (data3[i].length > 30) {
			xline = data3[i].split(",");
			if (!isNaN(xline[1])) {
				values3.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab3.push(xline[0]);
				clos3.push(parseFloat(xline[1]));
				jgcc3.push(parseFloat(xline[5]));
				smcc3.push(parseFloat(xline[6]));
			}
		}
	}

	jgbd3.push(0);
	smbd3.push(0);
	for (var i = 1; i < jgcc3.length; i++) {
		jgbd3.push(jgcc3[i] - jgcc3[i - 1]);
		smbd3.push(smcc3[i] - smcc3[i - 1]);
	}

	//第4个品种
	for (var i = 0; i < data4.length; i++) {
		if (data4[i].indexOf("code") >= 0) code.push(data4[i].replace("code", ""));
		if (data4[i].length > 30) {
			xline = data4[i].split(",");
			if (!isNaN(xline[1])) {
				values4.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab4.push(xline[0]);
				clos4.push(parseFloat(xline[1]));
				jgcc4.push(parseFloat(xline[5]));
				smcc4.push(parseFloat(xline[6]));
			}
		}
	}

	jgbd4.push(0);
	smbd4.push(0);
	for (var i = 1; i < jgcc4.length; i++) {
		jgbd4.push(jgcc4[i] - jgcc4[i - 1]);
		smbd4.push(smcc4[i] - smcc4[i - 1]);
	}
	//第5个品种
	for (var i = 0; i < data5.length; i++) {
		if (data5[i].indexOf("code") >= 0) code.push(data5[i].replace("code", ""));
		if (data5[i].length > 30) {
			xline = data5[i].split(",");
			if (!isNaN(xline[1])) {
				values5.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab5.push(xline[0]);
				clos5.push(parseFloat(xline[1]));
				jgcc5.push(parseFloat(xline[5]));
				smcc5.push(parseFloat(xline[6]));
			}
		}
	}

	jgbd5.push(0);
	smbd5.push(0);
	for (var i = 1; i < jgcc5.length; i++) {
		jgbd5.push(jgcc5[i] - jgcc5[i - 1]);
		smbd5.push(smcc5[i] - smcc5[i - 1]);
	}
	//第6个品种
	for (var i = 0; i < data6.length; i++) {
		if (data6[i].indexOf("code") >= 0) code.push(data6[i].replace("code", ""));
		if (data6[i].length > 30) {
			xline = data6[i].split(",");
			if (!isNaN(xline[1])) {
				values6.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab6.push(xline[0]);
				clos6.push(parseFloat(xline[1]));
				jgcc6.push(parseFloat(xline[5]));
				smcc6.push(parseFloat(xline[6]));
			}
		}
	}

	jgbd6.push(0);
	smbd6.push(0);
	for (var i = 1; i < jgcc6.length; i++) {
		jgbd6.push(jgcc6[i] - jgcc6[i - 1]);
		smbd6.push(smcc6[i] - smcc6[i - 1]);
	}
	//第7个品种
	for (var i = 0; i < data7.length; i++) {
		if (data7[i].indexOf("code") >= 0) code.push(data7[i].replace("code", ""));
		if (data7[i].length > 30) {
			xline = data7[i].split(",");
			if (!isNaN(xline[1])) {
				values7.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab7.push(xline[0]);
				clos7.push(parseFloat(xline[1]));
				jgcc7.push(parseFloat(xline[5]));
				smcc7.push(parseFloat(xline[6]));
			}
		}
	}

	jgbd7.push(0);
	smbd7.push(0);
	for (var i = 1; i < jgcc7.length; i++) {
		jgbd7.push(jgcc7[i] - jgcc7[i - 1]);
		smbd7.push(smcc7[i] - smcc7[i - 1]);
	}
	//第8个品种
	for (var i = 0; i < data8.length; i++) {
		if (data8[i].indexOf("code") >= 0) code.push(data8[i].replace("code", ""));
		if (data8[i].length > 30) {
			xline = data8[i].split(",");
			if (!isNaN(xline[1])) {
				values8.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab8.push(xline[0]);
				clos8.push(parseFloat(xline[1]));
				jgcc8.push(parseFloat(xline[5]));
				smcc8.push(parseFloat(xline[6]));
			}
		}
	}

	jgbd8.push(0);
	smbd8.push(0);
	for (var i = 1; i < jgcc8.length; i++) {
		jgbd8.push(jgcc8[i] - jgcc8[i - 1]);
		smbd8.push(smcc8[i] - smcc8[i - 1]);
	}
	//第9个品种
	for (var i = 0; i < data9.length; i++) {
		if (data9[i].indexOf("code") >= 0) code.push(data9[i].replace("code", ""));
		if (data9[i].length > 30) {
			xline = data9[i].split(",");
			if (!isNaN(xline[1])) {
				values9.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab9.push(xline[0]);
				clos9.push(parseFloat(xline[1]));
				jgcc9.push(parseFloat(xline[5]));
				smcc9.push(parseFloat(xline[6]));
			}
		}
	}
	//alert(jgcc9);

	jgbd9.push(0);
	smbd9.push(0);
	for (var i = 1; i < jgcc9.length; i++) {
		jgbd9.push(jgcc9[i] - jgcc9[i - 1]);
		smbd9.push(smcc9[i] - smcc9[i - 1]);
	}
	//第10个品种
	for (var i = 0; i < data10.length; i++) {
		if (data10[i].indexOf("code") >= 0) code.push(data10[i].replace("code", ""));
		if (data10[i].length > 30) {
			xline = data10[i].split(",");
			if (!isNaN(xline[1])) {
				values10.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab10.push(xline[0]);
				clos10.push(parseFloat(xline[1]));
				jgcc10.push(parseFloat(xline[5]));
				smcc10.push(parseFloat(xline[6]));
			}
		}
	}

	jgbd10.push(0);
	smbd10.push(0);
	for (var i = 1; i < jgcc10.length; i++) {
		jgbd10.push(jgcc10[i] - jgcc10[i - 1]);
		smbd10.push(smcc10[i] - smcc10[i - 1]);
	}
	//第11个品种
	for (var i = 0; i < data11.length; i++) {
		if (data11[i].indexOf("code") >= 0) code.push(data11[i].replace("code", ""));
		if (data11[i].length > 30) {
			xline = data11[i].split(",");
			if (!isNaN(xline[1])) {
				values11.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab11.push(xline[0]);
				clos11.push(parseFloat(xline[1]));
				jgcc11.push(parseFloat(xline[5]));
				smcc11.push(parseFloat(xline[6]));
			}
		}
	}

	jgbd11.push(0);
	smbd11.push(0);
	for (var i = 1; i < jgcc11.length; i++) {
		jgbd11.push(jgcc11[i] - jgcc11[i - 1]);
		smbd11.push(smcc11[i] - smcc11[i - 1]);
	}
	//第12个品种
	for (var i = 0; i < data12.length; i++) {
		if (data12[i].indexOf("code") >= 0) code.push(data12[i].replace("code", ""));
		if (data12[i].length > 30) {
			xline = data12[i].split(",");
			if (!isNaN(xline[1])) {
				values12.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab12.push(xline[0]);
				clos12.push(parseFloat(xline[1]));
				jgcc12.push(parseFloat(xline[5]));
				smcc12.push(parseFloat(xline[6]));
			}
		}
	}

	jgbd12.push(0);
	smbd12.push(0);
	for (var i = 1; i < jgcc12.length; i++) {
		jgbd12.push(jgcc12[i] - jgcc12[i - 1]);
		smbd12.push(smcc12[i] - smcc12[i - 1]);
	}
	//第13个品种
	for (var i = 0; i < data13.length; i++) {
		if (data13[i].indexOf("code") >= 0) code.push(data13[i].replace("code", ""));
		if (data13[i].length > 30) {
			xline = data13[i].split(",");
			if (!isNaN(xline[1])) {
				values13.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab13.push(xline[0]);
				clos13.push(parseFloat(xline[1]));
				jgcc13.push(parseFloat(xline[5]));
				smcc13.push(parseFloat(xline[6]));
			}
		}
	}

	jgbd13.push(0);
	smbd13.push(0);
	for (var i = 1; i < jgcc13.length; i++) {
		jgbd13.push(jgcc13[i] - jgcc13[i - 1]);
		smbd13.push(smcc13[i] - smcc13[i - 1]);
	}

	//第14个品种 
	for (var i = 0; i < data14.length; i++) {
		if (data14[i].indexOf("code") >= 0) code.push(data14[i].replace("code", ""));
		if (data14[i].length > 30) {
			xline = data14[i].split(",");
			if (!isNaN(xline[1])) {
				values14.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab14.push(xline[0]);
				clos14.push(parseFloat(xline[1]));
				jgcc14.push(parseFloat(xline[5]));
				smcc14.push(parseFloat(xline[6]));
			}
		}
	}

	jgbd14.push(0);
	smbd14.push(0);
	for (var i = 1; i < jgcc14.length; i++) {
		jgbd14.push(jgcc14[i] - jgcc14[i - 1]);
		smbd14.push(smcc14[i] - smcc14[i - 1]);
	}

	//第15个品种
	for (var i = 0; i < data15.length; i++) {
		if (data15[i].indexOf("code") >= 0) code.push(data15[i].replace("code", ""));
		if (data15[i].length > 30) {
			xline = data15[i].split(",");
			if (!isNaN(xline[1])) {
				values15.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab15.push(xline[0]);
				clos15.push(parseFloat(xline[1]));
				jgcc15.push(parseFloat(xline[5]));
				smcc15.push(parseFloat(xline[6]));
			}
		}
	}

	jgbd15.push(0);
	smbd15.push(0);
	for (var i = 1; i < jgcc15.length; i++) {
		jgbd15.push(jgcc15[i] - jgcc15[i - 1]);
		smbd15.push(smcc15[i] - smcc15[i - 1]);
	}

	//第16个品种
	for (var i = 0; i < data16.length; i++) {
		if (data16[i].indexOf("code") >= 0) code.push(data16[i].replace("code", ""));
		if (data16[i].length > 30) {
			xline = data16[i].split(",");
			if (!isNaN(xline[1])) {
				values16.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab16.push(xline[0]);
				clos16.push(parseFloat(xline[1]));
				jgcc16.push(parseFloat(xline[5]));
				smcc16.push(parseFloat(xline[6]));
			}
		}
	}

	jgbd16.push(0);
	smbd16.push(0);
	for (var i = 1; i < jgcc16.length; i++) {
		jgbd16.push(jgcc16[i] - jgcc16[i - 1]);
		smbd16.push(smcc16[i] - smcc16[i - 1]);
	}

	values1 = "[" + values1 + "]";
	values1 = eval(values1);
	values2 = "[" + values2 + "]";
	values2 = eval(values2);
	values3 = "[" + values3 + "]";
	values3 = eval(values3);
	values4 = "[" + values4 + "]";
	values4 = eval(values4);
	values5 = "[" + values5 + "]";
	values5 = eval(values5);
	values6 = "[" + values6 + "]";
	values6 = eval(values6);
	values7 = "[" + values7 + "]";
	values7 = eval(values7);
	values8 = "[" + values8 + "]";
	values8 = eval(values8);
	values9 = "[" + values9 + "]";
	values9 = eval(values9);
	values10 = "[" + values10 + "]";
	values10 = eval(values10);
	values11 = "[" + values11 + "]";
	values11 = eval(values11);
	values12 = "[" + values12 + "]";
	values12 = eval(values12);
	values13 = "[" + values13 + "]";
	values13 = eval(values13);
	values14 = "[" + values14 + "]";
	values14 = eval(values14);
	values15 = "[" + values15 + "]";
	values15 = eval(values15);
	values16 = "[" + values16 + "]";
	values16 = eval(values16);


	return {
		lab1: lab1,
		lab2: lab2,
		lab3: lab3,
		lab4: lab4,
		lab5: lab5,
		lab6: lab6,
		lab7: lab7,
		lab8: lab8,
		lab9: lab9,
		lab10: lab10,
		lab11: lab11,
		lab12: lab12,
		lab13: lab13,
		lab14: lab14,
		lab15: lab15,
		lab16: lab16,
		clos1: clos1,
		clos2: clos2,
		clos3: clos3,
		clos4: clos4,
		clos5: clos5,
		clos6: clos6,
		clos7: clos7,
		clos8: clos8,
		clos9: clos9,
		clos10: clos10,
		clos11: clos11,
		clos12: clos12,
		clos13: clos13,
		clos14: clos14,
		clos15: clos15,
		clos16: clos16,
		jgcc1: jgcc1,
		jgcc2: jgcc2,
		jgcc3: jgcc3,
		jgcc4: jgcc4,
		jgcc5: jgcc5,
		jgcc6: jgcc6,
		jgcc7: jgcc7,
		jgcc8: jgcc8,
		jgcc9: jgcc9,
		jgcc10: jgcc10,
		jgcc11: jgcc11,
		jgcc12: jgcc12,
		jgcc13: jgcc13,
		jgcc14: jgcc14,
		jgcc15: jgcc15,
		jgcc16: jgcc16,
		jgbd1: jgbd1,
		jgbd2: jgbd2,
		jgbd3: jgbd3,
		jgbd4: jgbd4,
		jgbd5: jgbd5,
		jgbd6: jgbd6,
		jgbd7: jgbd7,
		jgbd8: jgbd8,
		jgbd9: jgbd9,
		jgbd10: jgbd10,
		jgbd11: jgbd11,
		jgbd12: jgbd12,
		jgbd13: jgbd13,
		jgbd14: jgbd14,
		jgbd15: jgbd15,
		jgbd16: jgbd16,
		smcc1: smcc1,
		smcc2: smcc2,
		smcc3: smcc3,
		smcc4: smcc4,
		smcc5: smcc5,
		smcc6: smcc6,
		smcc7: smcc7,
		smcc8: smcc8,
		smcc9: smcc9,
		smcc10: smcc10,
		smcc11: smcc11,
		smcc12: smcc12,
		smcc13: smcc13,
		smcc14: smcc14,
		smcc15: smcc15,
		smcc16: smcc16,
		smbd1: smbd1,
		smbd2: smbd2,
		smbd3: smbd3,
		smbd4: smbd4,
		smbd5: smbd5,
		smbd6: smbd6,
		smbd7: smbd7,
		smbd8: smbd8,
		smbd9: smbd9,
		smbd10: smbd10,
		smbd11: smbd11,
		smbd12: smbd12,
		smbd13: smbd13,
		smbd14: smbd14,
		smbd15: smbd15,
		smbd16: smbd16,
		values1: values1,
		values2: values2,
		values3: values3,
		values4: values4,
		values5: values5,
		values6: values6,
		values7: values7,
		values8: values8,
		values9: values9,
		values10: values10,
		values11: values11,
		values12: values12,
		values13: values13,
		values14: values14,
		values15: values15,
		values16: values16,
		new_lab: new_lab,
		new_clos: new_clos,
		new_td: new_td,
		new_s: new_s,
		code: code

	};
}
//-----------------------------------------------------------------------------

function toName(code) {
	var nam;
	nam = "2";
	code = code.replace("2", "");
	code = code.replace("1", "");
	code = code.replace(/[\r\n]/g, "");

	//  alert(code+"ag");
	if (typeof(code) == 'undefined') {
		nam = code;
	} else {
		if (code == 'ag') {
			nam = "沪银";
			// alert("aaa");
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
		}

	}
	return nam;
}
//-----------------------------------------------------------------------------

function toNF(code) {
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

function splitData_CCQJT(rawData) {
	var code = [];
	var lab1 = [];
	var lab2 = [];
	var lab3 = [];
	var lab4 = [];
	var lab5 = [];
	var lab6 = [];
	var lab7 = [];
	var lab8 = [];
	var lab9 = [];
	var lab10 = [];
	var lab11 = [];
	var lab12 = [];
	var lab13 = [];
	var lab14 = [];
	var lab15 = [];
	var lab16 = [];

	var values1 = [];
	var values2 = [];
	var values3 = [];
	var values4 = [];
	var values5 = [];
	var values6 = [];
	var values7 = [];
	var values8 = [];
	var values9 = [];
	var values10 = [];
	var values11 = [];
	var values12 = [];
	var values13 = [];
	var values14 = [];
	var values15 = [];
	var values16 = [];

	var clos1 = [];
	var clos2 = [];
	var clos3 = [];
	var clos4 = [];
	var clos5 = [];
	var clos6 = [];
	var clos7 = [];
	var clos8 = [];
	var clos9 = [];
	var clos10 = [];
	var clos11 = [];
	var clos12 = [];
	var clos13 = [];
	var clos14 = [];
	var clos15 = [];
	var clos16 = [];

	var jgcc1 = [];
	var jgcc2 = [];
	var jgcc3 = [];
	var jgcc4 = [];
	var jgcc5 = [];
	var jgcc6 = [];
	var jgcc7 = [];
	var jgcc8 = [];
	var jgcc9 = [];
	var jgcc10 = [];
	var jgcc11 = [];
	var jgcc12 = [];
	var jgcc13 = [];
	var jgcc14 = [];
	var jgcc15 = [];
	var jgcc16 = [];

	var jgbd1 = [];
	var jgbd2 = [];
	var jgbd3 = [];
	var jgbd4 = [];
	var jgbd5 = [];
	var jgbd6 = [];
	var jgbd7 = [];
	var jgbd8 = [];
	var jgbd9 = [];
	var jgbd10 = [];
	var jgbd11 = [];
	var jgbd12 = [];
	var jgbd13 = [];
	var jgbd14 = [];
	var jgbd15 = [];
	var jgbd16 = [];

	var smcc1 = [];
	var smcc2 = [];
	var smcc3 = [];
	var smcc4 = [];
	var smcc5 = [];
	var smcc6 = [];
	var smcc7 = [];
	var smcc8 = [];
	var smcc9 = [];
	var smcc10 = [];
	var smcc11 = [];
	var smcc12 = [];
	var smcc13 = [];
	var smcc14 = [];
	var smcc15 = [];
	var smcc16 = [];

	var smbd1 = [];
	var smbd2 = [];
	var smbd3 = [];
	var smbd4 = [];
	var smbd5 = [];
	var smbd6 = [];
	var smbd7 = [];
	var smbd8 = [];
	var smbd9 = [];
	var smbd10 = [];
	var smbd11 = [];
	var smbd12 = [];
	var smbd13 = [];
	var smbd14 = [];
	var smbd15 = [];
	var smbd16 = [];


	var new_lab = [];
	var new_clos = [];
	var new_td = [];
	var new_s = [];

	var data1 = [];
	var data2 = [];
	var data3 = [];
	var data4 = [];
	var data5 = [];
	var data6 = [];
	var data7 = [];
	var data8 = [];
	var data9 = [];
	var data10 = [];
	var data11 = [];
	var data12 = [];
	var data13 = [];
	var data14 = [];
	var data15 = [];
	var data16 = [];

	rawData = rawData.split("{{}}");

	data1 = rawData[0].split("\n");
	data2 = rawData[1].split("\n");
	data3 = rawData[2].split("\n");
	data4 = rawData[3].split("\n");
	data5 = rawData[4].split("\n");
	data6 = rawData[5].split("\n");
	data7 = rawData[6].split("\n");
	data8 = rawData[7].split("\n");
	data9 = rawData[8].split("\n");
	data10 = rawData[9].split("\n");
	data11 = rawData[10].split("\n");
	data12 = rawData[11].split("\n");
	data13 = rawData[12].split("\n");
	data14 = rawData[13].split("\n");
	data15 = rawData[14].split("\n");
	data16 = rawData[15].split("\n");
	//alert(rawData[1]);
	//alert(data1);
	//rawData = rawData.split("\n");
	var xline;
	var tmp_lab;
	var tmp_clos;
	var tmp_td;
	var tmp_s;
	var temp1 = [];
	var temp2 = [];
	//载入初始数据
	//处理第1品种

	/* code.push(data1[0]);  code.push(data2[0]);  code.push(data3[0]);  code.push(data4[0]);  code.push(data5[0]);
	code.push(data6[0]);  code.push(data7[0]);  code.push(data8[0]);  code.push(data9[0]);  code.push(data10[0]);
	code.push(data11[0]); code.push(data12[0]); code.push(data13[0]); code.push(data14[0]); code.push(data15[0]); 
	code.push(data16[0]); */

	//第一个品种
	for (var i = 0; i < data1.length; i++) {

		if (data1[i].length > 0) {
			if (data1[i].substr(0, 1) == ",") data1[i] = data1[i].substr(1);
			if (data1[i].indexOf("code") >= 0) code.push(data1[i].replace("code", ""));
			if (data1[i].length > 30) {
				xline = data1[i].split(",");
				if (!isNaN(xline[1])) {
					values1.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
						parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
					lab1.push(xline[0]);
					clos1.push(parseFloat(xline[1]));
					jgcc1.push(parseFloat(xline[5]));
					smcc1.push(parseFloat(xline[7]));
					jgbd1.push(parseFloat(xline[6]));
					smbd1.push(parseFloat(xline[8]));
				}
			}
		}
	}

	//第二个品种
	for (var i = 0; i < data2.length; i++) {
		//if (data2[i].length<10) alert(data2[i]);
		//data2[i]=data2[i].substr(1);
		if (data2[i].indexOf("code") >= 0) code.push(data2[i].replace("code", ""));
		if (data2[i].length > 30) {
			xline = data2[i].split(",");
			if (!isNaN(xline[1])) {
				values2.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab2.push(xline[0]);
				clos2.push(parseFloat(xline[1]));
				jgcc2.push(parseFloat(xline[5]));
				smcc2.push(parseFloat(xline[7]));
				jgbd2.push(parseFloat(xline[6]));
				smbd2.push(parseFloat(xline[8]));
			}
		}

	}



	//第三个品种
	for (var i = 0; i < data3.length; i++) {
		if (data3[i].indexOf("code") >= 0) code.push(data3[i].replace("code", ""));
		if (data3[i].length > 30) {
			xline = data3[i].split(",");
			if (!isNaN(xline[1])) {
				values3.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab3.push(xline[0]);
				clos3.push(parseFloat(xline[1]));
				jgcc3.push(parseFloat(xline[5]));
				smcc3.push(parseFloat(xline[7]));
				jgbd3.push(parseFloat(xline[6]));
				smbd3.push(parseFloat(xline[8]));
			}
		}
	}



	//第4个品种
	for (var i = 0; i < data4.length; i++) {
		if (data4[i].indexOf("code") >= 0) code.push(data4[i].replace("code", ""));
		if (data4[i].length > 30) {
			xline = data4[i].split(",");
			if (!isNaN(xline[1])) {
				values4.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab4.push(xline[0]);
				clos4.push(parseFloat(xline[1]));
				jgcc4.push(parseFloat(xline[5]));
				smcc4.push(parseFloat(xline[7]));
				jgbd4.push(parseFloat(xline[6]));
				smbd4.push(parseFloat(xline[8]));
			}
		}
	}


	//第5个品种
	for (var i = 0; i < data5.length; i++) {
		if (data5[i].indexOf("code") >= 0) code.push(data5[i].replace("code", ""));
		if (data5[i].length > 30) {
			xline = data5[i].split(",");
			if (!isNaN(xline[1])) {
				values5.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab5.push(xline[0]);
				clos5.push(parseFloat(xline[1]));
				jgcc5.push(parseFloat(xline[5]));
				smcc5.push(parseFloat(xline[7]));
				jgbd5.push(parseFloat(xline[6]));
				smbd5.push(parseFloat(xline[8]));
			}
		}
	}


	//第6个品种
	for (var i = 0; i < data6.length; i++) {
		if (data6[i].indexOf("code") >= 0) code.push(data6[i].replace("code", ""));
		if (data6[i].length > 30) {
			xline = data6[i].split(",");
			if (!isNaN(xline[1])) {
				values6.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab6.push(xline[0]);
				clos6.push(parseFloat(xline[1]));
				jgcc6.push(parseFloat(xline[5]));
				smcc6.push(parseFloat(xline[7]));
				jgbd6.push(parseFloat(xline[6]));
				smbd6.push(parseFloat(xline[8]));
			}
		}
	}


	//第7个品种
	for (var i = 0; i < data7.length; i++) {
		if (data7[i].indexOf("code") >= 0) code.push(data7[i].replace("code", ""));
		if (data7[i].length > 30) {
			xline = data7[i].split(",");
			if (!isNaN(xline[1])) {
				values7.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab7.push(xline[0]);
				clos7.push(parseFloat(xline[1]));
				jgcc7.push(parseFloat(xline[5]));
				smcc7.push(parseFloat(xline[7]));
				jgbd7.push(parseFloat(xline[6]));
				smbd7.push(parseFloat(xline[8]));
			}
		}
	}


	//第8个品种
	for (var i = 0; i < data8.length; i++) {
		if (data8[i].indexOf("code") >= 0) code.push(data8[i].replace("code", ""));
		if (data8[i].length > 30) {
			xline = data8[i].split(",");
			if (!isNaN(xline[1])) {
				values8.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab8.push(xline[0]);
				clos8.push(parseFloat(xline[1]));
				jgcc8.push(parseFloat(xline[5]));
				smcc8.push(parseFloat(xline[7]));
				jgbd8.push(parseFloat(xline[6]));
				smbd8.push(parseFloat(xline[8]));
			}
		}
	}


	//第9个品种
	for (var i = 0; i < data9.length; i++) {
		if (data9[i].indexOf("code") >= 0) code.push(data9[i].replace("code", ""));
		if (data9[i].length > 30) {
			xline = data9[i].split(",");
			if (!isNaN(xline[1])) {
				values9.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab9.push(xline[0]);
				clos9.push(parseFloat(xline[1]));
				jgcc9.push(parseFloat(xline[5]));
				smcc9.push(parseFloat(xline[7]));
				jgbd9.push(parseFloat(xline[6]));
				smbd9.push(parseFloat(xline[8]));
			}
		}
	}
	//alert(jgcc9);


	//第10个品种
	for (var i = 0; i < data10.length; i++) {
		if (data10[i].indexOf("code") >= 0) code.push(data10[i].replace("code", ""));
		if (data10[i].length > 30) {
			xline = data10[i].split(",");
			if (!isNaN(xline[1])) {
				values10.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab10.push(xline[0]);
				clos10.push(parseFloat(xline[1]));
				jgcc10.push(parseFloat(xline[5]));
				smcc10.push(parseFloat(xline[7]));
				jgbd10.push(parseFloat(xline[6]));
				smbd10.push(parseFloat(xline[8]));
			}
		}
	}


	//第11个品种
	for (var i = 0; i < data11.length; i++) {
		if (data11[i].indexOf("code") >= 0) code.push(data11[i].replace("code", ""));
		if (data11[i].length > 30) {
			xline = data11[i].split(",");
			if (!isNaN(xline[1])) {
				values11.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab11.push(xline[0]);
				clos11.push(parseFloat(xline[1]));
				jgcc11.push(parseFloat(xline[5]));
				smcc11.push(parseFloat(xline[7]));
				jgbd11.push(parseFloat(xline[6]));
				smbd11.push(parseFloat(xline[8]));
			}
		}
	}


	//第12个品种
	for (var i = 0; i < data12.length; i++) {
		if (data12[i].indexOf("code") >= 0) code.push(data12[i].replace("code", ""));
		if (data12[i].length > 30) {
			xline = data12[i].split(",");
			if (!isNaN(xline[1])) {
				values12.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab12.push(xline[0]);
				clos12.push(parseFloat(xline[1]));
				jgcc12.push(parseFloat(xline[5]));
				smcc12.push(parseFloat(xline[7]));
				jgbd12.push(parseFloat(xline[6]));
				smbd12.push(parseFloat(xline[8]));
			}
		}
	}


	//第13个品种
	for (var i = 0; i < data13.length; i++) {
		if (data13[i].indexOf("code") >= 0) code.push(data13[i].replace("code", ""));
		if (data13[i].length > 30) {
			xline = data13[i].split(",");
			if (!isNaN(xline[1])) {
				values13.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab13.push(xline[0]);
				clos13.push(parseFloat(xline[1]));
				jgcc13.push(parseFloat(xline[5]));
				smcc13.push(parseFloat(xline[7]));
				jgbd13.push(parseFloat(xline[6]));
				smbd13.push(parseFloat(xline[8]));
			}
		}
	}



	//第14个品种 
	for (var i = 0; i < data14.length; i++) {
		if (data14[i].indexOf("code") >= 0) code.push(data14[i].replace("code", ""));
		if (data14[i].length > 30) {
			xline = data14[i].split(",");
			if (!isNaN(xline[1])) {
				values14.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab14.push(xline[0]);
				clos14.push(parseFloat(xline[1]));
				jgcc14.push(parseFloat(xline[5]));
				smcc14.push(parseFloat(xline[7]));
				jgbd14.push(parseFloat(xline[6]));
				smbd14.push(parseFloat(xline[8]));
			}
		}
	}



	//第15个品种
	for (var i = 0; i < data15.length; i++) {
		if (data15[i].indexOf("code") >= 0) code.push(data15[i].replace("code", ""));
		if (data15[i].length > 30) {
			xline = data15[i].split(",");
			if (!isNaN(xline[1])) {
				values15.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab15.push(xline[0]);
				clos15.push(parseFloat(xline[1]));
				jgcc15.push(parseFloat(xline[5]));
				smcc15.push(parseFloat(xline[7]));
				jgbd15.push(parseFloat(xline[6]));
				smbd15.push(parseFloat(xline[8]));
			}
		}
	}



	//第16个品种
	for (var i = 0; i < data16.length; i++) {
		if (data16[i].indexOf("code") >= 0) code.push(data16[i].replace("code", ""));
		if (data16[i].length > 30) {
			xline = data16[i].split(",");
			if (!isNaN(xline[1])) {
				values16.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				lab16.push(xline[0]);
				clos16.push(parseFloat(xline[1]));
				jgcc16.push(parseFloat(xline[5]));
				smcc16.push(parseFloat(xline[7]));
				jgbd16.push(parseFloat(xline[6]));
				smbd16.push(parseFloat(xline[8]));
			}
		}
	}




	values1 = "[" + values1 + "]";
	values1 = eval(values1);
	values2 = "[" + values2 + "]";
	values2 = eval(values2);
	values3 = "[" + values3 + "]";
	values3 = eval(values3);
	values4 = "[" + values4 + "]";
	values4 = eval(values4);
	values5 = "[" + values5 + "]";
	values5 = eval(values5);
	values6 = "[" + values6 + "]";
	values6 = eval(values6);
	values7 = "[" + values7 + "]";
	values7 = eval(values7);
	values8 = "[" + values8 + "]";
	values8 = eval(values8);
	values9 = "[" + values9 + "]";
	values9 = eval(values9);
	values10 = "[" + values10 + "]";
	values10 = eval(values10);
	values11 = "[" + values11 + "]";
	values11 = eval(values11);
	values12 = "[" + values12 + "]";
	values12 = eval(values12);
	values13 = "[" + values13 + "]";
	values13 = eval(values13);
	values14 = "[" + values14 + "]";
	values14 = eval(values14);
	values15 = "[" + values15 + "]";
	values15 = eval(values15);
	values16 = "[" + values16 + "]";
	values16 = eval(values16);


	return {
		lab1: lab1,
		lab2: lab2,
		lab3: lab3,
		lab4: lab4,
		lab5: lab5,
		lab6: lab6,
		lab7: lab7,
		lab8: lab8,
		lab9: lab9,
		lab10: lab10,
		lab11: lab11,
		lab12: lab12,
		lab13: lab13,
		lab14: lab14,
		lab15: lab15,
		lab16: lab16,
		clos1: clos1,
		clos2: clos2,
		clos3: clos3,
		clos4: clos4,
		clos5: clos5,
		clos6: clos6,
		clos7: clos7,
		clos8: clos8,
		clos9: clos9,
		clos10: clos10,
		clos11: clos11,
		clos12: clos12,
		clos13: clos13,
		clos14: clos14,
		clos15: clos15,
		clos16: clos16,
		jgcc1: jgcc1,
		jgcc2: jgcc2,
		jgcc3: jgcc3,
		jgcc4: jgcc4,
		jgcc5: jgcc5,
		jgcc6: jgcc6,
		jgcc7: jgcc7,
		jgcc8: jgcc8,
		jgcc9: jgcc9,
		jgcc10: jgcc10,
		jgcc11: jgcc11,
		jgcc12: jgcc12,
		jgcc13: jgcc13,
		jgcc14: jgcc14,
		jgcc15: jgcc15,
		jgcc16: jgcc16,
		jgbd1: jgbd1,
		jgbd2: jgbd2,
		jgbd3: jgbd3,
		jgbd4: jgbd4,
		jgbd5: jgbd5,
		jgbd6: jgbd6,
		jgbd7: jgbd7,
		jgbd8: jgbd8,
		jgbd9: jgbd9,
		jgbd10: jgbd10,
		jgbd11: jgbd11,
		jgbd12: jgbd12,
		jgbd13: jgbd13,
		jgbd14: jgbd14,
		jgbd15: jgbd15,
		jgbd16: jgbd16,
		smcc1: smcc1,
		smcc2: smcc2,
		smcc3: smcc3,
		smcc4: smcc4,
		smcc5: smcc5,
		smcc6: smcc6,
		smcc7: smcc7,
		smcc8: smcc8,
		smcc9: smcc9,
		smcc10: smcc10,
		smcc11: smcc11,
		smcc12: smcc12,
		smcc13: smcc13,
		smcc14: smcc14,
		smcc15: smcc15,
		smcc16: smcc16,
		smbd1: smbd1,
		smbd2: smbd2,
		smbd3: smbd3,
		smbd4: smbd4,
		smbd5: smbd5,
		smbd6: smbd6,
		smbd7: smbd7,
		smbd8: smbd8,
		smbd9: smbd9,
		smbd10: smbd10,
		smbd11: smbd11,
		smbd12: smbd12,
		smbd13: smbd13,
		smbd14: smbd14,
		smbd15: smbd15,
		smbd16: smbd16,
		values1: values1,
		values2: values2,
		values3: values3,
		values4: values4,
		values5: values5,
		values6: values6,
		values7: values7,
		values8: values8,
		values9: values9,
		values10: values10,
		values11: values11,
		values12: values12,
		values13: values13,
		values14: values14,
		values15: values15,
		values16: values16,
		new_lab: new_lab,
		new_clos: new_clos,
		new_td: new_td,
		new_s: new_s,
		code: code

	};
}
//-----------------------------------------------------------------------------

function InCodetoStd(code, list) {
	var res;
	var rawData = [];
	var rcode = [];
	var tmp = [];
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


	return res;

}
//-----------------------------------------------------------------------------
function splitData_BKLD(rawData) {
	var bkind = [];
	var bk = [];
	var cct = [];
	var ccs = [];
	var ccc = [];

	rawData = rawData.split("\n");
	//alert(rawData.length);
	var xline;

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[2])) {
			cct.push(parseFloat(xline[6]));
			ccs.push(parseFloat(xline[7]));
			ccc.push(0 - parseFloat(xline[9]));

		}
	}

	var fmax = -100000,
		fmin = 100000;
	for (var i = 0; i < cct.length; i++) {
		if (cct[i] >= fmax) {
			fmax = cct[i];
		}
		if (ccs[i] >= fmax) {
			fmax = ccs[i];
		}
		if (ccc[i] >= fmax) {
			fmax = ccc[i];
		}

		if (cct[i] <= fmin) {
			fmin = cct[i];
		}
		if (ccs[i] <= fmin) {
			fmin = ccs[i];
		}
		if (ccc[i] <= fmin) {
			fmin = ccc[i];
		}

	}

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[2])) {
			bk.push(xline[0]);
			bkind.push("{name:'" + xline[0] + "',max:" + fmax + ",min:" + fmin + "}")

		}
	}

	bkind = "[" + bkind + "]";
	bkind = eval(bkind);

	//bk = "[" + bk + "]";     bk = eval(bk);  alert( bk);
	//cct = "[" + cct + "]";     cct = eval(cct);
	//ccs = "[" + ccs + "]";     ccs = eval(ccs);
	//ccc = "[" + ccc + "]";     ccc = eval(ccc);

	return {
		bkind: bkind,
		bk: bk,
		cct: cct,
		ccs: ccs,
		ccc: ccc

	};
}
//-----------------------------------------------------------------------------
function splitData_BKXW(rawData) {
	var dat = [];
	var bk = [];
	var cct = []; //机构T
	var ccs = []; //私募S
	var ccg = []; //大户G
	var ccc = []; //散户C
	var cca = []; //中户A
	var cct_bd = []; //机构T变动
	var ccs_bd = []; //私募S变动
	var ccg_bd = []; //大户G变动
	var ccc_bd = []; //散户C变动
	var cca_bd = []; //中户A变动
	var values = [];

	rawData = rawData.split("{{}}");
	//alert(rawData.length);
	var xline;

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[2])) {
			bk.push(xline[0]);
			dat.push(xline[1]);
			cct.push(parseFloat(xline[6]));
			ccs.push(parseFloat(xline[7]));
			ccg.push(parseFloat(xline[8]));
			ccc.push(parseFloat(xline[9]));
			cca.push(parseFloat(xline[10]));
			//开盘(open)，收盘(close)，最低(lowest)，最高(highest)
			values.push("[" + parseFloat(xline[5]) + "," + parseFloat(xline[2]) + "," +
				parseFloat(xline[4]) + "," + parseFloat(xline[3]) + "]");

		}
	}


	cct_bd.push(0);
	ccs_bd.push(0);
	ccg_bd.push(0);
	cca_bd.push(0);
	ccc_bd.push(0);
	for (var i = 1; i < cct.length; i++) {

		cct_bd.push(cct[i] - cct[i - 1]);
		ccs_bd.push(ccs[i] - ccs[i - 1]);
		ccg_bd.push(ccg[i] - ccg[i - 1]);
		cca_bd.push(cca[i] - cca[i - 1]);
		ccc_bd.push(ccc[i] - ccc[i - 1]);
	}



	values = "[" + values + "]";
	values = eval(values);

	return {
		values: values,
		dat: dat,
		bk: bk,
		cct: cct,
		ccs: ccs,
		ccg: ccg,
		ccc: ccc,
		cca: cca,
		cct_bd: cct_bd,
		ccs_bd: ccs_bd,
		ccg_bd: ccg_bd,
		cca_bd: cca_bd,
		ccc_bd: ccc_bd,

	};
}
//-----------------------------------------------------------------------------
function splitData_QJT_BC(rawData) {
	var lab = [];
	var code = [];
	var clos = [];
	var zijin_td = [];
	var zijin_s = [];
	
	var ilab = [];
	var iclos = [];
	var izijin_td = [];
	var izijin_s = []; 
	
	var orgdata = rawData.split("\n");
	
	var icode=0;
	for (var i = 0; i < orgdata.length; i++) {
 
		if (orgdata[i].length>0){
			if (orgdata[i].includes("{{}}")){
				code[icode]=orgdata[i].replace("{{}}","").trim();
				lab[icode]=ilab;
				clos[icode]=iclos;
				zijin_td[icode]=izijin_td;
				zijin_s[icode]=izijin_s;
				
				icode++;
				ilab = [];
				iclos = [];
				izijin_td = [];
				izijin_s = []; 
			} else {
				xline = orgdata[i].split(",");
				if (!isNaN(xline[1])) {
					ilab.push(xline[0].substr(0, 2) + "/" + xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2));
					iclos.push(parseFloat(xline[1]));
					izijin_td.push(parseFloat(xline[2]));
					izijin_s.push(parseFloat(xline[3]) * 10);
 
				}
			}	
		}
  
	} 

 

	return {
		code: code,
		lab: lab,
		clos: clos,
		zijin_td: zijin_td,
		zijin_s: zijin_s,
	};
}


//-----------------------------------------------------------------------------
function splitData_QJT_NEW(rawData,ls) {
	
	//console.log(ls[0]) ;
	 
	var newlab = [];
	var newclos = [];
	var newzijin_td = [];
	var newzijin_s = [];
	
	 
	
	var orgdata = rawData.split("\n");
	
	for (var i = 0; i < ls.length; i++) {
	    var icode = ls[i];
		  
		for (var j = 0; j < orgdata.length; j++) {	
			 
			var xline = orgdata[j].split(",");
			 
			if (xline[0].trim() == icode.trim()){
				 //console.log(xline[0] +"  "+icode);
				
				if (!isNaN(xline[2])) {
				     newlab.push(xline[1].substr(0, 2) + "/" + xline[1].substr(2, 2) + ":" + xline[1].substr(4, 2)) ;
					 newclos.push(parseFloat(xline[2])) ;
					 newzijin_td.push(parseFloat(xline[3])) ;
					 newzijin_s.push(parseFloat(xline[4])*10) ;
				}
				break;
			}
		}	 
		
	}
  
    // console.log(newclos);
 

	return {
		newlab: newlab,
		newclos: newclos,
		newzijin_td: newzijin_td,
		newzijin_s: newzijin_s,
	};
}

//-----------------------------------------------------------------------------
function Fun_EMA(dayCount, data) {
    var result = [];
    var res;
    if (dayCount > 0) {
        result.push(data[0]);
        res = data[0];
        for (var i = 1; i < data.length; i++) {
            res = (2 * data[i] + (dayCount - 1) * res) / (dayCount + 1);
            result.push(res.toFixed(2));
        }

    }

    return result;
}

//-------------------------------------------------------------------------------
function splitData_DXW_BC(rawData) {
	var lab = [];
	var code = [];
	var clos = [];
	var ope = [];
	var hig = [];
	var lo = [];
	var zijin_td = [];
	var zijin_s = [];
	
	var ilab = [];
	var iclos = [];
	var iope = [];
	var ihig = [];
	var ilo = [];
	var izijin_td = [];
	var izijin_s = []; 
	
	var orgdata = rawData.split("\n");
	
	var icode=0;
	for (var i = 0; i < orgdata.length; i++) {
 
		if (orgdata[i].length>0){
			if (orgdata[i].includes("{{}}")){
				code[icode]=orgdata[i].replace("{{}}","").trim();
				lab[icode]=ilab;
				clos[icode]=iclos;
				ope[icode]=iope;
				hig[icode]=ihig;
				lo[icode]=ilo;
				zijin_td[icode]=izijin_td;
				zijin_s[icode]=izijin_s;
				
				icode++;
				ilab = [];
				iclos = [];
				ihig = [];
				ilo = [];
				iope = [];
				izijin_td = [];
				izijin_s = []; 
			} else {
				xline = orgdata[i].split(",");
				if (!isNaN(xline[1])) {
					ilab.push(xline[0].substr(0, 2) + "/" + xline[0].substr(2, 2) + ":" + xline[0].substr(4, 2));
					iclos.push(parseFloat(xline[4]));
					iope.push(parseFloat(xline[1]));
					ihig.push(parseFloat(xline[2]));
					ilo.push(parseFloat(xline[3]));
										
					izijin_td.push(parseFloat(xline[5]));
					izijin_s.push(parseFloat(xline[6]) * 10);
 
				}
			}	
		}
  
	} 

 

	return {
		code: code,
		lab: lab,
		clos: clos,
		ope: ope,
		hig: hig,
		lo: lo,
		zijin_td: zijin_td,
		zijin_s: zijin_s,
	};
}


//-----------------------------------------------------------------------------

function splitData_DXW_NEW(rawData,ls) {
	
	//console.log(ls[0]) ;
	 
	var newlab = [];
	var newclos = [];
	var newope = [];
	var newhig = [];
	var newlo = [];
	var newzijin_td = [];
	var newzijin_s = [];
	
	 
	
	var orgdata = rawData.split("\n");
	
	for (var i = 0; i < ls.length; i++) {
	    var icode = ls[i];
		  
		for (var j = 0; j < orgdata.length; j++) {	
			 
			var xline = orgdata[j].split(",");
			 
			if (xline[0].trim() == icode.trim()){
				 //console.log(xline[0] +"  "+icode);
				
				if (!isNaN(xline[2])) {
				     newlab.push(xline[1].substr(0, 2) + "/" + xline[1].substr(2, 2) + ":" + xline[1].substr(4, 2)) ;
					 newclos.push(parseFloat(xline[5])) ;
					 newope.push(parseFloat(xline[2])) ;
					 newhig.push(parseFloat(xline[3])) ;
					 newlo.push(parseFloat(xline[4])) ;
					 
					 newzijin_td.push(parseFloat(xline[6])) ;
					 newzijin_s.push(parseFloat(xline[7])*10) ;
				}
				break;
			}
		}	 
		
	}
  
    // console.log(newclos);
 

	return {
		newlab: newlab,
		newclos: newclos,
		newope: newope,
		newhig: newhig,
		newlo: newlo,
		newzijin_td: newzijin_td,
		newzijin_s: newzijin_s,
	};
}
//-----------------------------------------------------------------------------
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
        bcs = Fun_HHV_DD(hh, NN, i) - Fun_LLV_DD(ll, NN, i);
        if (Math.abs(bcs) > 0.0001) {
            xx1.push((spj[i] - Fun_LLV_DD(ll, NN, i)) / bcs * 100);
        } else {
            xx1.push(0);
        }
    }

    xx2 = Fun_SMA_DD(xx1, 5, 1);
    xx3 = Fun_SMA_DD(xx2, 3, 1);


    for (var i = 0; i <= pcount - 1; i++) {
        temp.push(xx2[i] * 3 - xx3[i] * 2);
    }

    d1 = Fun_EMA_DD(temp, 5);
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
                di.push(30);
            } else {
                di.push(-30);
            }

            if ((d1[i] < d2[i]) && (d1[i - 1] >= d2[i - 1]) && (d2[i] > 85)) {
                ding.push(70);
            } else {
                ding.push(120);
            }
        }
    }

    nl = "[" + nl + "]";
    nl = eval(nl);

    return {
        d1: d1,
        d2: d2,
        nl: nl,
        ding: ding,
        di: di
    };


}


//-----------------------------------------------------------------------------
//最大值
function Fun_HHV_DD(hhh, nn, sto) {
    var res;
    var temp;
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
    return res;
}

//-----------------------------------------------------------------------------
//最小值
function Fun_LLV_DD(lll, nn, sto) {
    var res;
    var temp;
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
    return res;
}

//-----------------------------------------------------------------------------
//SMA
function Fun_SMA_DD(ff, nn, mm) {
    var res = [];
    var temp;
    res.push(ff[0]);
    if (ff.length > 0) {
        for (var i = 1; i < ff.length; i++) {
            temp = (mm * ff[i] + (nn - mm) * res[i - 1]) / nn;
            res.push(temp);
        }
    }

    return res;

}

//-------------------------------------------------------------------------------
//EMA
function Fun_EMA_DD(ff, nn) {
    var res = [];
    var temp;
    res.push(ff[0]);
    if (ff.length > 0) {
        for (var i = 1; i < ff.length; i++) {
            temp = (2 * ff[i] + (nn - 1) * res[i - 1]) / (nn + 1);
            res.push(temp);
        }
    }

    return res;

}

//-----------------------------------------------------------------------------

function Formula_DKX(rawData) {
   
    var spj = [];
    var VAR3 = [];
    var VAR5 = [];
    var VAR7 = [];
    var VAR9 = [];
    var dkx = [];
	var dkxf = [];
	var dkxz = [];
    var JUN = [];
 
	//VAR3:=EMA(CLOSE,3);
	//VAR5:=EMA(XVAR2,6);
	//VAR7:=EMA(XVAR2,12);
	//VAR9:=EMA(XVAR2,24);
	//KUAI:EMA((XVAR3+XVAR5+XVAR7+XVAR9)/4,MM);

    for (var i = 0; i < rawData.length; i++) {
        spj.push(rawData[i][1]);

    }
 
 
    VAR3 = Fun_EMA_DD(spj, 3);
	VAR5 = Fun_EMA_DD(spj, 6);
	VAR7 = Fun_EMA_DD(spj, 12);
	VAR9 = Fun_EMA_DD(spj, 24);

    for (var i = 0; i <= VAR3.length - 1; i++) {
         JUN[i] = (VAR3[i]+VAR5[i]+VAR7[i]+VAR9[i])/4;
    }
	dkx = Fun_EMA_DD(JUN, 36);
	
	 dkxf.push(null);
	for (var i = 1; i <= dkx.length - 1; i++) {
		if (dkx[i]<dkx[i-1]){
			dkxf.push(dkx[i]);
			dkxz.push(null);
		} else {
			dkxf.push(null);
			dkxz.push(dkx[i]);
		}
	} 
 
	
	return {
	    dkx: dkx,
	    dkxf: dkxf ,
		dkxz: dkxz 
	};


}

//-----------------------------------------------------------------------------
function QJT_Lab_FG_3(rdata, typ) {
   
    var res="09:00";
    //18/09:00
	//01234567
	//alert(typ);
    for (var i = 0; i < rdata.length; i++) {
		var lab=rdata[i].substr(3,5);
		if (typ == 'pho3'){
			if ( (lab=='09:03')||(lab == '21:03') ) {
				res = rdata[i];
			}
			
		} else if (typ == 'pho9'){
			if ( (lab=='09:09')||(lab == '21:09') ) {
				res = rdata[i];
			}
			
		} else if (typ == 'pho15'){
			if ( (lab=='09:15')||(lab == '21:15') ) {
				res = rdata[i];
			}
			
		} 
		 
         
    }
 

    return res;
}

//-----------------------------------------------------------------------------
function splitData_DPXW(rawData) {
	var dat = [];
	var cct = []; //机构T
	var ccs = []; //私募S
	var ccg = []; //大户G
	var ccc = []; //散户C
	var cca = []; //中户A
	var cct_bd = []; //机构T变动
	var ccs_bd = []; //私募S变动
	var ccg_bd = []; //大户G变动
	var ccc_bd = []; //散户C变动
	var cca_bd = []; //中户A变动
	var values = [];

	rawData = rawData.split("\n");
	//alert(rawData.length);
	var xline;

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[2])) {
 
			//dat.push(xline[0]);
 
			dat.push( xline[0].substr(5,2)+"/"+xline[0].substr(8,2) );
			cct.push(parseFloat(xline[5]));
			ccs.push(parseFloat(xline[6]));
			ccg.push(parseFloat(xline[7]));
			//ccc.push(parseFloat(xline[8]));
			ccc.push(parseFloat(xline[8])); 
			cca.push( 0- parseFloat(xline[5])-parseFloat(xline[6])-parseFloat(xline[7])-parseFloat(xline[8])  ); 
			//开盘(open)，收盘(close)，最低(lowest)，最高(highest)
			values.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
				parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");

		}
	}


	cct_bd.push(0);
	ccs_bd.push(0);
	ccg_bd.push(0);
	cca_bd.push(0);
	ccc_bd.push(0);
	for (var i = 1; i < cct.length; i++) {

		cct_bd.push(cct[i] - cct[i - 1]);
		ccs_bd.push(ccs[i] - ccs[i - 1]);
		ccg_bd.push(ccg[i] - ccg[i - 1]);
		cca_bd.push(cca[i] - cca[i - 1]);
		ccc_bd.push(ccc[i] - ccc[i - 1]);
	}



	values = "[" + values + "]";
	values = eval(values);

	return {
		values: values,
		dat: dat,
		cct: cct,
		ccs: ccs,
		ccg: ccg,
		ccc: ccc,
		cca: cca,
		cct_bd: cct_bd,
		ccs_bd: ccs_bd,
		ccg_bd: ccg_bd,
		cca_bd: cca_bd,
		ccc_bd: ccc_bd,

	};
}
//-----------------------------------------------------------------------------

function Layout_XW_DP(tot, main_h) {
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

function splitData_BKSS(rawData) {
	var bk = [];
	var zl_10 = []; //主力  10分钟
	var zl_30 = []; //主力  30分钟
	var zl_60 = []; //主力  60分钟
	var sh_10 = []; //散户  10分钟
	var sh_30 = []; //散户  30分钟
	var sh_60 = []; //散户  60分钟
 

	rawData = rawData.split("\n");
	//alert(rawData.length);
	var xline;

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[1])) {
			bk.push(xline[0]);
			zl_10.push(parseFloat(xline[2]));
			zl_30.push(parseFloat(xline[3]));
			zl_60.push(parseFloat(xline[4]));
			sh_10.push(parseFloat(xline[5]));
			sh_30.push(parseFloat(xline[6]));
			sh_60.push(parseFloat(xline[7])); 
	 
		}
	}

 
	return {

		bk: bk,
		zl_10: zl_10,
		zl_30: zl_30,
		zl_60: zl_60,
		sh_10: sh_10,
		sh_30: sh_30,
		sh_60: sh_60,
	};
}

//-----------------------------------------------------------------------------

function Layout_BKSS(tot) {
	//tot - 总高度

	var hcc = [];
	var pcc = [];
	var per_tit;
	var per_h;
	var main_h;

	//main_h=120;
	per_tit = 10;
	//per_h=60;
	per_h = (tot - per_tit * 4 - 50) / 4;
	per_h = parseInt(per_h);

	for (var i = 0; i < 20; i++) {
		hcc.push(10);
		pcc.push(0);
	}

	//主图 0
	hcc[0] = per_h;
	pcc[0] = per_tit+30;

	//附图  1
	hcc[1] = per_h;
	pcc[1] = pcc[0] + hcc[0] + per_tit;

	//2
	hcc[2] = per_h;
	pcc[2] = pcc[1] + hcc[1] + per_tit;

	//3
	hcc[3] = per_h;
	pcc[3] = pcc[2] + hcc[2] + per_tit;

 
	return {
		hcc: hcc,
		pcc: pcc,
	};
}


//-----------------------------------------------------------------------------

function splitData_DPSS(rawData) {
	var values = [];
	var clos = [];
	var hig = [];
	var lo = [];
	var ope = [];
	var dat = [];
	
	var zj_tdh = [];
	var zj_sh = [];  
	var tmp_tdh = [];
	var tmp_sh = []; 

	rawData = rawData.split("\n");
	//alert(rawData.length);
	var xline;

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		if (!isNaN(xline[1])) {
			 
			var lab = xline[0];
			lab=lab.substr(4, 2) +"/" + lab.substr(6, 2) + ":" + lab.substr(8, 2);
			dat.push(lab);
			//开盘(open)，收盘(close)，最低(lowest)，最高(highest)
			values.push("[" + parseFloat(xline[1]) + "," + parseFloat(xline[4]) + "," +
				parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
			
			hig.push(parseFloat(xline[2]));
			lo.push(parseFloat(xline[3]));
			clos.push(parseFloat(xline[4]));	
			ope.push(parseFloat(xline[1]));	
			
			tmp_tdh.push(parseFloat(xline[5])); //大资金
			tmp_sh.push(parseFloat(xline[6])*10); //小资金
	 
		}
	}
	
	for (var i = 0; i < tmp_tdh.length; i++) {
	    zj_tdh.push(tmp_tdh[i] - tmp_tdh[0]);
	    zj_sh.push(tmp_sh[i] - tmp_sh[0]);
	}
	
	values="["+values+"]";    values = eval(values);  

 
	return {
        dat: dat,
		values: values,
		zj_tdh: zj_tdh,
		zj_sh: zj_sh,
		clos:clos,
		hig: hig,
		lo: lo,
		ope: ope,
		
		 
	};
}


//-----------------------------------------------------------------------------

function Layout_DPSS(tot) {
	//tot - 总高度

	var hcc = [];
	var pcc = [];
	var per_tit;
	var per_h;
	var main_h;

	main_h = tot*0.4;
	per_tit = 20;
	//per_h=60;
	per_h = (tot - per_tit * 3 - main_h - 30-20) / 2;
	per_h = parseInt(per_h);

	for (var i = 0; i < 20; i++) {
		hcc.push(10);
		pcc.push(0);
	}

	//主图 0
	hcc[0] = main_h;
	pcc[0] = per_tit+20;

	//附图  1
	hcc[1] = per_h;
	pcc[1] = pcc[0] + hcc[0] + per_tit;

	//2
	hcc[2] = per_h;
	pcc[2] = pcc[1] + hcc[1] + per_tit;

	 
 
	return {
		hcc: hcc,
		pcc: pcc,
	};
}

//-----------------------------------------------------------------------------

function Layout_BKLD(tot, main_h) {
	//tot - 总高度

	var hcc = [];
	var pcc = [];
	var per_tit;
	var per_h;
	var main_h;

	//main_h=120;
	per_tit = 17;
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



//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------



//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------



//-----------------------------------------------------------------------------



//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
