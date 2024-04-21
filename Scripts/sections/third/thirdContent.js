const ThirdStepDiv=document.createElement("div");
const thirdStepContent=`
        <button class="back-btn" type="button">&lt;&lt; back</button>
        <div class="container">
            <h2 class="form-title">Personal Information</h2>
            <div class="col">
                <div>
                    <label for="user-name">User Name <span>*</span></label>
                    <input id="user-name" type="text" required>
                </div>
                <div>
                    <label for="email">E-mail <span>*</span></label>
                    <input id="email" type="text" required>
                </div>
            </div>
            <div class="col">
                <div class="dial-input">
                    <label  for="phone-number">Phone Number <span>*</span></label>
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
                    <label for="password">Password <span>*</span></label>
                    <input id="password" type="password" required>
                    <img class="show" src="./assets/third/showPass.png" alt="">
                    <img class="hide" src="./assets/third/hidePass.png" alt="">
                </div>
                <div class="password-input">
                    <label for="re-pass">Repeat Password <span>*</span></label>
                    <input id="re-pass" type="password" required>
                    <img class="show" src="./assets/third/showPass.png" alt="">
                    <img class="hide" src="./assets/third/hidePass.png" alt="">
                </div>
            </div>
            <p class='pass-msg'>password mismatch *</p>
            <button class="main-btn submit confirm" type="button">
                <p>Confirm</p>
            </button>
        </div>
        `;
ThirdStepDiv.className="form-data third-step";
ThirdStepDiv.innerHTML=thirdStepContent;