let tutteCrypto = null;

const aside = document.querySelector(".asideBox");

export async function renderCryptoList(list) {
    console.log("Lista crypto: ", list);
    tutteCrypto = list;

    list.forEach(crypto => {

        let price = crypto.current_price;
        let formatted = price.toLocaleString("it-IT", {
            style: "currency",
            currency: "EUR"
        });
        
        let boxCrypto = document.createElement("div");
        boxCrypto.setAttribute("class", "boxCrypto");
        boxCrypto.setAttribute("data-id", `${crypto.id}`);
        boxCrypto.innerHTML = `<p><img src="${crypto.image}" alt="${crypto.name} icon"> ${crypto.name} - ${formatted}</p>`;
        aside.appendChild(boxCrypto);
       
    });
}


const section = document.getElementById("detailsCrypto");

export async function renderCryptoDatas(datas) {
    console.log(datas);

    while(section.firstChild) {
        section.removeChild(section.firstChild);
    }

    let price = datas.market_data.current_price.eur;
    let formatted = price.toLocaleString("it-IT", {
        style: "currency",
        currency: "EUR"
    });

    let valore = datas.market_data.market_cap.eur;
    let valueFormatted = valore.toLocaleString("it-IT", {
        style: "currency",
        currency: "EUR"
    });

    let volume = datas.market_data.total_volume.eur;
    let volumeFormatted = volume.toLocaleString("it-IT", {
        style: "currency",
        currency: "EUR"
    });

    let title = document.createElement("div");
    title.classList.add("cryptoTitle");
    title.innerHTML = `<h2 id="cryptoName">${datas.name} (${(datas.symbol).toUpperCase()}) -</h2><img src="${datas.image.large}">`;
    section.appendChild(title);

    let boxPrice = document.createElement("div");
    boxPrice.classList.add("cryptoPrice");
    boxPrice.innerHTML = `<p>${formatted} |</p><p>${(datas.market_data.price_change_percentage_24h).toFixed(2)} %</p>`;
    boxPrice.style.color = datas.market_data.price_change_percentage_24h >= 0 ? "green" : "red";
    section.appendChild(boxPrice);

    let boxStats = document.createElement("div");
    boxStats.classList.add("cryptoStats");
    boxStats.innerHTML = `<p>Market Cap: ${valueFormatted}</p><hr><p>Volume 24h: ${volumeFormatted}</p>`;
    section.appendChild(boxStats);

    let boxCanvas = document.createElement("div");
    boxCanvas.classList.add("cryptoGraphic");
    boxCanvas.innerHTML = `<canvas></canvas>`;
    section.appendChild(boxCanvas);
}


const inputSearch = document.getElementById("searchBar");

export async function daiAscoltatori() {
    let valore = inputSearch.value;

    let cercati = tutteCrypto.filter(c => 
        c.name.toLowerCase().startsWith(valore.toLowerCase())
    );

    while(aside.firstChild) {
        aside.removeChild(aside.firstChild);
    }
    
    if(valore === "") {
        cercati = tutteCrypto;
    }

    cercati.forEach(crypto => {
        let price = crypto.current_price;
        let formatted = price.toLocaleString("it-IT", {
            style: "currency",
            currency: "EUR"
        });
        
        let boxCrypto = document.createElement("div");
        boxCrypto.setAttribute("class", "boxCrypto");
        boxCrypto.setAttribute("data-id", `${crypto.id}`);
        boxCrypto.innerHTML = `<p><img src="${crypto.image}" alt="${crypto.name} icon"> ${crypto.name} - ${formatted}</p>`;
        aside.appendChild(boxCrypto);
    });
}