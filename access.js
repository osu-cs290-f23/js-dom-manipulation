console.log("== document:", document)

var body = document.body
console.log("== body.childNodes:", body.childNodes)
console.log("== body.children:", body.children)

var header = body.children[0]
console.log("== header:", header)
console.log("== header.parentNode:", header.parentNode)
console.log("== header.nextSibling:", header.nextSibling)

var photoCardContainer = document.getElementById("photo-card-container")
console.log("== photoCardContainer:", photoCardContainer)

var photoCards = photoCardContainer.getElementsByClassName("photo-card")
console.log("== photoCards:", photoCards)

var links = document.getElementsByTagName("a")
console.log("== links:", links)
for (var i = 0; i < links.length; i++) {
    console.log(" -- link:", links[i])
}

var linksArray = Array.from(links)
console.log("== linksArray:", linksArray)

var rightNavitem = document.querySelector(".navitem.right")
console.log("== rightNavitem:", rightNavitem)

var navItems = document.querySelectorAll("li.navitem")
console.log("== navItems:", navItems)
// navItems[2].remove()
// console.log("== navItems:", navItems)

var firstPhotoCard = photoCardContainer.children[0]
console.log("== firstPhotoCard:", firstPhotoCard)
console.log("== firstPhotoCard.innerHTML:", firstPhotoCard.innerHTML)
console.log("== firstPhotoCard.textContent:", firstPhotoCard.textContent)
console.log("== firstPhotoCard.clientHeight:", firstPhotoCard.clientHeight)
console.log("== firstPhotoCard.clientWidth:", firstPhotoCard.clientWidth)

console.log("== links[0].href:", links[0].href)
