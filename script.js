function submitTank() {
    tLocation = document.getElementById("location").value
    tLat = document.getElementById("lat").value
    tLong = document.getElementById("long").value
    tPercentageFull = document.getElementById("percentage_full").value

    const tObj = {
        location: tLocation,
        lat: tLat,
        long: tLong,
        percentage_full: tPercentageFull
    }

    fetch("http://localhost:3000/data",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(tObj)
        }).then(() => location.reload())
}

function handleItself() {
    fetch("http://localhost:3000/data")
        .then(res => res.json())
        .then(tankList => {
            cardHolder = document.getElementById("cards")
            id = 1
            for (const tank of tankList) {
                info = {}
                info.title = `Tank User ID# ${String(id).padStart(3, '0')}`
                id += 1
                info.img_src = "./assets/tank1.jpg"
                info.thumb_src = "./assets/User_Avatar_2.png"
                info.id = tank._id["$oid"]

                informations = [
                    `location: ${tank.location}`,
                    `latitude: ${tank.lat}`,
                    `longitude: ${tank.long}`,
                    `percentage_full:${tank.percentage_full}`,
                ]
                info.informations = informations

                card = createCard(info)
                cardHolder.appendChild(card)
            }
        })
}

window.onload = handleItself