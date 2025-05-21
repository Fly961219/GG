[Rewrite]
^https:\/\/www\.feiyudo\.com\/api\/user\/info$ url script-response-body https://raw.githubusercontent.com/Fly961219/GG/refs/heads/main/Feiyu.js

// 
let body = JSON.parse($response.body);

// 模拟
body。data。vip = true;
body。data.is_vip = true;
body。data.vip_expire = "2099-12-31 23:59:59";
body。data.remain_times = 9999;

$done({ body: JSON.stringify(body) });
