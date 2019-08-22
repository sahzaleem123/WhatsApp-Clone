// Make a request for a user with a given ID
axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(function (response) {
        // handle success
        for (let i = 0; i < response.data.length; i++) {
            let a = response.data[i];
            document.querySelector('ul').innerHTML +=
                `<h1>${a.name}</h1>
            <p>${a.number}</p>
            <p>${a.firstLine}</p>
            <p>${a.time}</p>
            <img src="${a.profilePic}" >`

        }



        // console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });