const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

let renderHTML =""

eventHub.addEventListener("gameTicketPurchased", customEvent => {
    // console.log("GAMER")
    renderHTML += `<div class="person player"></div>`
    contentTarget.innerHTML = renderHTML;
})


// export const RideTicketHolders = () => {
//     eventHub.addEventListener("", customEvent => {
//     })
// }

