/*


[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-body https://raw.githubusercontent.com/Fly961219/GG/refs/heads/main/Bb.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

var modifiedHeaders = $request.headers;

modifiedHeaders['Authorization'] = '';

modifiedHeaders['User-Agent'] = '';

$done({headers : modifiedHeaders});
