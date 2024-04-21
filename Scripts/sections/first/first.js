// first step content
const firstStepSection=document.createElement("div");
const {index}=sections.first;
const firstStepSectionContent=`
<div class="landing">
    <h2>${isArabic?index.heading.ar:index.heading.en}</h2>
    <p>${isArabic?index.description.ar:index.description.en}</p>
</div>
<div class="info-q">
    <div>
    </div>
    <div class="car-photo">
        <img src="./assets/first/car.png" alt="Car Parts">
    </div>
</div>
`;
firstStepSection.className="first-step";
firstStepSection.innerHTML=firstStepSectionContent;


(()=>{
    // append first step in form
    form.appendChild(firstStepSection);

})();