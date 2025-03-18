import { redirect } from '@sveltejs/kit';



export const load = async function({locals, url}) {
    // url
    const currentPath = url.pathname;

    // 유저 정보 가져오기
    const user = locals.user;
    
    // 유저 정보가 있을 시 return
    if (user) return { user };

    // 유저 정보가 없을 시 pathname 확인 후 redirect
    if (!currentPath.includes("/user")) throw redirect(301, "/user/login");

    return;
}