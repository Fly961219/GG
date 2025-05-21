/**
 * 飞鱼弹幕破解脚本 - Loon用
 * 修改飞鱼用户信息接口返回，伪造VIP权限和弹幕下载次数
 */

let body = $response.body;

if (body) {
  let obj = JSON.parse(body);
  // 确认是包含用户信息的接口
  if (obj.data) {
    obj.data.vip = true;
    obj.data.is_vip = true;
    obj.data.vip_expire = "2099-12-31 23:59:59";
    obj.data.remain_times = 9999; // 无限次数
  }
  $done({ body: JSON.stringify(obj) });
} else {
  $done({});
}
