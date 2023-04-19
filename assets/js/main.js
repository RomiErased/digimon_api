
fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(data => {
        for (const post of data) { //item capturamos cada una de las cosas que tiene data
            $("#table-posts tbody").append(`
                <tr>
                    <td>${post.name}</td>
                    <td> <img src="${post.img}"/></td>
                    <td>${post.level}</td>
                </tr>
            `)
            // console.log(post.name)
        }
    })
    .catch(error => console.error(error));

const searchButton = document.getElementById('btn-buscar');
const searchField = document.getElementById('searchField');
const resultsList = document.getElementById('resultsList');
const navList = document.getElementById('nav-list');

searchButton.addEventListener('click', (e) => {
    e.preventDefault()
    const query = searchField.value;
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${query}`)
        .then(response => response.json())
        .then(data => {
            $("#table-posts tbody").html('');
            data.forEach(post => {
                $("#table-posts tbody").append(`
                <tr>
                    <td>${post.name}</td>
                    <td> <img src="${post.img}"/></td> 
                    <td>${post.level}</td>
                </tr>
            `)
            });
        })
        .catch(error => console.error(error));
});


const nav = navList.value;
fetch(`https://digimon-api.vercel.app/api/digimon/level/${nav}`)
    .then(response => response.json())
    .then(data => {
        // Iterar sobre los datos y crear elementos del listado
        data.forEach(item => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = item.nombre;
            link.href = item.url;
            listItem.appendChild(link);
            navList.appendChild(listItem);
        });
    })
    .catch(error => console.log(error));
