var count = 0;
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function clearPreviousSearch() {
    if(count > 0) {
        var previousSearch = document.getElementById("search-results");
        previousSearch.innerHTML = "";
        count = 0;
    }
}

function checkBlank(){
    if(document.getElementById("search-input-user").value == ""){
        return true;
    }
}

let services = [["../icons/ac-icon.svg","AC SERVICES/REPAIR", "https://www.facebook.com/"], ["../icons/vecuum-icon.svg", "CLEANING SERVICE", "https://www.youtube.com/"], ["../icons/appliance-icon.svg", "APPLIANCE REPAIR", "https://www.google.com/"], ["../icons/car-icon.svg", "CAR CARE", "https://www.twitch.tv/"], ["../icons/pest-icon.svg", "PEST CONTROL", "https://www.linkedin.com/feed/"], ["../icons/electrician-icon.svg", "ELECTRICIAN", "https://www.instagram.com/"], ["../icons/plumber-icon.svg", "PLUMBER", "https://twitter.com/home"], ["../icons/carpenter-icon.svg", "CARPENTER", "https://vimeo.com/"]];
const searchClick = document.getElementById("search-btn");
searchClick.addEventListener("click", function() {
    if(checkBlank()){
        window.location.reload();
    }
    else{
    clearPreviousSearch();
    // console.log(searchUserInput.value);
    const searchInput = document.getElementById("search-input-user").value;
    let searchedWord = searchInput.toUpperCase();
    console.log(searchedWord);
    let foundServices = [];

    let found = false;

    for(let i = 0; i<services.length; i++){
        if(services[i][1].includes(searchedWord)){
            foundServices.push(services[i]);
            found = true;
        }
    }

    let searchedForText = document.getElementById("searched-for-text");
    searchedForText.innerHTML = "Search results for \""+ searchInput +"\"";

    if(found){
        let searchResults = document.getElementById("search-results");
        for(let i = 0; i<foundServices.length; i++){
            let searchedItemDiv = document.createElement("div");
            let searchItemImgDiv = document.createElement("div");
            let searchItemTextDiv = document.createElement("div");
            searchResults.appendChild(searchedItemDiv);
            searchedItemDiv.classList.add("searched-item");
            searchItemImgDiv.classList.add("searched-item-img");
            searchItemTextDiv.classList.add("searched-item-text");
            searchedItemDiv.appendChild(searchItemImgDiv);
            searchedItemDiv.appendChild(searchItemTextDiv);
            let searchItemImg = document.createElement("img");
            let searchItemText = document.createElement("p");
            searchItemImg.src = foundServices[i][0];
            searchItemText.innerHTML = foundServices[i][1];
            searchItemImgDiv.appendChild(searchItemImg);
            searchItemTextDiv.appendChild(searchItemText);
            searchedItemDiv.addEventListener("click", function(){
                window.location.href = foundServices[i][2];
            });
        }
    }
    else{
        let searchedResultNo = document.getElementById("search-results");
        let pE = document.createElement("p");
        pE.innerHTML = "No results found for \""+ searchInput +"\"";
        searchedResultNo.appendChild(pE);
    }
    count++;
}
});