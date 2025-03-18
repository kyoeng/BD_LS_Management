<script lang="ts">
    import logoIcon from "$images/favicon.svg";




    // step state
    let stepState = $state(0);

    // id input element
    let idInputEl;

    // pw input element
    let pwInputEl;


    const test = () => {
        stepState += 1;
    }
</script>





<div id="container">
    <div id="login-wrapper">
        <!-- LOGO 부분 -->
        <div id="logo-box">
            <img src="{logoIcon}" alt="logo">
            <span id="login-title">로그인</span>
        </div>

        <form id="login-form" action="?/login" method="post">
            <div id="step-container" class:pw={stepState}>
                <!-- ID STEP -->
                <div id="id-step" class="step-wrapper">
                    <p class="step-info">ID를 입력해주세요.</p>
                    <input id="id-input" class="input" type="text" bind:this={idInputEl}>
                    <a class="find-link" href="/find?t=i">ID를 잊으셨나요?</a>
                </div>
                
                <!-- PW STEP -->
                <div id="pw-step" class="step-wrapper">
                    <p class="step-info">비밀번호를 입력해주세요.</p>
                    <input id="id-input" class="input" type="text" bind:this={pwInputEl}>
                    <a class="find-link" href="/find?t=i">비밀번호를 잊으셨나요?</a>
                </div>
            </div>
            
            <!-- JOIN -->
            <div id="join-info">
                <span>아직 계정이 없으신가요?</span>
                <a href="/join">계정 만들기</a>
            </div>

            <!-- BUTTON -->
            <button id="form-btn" type="button" onclick={test}>
                {stepState === 0 ? "다음" : "로그인"}
            </button>
        </form>
    </div>
</div>





<style lang="scss">
    #container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;


        #login-wrapper {
            width: 400px;
            height: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 50px;
            box-shadow: 0 0 7px rgba($color: #000000, $alpha: 0.12);
            background-color: var(--color-white);
            padding: 25px;


            // LOGO 부분
            #logo-box {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 10px;
                width: 100%;


                img {
                    width: 50px;
                    height: 50px;
                }

                
                #login-title {
                    font-size: 1.6rem;
                    font-family: var(--font-b);
                }
            }


            // LOGIN FORM
            #login-form {
                position: relative;
                display: flex;
                width: 100%;
                flex: 1;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                gap: 15px;
                overflow: hidden;


                // STEP 부분
                #step-container {
                    position: absolute;
                    left: 0;
                    top: 0;
                    display: flex;
                    width: 700px;
                    transition: all 0.5s;


                    .step-wrapper {
                        flex: 1;
                        padding: 10px;
                        
    
                        .step-info {
                            text-align: center;
                            font-size: 1.4rem;
                            margin-bottom: 15px;
                        }
    
    
                        .input {
                            width: 100%;
                            height: 50px;
                            box-shadow: 0 0 2px var(--color-deep);
                            padding: 10px;
                            font-size: 1.5rem;
                            margin-bottom: 10px;
                        }
    
    
                        .find-link {
                            font-size: 1.3rem;
                            color: var(--color-blue);
                        }
                    }
                }
                #step-container.pw {
                    left: -350px;
                }


                // JOIN 부분
                #join-info {
                    width: 100%;
                    display: flex;
                    gap: 10px;

                    span { font-size: 1.4rem; }

                    a {
                        font-size: 1.4rem;
                        color: var(--color-blue);
                    }
                }


                // BTN
                #form-btn {
                    width: 100%;
                    height: 50px;
                    font-size: 1.5rem;
                    background-color: var(--color-blue2);
                    color: var(--color-light-font);
                    font-family: var(--font-b);
                }
            }
        }
    }
</style>