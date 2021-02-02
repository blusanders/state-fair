const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

let renderHTML =""

eventHub.addEventListener("foodTicketPurchased", customEvent => {
    renderHTML += `<div class="person eater"></div>`
    contentTarget.innerHTML = renderHTML;
})


// export const RideTicketHolders = () => {
//     eventHub.addEventListener("", customEvent => {
//     })
// }

