function handleFourthStep(){
    // append fourth form
    document.forms[0].appendChild(fourthStepDiv);

    // handle back-btn
    fourthStepDiv.querySelector(".back-btn").onclick=()=>{showNewStep(ThirdStepDiv,fourthStepDiv,form);};

    // handle confirm button
    fourthStepDiv.querySelector(".end-order").onclick=()=>{
        fourthStepDiv.querySelectorAll('input[name="shipping-type"]').forEach(type => {
            type.value=="on"?formData["shipping_type"]=type.id:"";
        });
        // formData["shipping_type"]=fourthStepDiv.querySelector('input[name="shipping-type"]').value;
        formData["ar_full_name"]=fourthStepDiv.querySelector('#ar-full-name').value;
        formData["en_full_name"]=fourthStepDiv.querySelector('#en-full-name').value;
        formData["country"]=fourthStepDiv.querySelector('#country').value;
        formData["city"]=fourthStepDiv.querySelector('#city').value;
        formData["state"]=fourthStepDiv.querySelector('#state').value;
        formData["postal"]=fourthStepDiv.querySelector('#postal').value;
        formData["address_desc"]=fourthStepDiv.querySelector('#address-desc').value;
        formData["dial_code_shipping"]=fourthStepDiv.querySelector(".dropbtn span").textContent;
        formData["phone_number_shipping"]=fourthStepDiv.querySelector('#phone-number').value;
        
        if(formData["shipping_type"]&&formData["ar_full_name"]&&formData["en_full_name"]&&
        formData["en_full_name"]&&formData["country"]&&formData["city"]&&formData["state"]&&
        formData["postal"]&&formData["address_desc"]&&formData["phone_number_shipping"]){
            showNewStep(summaryDiv,fourthStepDiv,form);
            handleSummary();
        }else{
            alert(isArabic?fourth.error.ar:fourth.error.en);
        }
    };
}