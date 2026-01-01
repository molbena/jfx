//处理持仓数据
function splitData_HDP(rawData) {
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
			var lab;
			lab =  xline[0];
			 
            categoryData.push( lab.substr(5,2)+"/"+lab.substr(8,2) );
			//开盘(open)，收盘(close)，最低(lowest)，最高(highest)

            values.push("[" + parseFloat(xline[4]) + "," + parseFloat(xline[1]) + "," +
                parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");

			cc_cc1.push(parseFloat(xline[5])/1);
			cc_cc2.push(parseFloat(xline[6])/1);
			cc_cc3.push(parseFloat(xline[7])/1);
			cc_cc5.push(parseFloat(xline[8])/1);
			cc_cc4.push(parseFloat(0-xline[5]-xline[6]-xline[7]-xline[8])/1); 
	 

        }
    }
	
	 cc_bd1.push(0);cc_bd2.push(0);cc_bd3.push(0);cc_bd4.push(0);cc_bd5.push(0);
	for (var i = 1; i < cc_cc1.length; i++) {
		
		cc_bd1.push(cc_cc1[i] - cc_cc1[i-1]);
		cc_bd2.push(cc_cc2[i] - cc_cc2[i-1]);
		cc_bd3.push(cc_cc3[i] - cc_cc3[i-1]);
		cc_bd4.push(cc_cc4[i] - cc_cc4[i-1]);
		cc_bd5.push(cc_cc5[i] - cc_cc5[i-1]);
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

function splitData_HZX(rawData) {
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

function Get_ZXPZ(rawData) {
	
	var zxcode = [];
	 
	if ( rawData!= null) {
			rawData = rawData.split(",");
			var tmp;
			
			for (var i = 0; i < rawData.length; i++) {
				 
				if (rawData[i].length >0 ) {
					tmp = rawData[i];
					if (tmp.length==1){
						tmp = tmp+"2";
					}
					zxcode.push(tmp);
				}
			}
	}
	 
	
	return zxcode;
	/* return {
		zxcode: zxcode
	}; */
}

//-----------------------------------------------------------------------------


function splitData_XX(rawData,banben) {
    var zx_dat = []; //时间
    var zx_bt = []; // 标题
    var zx_nr = []; // 内容
    var zx_lx = []; // 类型
    var zx_zz = []; // 坐着
    
    rawData = rawData.split("|||||");
    //alert(banben);
    var xline;
    var nr;
    
    for (var i = 0; i < rawData.length; i++) {
        xline = rawData[i].split("{}");
        //if (!isNaN(xline[1])) {
        if (xline[0].length > 5) {
    		 
    			if ( xline[1].trim()!="观察" ){
    				zx_dat.push(xline[0]);
    				zx_bt.push(xline[3]);
    				nr = xline[4];
    				if (nr.indexOf("<<>>")>0){
    					nr = nr.substr(0,nr.indexOf("<<>>"))     ;
    				}
    				zx_nr.push( nr );
    				zx_lx.push(xline[1].trim());
    				zx_zz.push(xline[5]);		
    			}
    			
    		 
            
    
        }
    }
     
    
    return {
        zx_dat: zx_dat,
        zx_nr: zx_nr,
        zx_bt: zx_bt,
        zx_lx: zx_lx,
    	zx_zz: zx_zz,
    	 
    };
	
}


//-----------------------------------------------------------------------------

function dattotim(dat) {
    // 格式化成月/日，只在第一个刻度显示年份
	var texts;
	var hh,mm,ss,tdate,nyr;
    //alert(dat);
    if (typeof(dat)!="undefined"){
		//alert(dat);
		if (mui.os.ios){
		      tdate = new Date(dat.replace(/-/g,"/"));
		} else {
			  tdate = new Date(dat);
		}
		nyr=tdate.getFullYear()+"/"+(tdate.getMonth()+1)+"/"+tdate.getDate()
		hh=tdate.getHours().toString();
		mm=tdate.getMinutes().toString();
		ss=tdate.getSeconds().toString();
		if (hh.length<2) hh="0"+hh;
		if (mm.length<2) mm="0"+mm;
		if (ss.length<2) ss="0"+ss;
		
		texts =nyr+" " + hh+":"+mm+":"+ss;
    } else {
		texts="";
	}
    return texts;
}


//-----------------------------------------------------------------------------

function Layout_HDP(tot, main_h) {
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
