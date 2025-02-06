// Loon 脚本：自动跳过广告并秒过奖励
// 适用于广告域名 ad.zijieapi.com 和奖励域名 2024.youzizizi.lat

const url = $request.url;

// 屏蔽广告域名列表
const blockList = [
    "ad.zijieapi.com"
];

// 直接完成奖励域名列表
const rewardList = [
    "2024.youzizizi.lat"
];

// 如果匹配到广告域名，直接返回空白内容
if (blockList.some(domain => url.includes(domain))) {
    console.log(`[拦截广告] ${url}`);
    $done({ response: { status: 204, body: "" } });
}

// 如果匹配到奖励域名，模拟奖励已领取
if (rewardList.some(domain => url.includes(domain))) {
    console.log(`[秒过奖励] ${url}`);
    $done({
        response: {
            status: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                success: true,
                message: "奖励已领取",
                data: { reward: "completed" }
            })
        }
    });
}

// 如果不匹配任何规则，则正常放行
$done({});
