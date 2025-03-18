import redis from "$lib/server/redis";
import { fail, redirect, type Actions } from "@sveltejs/kit";







export const actions: Actions = {
    default: async ({cookies, request}) => {
        const reqData = await request.formData();
        const id = reqData.get("id");
        const pw = reqData.get("pw");

        // 로그인 로직
        if (id === "admin" && pw === "admin") {
            // 세션 쿠키 생성
            const sessionId = crypto.randomUUID();
            cookies.set("session_id", sessionId, {
                httpOnly: true,
                secure: true,
                path: '/',
                maxAge: 60 * 60 * 9
            });

            // redis에 세션 정보 저장 (추후 로그인된 계정 정보로 변경)
            await redis.set(
                `session_id:${sessionId}`, 
                JSON.stringify({
                    name: "관리자",
                    level: 1,
                    company: "(주)형제철강레이저"
                }),
                "EX",
                60 * 60 * 9
            );

            redirect(301, "/");
        } else {
            return fail(400, { incorrect: true });
        }
    }
}






// export const actions: Actions = {
//     // 이메일 인증을 위한 메일 발송
//     sendEmailAuth: async ({cookies, request}) => {
//         try {
//             const data = await request.formData();
//             const email = data.get("email") as string;

//             const sendMailRes = sendMailAuthCode(email);
//             if (sendMailRes.result == "fail") throw new Error("Failed to send mail.");

//             const EmailAutHashValue = await hashString(sendMailRes.code);
//             cookies.set("auth-code", EmailAutHashValue, {
//                 path: '/',
//                 httpOnly: true,
//                 sameSite: 'strict',
//                 secure: import.meta.env.MODE === "production",
//                 maxAge: 60 * 3
//             });

//             return { success: true };
//         } catch (error) {
//             console.error("!!!!!!!!!!!!!!");
//             console.error(error);

//             return fail(400, { error });
//         }
//     },

//     // 이메일 인증
//     checkEmailAuth: async ({cookies, request}) => {
//         try {
//             const data = await request.formData();
//             const userInputAuthCode = data.get("auth-code") as string;
//             const mailAuthCode = cookies.get("auth-code") as string;

//             const isVerified = await bcrypt.compare(userInputAuthCode, mailAuthCode);
//             if (!isVerified) throw new Error("This code is not verified");

//             return { success: true };
//         } catch (error) {
//             console.error("!!!!!!!!!!!!!!");
//             console.error(error);

//             return fail(400, { error });
//         }
//     },
// }