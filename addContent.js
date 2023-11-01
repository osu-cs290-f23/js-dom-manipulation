var photoCardContainer = document.getElementById("photo-card-container")
var firstPhotoCard = photoCardContainer.children[0]

// var userSuppliedValue = "Some innocent text"
// var userSuppliedValue = "<img src='http://placekitten.com/480/480' />"
var userSuppliedValue = "<img src=x onerror='alert(\"Uh oh!\")' />"
// firstPhotoCard.innerHTML = "<p>" + userSuppliedValue + "</p>"
firstPhotoCard.textContent = userSuppliedValue

function insertPhotoCard(url, caption) {
    var photoCardSection = document.createElement("section")
    photoCardSection.classList.add("photo-card", "another-class", "a-third-class")
    photoCardSection.classList.remove("another-class")
    photoCardSection.classList.toggle("another-class")

    var imgContainerDiv = document.createElement("div")
    imgContainerDiv.classList.add("img-container")
    photoCardSection.appendChild(imgContainerDiv)

    var personPhotoImg = document.createElement("img")
    personPhotoImg.classList.add("person-photo-img")
    personPhotoImg.src = url
    imgContainerDiv.appendChild(personPhotoImg)

    var captionDiv = document.createElement("div")
    captionDiv.classList.add("caption")
    photoCardSection.appendChild(captionDiv)
    captionDiv.textContent = caption

    console.log("== photoCardSection:", photoCardSection)
    photoCardContainer.appendChild(photoCardSection)
}

insertPhotoCard(
    "http://placekitten.com/480/480",
    "Luke as a kitty"
)

insertPhotoCard(
    "http://placekitten.com/480/480?image=2",
    "Luke as a kitty #2"
)
