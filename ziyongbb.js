[rewrite_local]
# 自用插件
^https?:\/\/app\.bilibili\.com\/bilibili\.app\.playerunite\.v1\.Player\/PlayViewUnite url script-request-header https://raw.githubusercontent.com/Fly961219/GG/refs/heads/main/ziyongbb.js

[mitm]
hostname = *.bilibili.*, *.biliapi.*, 111.31.33.*, 111.6.167.*, app.bilibili.com, api.bilibili.com, api.live.bilibili.com, grpc.biliapi.net

*
*
*/

if ($request.url.indexOf("Player/PlayViewUnite") != -1) {
    var requestHeaders = $request.headers;
    requestHeaders['Authorization'] = '';
    requestHeaders['x-bili-ticket'] = '';
    requestHeaders['x-bili-device-bin'] = ''
    requestHeaders['User-Agent'] = ''
    requestHeaders['x-bili-mid'] = '';
    requestHeaders['buvid'] = '';
    requestHeaders['x-bili-metadata-bin'] = '';
    requestHeaders['x-bili-fawkes-req-bin'] = '';
    requestHeaders['x-bili-locale-bin'] = '';
    requestHeaders['x-bili-aurora-eid'] = '';
    requestHeaders['x-bili-trace-id'] = '';
    requestHeaders['x-bili-network-bin'] = '';
    requestHeaders['Cookie'] = '';
    $done({
        "headers": requestHeaders
    });
}
