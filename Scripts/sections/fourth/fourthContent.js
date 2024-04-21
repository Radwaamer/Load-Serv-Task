const fourthStepDiv=document.createElement("div");
const fourthStepContent=`
<button class="back-btn" type="button">&lt;&lt; back</button>
<div class="container">
    <h2 class="form-title">Shipping Information</h2>
    <div>
        <label>Shipping Type</label>
        <div class="col">
            <div class="shipping-type-input">
                <input type="radio" name="shipping-type" id="personal-shipping" checked>
                <label for="personal-shipping">Personal</label>
            </div>
            <div class="shipping-type-input">
                <input type="radio" name="shipping-type" id="friend-shipping">
                <label for="friend-shipping">To A Friend</label>
            </div>
        </div>
    </div>
    <div class="col">
        <div>
            <label for="ar-full-name">Full Name In Arabic <span>*</span></label>
            <input id="ar-full-name" type="text" required>
        </div>
        <div>
            <label for="en-full-name">Full Name In English <span>*</span></label>
            <input id="en-full-name" type="text" required>
        </div>
    </div>
    <div class="col">
        <div class="country-input">
            <label  for="phone-number">Country <span>*</span></label>
            <select name="country" id="country">
            </select>
        </div>
        <div>
            <label for="city">City <span>*</span></label>
            <input id="city" type="text" required>
        </div>
    </div>
    <div class="col">
        <div>
            <label for="state">State <span>*</span></label>
            <input id="state" type="text" required>
        </div>
        <div>
            <label for="postal">Postal Code <span>*</span></label>
            <input id="postal" type="text" required>
        </div>
    </div>
    <div>
        <label for="address-desc">Address Description <span>*</span></label>
        <textarea name="address-description" id="address-desc" cols="30" rows="5"></textarea>
    </div>
    <div class="dial-input">
        <label  for="phone-number">Phone Number <span>*</span></label>
        <div class="dropdown">
            <button type="button" class="dropbtn"></button>
            <ul class="dropdown-content" id="countries">
            </ul>
        </div>
        <input id="phone-number" type="text" required>
    </div>
    <button type="button" class="main-btn submit end-order">
        <p>Submit Order</p>
    </button>
</div>
`;
fourthStepDiv.className="form-data fourth-step";
fourthStepDiv.innerHTML=fourthStepContent;