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