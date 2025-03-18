<script lang="ts">
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';
    import { page } from '$app/state';



    // props
    let {data, children} = $props();
</script>



<div id="app-container" class="bg-color-1" class:pd={
    page.url.pathname !== "/login" && page.url.pathname !== "join" && page.url.pathname !== "find"
}>
    {#if page.url.pathname === "/login" || page.url.pathname === "join" || page.url.pathname === "find"}
        {@render children()}
    {:else}
        <Header data={{name: "(주)형제철강레이져", auth: "관리자"}} />

        <div id="non-header-area">
            <Sidebar data={{level: 1}} />

            <div id="contents-area" class:pd={page.url.pathname !== '/'}>
                {@render children()}
            </div>
        </div>
    {/if}
</div>



<style lang="scss">
    :global(:root) {
        --color-white: #ffffff;
        --color-blue: #0155ff;
        --color-blue2: #8399c5;
        --color-deep: #1c2453;
        --color-deep2: #101634;
        --color-deep3: #4a505b;
        --color-gray: #eeeeee;
        --color-light-font: #f5faff;
        --color-dark-font: #333333;
        --color-default-bg: #f2f5fa;

        --font-b: "Pretendard-Bold";
    }

    
    #app-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        min-width: 1600px;


        #non-header-area {
            display: flex;
            width: 100%;
            flex: 1;


            #contents-area {
                flex: 1;
                height: 100%;
            }
            #contents-area.pd { padding-top: 120px; }
        }
    }
    #app-container.pd {
        padding: 80px 0 0 80px;
    }
</style>