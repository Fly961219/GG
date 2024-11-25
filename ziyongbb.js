[rewrite_local]
# 自用插件
^https?:\/\/app\.bilibili\.com\/x\/v2\/(account\/(myinfo|mine)|feed\/index)\? url script-request-header https://raw.githubusercontent.com/Fly961219/GG/refs/heads/main/ziyongbb.js
^https?:\/\/app\.bilibili\.com\/bilibili\.app\.playerunite\.v1\.Player\/PlayViewUnite url script-request-header https://raw.githubusercontent.com/Fly961219/GG/refs/heads/main/ziyongbb.js

[mitm]
hostname = *.bilibili.*, *.biliapi.*, 111.31.33.*, 111.6.167.*, app.bilibili.com, api.bilibili.com, api.live.bilibili.com, grpc.biliapi.net

*
*
*/


var headers = $request['headers'];
delete headers["Authorization"];
delete headers["Cookie"];
// 
headers['buvid'] = $persistentStore.read("Y647126AFE7823304A3B83A0A07A9DE9BF28");
headers['authorization'] = $persistentStore.read("Bilibili_Authorization");
headers['user-agent'] = $persistentStore.read("Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/618.1.15.10.11 (KHTML, like Gecko) Mobile/21E219 BiliApp/82200100 os/ios model/iPhone 12 Pro Max mobi_app/iphone build/82200100 osVer/17.4 network/2 channel/AppStore Buvid/Y647126AFE7823304A3B83A0A07A9DE9BF28 c_locale/zh-Hans_CN s_locale/zh-Hans_CN sessionID/a60f8a29 disable_rcmd/0 isEmbedPgcNative/1");
$done({ 'headers': headers });
