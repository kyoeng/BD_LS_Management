<script lang="ts">
    import arrowIcon from "$images/b-arrow-icon.svg";
    import { page } from "$app/state";
    import { PUBLIC_ENV_MODE } from "$env/static/public";


    // props
    let { data } = $props();

    // sub menu list state
    let subMenuListState = $state(false);

    // sub menu btn click evt
    const subMenuBtnClickEvt = () => {
        subMenuListState = !subMenuListState;
    }

    // list click evt
    const listClickEvt = () => {
        subMenuListState = false;
    }
</script>




<div id="sub-menubar-container">
    <div id="sub-menu-selector">
        <p id="current-menu">
            <img src="{data.img}" alt="menu-icon">
            <span>{data.name}</span>
        </p>

        <div id="current-sub-menu">
            <button id="sub-menu-btn" onclick={subMenuBtnClickEvt}>
                {data.subList[page.url.href.split(PUBLIC_ENV_MODE === "dev" ? "localhost:5173" : "실주소")[1]].name}

                <div id="arrow-img">
                    <img src="{arrowIcon}" alt="arrow-icon">
                </div>
            </button>

            <div id="sub-menu-list" class:on={subMenuListState}>
                {#each Object.keys(data.subList) as key}
                    {#if data.subList[key].type === "link"}
                        <a href="{key}" onclick={listClickEvt}>{data.subList[key].name}</a>
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</div>




<style lang="scss">
    #sub-menubar-container {
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        height: 120px;
        background-color: var(--color-white);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;


        #sub-menu-selector {
            width: 1314px;
            height: 50px;
            border: 1px solid var(--color-blue);
            box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
            display: flex;


            // 현재 메뉴 명
            #current-menu {
                position: relative;
                width: 120px;
                height: 100%;
                display: flex;
                align-items: center;
                padding: 0 15px;
                gap: 10px;

                img {
                    width: 23px;
                    height: 23px;
                }

                span {
                    flex: 1;
                    text-align: center;
                    font-size: 1.4rem;
                }
            }
            #current-menu::after {
                content: '';
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
                width: 1px;
                height: 50%;
                background-color: var(--color-blue2);
            }


            // 서브 메뉴 명
            #current-sub-menu {
                position: relative;
                flex: 1;
                height: 100%;
                
                
                // 서브 메뉴 버튼
                #sub-menu-btn {
                    width: 100%;
                    height: 100%;
                    padding-left: 15px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 1.4rem;
    
    
                    #arrow-img {
                        width: 48px;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: var(--color-blue);
                        cursor: pointer;
    
    
                        img {
                            width: 25px;
                            height: 25px;
                        }
                    }
                }
    
    
                // 리스트
                #sub-menu-list {
                    position: absolute;
                    left: 0;
                    top: 100%;
                    width: calc(100% + 1px);
                    display: flex;
                    flex-direction: column;
                    background-color: var(--color-white);
                    border: 1px solid var(--color-blue);
                    border-top: none;
                    visibility: hidden;


                    a {
                        width: 100%;
                        height: 50px;
                        display: flex;
                        align-items: center;
                        padding-left: 15px;
                        font-size: 1.4rem;
                        color: var(--color-dark-font);
                    }
                }
                #sub-menu-list.on { visibility: visible; }
            }
        }
    }
</style>