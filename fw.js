[rewrite_local]
^http://8\.210\.246\.163:10010/emby/Users/b8476671779d45b5852c39754a0c3b76/Items/Resume\?.* url script-request-header https://raw.githubusercontent.com/Fly961219/GG/main/fw.js
^http://141\.11\.175\.105:10010/emby/Users/AuthenticateByName url script-request-body https://raw.githubusercontent.com/Fly961219/GG/main/fw.js

[mitm]
hostname = 141.11.175.105, 8.210.246.163

// 获取请求头
let headers = $request.headers;

// 检查 User-Agent 是否存在
if (headers['User-Agent']) {
    // 替换 Forward 为 SenPlayer
    headers['User-Agent'] = headers['User-Agent'].replace(/Forward/, 'SenPlayer');
}

// 返回修改后的请求
$done({ headers });
