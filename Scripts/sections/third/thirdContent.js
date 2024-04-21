const ThirdStepDiv=document.createElement("div");
const {third}=sections;
const thirdStepContent=`
        <button class="back-btn" type="button">&lt;&lt; ${isArabic?sections.back.ar:sections.back.en}</button>
        <div class="container">
            <h2 class="form-title">${isArabic?third.title.ar:third.title.en}</h2>
            <div class="col">
                <div>
                    <label for="user-name">${isArabic?third.name.ar:third.name.en} <span>*</span></label>
                    <input id="user-name" type="text" required>
                </div>
                <div>
                    <label for="email">${isArabic?third.email.ar:third.email.en} <span>*</span></label>
                    <input id="email" type="text" required>
                </div>
            </div>
            <div class="col">
                <div class="dial-input">
                    <label  for="phone-number">${isArabic?third.phone.ar:third.phone.en} <span>*</span></label>
                    <div class="dropdown">
                        <button type="button" class="dropbtn"></button>
                        <ul class="dropdown-content" id="countries">
                        </ul>
                    </div>
                    <input id="phone-number" type="text" required>
                </div>
            </div>
            <div class="col">
                <div class="password-input">
                    <label for="password">${isArabic?third.pass.ar:third.pass.en} <span>*</span></label>
                    <input id="password" type="password" required>
                    <img class="show" src="./assets/third/showPass.png" alt="">
                    <img class="hide" src="./assets/third/hidePass.png" alt="">
                </div>
                <div class="password-input">
                    <label for="re-pass">${isArabic?third.re_pass.ar:third.re_pass.en} <span>*</span></label>
                    <input id="re-pass" type="password" required>
                    <img class="show" src="./assets/third/showPass.png" alt="">
                    <img class="hide" src="./assets/third/hidePass.png" alt="">
                </div>
            </div>
            <p class='pass-msg'>${isArabic?third.pass_Msg.ar:third.pass_Msg.en} *</p>
            <button class="main-btn submit confirm" type="button">
                <p>${isArabic?third.button.ar:third.button.en}</p>
            </button>
        </div>
        `;
ThirdStepDiv.className="form-data third-step";
ThirdStepDiv.innerHTML=thirdStepContent;