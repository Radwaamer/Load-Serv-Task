const chooseCarDiv=document.createElement("div");
const chooseCarContent=`
<button class="back-btn" type="button">&lt;&lt; back</button>
<select name="manufacturer" id="manufacturer">
    <option value="">Car Manufacturer</option>
</select>
<select name="model" id="model" disabled>
    <option value="">Model</option>
</select>
<select name="year" id="year" disabled>
    <option value="">Year</option>
    <option value="2003">2003</option>
</select>
<button type="button" class="main-btn choose-btn">
    <p>Choose the car</p>
    <img src="./assets/first/carIcon.png" alt="">
</button>
`;
chooseCarDiv.className="choose-car";
chooseCarDiv.innerHTML=chooseCarContent;

(()=>{
    // break disabled inputs
    const selectBoxes=chooseCarDiv.querySelectorAll("select");

    const breakDisabled=(num)=>{
        if(num<selectBoxes.length-1){
            if(selectBoxes[num].value){
                selectBoxes[num+1].disabled=false;
                // get the content of select
                if(num==0){
                    getCarsModels(selectBoxes[num].value.replace("_"," "));
                }else if(num==1){
                    getCarsYears(selectBoxes[num-1].value.replace("_"," "),selectBoxes[num].value.replace("_"," "));
                }
            }else{
                for(i=num+1;i<selectBoxes.length;i++){
                    selectBoxes[i].disabled=true;
                    selectBoxes[i].value="";
                }
            }
        }

        // show choose car button
        const chooseBtn=chooseCarDiv.querySelector(".choose-btn");
        let choosen=false;
        selectBoxes.forEach((box)=>{
            box.value? choosen=true:choosen=false;
        })
        if(choosen){
            chooseBtn.style.display="flex";
            setTimeout(()=>{chooseBtn.style.opacity=1;},300);
            document.querySelector(".car-photo img").src="./assets/first/teslaCar.png";
        }else{
            setTimeout(()=>{chooseBtn.style.display="none";},300)
            chooseBtn.style.opacity=0;
            document.querySelector(".car-photo img").src="./assets/first/car.png";
        }
    }

    // handle select boxes 
    selectBoxes.forEach((sb,index)=>{sb.onchange=()=>{breakDisabled(index)}});

    // handle back-btn
    chooseCarDiv.querySelector(".back-btn").onclick=()=>{showNewStep(typeFormDiv,chooseCarDiv,appendSection);};
    
    // handle choose car button
    chooseCarDiv.querySelector(".choose-btn").onclick=()=>{
        formData["carManufacturer"]=chooseCarDiv.querySelector("#manufacturer").value;
        formData["carModel"]=chooseCarDiv.querySelector("#model").value;
        formData["carYear"]=chooseCarDiv.querySelector("#year").value;
        if(formData["carManufacturer"]&&formData["carModel"]&&formData["carYear"]){
            showNewStep(secondStepDiv,firstStepSection,appendForm);
            handleSecondStep();
        }else{
            alert("Please Choose The Car Details.");
        }
    }
})();