let homeScore = document.getElementById("home-team")
let guestScore = document.getElementById("guest-team")
let home = 0, guest = 0

function add1HomeScore() {
    home += 1
    homeScore.textContent = home
}

function add2HomeScore() {
    home += 2
    homeScore.textContent = home
}

function add3HomeScore() {
    home += 3
    homeScore.textContent = home
}

function add1GuestScore() {
    guest += 1
    guestScore.textContent = guest
}

function add2GuestScore() {
    guest += 2
    guestScore.textContent = guest
}

function add3GuestScore() {
    guest += 3
    guestScore.textContent = guest
}

function newGame() {
    home = 0
    guest = 0
    homeScore.textContent = home
    guestScore.textContent = guest
}