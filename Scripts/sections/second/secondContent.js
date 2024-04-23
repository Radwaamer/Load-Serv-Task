const secondStepDiv=document.createElement("div");
const {second}=sections;
const secondStepContent=`
<button class="back-btn" type="button">&lt;&lt; ${isArabic?sections.back.ar:sections.back.en}</button>
<div class="container">
    <h2 class="form-title">${isArabic?second.title.ar:second.title.en}</h2>
    <div class="repeater">
    </div>
    <div class="buttons-second">
        <button type="button" class="main-btn submit get-parts">
            <p>${isArabic?second.buttons.get.ar:second.buttons.get.en}</p>
        </button>
        <button type="button" class="main-btn submit add-part">
            <p>${isArabic?second.buttons.add.ar:second.buttons.add.en}</p>
        </button>
    </div>
</div>
`;

secondStepDiv.className="form-data second-step";
secondStepDiv.innerHTML=secondStepContent;