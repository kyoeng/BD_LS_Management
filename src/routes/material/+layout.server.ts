import { menuStore, subMenuStore } from '$stores/menuStore.js';
import { get } from 'svelte/store';




export const load = async function({locals, url}) {
    // 자재 관리 메뉴 스토어 데이터
    const materialMenuStore = get(menuStore)["/material"];

    // 자재 관리 서브 메뉴 스토어 데이터
    const subMenuList = get(subMenuStore)["/material"];

    return {
        img: materialMenuStore.bImg,
        name: materialMenuStore.name,
        subList: subMenuList
    };
}