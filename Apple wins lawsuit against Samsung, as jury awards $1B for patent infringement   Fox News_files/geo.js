;window.CONST_Akamai_GEO={countryCode:"US",regionCode:"CO",dmaCode:"751",zipRange:"80401-80403+80419"};window.CONST_Akamai_TIME={yr:"2013",mm:"02",dd:"19",dy:"2",hr:"10",min:"53",sec:"49"};window.AKAMAI_TIME_HELPER=(function(){var C=(function(){var F=window.CONST_Akamai_TIME,D=[[F.mm,F.dd,F.yr].join("/"),[F.hr,F.min,F.sec].join(":")].join(" "),E=new Date(D);return E;}());(function(){var D,I=window.location,F=I.search.substr(1);F=F.split("&");var H=function(J){return(parseInt(J,10));};for(D=0;D<F.length;D++){if(typeof F[D]==="string"&&F[D].length>0){var G=F[D].split("=");if(G[0]==="cdt"){var E=G[1].split("|");E[0]=E[0].split("-").join("/");E=E.join(" "),dt=new Date(E);C=dt;if(window.console&&console.log){console.log("DATE TEST OVERRIDE: "+E);}break;}}}}());var A=function(H){H=H||B();var E=false,F=H.getFullYear();var G=(function(){var I=new Date("3/01/"+F+" 00:00:00"),J=0;while(J<2){if(I.getDay()===0){J++;}if(J<2){I.setDate(I.getDate()+1);}if(I.getMonth>2){J=2;}}return I;}());var D=(function(){var I=new Date("11/01/"+F+" 00:00:00"),J=false;while(!J){if(I.getDay()===0){J=true;}else{I.setDate(I.getDate()+1);}if(I.getMonth()>10){J=true;}}return I;}());E=(H.getTime()>=G.getTime()&&H.getTime()<D.getTime())?true:false;return{val:E,currYrStart:G,currYrEnd:D,currYr:F};};var B=(function(){var E=new Date();var D=function(){var H=new Date(),G=H.getTime()-E.getTime(),F=new Date(C.getTime()+G);if(!A(F).val){F.setHours(F.getHours()-1);}return F;};return D;}());return{getCurrent:B,isDST:A};}());
/*Mon Feb 18 17:54:30 EST 2013*/