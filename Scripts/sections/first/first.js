// first step content
const firstStepSection=document.createElement("div");
const firstStepSectionContent=`
<div class="landing">
    <h2>Select Your Car</h2>
    <p>Search for parts from our store and delivery to your place as quickly as possible</p>
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