const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

let renderHTML =""

eventHub.addEventListener("rideTicketPurchased", customEvent => {
    renderHTML += `<div class="person rider"></div>`
    contentTarget.innerHTML = renderHTML;
})

export const RideTicketHolders = () => {
}

// export const RideTicketHolders = () => {
//     eventHub.addEventListener("", customEvent => {
//     })
// }

