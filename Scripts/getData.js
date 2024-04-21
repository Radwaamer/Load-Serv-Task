async function getCarsMakers() {
    const response = await fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?select=make&limit=100");
    const carsMakers = await response.json();
    const carManufacturer= chooseCarDiv.querySelector("#manufacturer");
    if(carsMakers){
        carsMakers.results.forEach(maker=>{
            carManufacturer.innerHTML+=
            `<option value=${maker.make.replace(" ","_")}>${maker.make}</option>`
        })
    }
}


async function getCarsModels(maker) {
    const response = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?select=model&limit=100&refine=make%3A${maker}`);
    const carsModels = await response.json();
    const modelSelect= document.getElementById("model");
    modelSelect.innerHTML= `<option value="">Model</option>`;
    if(carsModels){
        carsModels.results.forEach(model=>{
            modelSelect.innerHTML+=
            `<option value=${model.model.replace(" ","_")}>${model.model}</option>`
        })
    }
}


async function getCarsYears(maker,model) {
    const response = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?select=year&limit=100&refine=make%3A${maker}&refine=model%3A${model}`);
    const carsYears = await response.json();
    const yearSelect= document.getElementById("year");
    yearSelect.innerHTML= `<option value="">Year</option>`;
    if(carsYears.results.length==0){
        yearSelect.innerHTML+= `<option value="2003">2003</option>`;
    }
    if(carsYears){
        carsYears.results.forEach(year=>{
            yearSelect.innerHTML+=
            `<option value=${year.year}>${year.year}</option>`
        })
    }
}


async function getCountries(){
    const response= await fetch("https://countriesnow.space/api/v0.1/countries/info?returns=flag,dialCode");
    const countries= await response.json();
    const countriesSelect= document.querySelectorAll("#countries");
    if(countries){
        
        let countryElements=``;
        let selectedCountryElement=``;
        let countryOptions=``;

        countries.data.forEach(country=>{
            countryOptions +=`<option value="${country.name}">${country.name}</option>`;

            if(country.name=="Egypt"){
            selectedCountryElement=
            `
            <img src=${country.flag} alt=${country.name}>
            <span>${country.dialCode}</span>
            `
        }

        countryElements+=`<li class="country-info"><img src='${country.flag}' alt='${country.name}'>
        <span>${country.dialCode}</span></li>`;
        })

        countriesSelect.forEach(countrySelect=>{
            countrySelect.parentElement.querySelector("button").innerHTML=selectedCountryElement;
            countrySelect.innerHTML=countryElements;
        })

        fourthStepDiv.querySelector('#country').innerHTML=countryOptions;
        document.querySelectorAll(".country-info").forEach(countryInfoElment=>{
            countryInfoElment.onclick=()=>{
                countryInfoElment.parentElement.parentElement.querySelector("button").innerHTML=countryInfoElment.innerHTML;
            }
        })
    }
}