[rewrite_local]
# 自用插件
^https?:\/\/app\.bilibili\.com\/x\/v2\/(account\/(myinfo|mine)|feed\/index)\? url script-request-header https://raw.githubusercontent.com/Fly961219/GG/refs/heads/main/ziyongbb.js
^https?:\/\/app\.bilibili\.com\/bilibili\.app\.playerunite\.v1\.Player\/PlayViewUnite url script-request-header https://raw.githubusercontent.com/Fly961219/GG/refs/heads/main/ziyongbb.js

[mitm]
hostname = *.bilibili.*, *.biliapi.*, 111.31.33.*, 111.6.167.*, app.bilibili.com, api.bilibili.com, api.live.bilibili.com, grpc.biliapi.net

*
*
*/


var headers = $request.headers;

headers["Cookie"] = "DedeUserID=413201539; DedeUserID__ckMd5=757ad89b7ae9e83d; bili_jct=85847acb5bc7c368dc1b5b8c0afab58c; sid=nxc62w8w; SESSDATA=b463af68%2C1747915439%2C3a36d6b1...";
headers["Authorization"] = "Bearer b463af68%2C1747915439%2C3a36d6b1CjC147tYiTYdKMJzfreo0R3hK0nBxMfg44Ygt-IohkjvY7U11AQd_QxxvWo_kkHJNW0SVm5aNlNMbEx4YkRnSjViZmlpdGlKM0c2NkNxT29YUHRQMXpHcFFEUXhMd2toS21heHZNdXVGUzE5Zl9LaU52d1BLeW9ab2xDWnptbW0yOVJNZW9qQzFBIIEC"; // 替换为你的 access_key
headers["Buvid"] = "Y647126AFE7823304A3B83A0A07A9DE9BF28"; // 替换为你的 buvid
headers["User-Agent"] = "BiliApp/82200100 (iPhone; iOS 17.4)"; // 替换为你的设备 User-Agent

$done({ headers });
