[rewrite_local]
# > 自用插件
^https?:\/\/app.bilibili.com\/x\/v2\/(account\/(myinfo|mine)|(feed\/index))\? url script-response-body https://raw.githubusercontent.com/Fly961219/GG/refs/heads/main/ziyongbb.js
^https?:\/\/app.bilibili.com\/bilibili.app.playerunite.v1.Player\/PlayViewUnite url script-request-header https://raw.githubusercontent.com/Fly961219/GG/refs/heads/main/ziyongbb.js

[mitm]
hostname = *.bilibili.*,*.biliapi.*,111.31.33.*,111.6.167.*,app.bilibili.com, api.bilibili.com, api.live.bilibili.com, grpc.biliapi.net

*
*
*/




var headers = $request['headers'];
delete headers["Authorization"];
delete headers["Cookie"];
// headers['buvid'] = $persistentStore.read("Y647126AFE7823304A3B83A0A07A9DE9BF28");
headers['authorization'] = $persistentStore.read("b463af68%2C1747915439%2C3a36d6b1CjC147tYiTYdKMJzfreo0R3hK0nBxMfg44Ygt-IohkjvY7U11AQd_QxxvWo_kkHJNW0SVm5aNlNMbEx4YkRnSjViZmlpdGlKM0c2NkNxT29YUHRQMXpHcFFEUXhMd2toS21heHZNdXVGUzE5Zl9LaU52d1BLeW9ab2xDWnptbW0yOVJNZW9qQzFBIIEC");
headers['user-agent'] = $persistentStore.read("headers['user-agent'] = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148";
