<script lang="ts">
    import { page } from "$app/state";
    import { menuStore } from "$stores/menuStore";


    // props
    let { data } = $props();
</script>



<div id="sidebar-container">
    <span id="info-text">
        {#if page.url.pathname === '/'}
            홈
        {:else if page.url.pathname.includes("/crt-board")}
            작업 현황
        {:else if page.url.pathname.includes("/reg-work")}
            작업 등록
        {:else if page.url.pathname.includes("/material")}
            자재 관리
        {:else if page.url.pathname.includes("/account")}
            계정 관리
        {/if}
    </span>

    {#each Object.keys($menuStore) as key}
        {#if data.level <= $menuStore[key].level}
            <a class="menu" href="{$menuStore[key].to}" 
            class:on={key === '/' ? page.url.pathname === key : page.url.pathname.includes(key)}>
                <img class="menu-img" src="{$menuStore[key].wImg}" alt="icon">
            </a>
        {/if}
    {/each}
</div>



<style lang="scss">
    #sidebar-container {
        position: fixed;
        left: 0;
        top: 80px;
        display: flex;
        flex-direction: column;
        width: 80px;
        height: 100%;
        background-color: var(--color-deep);
        z-index: 10000;


        // 현재 메뉴 안내
        #info-text {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 120px;
            font-size: 1.6rem;
            color: var(--color-light-font);
            font-family: var(--font-b);
        }


        // 메뉴
        .menu {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 80px;
            padding: 10px;


            .menu-img {
                width: 25px;
                height: 25px;
            }
        }
        .menu.on {
            background-color: var(--color-deep2);
        }
    }
</style>