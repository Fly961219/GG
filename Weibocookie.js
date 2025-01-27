const cookieKey = 'weibo_cookie'; // 持久化存储的键名

if (typeof $request !== 'undefined') {
  const cookie = $request.headers['Cookie'] || $request.headers['cookie'];
  if (cookie) {
    $persistentStore.write(cookie, cookieKey);
    $notification.post("微博 Cookie 获取成功", "", "已保存最新 Cookie");
  } else {
    $notification.post("获取失败", "未找到 Cookie 字段", "");
  }
  $done({});
} else {
  const storedCookie = $persistentStore.read(cookieKey);
  $notification.post("当前存储的 Cookie", "", storedCookie || "无");
  $done({});
}
