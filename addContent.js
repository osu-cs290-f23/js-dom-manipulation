var photoCardContainer = document.getElementById("photo-card-container")
var firstPhotoCard = photoCardContainer.children[0]

// var userSuppliedValue = "Some innocent text"
// var userSuppliedValue = "<img src='http://placekitten.com/480/480' />"
var userSuppliedValue = "<img src=x onerror='alert(\"Uh oh!\")' />"
// firstPhotoCard.innerHTML = "<p>" + userSuppliedValue + "</p>"
firstPhotoCard.textContent = userSuppliedValue
