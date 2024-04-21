// reusable functions
function showNewStep(showEle,hideEle,appendEle){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    hideEle.style.transform="translateY(12rem)";
    setTimeout(()=>{
        appendEle.appendChild(showEle);
        hideEle.remove();
    },250);
    setTimeout(()=>{
        showEle.style.transform="translateY(0)";
    },270);
};

// global form data
const formData={};
let isArabic=false;
// reusable div
const form=document.forms[0];

// handle change language 
(()=>{
    if(sessionStorage.getItem("ar")){
        isArabic=JSON.parse(sessionStorage.getItem("ar"));
        if(JSON.parse(sessionStorage.getItem("ar"))){
            document.querySelector("header .logo").style.transform="rotateY(0deg)";
            document.querySelector("header h1").style.right="7rem";
            document.querySelector("header h1").style.left="auto";
            document.body.style.direction="rtl";
            document.body.className="rtl";
        }
    }else{
        sessionStorage.setItem("ar",false)
    }

    document.querySelector(".toggle-option").onclick=()=>{
        sessionStorage.setItem("ar",!JSON.parse(sessionStorage.getItem("ar")));
        document.querySelector(".toggle").style.transform="rotateY(180deg)";
        setTimeout(()=>{
            window.location.reload();
        },200)
    }

})()