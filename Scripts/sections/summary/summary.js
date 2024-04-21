const summaryDiv=document.createElement("div");
summaryDiv.className="form-data order-summary";

function handleSummary(){

    // append fourth form
    const summaryContent=`
    <div class="container">
        <h2 class="form-title">Order Summary</h2>
        <div class="car-info-summary">
            <h3>Car Information</h3>
            <div>
                <p>Owner <br><span>${formData["carManufacturer"]}</span></p>
                <p>Model <br><span>${formData["carModel"]}</span></p>
                <p>Year <br><span>${formData["carYear"]}</span></p>
            </div>
        </div>
        <div class="cart-content-summary">
            <h3>Cart Content</h3>
            <div class="col">
                <img src=${formData["part_photo"]} alt="">
                <div>
                    <p>Item: <span>${formData["part_quantity"]} X ${formData["part_name"]}</span></p>
                    <p>Serial Number: <span>${formData["serial_number"]}</span></p>
                    ${formData["chassis_number"]?`<p>Chassis Number: <span>${formData["chassis_number"]}</span></p>`:""}
                    ${formData["part_description"]?
                    `<p><span>${formData["part_description"]}</span></p>`:""}
                    
                </div>
            </div>
        </div>
        <div class="personal-info-summary">
            <h3>Personal Information</h3>
            <div>
                <p>Shipping Type: <span>${formData["shipping_type"]}</span></p>
                <p>Phone Number: <span>${formData["phone_number_shipping"]} ${formData["dial_code_shipping"]}</span></p>
                <p>Name in Arabic: <span>${formData["ar_full_name"]}</span></p>
                <p>Name in English: <span>${formData["en_full_name"]}</span></p>
                <p>City: <span>${formData["country"]}</span></p>
                <p>State: <span>${formData["city"]}</span></p>
                <p>Postal Code: <span>${formData["postal"]}</span></p>
            </div>
        </div>
        <div class="options-summary">
            <button type="button" class="main-btn submit edit-btn">
                <p>Back To Edit</p>
            </button>
            <button type="button" class="main-btn submit end-btn">
                <p>Submit Order</p>
            </button>
            <button type="button" class="main-btn submit cancel-btn">
                <p>Cancel Request</p>
            </button>
        </div>
    </div>
    `;

    summaryDiv.innerHTML=summaryContent;
    document.forms[0].appendChild(summaryDiv);

    // handle back-btn
    summaryDiv.querySelector(".edit-btn").onclick=()=>{showNewStep(fourthStepDiv,summaryDiv,appendForm);};

    // handle submit button
    summaryDiv.querySelector(".end-btn").onclick=()=>{
        showNewStep(progressDiv,summaryDiv,appendForm);
        handleProgress();
    };

    // handle cancel-btn
    summaryDiv.querySelector(".cancel-btn").onclick=()=>{
        window.location.reload();
    };
}