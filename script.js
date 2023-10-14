console.log("Page loaded...");

var currentUserName = "";

function getUserName(element){
    // console.log(element.value);
    currentUserName = element.value;
}

function makeUserCard(data){
    var response = `<div class="card">
                        <img src="${data.avatar_url} alt="${data.type}">
                        <div class="flex-1">
                            <h3>Name: ${data.name}</h3>
                            <h5>Location: ${data.location}</h5>
                            <p>Repositories: ${data.public_repos}</p>
                        </div>
                    </div>`;

    return response;
}

async function search(){
    var response = await fetch("https://api.github.com/users/" + currentUserName);
    var userData = await response.json();
    // console.log(userData);
    cardsDiv.innerHTML = makeUserCard(userData) + cardsDiv.innerHTML;
}
