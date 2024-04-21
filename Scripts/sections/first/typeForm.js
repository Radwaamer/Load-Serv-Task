const typeFormDiv=document.createElement("div");
const {type_form}=sections.first;
const typeFormContent=`
<div>
    <input type="radio" name="type" id="individual">
    <label for="individual">
        <img src="./assets/first/single.png" alt="">
        <p>${isArabic?type_form.individual.ar:type_form.individual.en}</p>
    </label>
</div>
<div>
    <input type="radio" name="type" id="company">
    <label for="company">
        <img src="./assets/first/group.png" alt="">
        <p>${isArabic?type_form.company.ar:type_form.company.en}</p>
    </label>
</div>
`;
typeFormDiv.className="type";
typeFormDiv.innerHTML=typeFormContent;

(()=>{

    // append type section in form
    firstStepSection.querySelector(".info-q div").appendChild(typeFormDiv);

    // display choices
    const individualInput=document.getElementById("individual");
    const companyInput=document.getElementById("company");
    const appendSection=form.querySelector(".info-q div");

    // handle type button
    const handleTypeButton=(type)=>{
        formData.type=type;
        showNewStep(chooseCarDiv,typeFormDiv,appendSection);
        getCarsMakers();
    }

    individualInput.onclick=()=>{handleTypeButton("individual")};
    companyInput.onclick=()=>{handleTypeButton("company")};

})()