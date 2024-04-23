const handleSecondStep=()=>{

    // append second form
    form.appendChild(secondStepDiv);

    // handle add another part
    secondStepDiv.querySelector(".add-part").onclick=()=>{
        const cutDiv=document.createElement("div");
        cutDiv.innerHTML=`
        <hr>
        <button type="button" class="minus">-</button>
        `;
        secondStepDiv.querySelector(".repeater").appendChild(cutDiv);
        minusPart(cutDiv.querySelector(".minus"));
        repeaterFun();
        inputsVallidation(cutDiv.nextElementSibling)
    };

    // handle minus part
    function minusPart(cutBtn){
        cutBtn.onclick=()=>{
            cutBtn.parentElement.nextElementSibling.remove();
            cutBtn.parentElement.remove();
        }
    }

    // set inputs vallidation
    function inputsVallidation(div){
        const partQuantity= div.querySelector("#part-quantity");
        const serialNum= div.querySelector("#serial-number");
        const chassisNum= div.querySelector(".chassis");
        const photo=div.querySelector(".photo-second");

        photo.querySelector("#part-photo").onchange=(event)=>{
            if(event.target.files[0]){
                photo.querySelector("img").src=URL.createObjectURL(event.target.files[0]);
                photo.querySelector("img").style.display="block";
            }else{
                photo.querySelector("img").src="";
                photo.querySelector("img").style.display="none";

            }
        }
    
        if(formData.type=="individual"){
            partQuantity.min=1;
            partQuantity.value=1;
    
            chassisNum.style.display="block";
    
    
        }else if(formData.type=="company"){
            partQuantity.min=10;
            partQuantity.value=10;
    
            serialNum.required=true;
    
            chassisNum.style.display="none";
        }
    };

    inputsVallidation(secondStepDiv);

    // handle back-btn
    secondStepDiv.querySelector(".back-btn").onclick=()=>{showNewStep(firstStepSection,secondStepDiv,form);};

    // save entered data
    const saveData=()=>{
        const allPartsForms=secondStepDiv.querySelectorAll(".repeat-div");
        formData["parts_data"]=[];
        allPartsForms.forEach((part) => {
            formData["parts_data"].push({
                "part_name":part.querySelector("#part-name").value,
                "part_quantity":part.querySelector("#part-quantity").value,
                "serial_number":part.querySelector("#serial-number").value,
                "chassis_number":formData["type"]=="individual"?part.querySelector("#chassis-number").value:"",
                "part_description":part.querySelector("#part-description").value,
                "part_photo":part.querySelector("#part-photo").files[0]?URL.createObjectURL(part.querySelector("#part-photo").files[0]):""
            });
        });
    };

    // handle choose car button
    const secondFun=()=>{
        showNewStep(ThirdStepDiv,secondStepDiv,form);
        handleThirdStep();
        getCountries();
    }

    // check empty inputs
    const emptyInputsFun=()=>{
        let checked=false;
        formData["parts_data"].forEach(data=>{
            if(data["part_name"]&&data["part_quantity"]&&data["serial_number"]){
                if(formData["type"]=="individual"){
                    if(data["chassis_number"]){
                        checked=true;
                    }else{
                        checked=false;
                    }
                }else{
                    checked=true;
                }
            }else{
                checked=false;
            }
        });
        checked?secondFun():alert(isArabic?second.error.ar:second.error.en);
    }

    secondStepDiv.querySelector(".get-parts").onclick=()=>{
        saveData();
        emptyInputsFun();
    }

}