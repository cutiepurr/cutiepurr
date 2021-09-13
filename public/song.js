var songContainer = document.querySelector("#songlist")
var collapseLink = document.querySelector('#showAll')
fetch('./song.json')
.then(response => {return response.json()})
.then(data => {
    console.log(data)
    showSongs(data.all_songs)
})
function showSongs(data) {
    for (var show of data) {
        songContainer.innerHTML += `<h3>${show.name}</h3>
        <p><i>${show.description}</i></p>
        <img src="${show.img}" class='img'>
        <br><label><i>${show.label}</i></label>`
        for (var song of show.songs) {
            songContainer.innerHTML += `<p><a href="${song.YouTube}" target="_blank" title="Listen on YouTube" style='text-decoration:none;'><i class="fab fa-youtube"></i> ${song.name}</a> || <span style='color:red;'>${song.rate}/10</span></p>`
        }
    }
}

collapseLink.onclick = function() {
    if (songContainer.style.display == 'block' || songContainer.style.display=='') {
        songContainer.style.display = 'none'
        collapseLink.innerHTML = "Click to expand"
    }
    else if (songContainer.style.display == 'none') {
        songContainer.style.display = 'block'
        collapseLink.innerHTML = "Click to collapse"
    }
}