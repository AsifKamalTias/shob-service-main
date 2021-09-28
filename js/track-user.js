const buttonSignIn = document.getElementById("btn-signin-nav");
const btnUserProfileHeader = document.getElementById("btn-user-profile-nav");

const searchBtnHead = document.getElementById("serach-head-icon");



let isUserSignedIn = false;

if(isUserSignedIn==true){
    buttonSignIn.style.display = "none";
    btnUserProfileHeader.style.display = "inline-block";
}

if(isUserSignedIn==false){
    buttonSignIn.style.display = "inline-block";
    btnUserProfileHeader.style.display = "none";
}

// searchBtnHead.addEventListener("click", function(){
//     let inputSearch = document.getElementById("search-input").value;
//     // console.log(inputSearch);
// })


