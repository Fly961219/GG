[rewrite_local]
#  自用测试
^https:\/\/msg\.qy\.net\/core script-request-header
^http:\/\/msg\.qy\.net\/v5\/ypt\/flux_manager script-request-header 



[mitm]
hostname = msg.qy。net， 

*

    var requestHeaders = $request.headers;
    requestHeaders['User-Agent'] = 'QYPlayer/iOS/5.1.0805;BT/mcto;NetType/wifi;Hv/10.10.24.8505;QTP/2.10.107.1'
    requestHeaders['qyid'] = '61f17245906156e5f61d60e3f2fdcdfa1111';
    requestHeaders['User-Identity:'] = 'APP/com.qiyi.iphone;20240829103300 SYS/iOS;17.4 SDI/9ca8b7aa21b36660058f9d9e127c94475d044bd6 FM/APPLE;iPhone13%2C4 NE/wifi;6553565535 Lang/zh-Hans-CN CLV/30233 SDK/SECVERIFY;30508 P/ TZ_Asia/Shanghai SECD/11A6107BF3B943FCE330BB2037B982EFF70119D7C94CB9 DC/8';
    requestHeaders['qypid'] = '4244760855229800_02032001010000000000_200';

    $done({
        "headers": requestHeaders
    });
