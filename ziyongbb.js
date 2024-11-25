[rewrite_local]
# 自用插件
^https?:\/\/app\.bilibili\.com\/x\/v2\/(account\/(myinfo|mine)|feed\/index)\? url script-request-header https://raw.githubusercontent.com/Fly961219/GG/refs/heads/main/ziyongbb.js
^https?:\/\/app\.bilibili\.com\/bilibili\.app\.playerunite\.v1\.Player\/PlayViewUnite url script-request-header https://raw.githubusercontent.com/Fly961219/GG/refs/heads/main/ziyongbb.js
^https?:\/\/api\.bilibili\.com\/x\/vip\/ads\/material\/report?.* url script-request-header https://raw.githubusercontent.com/Fly961219/GG/refs/heads/main/ziyongbb.js
[mitm]
hostname = *.bilibili.*, *.biliapi.*, 111.31.33.*, 111.6.167.*, app.bilibili.com, api.bilibili.com, api.live.bilibili.com, grpc.biliapi.net

*
*
*/

var headers = $request['headers'];
delete headers["Authorization"];
delete headers["Cookie"];
// headers['buvid'] = $persistentStore.read("Bilibili_buvid");
headers['authorization'] = $persistentStore.read("Bilibili_Authorization");
headers['user-agent'] = $persistentStore.read("Bilibili_Cookie");
$done({ 'headers': headers });
// 拦截请求
var headers = $request.headers;

// 手动重写完整的 Cookie
headers["Cookie"] = "Cookie: DedeUserID=413201539; DedeUserID__ckMd5=757ad89b7ae9e83d; bili_jct=85847acb5bc7c368dc1b5b8c0afab58c; sid=nxc62w8w; Buvid=Y647126AFE7823304A3B83A0A07A9DE9BF28; SESSDATA=b463af68%2C1747915439%2C3a36d6b1CjC147tYiTYdKMJzfreo0R3hK0nBxMfg44Ygt-IohkjvY7U11AQd_QxxvWo_kkHJNW0SVm5aNlNMbEx4YkRnSjViZmlpdGlKM0c2NkNxT29YUHRQMXpHcFFEUXhMd2toS21heHZNdXVGUzE5Zl9LaU52d1BLeW9ab2xDWnptbW0yOVJNZW9qQzFBIIEC; buvid_fp=cf3305f48fc5ec628c9d32f64934c294; _uuid=6DD1F38A-1BE9-AAA3-1FE8-DB24107D31079652589infoc; b_lsid=CE2A610CE_19358E880A8; b_nut=1732363452; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzI2MjI2NTIsImlhdCI6MTczMjM2MzM5MiwicGx0IjotMX0._aFPqoiNnaavYLsskTedE2oEihGNDueSe1aV7UBYtBc; bili_ticket_expires=1732622592; buvid3=A3618944-C2B5-1E63-DA8C-00D47C9ADA8652613infoc; buvid4=2BE39508-3F44-962C-28D3-5CF8166623AA52613-124112312-uqrrPO2e9vryZCKO2I4rMg%3D%3D";

// 返回修改后的请求头
$done({ headers });
