const progressDiv=document.createElement("div");
const {progress}=sections;
const progressContent=`
<div class="container">
    <img src="./assets/progress/progress.gif" alt="">
    <p>${isArabic?progress.msg.ar:progress.msg.en}</p>
    <p>${isArabic?progress.id.ar:progress.id.en}: ${Date.now()}</p>
    <button class="main-btn submit ok-btn" type="button">${isArabic?progress.button.ar:progress.button.en}</button>
</div>
`;
progressDiv.className=`form-data progress`;
progressDiv.innerHTML=progressContent;

function handleProgress(){

    // append progress form
    document.forms[0].appendChild(progressDiv);

    // handle ok button
    progressDiv.querySelector(".ok-btn").onclick=()=>{
        window.location.reload();
    };
}