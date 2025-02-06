let obj = JSON.parse($response.body);

// 模拟广告播放已完成
obj.status = 1;
obj.reward = 1;
obj.msg = "success";
obj.play_duration = 30;  // 让服务器认为广告播放了 30 秒
obj.ad_status = "finished"; // 可能用于判断广告是否完整播放
obj.is_completed = true; // 可能用于判断广告是否达到领取条件

$done({ body: JSON.stringify(obj) });
