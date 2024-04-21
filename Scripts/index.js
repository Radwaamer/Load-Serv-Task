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
// reusable div
const form=document.forms[0];