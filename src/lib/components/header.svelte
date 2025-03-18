<script lang="ts">
    import logoIcon from "$images/favicon.svg";
    import userIcon from "$images/account-icon.svg";
    import alarmIcon from "$images/alarm-icon.svg";



    // props
    let { data } = $props();
</script>



<div id="header-container">
    <div id="logo-area">
        <div id="logo">
            <img src="{logoIcon}" alt="logo">
        </div>

        <p id="company">
            <span>기업명: </span>
            <span>{data.name}</span>
        </p>
    </div>


    <div id="info-area">
        <img id="user-img" src="{userIcon}" alt="user-icon">
        <span id="user-auth">{data.auth}</span>

        <button id="logout-btn">로그아웃</button>

        <button id="alarm-btn" aria-label="alarm button">
            <img src="{alarmIcon}" alt="alarm-icon">
        </button>
    </div>
</div>



<style lang="scss">
    #header-container {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 80px;
        background-color: var(--color-white);
        border-bottom: 1px solid var(--color-gray);
        display: flex;
        justify-content: space-between;
        min-width: 1600px;
        z-index: 10000;


        #logo-area {
            height: 100%;
            display: flex;
            
            
            // 사이트 로고
            #logo {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 80px;
                height: 100%;


                img {
                    width: 35px;
                    height: 35px;
                }
            }


            // 기업명
            #company {
                display: flex;
                align-items: center;
                height: 100%;
                gap: 10px;

                span {
                    font-size: 1.6rem;
                    font-family: var(--font-b);
                    letter-spacing: 1px;
                }
            }
        }


        #info-area {
            display: flex;
            align-items: center;
            height: 100%;


            #user-img {
                width: 28px;
                height: 28px;
            }
            
            
            #user-auth {
                margin-left: 5px;
                font-size: 1.4rem;
                font-family: var(--font-b);
            }


            // 로그아웃 버튼
            #logout-btn {
                margin: 0 30px;
                width: 88px;
                height: 36px;
                font-size: 1.3rem;
                color: var(--color-white);
                background-color: var(--color-blue2);
                font-family: var(--font-b);
            }


            // 알림 버튼
            #alarm-btn {
                width: 80px;
                height: 100%;
                background-color: var(--color-white);
                border-left: 1px solid var(--color-gray);
                display: flex;
                justify-content: center;
                align-items: center;


                img {
                    width: 25px;
                    height: 25px;
                }
            }
        }
    }
</style>