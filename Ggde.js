/*
📌 Loon 脚本：去广告 & 秒过广告奖励
📌 作用：
  1. 屏蔽广告 API，返回空数据
  2. 拦截广告奖励 API，返回正确的奖励数据
📌 适用于：
  - 广告请求：ad.zijieapi.com
  - 领取奖励：2024.youzizizi.lat/api/v1/client/subscribe
📌 更新时间：2025-02-06
*/

const url = $request.url;

if (url.includes("ad.zijieapi.com")) {
    // 处理广告拦截
    console.log(`[去广告] 拦截广告请求：${url}`);

    $done({
        response: {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache"
            },
            body: JSON.stringify({})
        }
    });
} else if (url.includes("youzizizi.lat/api/v1/client/subscribe")) {
    // 处理秒过奖励
    console.log(`[秒过奖励] 拦截请求：${url}`);

    const responseBody = {
        code: 200,
        status: "success",
        message: "奖励领取成功",
        data: {
            reward_id: "RWD-20240206-001",
            user_id: "USR-987654",
            timestamp: Date.now(),
            reward_amount: 100,
            extra: "领取成功"
        }
    };

    $done({
        response: {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
                "Server": "nginx" // 模拟服务器
            },
            body: JSON.stringify(responseBody)
        }
    });
} else {
    $done({});
}
