// ============================================
// Server Hooks
// ============================================



// 로그인된 유저 정보 전달하기
// (기업명, 계정명, 권한레벨 등)
export async function handle({event, resolve}) {
    return await resolve(event);
}