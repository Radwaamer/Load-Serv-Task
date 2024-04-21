const fourthStepDiv=document.createElement("div");
const {fourth}=sections;
const fourthStepContent=`
<button class="back-btn" type="button">&lt;&lt; ${isArabic?sections.back.ar:sections.back.en}</button>
<div class="container">
    <h2 class="form-title">${isArabic?fourth.title.ar:fourth.title.en}</h2>
    <div>
        <label>${isArabic?fourth.type.ar:fourth.type.en}</label>
        <div class="col">
            <div class="shipping-type-input">
                <input type="radio" name="shipping-type" id="personal-shipping" checked>
                <label for="personal-shipping">${isArabic?fourth.type.to.personal.ar:fourth.type.to.personal.en}</label>
            </div>
            <div class="shipping-type-input">
                <input type="radio" name="shipping-type" id="friend-shipping">
                <label for="friend-shipping">${isArabic?fourth.type.to.friend.ar:fourth.type.to.friend.en}</label>
            </div>
        </div>
    </div>
    <div class="col">
        <div>
            <label for="ar-full-name">${isArabic?fourth.ar_name.ar:fourth.ar_name.en} <span>*</span></label>
            <input id="ar-full-name" type="text" required>
        </div>
        <div>
            <label for="en-full-name">${isArabic?fourth.en_name.en:fourth.en_name.en} <span>*</span></label>
            <input id="en-full-name" type="text" required>
        </div>
    </div>
    <div class="col">
        <div class="country-input">
            <label  for="phone-number">${isArabic?fourth.country.ar:fourth.country.en} <span>*</span></label>
            <select name="country" id="country">
            </select>
        </div>
        <div>
            <label for="city">${isArabic?fourth.city.ar:fourth.city.en} <span>*</span></label>
            <input id="city" type="text" required>
        </div>
    </div>
    <div class="col">
        <div>
            <label for="state">${isArabic?fourth.state.ar:fourth.state.en} <span>*</span></label>
            <input id="state" type="text" required>
        </div>
        <div>
            <label for="postal">${isArabic?fourth.postal.ar:fourth.postal.en} <span>*</span></label>
            <input id="postal" type="text" required>
        </div>
    </div>
    <div>
        <label for="address-desc">${isArabic?fourth.add_desc.ar:fourth.add_desc.en} <span>*</span></label>
        <textarea name="address-description" id="address-desc" cols="30" rows="5"></textarea>
    </div>
    <div class="dial-input">
        <label  for="phone-number">${isArabic?fourth.phone.ar:fourth.phone.en} <span>*</span></label>
        <div class="dropdown">
            <button type="button" class="dropbtn"></button>
            <ul class="dropdown-content" id="countries">
            </ul>
        </div>
        <input id="phone-number" type="text" required>
    </div>
    <button type="button" class="main-btn submit end-order">
        <p>${isArabic?fourth.button.ar:fourth.button.en}</p>
    </button>
</div>
`;
fourthStepDiv.className="form-data fourth-step";
fourthStepDiv.innerHTML=fourthStepContent;