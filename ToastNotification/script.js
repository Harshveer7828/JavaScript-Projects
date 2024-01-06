let toastBox=document.querySelector(".toastBox");
let successMsg='<i class="fa-solid fa-circle-check"></i> Form Submitted Successfully';
let errorMsg='<i class="fa-solid fa-circle-xmark"></i> Something went wrong';
let warningMsg='<i class="fa-solid fa-circle-exclamation"></i> Invalid Input Check Your Form';

function ShowToast(str){
    let toast=document.createElement('div');
    toast.classList.add("toast");
    toast.innerHTML = str;
    toastBox.appendChild(toast);

    if(str.includes('Successfully')) toast.classList.add('successMsg');
    if(str.includes('Invalid')) toast.classList.add('warningMsg');
    if(str.includes('wrong')) toast.classList.add('errorMsg');
    
    setTimeout(()=>{
        toast.remove();
    },5000);
}