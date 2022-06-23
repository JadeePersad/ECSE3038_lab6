function div(class_n, text) {
    const elem = document.createElement("div");
    elem.className = class_n;
    if (text != null) elem.innerText = text;

    return elem;
}

function h3(class_n, text) {
    const elem = document.createElement("h3");
    elem.className = class_n;
    if (text != null) elem.innerText = text;

    return elem;
}

function img(class_n, src, alt) {
    const elem = document.createElement("img");
    elem.className = class_n;
    elem.src = src;
    elem.alt = alt;
    return elem;
}

function ul(class_n) {
    const elem = document.createElement("ul");
    elem.className = class_n;

    return elem;
}

function li(class_n, text) {
    const elem = document.createElement("li");
    elem.className = class_n;
    if (text != null) elem.innerText = text;

    return elem;
}

function svg(class_n, text) {
    const elem = document.createElement("svg");
    elem.className = class_n;
    if (text != null) elem.innerText = text;

    pathE = document.createElement("path")
    elem.appendChild(pathE)

    return elem;
}

function createCard(details) {
    tankImg = img("card__image", details.img_src)


    arc = svg("card__arc")
    thumbnail = img("card__thumb", details.thumb_src)

    title = h3("card__title", details.title)
    header_text = div("card__header-text")
    header_text.appendChild(title)

    header = div("card__header")
    header.appendChild(arc)
    header.appendChild(thumbnail)
    header.appendChild(header_text)

    list = ul("card__description")
    list.style = "list-style-type:none"

    for (const info of details.informations) {
        item = li("", info)
        list.appendChild(item)
    }

    overlay = div("card__overlay")
    overlay.appendChild(header)
    overlay.appendChild(list)

    cardDiv = div("card")
    cardDiv.appendChild(tankImg)
    cardDiv.appendChild(overlay)

    cardItem = li("")
    cardItem.appendChild(cardDiv)

    return cardItem
}