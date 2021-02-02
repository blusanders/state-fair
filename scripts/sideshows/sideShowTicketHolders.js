const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

let renderHTML =""

eventHub.addEventListener("sideShowTicketPurchased", customEvent => {
    renderHTML += `<div class="person gawker"></div>`
    contentTarget.innerHTML = renderHTML;
})


// export const RideTicketHolders = () => {
//     eventHub.addEventListener("", customEvent => {
//     })
// }

