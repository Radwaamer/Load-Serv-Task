const summaryDiv=document.createElement("div");
summaryDiv.className="form-data order-summary";

function handleSummary(){
    const {summary}=sections;

    // append fourth form
    const summaryContent=`
    <div class="container">
        <h2 class="form-title">${isArabic?summary.title.ar:summary.title.en}</h2>
        <div class="car-info-summary">
            <h3>${isArabic?summary.first.title.ar:summary.first.title.en}</h3>
            <div>
                <p>${isArabic?summary.first.manufacturer.ar:summary.first.manufacturer.en} <br><span>${formData["carManufacturer"]}</span></p>
                <p>${isArabic?summary.first.model.ar:summary.first.model.en} <br><span>${formData["carModel"]}</span></p>
                <p>${isArabic?summary.first.year.ar:summary.first.year.en} <br><span>${formData["carYear"]}</span></p>
            </div>
        </div>
        <div class="cart-content-summary">
            <h3>${isArabic?summary.second.title.ar:summary.second.title.en}</h3>
            <div class="col">
            ${formData["part_photo"]?`<img src=${formData["part_photo"]} alt="">`:""}
                <div>
                    <p>${isArabic?summary.second.item.ar:summary.second.item.en}: <span>${formData["part_quantity"]} X ${formData["part_name"]}</span></p>
                    <p>${isArabic?summary.second.serial.ar:summary.second.serial.en}: <span>${formData["serial_number"]}</span></p>
                    ${formData["chassis_number"]?`<p>${isArabic?summary.second.chassis.ar:summary.second.chassis.en}: <span>${formData["chassis_number"]}</span></p>`:""}
                    ${formData["part_description"]?
                    `<p><span>${formData["part_description"]}</span></p>`:""}
                    
                </div>
            </div>
        </div>
        <div class="personal-info-summary">
            <h3>${isArabic?summary.third.title.ar:summary.third.title.en}</h3>
            <div>
                <p>${isArabic?summary.third.type.ar:summary.third.type.en}: <span>${formData["shipping_type"]}</span></p>
                <p>${isArabic?summary.third.phone.ar:summary.third.phone.en}: <span>${formData["dial_code_shipping"]} ${formData["phone_number_shipping"]}</span></p>
                <p>${isArabic?summary.third.ar_name.ar:summary.third.ar_name.en}: <span>${formData["ar_full_name"]}</span></p>
                <p>${isArabic?summary.third.en_name.ar:summary.third.en_name.en}: <span>${formData["en_full_name"]}</span></p>
                <p>${isArabic?summary.third.country.ar:summary.third.country.en}: <span>${formData["country"]}</span></p>
                <p>${isArabic?summary.third.city.ar:summary.third.city.en}: <span>${formData["city"]}</span></p>
                <p>${isArabic?summary.third.state.ar:summary.third.state.en}: <span>${formData["state"]}</span></p>
                <p>${isArabic?summary.third.postal.ar:summary.third.postal.en}: <span>${formData["postal"]}</span></p>
            </div>
        </div>
        <div class="options-summary">
            <button type="button" class="main-btn submit edit-btn">
                <p>${isArabic?summary.buttons.edit.ar:summary.buttons.edit.en}</p>
            </button>
            <button type="button" class="main-btn submit end-btn">
                <p>${isArabic?summary.buttons.submit.ar:summary.buttons.submit.en}</p>
            </button>
            <button type="button" class="main-btn submit cancel-btn">
                <p>${isArabic?summary.buttons.cancel.ar:summary.buttons.cancel.en}</p>
            </button>
        </div>
    </div>
    `;

    summaryDiv.innerHTML=summaryContent;
    document.forms[0].appendChild(summaryDiv);

    // handle back-btn
    summaryDiv.querySelector(".edit-btn").onclick=()=>{showNewStep(fourthStepDiv,summaryDiv,form);};

    // handle submit button
    summaryDiv.querySelector(".end-btn").onclick=()=>{
        showNewStep(progressDiv,summaryDiv,form);
        handleProgress();
    };

    // handle cancel-btn
    summaryDiv.querySelector(".cancel-btn").onclick=()=>{
        window.location.reload();
    };
}