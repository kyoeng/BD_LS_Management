import homeIconW from "$images/home-icon-white.svg";
import homeIconB from "$images/home-icon.svg";
import currentIconW from "$images/current-icon-white.svg";
import currentIconB from "$images/current-icon.svg";
import registrationIconW from "$images/registration-icon-white.svg";
import registrationIconB from "$images/registration-icon.svg";
import materialIconW from "$images/material-icon-white.svg";
import materialIconB from "$images/material-icon.svg";
import accountIconW from "$images/account-icon-white.svg";
import accountIconB from "$images/account-icon.svg";
import { readable } from "svelte/store";




// 메뉴 스토어
export const menuStore = readable<Record<string, any>>({
    '/': {
        to: '/',
        name: "홈",
        wImg: homeIconW,
        bImg: homeIconB,
        level: 1
    },
    "/crt-board": {
        to: "/crt-board?w=laser",
        name: "작업 현황",
        wImg: currentIconW,
        bImg: currentIconB,
        level: 2
    },
    "/reg-work": {
        to: "/reg-work/laser",
        name: "작업 등록",
        wImg: registrationIconW,
        bImg: registrationIconB,
        level: 2
    },
    "/material": {
        to: "/material/list",
        name: "자재 관리",
        wImg: materialIconW,
        bImg: materialIconB,
        level: 2
    },
    "/account": {
        to: "",
        name: "계정 관리",
        wImg: accountIconW,
        bImg: accountIconB,
        level: 1
    },
});



// 서브 메뉴 스토어
export const subMenuStore = readable({
    "/crt-board": {
        "/crt-board?w=laser": {
            name: "레이저",
            type: "link"
        },
        "/crt-board?w=bending": {
            name: "절곡",
            type: "link"
        },
        "/crt-board?w=cutting": {
            name: "절단",
            type: "link"
        },
        "/crt-board?w=v-cutting": {
            name: "v-컷팅",
            type: "link"
        }
    },
    "/reg-work": {
        "/reg-work/laser": {
            name: "레이저",
            type: "link"
        },
        "/reg-work/bending": {
            name: "절곡",
            type: "link"
        },
        "/reg-work/cutting": {
            name: "절단",
            type: "link"
        },
        "/reg-work/v-cutting": {
            name: "v-컷팅",
            type: "link"
        }
    },
    "/material": {
        "/material/list": {
            name: "목록",
            type: "link"
        },
        "/material/reg": {
            name: "등록",
            type: "link"
        }
    },
    "/account": {

    },
})