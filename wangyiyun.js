/*
 *
 *
脚本功能：网易云音乐黑胶vip++++
软件版本：9.0.30
下载地址：苹果商店下载
脚本作者：
更新时间：2024年7月30
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 网易云音乐黑胶vip
# 播放器会员皮肤
^https:\/\/interface.+music\.163\.com\/eapi\/playermode\/ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
# 搜索结果会员歌曲
^https:\/\/interface.+music\.163\.com\/eapi\/search\/complex\/(page|rec\/song\/get) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
# 播放器会员歌曲
^https:\/\/interface.+music\.163\.com\/eapi\/v3\/song\/detail url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
^https:\/\/interface.+music\.163\.com\/eapi\/song\/(chorus|enhance\/|play\/|type\/detail\/get) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
^https:\/\/interface.+music\.163\.com\/eapi\/(v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
# 侧边栏会员等级
^https:\/\/interface.+music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
# 首页歌单会员歌曲
^https?:\/\/interface.+music\.163\.com\/eapi\/(homepage\/|v6\/)?playlist\/ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js
# 会员认证
^https?:\/\/interface.+music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/wangyiyun.js

[mitm] 
hostname = *music.163.com,

*
*
*/










;var encode_version = 'jsjiami.com.v5', mziuq = '__0x1207b0',  __0x1207b0=['AsKXw4nDgsOK','EcKHw7rDuMON','GsKGGcOAfA==','IcK5w7BYPw==','w4vDq8KJMsKi','EB1bwqs3','w7kCw582IA==','w47DnMKSMcKk','wqvCvSLCm8O4','LsKDw7Q=','w64hwoE=','woF4w6c=','H2Ea','URLCrWxMUg==','MMKrw6rCi8KJ','BMKSw6hvMg==','wqnDmlEQVg==','wq84w7Nzwr4=','wp5IR8Oxwrk=','cUvDr8ONw4Q=','THMRwpgQ','wpjCkTPCncOG','wr3DkWfDhcO+','FsKIw7zDvcO2','wqE4w7NRwrY=','wq0NL8Ovwq8=','w44Uw5ZTZw==','alLDhWTDjg==','SmvDsw==','SEzCjw==','w5xvw78Jw7QvIsOgw7M=','wo80SMKzw7Ra','w7TCjsOpV8OgVMOrwqw=','DcKIFw==','csKeHA==','w7nDrjzDm8KhF8K1wp8Jw5DCjsOQw7E=','S0Azw5HDqw==','AsKwBMK7wq0=','w7fDq8KyHcK6','IVzDtFEO','IAlq','wqURaA==','KcOCw4DCjcKL','w4jDqsK4PsKu','AlkvBsO5','Ej1UU8KT','wrLDkU82RQ==','OVbDoUYa','w53DjcOWVDE=','w58Nw5JGUg==','EMK+w7fCj8KQ','w7gAwq0mCQ==','w5vDncK6L8Kb','Nz9ywr0P','KxhHwpouWUE=','wpUNw7J1AQ==','PD9ya8Ku','EsK6N8O+dg==','wp4OF8OZwo/DsEg=','w5MawqhHbsKdM29iKMKpw7LCrWVcHD8=','w6bCssOCZsO1','dDdXwrwS','YjVJwroU','w5MNwqQn','woPDrhHDqMOp','CjNSwqIHw4TCpHoX','wqotw6FqwqA=','w58Nw4zDkg==','wqfDiXk=','woJawovCr8OR','w5fCg8O0cMOj','wrBJwprCpcO+','CAtnXcKy','woZBwoXCiMO9','ZChVwqYJwqVV','HyJD','enF6wpvCtivCgw==','wqVjwp7CpMOAw7/Dr8Ovw7A=','OyllQcKFw7AF','GCpDwqk=','AcKdw7HCtsKqQUE=','GsKgw53DoQ==','XhjCrXhXVsOG','wrRpwpzCosOV','wqrDvWDDlMO4B8Oj','DsKpw7tYAQ==','woHCvz/DkkPCqsOm','PCNpR8KN','wpvCgcKg','A1DDsg==','AsKMw4Q=','w6LDkMOn','aU4r','w7Nnw4jCvcKIw7fCtMO8wqh7wp1yZiAbw7s8','Sngpw7LDkMKA','aMK+IcKAw6/Cow==','DsKnw7c=','w68aw6VNaA==','FXrDu3US','wqHDswLDgMO2','wrrDp3QhUg==','wp3Cjy3Ch8O7','wpBJworChMO5w4N+w4/CtQ==','S3E4wpQU','wpjDpUQSUw==','wqtWY8ObwoQ=','woLCkCY=','UGI9w7Q=','w7sUB18=','w5IAwrY5Jw==','GcOYw57ClMKN','JyFY','wqPDpATDncOG','woDCnijCv8Oi','wo3CkcK5wqwx','w6Ulw5XDswQ=','JcKgOMOwdA==','wpkFPcOhwoY=','w4ALwpIMIQ==','TATCoURg','bXfDulzDmg==','IBRdwpgD','wpDCuxbDr04=','JjJ+wp0m','wpYnQ8KEw6E=','w7oEFGNx','DjtBwqsO','w6HDqMO/eS4=','w4nDqMOJWAw=','FiBgccKH','fFQrw7zDjg==','ZjdLwrkf','NEg+O8ON','w5IQw59WbA==','wpVywrPCq8O2','UEc6wqIF','wrvDl0vDrMOQ','wp1UwojChcOsw4Vk','IsKtLMKowq1+','w40Hw6AYF8O7OkbCvWA4RWXCuzdEwq0lTsK8wqPCr8O+dMOPwoVXwrbDj8OMHj3CiRBRMcOGYWwRMg9GTnDDgMKtZXFqVcKfwo3CuHnDjxPDlUfDl8KYw4N9w7XDl8K/wrXCtcOSVcKNw6LCi8Kgw7ENF2jDl8KDw5NDw4TCqTobXVjCjyvCmlfCh8OVRMKdIkLCkwjCkcK0w7FMw4jDhsKuP8OfTWs4FmBNw4/CjsKwZMK7FMKpU8KYEcKZMUnDsjvDqsOiw4JVw7TDs8OZw5jDgFA9wqgXwoFkb8OMw7gBP8OLw6ccwrnCox7DqsOVZMKiw5vDtWzDgQzDqXN7d0tYw6oNw7xBO0UCwqnChi83DsKbw5lHw6cQw5TCqSvCihLDnn5DLlN8U8KVH8KBUjbCkwQGwpjCscOpDcODQ8OMXsKOw6hdNsObw6JwYiTCgUJ4w4DCjsK9EcONC8OFLDDDuhQlZGhawovDqVXDmkvDu3VfRMK7CsK9w5FEwokEUcOYbcKYw7ZRw5EOw7ZDPcKyF8K4InAEwppRAMKMwqMvw7nCr8KLwoQxw5kqw7I9wq0+w5jDlsKfw6Izw6UFcAbDjsOWw5jDksKVS8KiwoNSw58Nw5Bvw452fcKswo3CqcKIUcONw7DDuX7DlMKAwoDCqHBkRMOBwqzDnDk6woTCkXhGwrYPcnDDkBvDilHCmsObw6kkI8OSwq/Dh2XCkFscSVs+wrbDlcObw7l2GMOFwqfDtg5DR8O0c14wbzAFVAZ/IE7CisOSB8KIeMKfc8Ozw4Mew4PDgxLCvgQQH2Z1NcKXw5fDl8ONAWNZLcOmX0Yew7vDuDJnwr3DnxjDuBouTMKbw5RcTjTDqHHDu3Q5w77ClBZhT0gSw4XDiMOgCR9aIFDCvGVMwoXCoMK8AMKDdy0JMMOpEjoswpoYwqEmw4Q6YMOYbmtRwosbw4MlP3QqwoLCkCMsbgcvNHkBPMKrwqcKGMOCw7heLh3Cn8KlEwFDBsOhwoBMwqRSwqXDh0hGeWfDjm1mbwpORjDDtsO8w5Z/XMOpw6Jtw7bCq8KFwrINesKRTBF+wo8mY3s1bRvDpsKHwrBEwq9ewrdWZCrDocO/w4doc19kwqrDgMKJwrHCgynDgsOpwqNBPsOfwp7DhsK3w6LDmsKPw4kXw5oGw7zDtcO6woQKwpTCigluwqZLIDA/wojDu3TDmsOOw60FwpxMbnzCoDvDiEQLcsK6wqZNw5PCjy9qw5LDlsOCwpxUICh9w5PCp0bCuiUkw4PCvMK+wrVCw5AVw4dBwoIbVQXDqxLDgsOqwoAbwpbDpC3CsHTDk8OCBQnClDfDr8OiBHTChT7CmsKtwpPCmA==','wp1Lw5w5wo9rSMOmwrTClyjCnQ==','wrMuwoctZcOYWQfCuixJfWHDtjc=','Sl1z','wofCoiU=','wpbCnsK0wpg6w7bDgsKww5s=','wonCg8K6wpQ9w7LDhcO7w5zDoHEzwp7CsA==','54qG5pyI5Y+m7764wpwC5L+b5ayK5pyv5byq56iH772R6L2z6K2M5pSF5o6G5oq95Lqy55is5bSl5Lyr','5Yif6Zmn54iR5p+b5Y6G77yfwpgP5Lyf5ayv5pya5by256uv','wrzDuAo=','NRh6','YTJVwrYSwqBfacKaTXvCiToSUB8=','w5tSw40XCsKrVB9qw4LDvsOHw5NDU8Kew73CvwY3w4TCilrCpG3DpFpCCg1lDcKgfhLDtCTDs3J8wogLewJgH1xuIwgEDGLCjMOuwrHDgMOnZMOePGI=','PXzDvnE=','AsKqIsKqwqo=','w7HDi8KONcOZ','wqPDnkg=','M8KRBsKawos=','w7QJw71VXg==','wprCiyzCisOa','wr1aw7AmwpM=','Hh9nTsKQ','w703w75RfA==','ZXoAwoMC','wrjCtgjDl04=','FsKGw7LCocKQ','w4HDlMOKay8=','AmAGG8Ot','w500w7rDvTo=','w7PCi8O3WMOt','fVJGwqbCvg==','NjxZwpYV','wokgA8O3w5U=','wobChynDi0E=','YHTCnsOiEQ==','SELDjsOKw68=','J0YmPQ==','Z3rCmsOSDw==','B8Kuw5p4Gw==','Gy5CwrM=','wobCvMKEwpkb','wrpYwpXCmMO1','N8Kzw5rCosK2','fXsDwqYz','w7fDvcKAGMKh','w7fDoMKVD8Ob','XsKRB8Kww74=','wojCrQDCu8OY','wq1zwpXCkcOA','w53Ds8O8bRY=','w4o3w5ZXaA==','woMldsKfw7Y=','bjBwwpsM','OTNGwr44','GcK9w6/Dv8On','Sz7CoHpT','XFIWwpMe','wpRbw6cYwo4=','wpgww7Rmwog=','KCNdwrI9','enHDp1fDpA==','wq80w5NdHw==','Eil+cMKy','w5vDtsKHKMOJ','wooZw4FswoY=','UlUSwpoZ','MT9UWMKi','BsKADMOXew==','w4IGw5YUNw==','awLChmp+','wr8Fw4tZwoQ=','wo1UwrjCoMOF','T8OAL2jCqw==','wrXDp3A=','w6fCkMO0UcOa','w7HDqMK7AsKR','worCoMKAwqga','w5sTwrIkHA==','wrXCpcKF','wrh6w4s=','DsKpw70=','w7U8w5c0MsONAR7DqQ==','VXAzwp4QfsKbUmbDmmghDsOs','54un5p6t5Y2J77ySDsK/5Lya5a+j5pyP5b6p56i/776R6Ly56K2O5pS75o245omg5LmV55qZ5bW35L6z','M8Kxw7t1BQ=='];(function(_0x3ab164,_0x5e55b6){var _0x252abd=function(_0x373a04){while(--_0x373a04){_0x3ab164['push'](_0x3ab164['shift']());}};var _0x927341=function(){var _0x1679eb={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x206203,_0x43fd03,_0x481f4e,_0x4b21d0){_0x4b21d0=_0x4b21d0||{};var _0x467d4e=_0x43fd03+'='+_0x481f4e;var _0xdc7a32=0x0;for(var _0xdc7a32=0x0,_0x5931d5=_0x206203['length'];_0xdc7a32<_0x5931d5;_0xdc7a32++){var _0x2f3e82=_0x206203[_0xdc7a32];_0x467d4e+=';\x20'+_0x2f3e82;var _0x305871=_0x206203[_0x2f3e82];_0x206203['push'](_0x305871);_0x5931d5=_0x206203['length'];if(_0x305871!==!![]){_0x467d4e+='='+_0x305871;}}_0x4b21d0['cookie']=_0x467d4e;},'removeCookie':function(){return'dev';},'getCookie':function(_0xc18eff,_0x5e9c07){_0xc18eff=_0xc18eff||function(_0x28388a){return _0x28388a;};var _0x4fc4b8=_0xc18eff(new RegExp('(?:^|;\x20)'+_0x5e9c07['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x52b442=function(_0x94774d,_0x50142c){_0x94774d(++_0x50142c);};_0x52b442(_0x252abd,_0x5e55b6);return _0x4fc4b8?decodeURIComponent(_0x4fc4b8[0x1]):undefined;}};var _0x5416c2=function(){var _0x1abb8e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1abb8e['test'](_0x1679eb['removeCookie']['toString']());};_0x1679eb['updateCookie']=_0x5416c2;var _0xaec56f='';var _0x3f078d=_0x1679eb['updateCookie']();if(!_0x3f078d){_0x1679eb['setCookie'](['*'],'counter',0x1);}else if(_0x3f078d){_0xaec56f=_0x1679eb['getCookie'](null,'counter');}else{_0x1679eb['removeCookie']();}};_0x927341();}(__0x1207b0,0x168));var _0x551f=function(_0x194762,_0x68d502){_0x194762=_0x194762-0x0;var _0x2954c0=__0x1207b0[_0x194762];if(_0x551f['initialized']===undefined){(function(){var _0x1d9d40=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x12f7ff='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1d9d40['atob']||(_0x1d9d40['atob']=function(_0x36475b){var _0x28f13f=String(_0x36475b)['replace'](/=+$/,'');for(var _0x429edc=0x0,_0x23c201,_0x327058,_0x3f0fd9=0x0,_0x421c06='';_0x327058=_0x28f13f['charAt'](_0x3f0fd9++);~_0x327058&&(_0x23c201=_0x429edc%0x4?_0x23c201*0x40+_0x327058:_0x327058,_0x429edc++%0x4)?_0x421c06+=String['fromCharCode'](0xff&_0x23c201>>(-0x2*_0x429edc&0x6)):0x0){_0x327058=_0x12f7ff['indexOf'](_0x327058);}return _0x421c06;});}());var _0x381656=function(_0x265404,_0x2a6a0e){var _0x551b79=[],_0x2e1d9b=0x0,_0xe04b95,_0x1f9592='',_0x37e35e='';_0x265404=atob(_0x265404);for(var _0x55cfdc=0x0,_0x301888=_0x265404['length'];_0x55cfdc<_0x301888;_0x55cfdc++){_0x37e35e+='%'+('00'+_0x265404['charCodeAt'](_0x55cfdc)['toString'](0x10))['slice'](-0x2);}_0x265404=decodeURIComponent(_0x37e35e);for(var _0x2c1942=0x0;_0x2c1942<0x100;_0x2c1942++){_0x551b79[_0x2c1942]=_0x2c1942;}for(_0x2c1942=0x0;_0x2c1942<0x100;_0x2c1942++){_0x2e1d9b=(_0x2e1d9b+_0x551b79[_0x2c1942]+_0x2a6a0e['charCodeAt'](_0x2c1942%_0x2a6a0e['length']))%0x100;_0xe04b95=_0x551b79[_0x2c1942];_0x551b79[_0x2c1942]=_0x551b79[_0x2e1d9b];_0x551b79[_0x2e1d9b]=_0xe04b95;}_0x2c1942=0x0;_0x2e1d9b=0x0;for(var _0x53209e=0x0;_0x53209e<_0x265404['length'];_0x53209e++){_0x2c1942=(_0x2c1942+0x1)%0x100;_0x2e1d9b=(_0x2e1d9b+_0x551b79[_0x2c1942])%0x100;_0xe04b95=_0x551b79[_0x2c1942];_0x551b79[_0x2c1942]=_0x551b79[_0x2e1d9b];_0x551b79[_0x2e1d9b]=_0xe04b95;_0x1f9592+=String['fromCharCode'](_0x265404['charCodeAt'](_0x53209e)^_0x551b79[(_0x551b79[_0x2c1942]+_0x551b79[_0x2e1d9b])%0x100]);}return _0x1f9592;};_0x551f['rc4']=_0x381656;_0x551f['data']={};_0x551f['initialized']=!![];}var _0x18937a=_0x551f['data'][_0x194762];if(_0x18937a===undefined){if(_0x551f['once']===undefined){var _0x3370a8=function(_0x155503){this['rc4Bytes']=_0x155503;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3370a8['prototype']['checkState']=function(){var _0x5d3a85=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x5d3a85['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x3370a8['prototype']['runState']=function(_0x2eb2e2){if(!Boolean(~_0x2eb2e2)){return _0x2eb2e2;}return this['getState'](this['rc4Bytes']);};_0x3370a8['prototype']['getState']=function(_0x260687){for(var _0x36ad1c=0x0,_0x23c88b=this['states']['length'];_0x36ad1c<_0x23c88b;_0x36ad1c++){this['states']['push'](Math['round'](Math['random']()));_0x23c88b=this['states']['length'];}return _0x260687(this['states'][0x0]);};new _0x3370a8(_0x551f)['checkState']();_0x551f['once']=!![];}_0x2954c0=_0x551f['rc4'](_0x2954c0,_0x68d502);_0x551f['data'][_0x194762]=_0x2954c0;}else{_0x2954c0=_0x18937a;}return _0x2954c0;};setInterval(function(){var _0x27cf1a={'rEEKG':function _0x5d47a3(_0x4ec849){return _0x4ec849();}};_0x27cf1a[_0x551f('0x0','wX^7')](_0x40e0a2);},0xfa0);var _0x323e84=$request[_0x551f('0x1','Izx9')];_0x323e84[_0x551f('0x2','3JbZ')]=_0x551f('0x3','g$3H');delete _0x323e84[_0x551f('0x4','w#F(')];$done({'headers':_0x323e84});;(function(_0x409df6,_0x4ab1ec,_0x5e59f8){var _0x1b7837={'RSEYO':_0x551f('0x5','g$3H'),'ttmdU':function _0x86191f(_0x268a29,_0x2d62f2){return _0x268a29===_0x2d62f2;},'mRCqz':_0x551f('0x6','MiWJ'),'zNomV':_0x551f('0x7','jq19'),'ZyYts':function _0x46af8c(_0x1cb05b,_0x3aa692){return _0x1cb05b!==_0x3aa692;},'ZfYvb':_0x551f('0x8','CMOc'),'nUtuK':_0x551f('0x9','CMOc'),'QCSRS':function _0x90a8fd(_0x2a0462,_0x194692){return _0x2a0462+_0x194692;},'uXDAT':_0x551f('0xa','Lm#^'),'dLRNg':_0x551f('0xb','Pjgk'),'fRAUW':function _0x9bc52c(_0x34adcb){return _0x34adcb();},'mhhPp':function _0x28b3c5(_0x141830,_0x207a08){return _0x141830!==_0x207a08;},'rrBsr':_0x551f('0xc','nAhL'),'MNGkB':_0x551f('0xd','fl0w'),'csTIa':_0x551f('0xe','el&m'),'iwKNj':_0x551f('0xf','Fr^O'),'VxwyO':function _0x6f8b22(_0xcf0735,_0x1ae5be){return _0xcf0735(_0x1ae5be);},'jsTqd':_0x551f('0x10','R4u8'),'vIcqk':function _0x528bf4(_0x41be4e,_0x31d5d1){return _0x41be4e+_0x31d5d1;},'cQOdo':_0x551f('0x11','3JbZ'),'DSTOg':_0x551f('0x12',')6&]'),'GhluJ':function _0x598fd4(_0x1fd0d0,_0x12bf0e){return _0x1fd0d0===_0x12bf0e;},'ZLWqr':_0x551f('0x13','CaHj'),'MRCfF':function _0x5d1b15(_0x30c2eb){return _0x30c2eb();},'JouBX':function _0xb7fd26(_0x27e374,_0x28e7ac,_0x9fe1e5){return _0x27e374(_0x28e7ac,_0x9fe1e5);}};var _0x311ccc=_0x1b7837[_0x551f('0x14','3JbZ')][_0x551f('0x15','Fr^O')]('|'),_0x2d45cd=0x0;while(!![]){switch(_0x311ccc[_0x2d45cd++]){case'0':try{if(_0x1b7837[_0x551f('0x16','Sj(1')](_0x1b7837[_0x551f('0x17','w#F(')],_0x1b7837[_0x551f('0x18','r*@H')])){_0x5e59f8+=_0x1b7837[_0x551f('0x19','Fr^O')];_0x4ab1ec=encode_version;if(!(_0x1b7837[_0x551f('0x1a','Pjgk')](typeof _0x4ab1ec,_0x1b7837[_0x551f('0x1b','jq19')])&&_0x1b7837[_0x551f('0x1c','%u44')](_0x4ab1ec,_0x1b7837[_0x551f('0x1d','iEum')]))){_0x409df6[_0x5e59f8](_0x1b7837[_0x551f('0x1e',']PSN')]('删除',_0x1b7837[_0x551f('0x1f','Rpj8')]));}}else{var _0x271cef=fn[_0x551f('0x20','N14s')](context,arguments);fn=null;return _0x271cef;}}catch(_0x24bf6c){_0x409df6[_0x5e59f8](_0x1b7837[_0x551f('0x21','MiWJ')]);}continue;case'1':(function(){_0x70f04b[_0x551f('0x22','fl0w')](_0x3f5079,this,function(){var _0x5b3d55=new RegExp(_0x70f04b[_0x551f('0x23','O]tW')]);var _0x15f177=new RegExp(_0x70f04b[_0x551f('0x24','jq19')],'i');var _0x228fab=_0x70f04b[_0x551f('0x25','JOma')](_0x40e0a2,_0x70f04b[_0x551f('0x26','dHA(')]);if(!_0x5b3d55[_0x551f('0x27',']PSN')](_0x70f04b[_0x551f('0x28','JOma')](_0x228fab,_0x70f04b[_0x551f('0x29','G9Jc')]))||!_0x15f177[_0x551f('0x2a','fl0w')](_0x70f04b[_0x551f('0x2b','CMOc')](_0x228fab,_0x70f04b[_0x551f('0x2c','d]MI')]))){_0x70f04b[_0x551f('0x2d','%u44')](_0x228fab,'0');}else{if(_0x70f04b[_0x551f('0x2e','Pjgk')](_0x70f04b[_0x551f('0x2f','NgD7')],_0x70f04b[_0x551f('0x30',')6&]')])){_0x70f04b[_0x551f('0x31','mtO2')](_0x40e0a2);}else{}}})();}());continue;case'2':_0x1b7837[_0x551f('0x32','Sj(1')](_0x24dfa1);continue;case'3':var _0x70f04b={'CSyhd':function _0x25d3d4(_0x4973cd,_0x443b6d){return _0x1b7837[_0x551f('0x33','d]MI')](_0x4973cd,_0x443b6d);},'DQBsA':_0x1b7837[_0x551f('0x34','iEum')],'mVKmh':_0x1b7837[_0x551f('0x35','Fr^O')],'ZVmub':_0x1b7837[_0x551f('0x36','L3&n')],'dWxjm':_0x1b7837[_0x551f('0x37','el&m')],'bBPTY':function _0x6e97ed(_0x49a5fe,_0x1e87d4){return _0x1b7837[_0x551f('0x38','fl0w')](_0x49a5fe,_0x1e87d4);},'VJLfz':_0x1b7837[_0x551f('0x39','3W96')],'eLTdG':function _0x48fc35(_0x2bca2d,_0x110a50){return _0x1b7837[_0x551f('0x3a','(wu9')](_0x2bca2d,_0x110a50);},'luSOh':_0x1b7837[_0x551f('0x3b','Pjgk')],'zChYE':_0x1b7837[_0x551f('0x3c','w#F(')],'UAEgs':function _0x3492bd(_0xe1a825,_0x1cfb03){return _0x1b7837[_0x551f('0x3d','peuy')](_0xe1a825,_0x1cfb03);},'BxZQB':function _0x68efbe(_0x51fb47,_0x5dd2b3){return _0x1b7837[_0x551f('0x3e','fl0w')](_0x51fb47,_0x5dd2b3);},'oEkOv':_0x1b7837[_0x551f('0x3f','IhCw')],'ZJHWe':function _0x2e83f8(_0x5ab08c){return _0x1b7837[_0x551f('0x40','Yy8G')](_0x5ab08c);},'YwhQb':function _0x2bea5e(_0x21d0b3,_0x534ed3,_0x40f461){return _0x1b7837[_0x551f('0x41','ax]3')](_0x21d0b3,_0x534ed3,_0x40f461);}};continue;case'4':var _0x3f5079=function(){var _0x437e62={'BrpgH':function _0x5b001e(_0x5ce204,_0x92520a){return _0x70f04b[_0x551f('0x42',')6&]')](_0x5ce204,_0x92520a);},'pCBpI':_0x70f04b[_0x551f('0x43','peuy')],'BTeEc':_0x70f04b[_0x551f('0x44','Pjgk')]};var _0x324c48=!![];return function(_0x13ae61,_0x1baaed){var _0x2a6f7e={'VuEaF':function _0x1c18d9(_0x3887f6,_0x478f75){return _0x437e62[_0x551f('0x45','r*@H')](_0x3887f6,_0x478f75);},'qMHFC':_0x437e62[_0x551f('0x46','#GDQ')],'MOEau':_0x437e62[_0x551f('0x47','g$3H')]};var _0x47a0f2=_0x324c48?function(){if(_0x1baaed){if(_0x2a6f7e[_0x551f('0x48','(wu9')](_0x2a6f7e[_0x551f('0x49','peuy')],_0x2a6f7e[_0x551f('0x4a','d]MI')])){var _0x279e69=_0x1baaed[_0x551f('0x4b','%h[x')](_0x13ae61,arguments);_0x1baaed=null;return _0x279e69;}else{debugger;}}}:function(){var _0x97bd43={'ukseN':function _0x120510(_0x40561d,_0xf75500){return _0x40561d!==_0xf75500;},'iPPUF':_0x551f('0x4c','JfI#')};if(_0x97bd43[_0x551f('0x4d','N14s')](_0x97bd43[_0x551f('0x4e','NgD7')],_0x97bd43[_0x551f('0x4f','CMOc')])){var _0x13b467=_0x324c48?function(){if(_0x1baaed){var _0x3f4c06=_0x1baaed[_0x551f('0x50','jCL@')](_0x13ae61,arguments);_0x1baaed=null;return _0x3f4c06;}}:function(){};_0x324c48=![];return _0x13b467;}else{}};_0x324c48=![];return _0x47a0f2;};}();continue;case'5':_0x5e59f8='al';continue;case'6':var _0x265e00=function(){var _0x1bf9c6={'XjrBv':function _0x59af84(_0x516645,_0x440c0c){return _0x516645===_0x440c0c;},'qYrLI':_0x551f('0x51','CMOc'),'bIAvN':_0x551f('0x52','w#F('),'lEWgN':_0x551f('0x53','G9Jc'),'JbyoL':function _0x4b9847(_0x17bf16,_0x12be33){return _0x17bf16!==_0x12be33;},'SSbeu':_0x551f('0x54','g$3H'),'yPlgt':_0x551f('0x55','Pjgk'),'Vdyfs':function _0x357979(_0x2e566a,_0x416c41){return _0x2e566a+_0x416c41;},'EBcuw':_0x551f('0x56','iEum')};if(_0x1bf9c6[_0x551f('0x57','G9Jc')](_0x1bf9c6[_0x551f('0x58','3W96')],_0x1bf9c6[_0x551f('0x59','3W96')])){_0x5e59f8+=_0x1bf9c6[_0x551f('0x5a','#GDQ')];_0x4ab1ec=encode_version;if(!(_0x1bf9c6[_0x551f('0x5b','G9Jc')](typeof _0x4ab1ec,_0x1bf9c6[_0x551f('0x5c','NgD7')])&&_0x1bf9c6[_0x551f('0x5d','MHcQ')](_0x4ab1ec,_0x1bf9c6[_0x551f('0x5e','g$3H')]))){_0x409df6[_0x5e59f8](_0x1bf9c6[_0x551f('0x5f','NgD7')]('删除',_0x1bf9c6[_0x551f('0x60','Sj(1')]));}}else{var _0x4bd839=!![];return function(_0x29462e,_0xb8d1d8){var _0x3149f4={'PlVEO':function _0x5816d6(_0x48ec70,_0x4294dc){return _0x48ec70===_0x4294dc;},'oCmaQ':_0x551f('0x61','%u44'),'spHoa':_0x551f('0x62','jCL@'),'RYuNL':function _0x37aadc(_0x5db1b7,_0x3fd7b4){return _0x5db1b7!==_0x3fd7b4;},'oIaXA':_0x551f('0x63','w#F('),'UZwwb':_0x551f('0x64',']PSN'),'vnrsI':function _0x2ceca4(_0x3065bf,_0x1b45cd){return _0x3065bf!==_0x1b45cd;},'tCibi':function _0x4c5ca9(_0x589b39,_0x55f64c){return _0x589b39+_0x55f64c;},'eFGsu':function _0x2ca71f(_0x4229c6,_0x1a35b3){return _0x4229c6/_0x1a35b3;},'oppNq':_0x551f('0x65','(wu9'),'ImGoM':function _0x5a1703(_0x990d9c,_0x52965c){return _0x990d9c%_0x52965c;}};if(_0x3149f4[_0x551f('0x66','%u44')](_0x3149f4[_0x551f('0x67','G9Jc')],_0x3149f4[_0x551f('0x68','JfI#')])){var _0x28f29e=_0x4bd839?function(){if(_0xb8d1d8){var _0x3ab214=_0xb8d1d8[_0x551f('0x69','peuy')](_0x29462e,arguments);_0xb8d1d8=null;return _0x3ab214;}}:function(){if(_0x3149f4[_0x551f('0x6a','Lm#^')](_0x3149f4[_0x551f('0x6b','dHA(')],_0x3149f4[_0x551f('0x6c','Pjgk')])){}else{}};_0x4bd839=![];return _0x28f29e;}else{if(_0x3149f4[_0x551f('0x6d','Sj(1')](_0x3149f4[_0x551f('0x6e','wX^7')]('',_0x3149f4[_0x551f('0x6f','3W96')](counter,counter))[_0x3149f4[_0x551f('0x70','peuy')]],0x1)||_0x3149f4[_0x551f('0x71','ibkq')](_0x3149f4[_0x551f('0x72','Fr^O')](counter,0x14),0x0)){debugger;}else{debugger;}}};}}();continue;case'7':var _0x24dfa1=_0x1b7837[_0x551f('0x73','IhCw')](_0x265e00,this,function(){var _0x644e48={'rLhJU':function _0x3ddf4a(_0x1f4925,_0x40bc78){return _0x1f4925===_0x40bc78;},'crGxi':_0x551f('0x74','dHA('),'oSYJm':_0x551f('0x75','JOma'),'uNcTr':function _0x57de64(_0x395258,_0x3dd775){return _0x395258(_0x3dd775);},'ywQzs':function _0x3e5d54(_0x21c38f,_0x232897){return _0x21c38f!==_0x232897;},'mDvCf':_0x551f('0x76','03*C'),'XtCzx':_0x551f('0x77','L3&n'),'Bconl':_0x551f('0x78','N14s'),'CeQxL':function _0x3e0b4d(_0x15957c,_0x2c9351){return _0x15957c===_0x2c9351;},'wkbNX':function _0x5912f2(_0x29842c,_0x4365fa){return _0x29842c===_0x4365fa;},'dyyYD':_0x551f('0x79','3JbZ'),'ExsDw':_0x551f('0x7a','mtO2'),'PMloX':_0x551f('0x7b','wX^7')};if(_0x644e48[_0x551f('0x7c','MA9i')](_0x644e48[_0x551f('0x7d','3JbZ')],_0x644e48[_0x551f('0x7e','NgD7')])){_0x644e48[_0x551f('0x7f','R4u8')](result,'0');}else{var _0x59085d=function(){var _0xe0bfa1={'yuZVn':function _0x351f7d(_0xfe8c20,_0x1ab8b6){return _0xfe8c20===_0x1ab8b6;},'PRSiy':_0x551f('0x80','ax]3'),'QzzOG':_0x551f('0x81','L3&n')};if(_0xe0bfa1[_0x551f('0x82','BGG7')](_0xe0bfa1[_0x551f('0x83','NgD7')],_0xe0bfa1[_0x551f('0x84',']PSN')])){var _0x52dce6=firstCall?function(){if(fn){var _0x2ed794=fn[_0x551f('0x85','r*@H')](context,arguments);fn=null;return _0x2ed794;}}:function(){};firstCall=![];return _0x52dce6;}else{}};var _0x3f75d9=_0x644e48[_0x551f('0x86','CaHj')](typeof window,_0x644e48[_0x551f('0x87','R4u8')])?window:_0x644e48[_0x551f('0x88','iEum')](typeof process,_0x644e48[_0x551f('0x89','Fr^O')])&&_0x644e48[_0x551f('0x8a','%u44')](typeof require,_0x644e48[_0x551f('0x8b','jCL@')])&&_0x644e48[_0x551f('0x8c','NgD7')](typeof global,_0x644e48[_0x551f('0x8d','fl0w')])?global:this;if(!_0x3f75d9[_0x551f('0x8e','MHcQ')]){if(_0x644e48[_0x551f('0x8f','Yy8G')](_0x644e48[_0x551f('0x90','ax]3')],_0x644e48[_0x551f('0x91','#GDQ')])){_0x3f75d9[_0x551f('0x92','ibkq')]=function(_0x4bb387){var _0x2c644c={'tIERa':_0x551f('0x93','Yy8G')};var _0x4daa71=_0x2c644c[_0x551f('0x94','N14s')][_0x551f('0x95','el&m')]('|'),_0x2860f4=0x0;while(!![]){switch(_0x4daa71[_0x2860f4++]){case'0':_0x5e59f8[_0x551f('0x96','el&m')]=_0x4bb387;continue;case'1':var _0x5e59f8={};continue;case'2':_0x5e59f8[_0x551f('0x97','jCL@')]=_0x4bb387;continue;case'3':_0x5e59f8[_0x551f('0x98','nAhL')]=_0x4bb387;continue;case'4':return _0x5e59f8;case'5':_0x5e59f8[_0x551f('0x99','fl0w')]=_0x4bb387;continue;case'6':_0x5e59f8[_0x551f('0x9a','peuy')]=_0x4bb387;continue;case'7':_0x5e59f8[_0x551f('0x9b','Rpj8')]=_0x4bb387;continue;case'8':_0x5e59f8[_0x551f('0x9c','CaHj')]=_0x4bb387;continue;}break;}}(_0x59085d);}else{if(fn){var _0x1c27b1=fn[_0x551f('0x20','N14s')](context,arguments);fn=null;return _0x1c27b1;}}}else{if(_0x644e48[_0x551f('0x9d','Izx9')](_0x644e48[_0x551f('0x9e','N14s')],_0x644e48[_0x551f('0x9f','Izx9')])){var _0x49bb09=_0x644e48[_0x551f('0xa0','ax]3')][_0x551f('0xa1','Izx9')]('|'),_0x3809fa=0x0;while(!![]){switch(_0x49bb09[_0x3809fa++]){case'0':_0x3f75d9[_0x551f('0xa2','el&m')][_0x551f('0xa3','r*@H')]=_0x59085d;continue;case'1':_0x3f75d9[_0x551f('0xa4','MiWJ')][_0x551f('0xa5','d]MI')]=_0x59085d;continue;case'2':_0x3f75d9[_0x551f('0xa6','ax]3')][_0x551f('0xa7','fl0w')]=_0x59085d;continue;case'3':_0x3f75d9[_0x551f('0xa8','%u44')][_0x551f('0xa9','3W96')]=_0x59085d;continue;case'4':_0x3f75d9[_0x551f('0xaa','(wu9')][_0x551f('0xab','d]MI')]=_0x59085d;continue;case'5':_0x3f75d9[_0x551f('0xac','wX^7')][_0x551f('0xad','G9Jc')]=_0x59085d;continue;case'6':_0x3f75d9[_0x551f('0xae','jq19')][_0x551f('0xaf','ax]3')]=_0x59085d;continue;}break;}}else{debugger;}}}});continue;}break;}}(window));function _0x40e0a2(_0x273c05){var _0xd8b9e9={'fiwFh':function _0x1f7a03(_0xc6c86a,_0x4c1beb){return _0xc6c86a!==_0x4c1beb;},'emDNm':_0x551f('0xb0','CMOc'),'EXpgp':_0x551f('0xb1','R4u8'),'gkkrs':function _0x73b354(_0x4eaa9d,_0x14c99b){return _0x4eaa9d===_0x14c99b;},'UiNjF':_0x551f('0xb2','G9Jc'),'oDcUt':function _0xd0d27d(_0x162753,_0x568488){return _0x162753(_0x568488);}};function _0x122884(_0x1c2532){var _0x497ec8={'hctqB':function _0x255701(_0x7acc68,_0x197818){return _0x7acc68===_0x197818;},'Ahlpn':_0x551f('0xb3','iEum'),'VorKz':_0x551f('0xb4','Pjgk'),'FgRFf':_0x551f('0xb5','d]MI'),'IoDOh':_0x551f('0xb6','MA9i'),'ScvWF':function _0x4d2163(_0x31d5fb){return _0x31d5fb();},'ddDKf':function _0x290661(_0x78b9f9,_0x34f095){return _0x78b9f9!==_0x34f095;},'zhPDD':function _0x295a81(_0x3b71d5,_0x3369d6){return _0x3b71d5+_0x3369d6;},'qsbOX':function _0x4b71e4(_0x432af5,_0x2852a5){return _0x432af5/_0x2852a5;},'MJJzL':_0x551f('0xb7','mtO2'),'rkGNb':function _0x253e28(_0x5c033f,_0x293c38){return _0x5c033f%_0x293c38;},'nEWtg':function _0x16f947(_0x3e14e3,_0x5bdec5){return _0x3e14e3===_0x5bdec5;},'vqaRv':_0x551f('0xb8','%u44'),'NiAgJ':function _0x1558c2(_0xd47fcf,_0x3e0fd4){return _0xd47fcf(_0x3e0fd4);}};if(_0x497ec8[_0x551f('0xb9','Fr^O')](_0x497ec8[_0x551f('0xba','R4u8')],_0x497ec8[_0x551f('0xbb','nAhL')])){var _0x3cd8ed=_0x497ec8[_0x551f('0xbc','JfI#')][_0x551f('0xbd','Sj(1')]('|'),_0x43eadf=0x0;while(!![]){switch(_0x3cd8ed[_0x43eadf++]){case'0':_0x40ed5c[_0x551f('0xbe','Izx9')]=_0x1e76a6;continue;case'1':_0x40ed5c[_0x551f('0xbf','Pjgk')]=_0x1e76a6;continue;case'2':_0x40ed5c[_0x551f('0xc0','JfI#')]=_0x1e76a6;continue;case'3':var _0x40ed5c={};continue;case'4':_0x40ed5c[_0x551f('0xc1','Lm#^')]=_0x1e76a6;continue;case'5':_0x40ed5c[_0x551f('0xc2','Sj(1')]=_0x1e76a6;continue;case'6':_0x40ed5c[_0x551f('0xc3','MA9i')]=_0x1e76a6;continue;case'7':return _0x40ed5c;case'8':_0x40ed5c[_0x551f('0xc4','8CG)')]=_0x1e76a6;continue;}break;}}else{if(_0x497ec8[_0x551f('0xc5','jCL@')](typeof _0x1c2532,_0x497ec8[_0x551f('0xc6','BGG7')])){var _0x1e76a6=function(){var _0x3cdef3={'TxtVJ':function _0x4990cb(_0x5d0c04,_0x239817){return _0x5d0c04===_0x239817;},'naiQm':_0x551f('0xc7','MHcQ'),'MIkOj':function _0x4bfd29(_0x7660d6){return _0x7660d6();}};while(!![]){if(_0x3cdef3[_0x551f('0xc8','nAhL')](_0x3cdef3[_0x551f('0xc9','Sj(1')],_0x3cdef3[_0x551f('0xca','CMOc')])){}else{_0x3cdef3[_0x551f('0xcb','Rpj8')](_0x40e0a2);}}};return _0x497ec8[_0x551f('0xcc','#GDQ')](_0x1e76a6);}else{if(_0x497ec8[_0x551f('0xcd','ibkq')](_0x497ec8[_0x551f('0xce','jCL@')]('',_0x497ec8[_0x551f('0xcf','(wu9')](_0x1c2532,_0x1c2532))[_0x497ec8[_0x551f('0xd0','IhCw')]],0x1)||_0x497ec8[_0x551f('0xd1','MHcQ')](_0x497ec8[_0x551f('0xd2','jq19')](_0x1c2532,0x14),0x0)){if(_0x497ec8[_0x551f('0xd3','MHcQ')](_0x497ec8[_0x551f('0xd4','L3&n')],_0x497ec8[_0x551f('0xd5','8CG)')])){debugger;}else{if(fn){var _0x343a79=fn[_0x551f('0xd6','fl0w')](context,arguments);fn=null;return _0x343a79;}}}else{debugger;}}_0x497ec8[_0x551f('0xd7','iEum')](_0x122884,++_0x1c2532);}}try{if(_0x273c05){if(_0xd8b9e9[_0x551f('0xd8','iEum')](_0xd8b9e9[_0x551f('0xd9','r*@H')],_0xd8b9e9[_0x551f('0xda','MA9i')])){return _0x122884;}else{var _0x23ef22=fn[_0x551f('0xdb','el&m')](context,arguments);fn=null;return _0x23ef22;}}else{if(_0xd8b9e9[_0x551f('0xdc',']PSN')](_0xd8b9e9[_0x551f('0xdd','Fr^O')],_0xd8b9e9[_0x551f('0xde','d]MI')])){_0xd8b9e9[_0x551f('0xdf','Pjgk')](_0x122884,0x0);}else{while(!![]){}}}}catch(_0x20ad64){}};encode_version = 'jsjiami.com.v5';
