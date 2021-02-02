const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")
const visitorTotalTickets = document.querySelector(".customers")
let visitorTotalTicketsVar = 0

export const updateTicketCount = (numTimes) =>{
    visitorTotalTicketsVar += numTimes
    visitorTotalTickets.innerHTML = "Total tickets: " + visitorTotalTicketsVar
}

eventHub.addEventListener("click", event => {
    let clickEvent = ""
        switch (event.target.id) {
        case "rideTicket":
            clickEvent = new CustomEvent("rideTicketPurchased")
            eventHub.dispatchEvent(clickEvent)
            updateTicketCount(1)
            break;
        case "foodTicket":
            clickEvent = new CustomEvent("foodTicketPurchased")
            eventHub.dispatchEvent(clickEvent)
            updateTicketCount(1)
            break;
        case "gameTicket":
            clickEvent = new CustomEvent("gameTicketPurchased")
            eventHub.dispatchEvent(clickEvent)
            updateTicketCount(1)
            break;
        case "sideShowTicket":
            clickEvent = new CustomEvent("sideShowTicketPurchased")
            eventHub.dispatchEvent(clickEvent)
            updateTicketCount(1)
            break;
        case "fullPackageTicket":
            clickEvent = new CustomEvent("rideTicketPurchased")
            eventHub.dispatchEvent(clickEvent)
            clickEvent = new CustomEvent("foodTicketPurchased")
            eventHub.dispatchEvent(clickEvent)
            clickEvent = new CustomEvent("gameTicketPurchased")
            eventHub.dispatchEvent(clickEvent)
            clickEvent = new CustomEvent("sideShowTicketPurchased")
            eventHub.dispatchEvent(clickEvent)
            updateTicketCount(4)
            break;
        }
    })

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideShowTicket">Side Show Ticket</button>
        <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

