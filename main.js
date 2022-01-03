async function fetchApi() {
    const usersAPI = 'https://fakerapi.it/api/v1/persons?_quantity=10';
    await fetch(usersAPI)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            for (let i = 0; i < data.data.length; i++) {
                var wrapper = document.querySelector(".wrapper");
                var card = document.createElement("div");
                card.className = "card";
                wrapper.appendChild(card);
                    var details = document.createElement("p");
                    details.className = "p";
                    card.appendChild(details);
                    details.textContent = data.data[i].firstname + " "+ data.data[i].lastname;
                    var image = document.createElement("img");
                    image.className="image";
                    card.appendChild(image);
                    image.src = data.data[i].image+`${i}`;
            }
        })
        .catch((err) => {
            console.log(err)
        });
}

fetchApi();

