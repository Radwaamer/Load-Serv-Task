const handleSecondStep=()=>{

    // append second form
    form.appendChild(secondStepDiv);

    secondStepDiv.querySelector("#part-photo").onchange=(event)=>{
        formData["part_photo"]=URL.createObjectURL(event.target.files[0]);
    }

    // set inputs vallidation
    const partQuantity= secondStepDiv.querySelector("#part-quantity");
    const serialNum= secondStepDiv.querySelector("#serial-number");
    const chassisNum= secondStepDiv.querySelector(".chassis");

    if(formData.type=="individual"){
        partQuantity.min=1;
        partQuantity.value=1;

        chassisNum.style.display="block";


    }else if(formData.type=="company"){
        partQuantity.min=10;
        partQuantity.value=10;

        serialNum.required=true;
        secondStepDiv.querySelector("[for='serial-number']").innerHTML=`<label for="serial-number">Serial Number <span>*</span></label>`;

        // chassisNum.remove();
        chassisNum.style.display="none";
    }

    // handle back-btn
    secondStepDiv.querySelector(".back-btn").onclick=()=>{showNewStep(firstStepSection,secondStepDiv,appendForm);};

    // handle choose car button
secondStepDiv.querySelector(".get-parts").onclick=()=>{
    const second=()=>{
        showNewStep(ThirdStepDiv,secondStepDiv,appendForm);
        handleThirdStep();
        getCountries();
    }
    formData["part_name"]=secondStepDiv.querySelector("#part-name").value;
    formData["part_quantity"]=secondStepDiv.querySelector("#part-quantity").value;
    formData["serial_number"]=secondStepDiv.querySelector("#serial-number").value;
    if(formData["type"]=="individual"){
        formData["chassis_number"]=secondStepDiv.querySelector("#chassis-number").value;
    }

    formData["part_description"]=secondStepDiv.querySelector("#part-description").value;
    // formData["part_photo"]=secondStepDiv.querySelector("#part-photo").value;

    if(formData["part_name"]&&formData["part_quantity"]&&formData["serial_number"]){
        if(formData["type"]=="individual"){
            if(formData["chassis_number"]){
                second();
            }else{
                alert("Please Complete The Part's Details.");
            }
        }else{
            second();
        }
    }else{
        alert("Please Complete The Part's Details.");
    }
}

}