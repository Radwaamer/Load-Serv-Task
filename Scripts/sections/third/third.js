const handleThirdStep=()=>{

    // append third form
    form.appendChild(ThirdStepDiv);

    // handle show password
    const showPassword=()=>{
        const passwordInputs=ThirdStepDiv.querySelectorAll(".password-input");
        passwordInputs.forEach(show=>{
            const showPass=show.querySelector(".show");
            const hidePass=show.querySelector(".hide");
            const password=show.querySelector("input");
            
            showPass.onclick=()=>{
                showPass.style.display="none";
                hidePass.style.display="block";
                password.type="text";
            }
            hidePass.onclick=()=>{
                hidePass.style.display="none";
                showPass.style.display="block";
                password.type="password";
            }
        })
    };
    showPassword();

    // handle repeat password
    function repeatPassword(){
        let confirmMsg=ThirdStepDiv.querySelector(".pass-msg");
        let confirmPass=ThirdStepDiv.querySelector("#re-pass");
        let password=ThirdStepDiv.querySelector("#password");
        confirmPass.onblur=()=>{
            if (confirmPass.value!=password.value){
                confirmMsg.style.opacity="1";
            }else{
                confirmMsg.style.opacity="0";
            };
        };
        confirmPass.oninput=()=>{
            if(confirmPass.value==password.value){
                confirmMsg.style.opacity="0";
            }else{
                confirmMsg.style.opacity="1";
            }
        };
        password.oninput=()=>{
            if(confirmPass.value!=password.value && confirmPass.value!=""){
                confirmMsg.style.opacity="1";
            }else{
                confirmMsg.style.opacity="0";
            }
        };
    };
    repeatPassword();

    // handle back-btn
    ThirdStepDiv.querySelector(".back-btn").onclick=()=>{showNewStep(secondStepDiv,ThirdStepDiv,form);};

    // handle confirm button
    ThirdStepDiv.querySelector(".confirm").onclick=()=>{
        formData["user_name"]=ThirdStepDiv.querySelector("#user-name").value;
        formData["email"]=ThirdStepDiv.querySelector("#email").value;
        formData["dial_code"]=ThirdStepDiv.querySelector(".dropbtn span").textContent;
        formData["phone_number"]=ThirdStepDiv.querySelector("#phone-number").value;
        formData["password"]=ThirdStepDiv.querySelector("#password").value;

        if(formData["user_name"]&&formData["email"]&&
        formData["phone_number"]&&formData["password"]&&
        ThirdStepDiv.querySelector("#password").value==
        ThirdStepDiv.querySelector("#re-pass").value){

            if(formData["password"].length<8 || formData["password"].length>20){
                alert(isArabic?third.pass_error.ar:third.pass_error.en);
            }else{
                showNewStep(fourthStepDiv,ThirdStepDiv,form);
                handleFourthStep();
                getCountries();
            }
            
        }else{
            alert(isArabic?third.error.ar:third.error.en);
        }
    };

}