let obj = JSON.parse($response.body);

// 模拟广告播放 30 秒后完成
obj.status = 1;
obj.reward = 1;
obj.msg = "success";
obj.play_duration = 30;  // 伪造播放时间
obj.finished = true;  // 伪造广告播放完成
obj.ad_status = "played"; // 可能的状态字段

$done({ body: JSON.stringify(obj) });
