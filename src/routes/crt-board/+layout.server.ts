import { menuStore, subMenuStore } from '$stores/menuStore.js';
import { get } from 'svelte/store';




export const load = async function({locals, url}) {
    // 현황 메뉴 스토어 데이터
    const crtMenuStore = get(menuStore)["/crt-board"];

    // 현황 서브 메뉴 스토어 데이터
    const crtList = get(subMenuStore)["/crt-board"];

    return {
        img: crtMenuStore.bImg,
        name: crtMenuStore.name,
        subList: crtList
    };
}