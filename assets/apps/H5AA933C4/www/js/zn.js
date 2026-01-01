//-----------------------------------------------------------------------------
// 
function splitData_CP(rawData) {
	var pz = [];
	var hyh = [];
	var dk = [];
	var ss = [];
	var jj = [];
	var yk = [];
	var con = 0;
	var flag = "";


	rawData = rawData.split("\n");
	//alert(rawData.length);
	var xline;

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		//if (!isNaN(xline[1])) {
		if (rawData[i].length > 20) {
			pz.push(xline[0]);
			hyh.push(xline[1]);
			dk.push(xline[2]);
			ss.push(xline[3]);
			jj.push(xline[4]);
			yk.push(xline[5]);
			flag = flag + xline[1] + "|" + xline[2] + "|" + xline[3] + "{{}}";
			con++;

		}
	}


	//alert(volumes);

	return {
		pz: pz,
		hyh: hyh,
		dk: dk,
		ss: ss,
		jj: jj,
		yk: yk,
		con: con,
		flag: flag
	};
}

//-----------------------------------------------------------------------------
 
function splitData_ZX(rawData,banben) {
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

function splitData_KTZ_CC(rawData) {
	var jyf = [];
	var mc = [];
	var dm = [];
	var fx = [];
	var zc = [];
	var fyk = [];
	var djj = [];
	var kjj = [];
	var xj = [];
	var pyk = [];
	var dc = [];
	var kc = [];
	var zuoc = [];
	var bzj = [];
	var con = 0;
	var flag = "";


	rawData = rawData.split("\n");
	//alert(rawData.length);
	var xline;

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		//if (!isNaN(xline[1])) {
		if (rawData[i].length > 20) {
 
			jyf.push(xline[0].trim());
			mc.push(xline[1].trim());
			dm.push(xline[2].trim());
			
			var fxf=parseFloat(xline[3].trim());
			if (fxf>=0){
				fx.push("多");
			} else {
				fx.push(" 空");
			}
			zc.push(xline[4].trim());
			fyk.push(xline[5].trim());
			djj.push(xline[11].trim());
			kjj.push(xline[12].trim());
			xj.push(xline[10].trim());
			
			pyk.push(xline[6].trim());
			
			dc.push(xline[7].trim());
			kc.push(xline[8].trim());
			zuoc.push(xline[9].trim());
			
			bzj.push(xline[13].trim());
			
			
			flag = flag + xline[1] + "|" + xline[2] + "|" + xline[3] + "{{}}";
			con++;

		}
	}


	//alert(volumes);
	

	return {
		jyf: jyf,
		mc: mc,
		dm: dm,
		fx: fx,
		zc: zc,
		fyk: fyk,
		djj: djj,
		kjj: kjj,
		xj: xj,
		pyk: pyk,
		dc: dc,
		kc: kc,
		zuoc: zuoc,
		bzj: bzj,
		con: con,
		flag: flag
	};
}
//-----------------------------------------------------------------------------
function splitData_KTZ_WT(rawData) {
	var jyf = []; 
	var pz = [];
	var mm = [];
	var kp = [];
	
	var zt = [];
	var sj = [];
	var wtj = [];
	var wtl = [];
	var ly = [];
	 
	var con = 0;
	var flag = "";


	rawData = rawData.split("\n");
	//alert(rawData.length);
	var xline;

	for (var i = 0; i < rawData.length; i++) {
		xline = rawData[i].split(",");
		//if (!isNaN(xline[1])) {
		if (rawData[i].length > 20) {
 
			jyf.push(xline[0].trim());
			pz.push(xline[1].trim());
			mm.push(xline[2].trim());
			kp.push(xline[3].trim());
			zt.push(xline[4].trim());
			sj.push(xline[5].trim());
			wtj.push(xline[6].trim());
			wtl.push(xline[8].trim());
			ly.push(xline[9].trim());
			 
			
			flag = flag + xline[1] + "|" + xline[2] + "|" + xline[3] + "{{}}";
			con++;

		}
	}
 

	return {
		jyf: jyf,
		pz: pz,
		mm: mm,
		kp: kp,
		zt: zt,
		sj: sj,
		wtj: wtj,
		wtl: wtl,
		ly: ly,
	 
		con: con,
		flag: flag
	};
}

//-----------------------------------------------------------------------------

function splitData_XHQ(rawData,gnlist) {
	var dat = [];
	var hy = [];
	var fx = [];
	var bz = [];
	var jyf = [];
	 
	var con=0;
	var flag="";
     //2022-05-30 21:59:21{}1{}6{}y2{}止损位11550
	 //0-时间dat  1-多空fx   2-交易法  3-品种hy   4-提示bz
	 

	rawData = rawData.split("\n");
	 //alert(rawData.length);
	var xline;
	var tmp;

	for (var i = rawData.length-1; i >=0; i--) {
		xline = rawData[i].split("{}");
		//if (!isNaN(xline[1])) {
		if (rawData[i].length > 25) {
			 
			if ( (gnlist!=null) &&   (gnlist.indexOf("%"+xline[2]+"%")>=0)  ){ 
					tmp=xline[0].replace("2022-","");
					tmp=tmp.replace("2023-","");
					tmp=tmp.replace("2024-","");
					tmp=tmp.replace("2025-","");
					tmp=tmp.replace("2026-","");
					dat.push(tmp);
					
					tmp=xline[3].replace("2","");
					hy.push(tmp);
					
					tmp=xline[1];
					  
					if (tmp.trim()=='1'){
						 fx.push("多");
					} else if (tmp.trim()=='2'){
						 fx.push("空");
					} else {
						fx.push("提示");
						
						
					}
					 
					bz.push(  xline[4]   );
					jyf.push(xline[2]);
					 
					flag=flag+xline[0]+"|"+xline[3]+"|"+xline[1]+"{{}}";//dat code
					con++;
            }
			
		}
	}
	 

	return {
		dat:dat,
		hy: hy,
		fx: fx,
		bz: bz,
		jyf: jyf,
		con:con,
		flag:flag
	};
}


//-----------------------------------------------------------------------------

function splitData_LHJY(rawData) {
	var lab = [];
	var clos = [];
	var ope = [];
	var hig = [];
	var lo = [];
	var zijin_td = [];
	var zijin_s = [];
	var values = [];
		
	var orgdata = rawData.split("\n");
 
	for (var i = 0; i < orgdata.length; i++) {
 
			xline = orgdata[i].split(",");
			if (!isNaN(xline[1])) {
				//2210310906
				//00
				lab.push(xline[0].substr(4, 2) + "/" + xline[0].substr(6, 2) + ":" + xline[0].substr(8, 2));
 
				// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)  OHLC
				values.push("[" + parseFloat(xline[1]) + "," + parseFloat(xline[4]) + "," +
					parseFloat(xline[3]) + "," + parseFloat(xline[2]) + "]");
				
				clos.push(parseFloat(xline[4]));
				ope.push(parseFloat(xline[1]));
				hig.push(parseFloat(xline[2]));
				lo.push(parseFloat(xline[3]));
									
				zijin_td.push(parseFloat(xline[8]));
				zijin_s.push(parseFloat(xline[10]) * 10);

			}
			 
  
	} 
	
	if (lab.length > 0) {
	     var tmp = lab[lab.length-1];
		 
		 lab[lab.length-1] = tmp.substr(3,5);
			 
	}
	
	
	values = "[" + values + "]";
	values = eval(values);

	return {
		lab: lab,
		clos: clos,
		ope: ope,
		hig: hig,
		values: values,
		lo: lo,
		zijin_td: zijin_td,
		zijin_s: zijin_s,
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

//-----------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//最大值
function Fun_HHV(hhh, nn, sto) {
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

//-------------------------------------------------------------------------------
//最小值
function Fun_LLV(lll, nn, sto) {
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

//-------------------------------------------------------------------------------
//SMA
function Fun_SMA(ff, nn, mm) {
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
function Formula_DKX(rawData,labdat) {
   
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

	var mark_d=[];
	var mark_k=[];
 
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
	
 
 
    VAR3 = Fun_EMA_DD(spj, 3);
	VAR5 = Fun_EMA_DD(spj, 6);
	VAR7 = Fun_EMA_DD(spj, 12);
	VAR9 = Fun_EMA_DD(spj, 24);

    for (var i = 0; i <= VAR3.length - 1; i++) {
         JUN[i] = (VAR3[i]+VAR5[i]+VAR7[i]+VAR9[i])/4;
    }
	dkx = Fun_EMA_DD(JUN, 36);
	
	 dkxf.push(null);
	 dkxz.push(null);
	for (var i = 1; i <= dkx.length - 1; i++) {
		if (dkx[i]<dkx[i-1]){
			dkxf.push(dkx[i]);
			dkxz.push(null);
		} else {
			dkxf.push(null);
			dkxz.push(dkx[i]);
		}
	} 
	
	for (var i = 2; i <= dkx.length - 1; i++) {
	       if ( (dkx[i-1] < dkx[i-2]) &&(dkx[i] >= dkx[i-1])  ){
			    // 绿色 变成 红色
				mark_d.push( "{value: 'D', xAxis: '"+lab[i]+"', yAxis: "+ll[i] +"}" );
		   }	
		   
		   if ( (dkx[i-1] >= dkx[i-2]) &&(dkx[i] < dkx[i-1])  ){
		   		  //  
		   		 mark_k.push( "{value: 'K', xAxis: '"+lab[i]+"', yAxis: "+hh[i] +"}" );
		   }
	}	
	// alert(mark_d);
	mark_d = "[" + mark_d + "]";
	mark_d = eval(mark_d);
	
	mark_k = "[" + mark_k + "]";
	mark_k = eval(mark_k);
	
	// alert(mark_d);
 
	
	return {
	    dkx: dkx,
	    dkxf: dkxf ,
		dkxz: dkxz,
		mark_d: mark_d,
		mark_k: mark_k,
	};


}


//-----------------------------------------------------------------------------

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

function Formula_XL(rawData,labdat) {
   
    var spj = [];
	var ll = [];
	var hh = [];
	var lab = [];
	var MM  =13;
	var NN = 73;
	
	var mark_d = [];
	var mark_k = [];
	
	var bx = [];
	var sx = [];
	var cha =[];
	
	var lop = [];

    var sx = [];
	var sxf = [];
	var sxz = [];
 
  
    for (var i = 0; i < rawData.length; i++) {
        spj.push(rawData[i][1]);
		hh.push(rawData[i][3]);
		ll.push(rawData[i][2]);
		lab.push(labdat[i]);
    }
	  
	bx = Fun_EMA_DD(spj,MM);
	
	 
    for (var i=0; i <= spj.length-1; i++)
    {
          lop[i]=Fun_Slope(spj,21,i)*20+ spj[i];
    } 
	  
	sx = Fun_EMA_DD(lop,NN);
	
	for (var i=0; i <= bx.length-1; i++){
	     cha[i] = bx[i] - sx[i];
	 }
	
    //alert(cha); 
   
	sxf.push(null);
	sxz.push(null);
	for (var i = 1; i <= sx.length - 1; i++) {
		if (bx[i] < sx[i]){
			sxf.push(sx[i]);
			sxz.push(null);
		} else {
			sxf.push(null);
			sxz.push(sx[i]);
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
	
	return {
	    bx: bx,
	    sx: sx ,
		cha: cha,
		sxf: sxf,
		sxz: sxz,
		mark_d: mark_d,
		mark_k: mark_k,
	};


}


//-----------------------------------------------------------------------------

function Formula_BH(rawData,labdat) {
    //壁虎交易
	
    var spj = [];
	var ll = [];
	var hh = [];
	var lab = [];
	var N_QP1 = 84;
	var N_MM = 18;
	var N_N = 91;
	var N_P = 7;
	
	var mark_d = [];
	var mark_k = [];
	
	var DUAN = [];
	var EB = [];
	var BBB =[];
	var AAA =[];
	var VAR1 =[];
 

    var bh = [];
	var bhf = [];
	var bhz = [];
 
  
    for (var i = 0; i < rawData.length; i++) {
        spj.push(rawData[i][1]);
		hh.push(rawData[i][3]);
		ll.push(rawData[i][2]);
		lab.push(labdat[i]);
    }
	  
	//  EB  
	var bcs;
	for (var i=0;i<= spj.length -1;i++)
	{
		bcs=Fun_HHV(hh,N_QP1,i)-Fun_LLV(ll,N_QP1,i);
		if (Math.abs(bcs)>0.0001){
			 DUAN[i]=100-(Fun_HHV(hh,N_QP1,i)-spj[i])/bcs*100;
		} else {
			 DUAN[i]=0;
		}
	}
  
 
	EB = Fun_EMA_DD(DUAN,N_MM);
	
	//  BBB
	for (var i=0;i <= spj.length -1;i++)
	{
		bcs=Fun_HHV(hh,N_N,i)-Fun_LLV(ll,N_N,i);
		if (Math.abs(bcs)>0.0001){
			 VAR1[i]=(spj[i]-Fun_LLV(ll,N_N,i))/bcs*100;
		} else {
			 VAR1[i]=0;
		}
	}
	AAA = Fun_SMA(VAR1,N_P,1);
	BBB = Fun_SMA(AAA,N_P,1);
 
     
   
	bhf.push(null);
	bhz.push(null);
	for (var i = 1; i <= EB.length - 1; i++) {
		if (EB[i] < BBB[i]){
			bhf.push(BBB[i]);
			bhz.push(null);
		} else {
			bhf.push(null);
			bhz.push(BBB[i]);
		}
	}  
	
	for (var i = 2; i <= EB.length - 1; i++) {
	       if ( (EB[i] >= BBB[i]) &&(EB[i-1] < BBB[i-1])  ){
			    // 绿色 变成 红色
				mark_d.push( "{value: 'D', xAxis: '"+lab[i]+"', yAxis: "+BBB[i] +"}" );
		   }	
		   
		   if ( (EB[i] < BBB[i]) &&(EB[i-1] >= BBB[i-1])  ){
		   		  //  
		   		 mark_k.push( "{value: 'K', xAxis: '"+lab[i]+"', yAxis: "+BBB[i] +"}" );
		   }
	}	//alert("ddd"); 
	
	mark_d = "[" + mark_d + "]";
	mark_d = eval(mark_d);
	
	mark_k = "[" + mark_k + "]";
	mark_k = eval(mark_k);
	//alert("ddd"); 
	return {
	    EB: EB,
	    BBB: BBB ,
		 
		bhf: bhf,
		bhz: bhz,
		mark_d: mark_d,
		mark_k: mark_k,
	};


}


//-----------------------------------------------------------------------------

function splitData_AI_BC(rawData) {
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
					//22 11 04 2103
					//01 23 45 6789
					ilab.push(xline[0].substr(4, 2) + "/" + xline[0].substr(6, 2) + ":" + xline[0].substr(8, 2));
					iclos.push(parseFloat(xline[1]));//收盘
					iope.push(parseFloat(xline[5]));
					ihig.push(parseFloat(xline[6]));
					ilo.push(parseFloat(xline[7]));
										
					izijin_td.push(parseFloat(xline[2]));
					izijin_s.push(parseFloat(xline[4]) * 10);
 
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

function splitData_AI_NEW(rawData,ls) {
	
	//console.log(ls[0]) ;
	 
	var newlab = [];
	var newclos = [];
	var newope = [];
	var newhig = [];
	var newlo = [];
	var newzijin_td = [];
	var newzijin_s = [];
	var ncode =[];
	
	 
	
	var orgdata = rawData.split("\n");
	
	for (var i = 0; i < ls.length; i++) {
	    var icode = ls[i];
		  
		for (var j = 0; j < orgdata.length; j++) {	
			 
			var xline = orgdata[j].split(",");
			 
			if (xline[0].substr(0,2) == icode.trim()){
				 //console.log(xline[0] +"  "+icode);
				
				if (!isNaN(xline[2])) {
					 ncode.push(xline[0].trim());
				     newlab.push(xline[1].substr(4, 2) + "/" + xline[1].substr(6, 2) + ":" + xline[1].substr(8, 2)) ;
					 newclos.push(parseFloat(xline[2])) ;
					 newope.push(parseFloat(xline[6])) ;
					 newhig.push(parseFloat(xline[7])) ;
					 newlo.push(parseFloat(xline[8])) ;
					 
					 newzijin_td.push(parseFloat(xline[3])) ;
					 newzijin_s.push(parseFloat(xline[5])*10) ;
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
		ncode: ncode,
	};
}

//-----------------------------------------------------------------------------

function Formula_AI_DKX(orgspj, orghh, orgll, labdat) {
   
    var spj = [];
	var hh = [];
	var ll = [];
    var VAR3 = [];
    var VAR5 = [];
    var VAR7 = [];
    var VAR9 = [];
    var dkx = [];
	var dkxf = [];
	var dkxz = [];
    var JUN = [];
	var lab = [];
	var hl=[];//目前是红色 1 还是绿色 -1   

	var mark_d=[];
	var mark_k=[];
 
	//VAR3:=EMA(CLOSE,3);
	//VAR5:=EMA(XVAR2,6);
	//VAR7:=EMA(XVAR2,12);
	//VAR9:=EMA(XVAR2,24);
	//KUAI:EMA((XVAR3+XVAR5+XVAR7+XVAR9)/4,MM);

    for (var i = 0; i < orgspj.length; i++) {
        spj.push(orgspj[i]);
		hh.push(orghh[i]);
		ll.push(orgll[i]);
		lab.push(labdat[i]);
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
	 dkxz.push(null);
	 hl.push(0);
	for (var i = 1; i <= dkx.length - 1; i++) {
		if (dkx[i]<dkx[i-1]){
			dkxf.push(dkx[i]);
			dkxz.push(null);
			hl.push(-1);
		} else {
			dkxf.push(null);
			dkxz.push(dkx[i]);
			hl.push(1);
		}
	} 
	
	 
	for (var i = 2; i <= dkx.length - 1; i++) {
	       if ( (dkx[i-1] < dkx[i-2]) &&(dkx[i] >= dkx[i-1])  ){
			    // 绿色 变成 红色
				mark_d.push( "{value: 'D', xAxis: '"+lab[i]+"', yAxis: "+ll[i] +"}" );
		   }	
		   
		   if ( (dkx[i-1] >= dkx[i-2]) &&(dkx[i] < dkx[i-1])  ){
		   		  //  
		   		 mark_k.push( "{value: 'K', xAxis: '"+lab[i]+"', yAxis: "+hh[i] +"}" );
		   }
	}	
	// alert(mark_d);
	mark_d = "[" + mark_d + "]";
	mark_d = eval(mark_d);
	
	mark_k = "[" + mark_k + "]";
	mark_k = eval(mark_k);
	
	// alert(mark_d);
 
	
	return {
	    hl: hl,
		dkx: dkx,
	    dkxf: dkxf ,
		dkxz: dkxz,
		mark_d: mark_d,
		mark_k: mark_k,
	};


}

//-----------------------------------------------------------------------------

function Get_KG(rawData, code) {
	
	var orgdata = rawData.split("\n");
	var res="";
	if (code.length>0){
		 code = code+"2";
	  	 code = code.substr(0,2);
	}
	
	
	for (var i=0; i < orgdata.length; i++){
 
		if (orgdata[i].includes(code + "=")){
			 res = orgdata[i].substr(3,2);
		}
	}
	
	return res;
	
}

//-----------------------------------------------------------------------------
function Formula_AI_BH(orgspj, orghh, orgll,labdat) {
    //壁虎交易
	
    var spj = [];
	var ll = [];
	var hh = [];
	var lab = [];
	var N_QP1 = 84;
	var N_MM = 18;
	var N_N = 91;
	var N_P = 7;
	
	var mark_d = [];
	var mark_k = [];
	var hl=[];//目前是红色 1 还是绿色 -1   
	
	var DUAN = [];
	var EB = [];
	var BBB =[];
	var AAA =[];
	var VAR1 =[];
 

    var bh = [];
	var bhf = [];
	var bhz = [];
 
  
    for (var i = 0; i < orgspj.length; i++) {
        spj.push(orgspj[i]);
		hh.push(orghh[i]);
		ll.push(orgll[i]);
		lab.push(labdat[i]);
    }
	  
	//  EB  
	var bcs;
	for (var i=0;i<= spj.length -1;i++)
	{
		bcs=Fun_HHV(hh,N_QP1,i)-Fun_LLV(ll,N_QP1,i);
		if (Math.abs(bcs)>0.0001){
			 DUAN[i]=100-(Fun_HHV(hh,N_QP1,i)-spj[i])/bcs*100;
		} else {
			 DUAN[i]=0;
		}
	}
  
 
	EB = Fun_EMA_DD(DUAN,N_MM);
	
	//  BBB
	for (var i=0;i <= spj.length -1;i++)
	{
		bcs=Fun_HHV(hh,N_N,i)-Fun_LLV(ll,N_N,i);
		if (Math.abs(bcs)>0.0001){
			 VAR1[i]=(spj[i]-Fun_LLV(ll,N_N,i))/bcs*100;
		} else {
			 VAR1[i]=0;
		}
	}
	AAA = Fun_SMA(VAR1,N_P,1);
	BBB = Fun_SMA(AAA,N_P,1);
 
     
   
	bhf.push(null);
	bhz.push(null);
	hl.push(0);
	for (var i = 1; i <= EB.length - 1; i++) {
		if (EB[i] < BBB[i]){
			bhf.push(BBB[i]);
			bhz.push(null);
			hl.push(-1);
		} else {
			bhf.push(null);
			bhz.push(BBB[i]);
			hl.push(1);
		}
	}  
	
	for (var i = 2; i <= EB.length - 1; i++) {
	       if ( (EB[i] >= BBB[i]) &&(EB[i-1] < BBB[i-1])  ){
			    // 绿色 变成 红色
				mark_d.push( "{value: 'D', xAxis: '"+lab[i]+"', yAxis: "+BBB[i] +"}" );
		   }	
		   
		   if ( (EB[i] < BBB[i]) &&(EB[i-1] >= BBB[i-1])  ){
		   		  //  
		   		 mark_k.push( "{value: 'K', xAxis: '"+lab[i]+"', yAxis: "+BBB[i] +"}" );
		   }
	}	//alert("ddd"); 
	
	mark_d = "[" + mark_d + "]";
	mark_d = eval(mark_d);
	
	mark_k = "[" + mark_k + "]";
	mark_k = eval(mark_k);
	//alert("ddd"); 
	return {
	    EB: EB,
	    BBB: BBB ,
		hl: hl, 
		bhf: bhf,
		bhz: bhz,
		mark_d: mark_d,
		mark_k: mark_k,
	};


}


//-----------------------------------------------------------------------------

function Formula_AI_XL(orgspj, orghh, orgll,labdat) {
   
    var spj = [];
	var ll = [];
	var hh = [];
	var lab = [];
	var MM  =13;
	var NN = 73;
	
	var mark_d = [];
	var mark_k = [];
	
	var bx = [];
	var sx = [];
	var cha =[];
	
	var lop = [];

    var sx = [];
	var sxf = [];
	var sxz = [];
	var hl=[];//目前是红色 1 还是绿色 -1   
 //alert("dd");
  
    for (var i = 0; i < orgspj.length; i++) {
        spj.push(orgspj[i]);
        hh.push(orghh[i]);
        ll.push(orgll[i]);
		lab.push(labdat[i]);
    }
	
	  
	bx = Fun_EMA_DD(spj,MM);
	
	 
    for (var i=0; i <= spj.length-1; i++)
    {
          lop[i]=Fun_Slope(spj,21,i)*20+ spj[i];
    } 
	  
	sx = Fun_EMA_DD(lop,NN);
	
	for (var i=0; i <= bx.length-1; i++){
	     cha[i] = bx[i] - sx[i];
	 }
	
    //alert(cha); 
   
	sxf.push(null);
	sxz.push(null);
	hl.push(0);
	for (var i = 1; i <= sx.length - 1; i++) {
		if (bx[i] < sx[i]){
			sxf.push(sx[i]);
			sxz.push(null);
			hl.push(-1);
		} else {
			sxf.push(null);
			sxz.push(sx[i]);
			hl.push(1);
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
	
	return {
	    hl: hl,
		bx: bx,
	    sx: sx ,
		cha: cha,
		sxf: sxf,
		sxz: sxz,
		mark_d: mark_d,
		mark_k: mark_k,
	};


}

//-----------------------------------------------------------------------------

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


//-----------------------------------------------------------------------------

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
function Formula_XHQ_Mark(orgspj,orglab,xhqtxt,scode) {
   
    var spj = [];
	var lab = [];
	var xhx = [];
	var typ = [];
 
	var mark_dk=[];
	var code;
	
	scode = scode+"2";
	code = scode.substr(0,2);
 

    for (var i = 0; i < orgspj.length; i++) {
        spj.push( orgspj[i] );
		lab.push( orglab[i] );
 
    }
	
	var xhq = xhqtxt.split("\n");
	 // alert(xhqtxt.length);
	var xline;
	var tmp;
	
	//console.log(code);
     //alert("ddd");
	for (var i = 0; i < xhq.length; i++) {
		
		if (xhq[i].length > 20) {
			xline = xhq[i].split("{}");
			if (xline[3].trim() == code){
				tmp = xline[0].trim();
				tmp = tmp.substr(11,5);
				xhx.push(tmp);
				typ.push(xline[1].trim());
				 //console.log(tmp); 
			}
		}
		
	}	
	//alert(lab);
	 
	for (var i = 0; i < xhx.length; i++) {
		for (var k = 0; k < lab.length; k++) {
		    if  (  ( lab[k] >= xhx[i] ) ){
				//定位
				var items;
				if (typ[i]=="1"){
					items = "symbol: 'pin',symbolSize: 24,symbolRotate:180, label: { fontSize: 10,offset: [0, 5],},  symbolOffset:[0,5], itemStyle:{color:'#f00'}";
					mark_dk.push( "{value: 'D',"+items+" ,xAxis: '"+k+"', yAxis: "+spj[k] +"}" );
				} else if (typ[i]=="2"){
					items = "symbol: 'pin',symbolSize: 24, symbolRotate:0, symbolOffset:[0,-5], itemStyle:{color:'#00aa00'}";
					mark_dk.push( "{value: 'K',"+items+" ,xAxis: '"+k+"', yAxis: "+spj[k] +"}" );
				}else if (typ[i]=="3") {
					// items = "symbol: 'circle',symbolSize: 10,itemStyle:{color:'#000'}";
					 items = "symbol: 'pin',symbolSize: 24,symbolRotate:180, label: { fontSize: 10,offset: [0, 4],},  symbolOffset:[0,2], itemStyle:{color:'#333'}";
					mark_dk.push( "{value: 'T', "+items+",xAxis: '"+k+"', yAxis: "+spj[k] +"}" );
				}
				 
				break;
			}
		 
		}
	}
	// alert("ddd");
	  //console.log(mark_dk);
 
	mark_dk = "[" + mark_dk + "]";
	mark_dk = eval(mark_dk);
	
	return {  
		mark_dk: mark_dk,
	};


}