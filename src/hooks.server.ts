// ============================================
// Server Hooks
// ============================================
import redis from '$lib/server/redis';




// =========================
// 로그인 여부 확인
// =========================
export async function handle({event, resolve}) {
    const sessionId = event.cookies.get("session_id");

    // 세션ID가 있는 경우
    if (sessionId) {
        const session = await redis.get(`session_id:${sessionId}`);

        if (session) event.locals.user = JSON.parse(session);
        else event.locals.user = null;

    // 세션ID가 없는 경우
    } else {
        event.locals.user = null;
    }

    return await resolve(event);
}