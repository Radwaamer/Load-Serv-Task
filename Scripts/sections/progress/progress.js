const progressDiv=document.createElement("div");
const progressContent=`
<div class="container">
    <img src="./assets/progress/progress.gif" alt="">
    <p>Thank you for ordering. We received your order and will being processing it soon.</p>
    <p>OrderID: ${Date.now()}</p>
    <button class="main-btn submit ok-btn" type="button">OK</button>
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