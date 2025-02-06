// Loon 脚本：自动跳过广告并秒过奖励
// 适用于广告域名 ad.zijieapi.com 和奖励域名 2024.youzizizi.lat

const url = $request.url;
const blockList = [
    "ad.zijieapi.com"  // 屏蔽广告请求
];

const rewardList = [
    "2024.youzizizi.lat"  // 让倒计时奖励秒过
];

// 如果是广告域名，直接拦截请求
if (blockList.some(domain => url.includes(domain))) {
    $done({ response: { status: 200, body: "" } });
}

// 如果是奖励域名，直接返回成功响应，模拟奖励已领取
if (rewardList.some(domain => url.includes(domain))) {
    $done({
        response: {
            status: 200,
            body: JSON.stringify({
                success: true,
                message: "奖励已领取",
                data: { reward: "completed" }
            })
        }
    });
}

$done({});
