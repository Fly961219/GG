[rewrite_local]
^http://8\.210\.246\.163:10010/emby/Users/b8476671779d45b5852c39754a0c3b76/Items/Resume\?.* url script-request-header https://raw.githubusercontent.com/Fly961219/GG/main/fw.js
^http://8\.210\.246\.163:10010/emby/Users/AuthenticateByName url script-request-body https://raw.githubusercontent.com/Fly961219/GG/main/fw.js

[mitm]
hostname = 141.11.175.105, 8.210.246.163

// 获取请求头
// 获取请求头
let headers = $request.headers;

// 遍历请求头中的所有字段
for (let key in headers) {
    if (typeof headers[key] === 'string' && headers[key].includes('Forward')) {
        headers[key] = headers[key].replace(/Forward/g, 'SenPlayer');
    }
}

// 返回修改后的请求
$done({ headers });
