const repeaterFun=()=>{
    const repeatDiv=document.createElement("div");
    const repeatDivContent=`
    <div class="col">
        <div>
            <label for="part-name">${isArabic?second.name.ar:second.name.en} <span>*</span></label>
            <input id="part-name" type="text" required>
        </div>
        <div>
            <label for="part-quantity">${isArabic?second.quantity.ar:second.quantity.en} <span>*</span></label>
            <input id="part-quantity" type="number" min="1" value="1" required>
        </div>
    </div>
    <div class="col">
        <div>
            <label  for="serial-number">${isArabic?second.serial.ar:second.serial.en} <span>*</span></label>
            <input id="serial-number" type="text">
        </div>
        <div class="chassis">
            <label for="chassis-number">${isArabic?second.chassis.ar:second.chassis.en} <span>*</span></label>
            <input id="chassis-number" type="text" required>
        </div>
    </div>
    <div>
        <label for="part-description">${isArabic?second.desc.ar:second.desc.en}</label>
        <textarea name="description" id="part-description" cols="30" rows="10"></textarea>
    </div>
    <div class="photo-second">
        <label for="part-photo">${isArabic?second.photo.ar:second.photo.en}</label>
        <input type="file" name="photo" id="part-photo" accept="image/*">
        <img src="" alt="">
    </div>
    `;
    repeatDiv.className="repeat-div";
    repeatDiv.innerHTML=repeatDivContent;
    secondStepDiv.querySelector(".repeater").appendChild(repeatDiv);
}
repeaterFun();