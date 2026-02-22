import { getCryptoList, getCryptoData, getCryptoGraphic } from "./api.js";
import { renderCryptoList, renderCryptoDatas, daiAscoltatori } from "./ui.js";
import { renderCryptoGraphic } from "./graphics.js";

async function init() {
    console.log("Carico lista...");
    const list = await getCryptoList();
    console.log("Lista:", list);

    await renderCryptoList(list);
    await addListener();
}


const inputSearch = document.getElementById("searchBar");

inputSearch.addEventListener("input", async () => {
    await daiAscoltatori();
    await addListener();
});

async function addListener() {
    let cryptoCaricate = document.querySelectorAll(".boxCrypto");

    cryptoCaricate.forEach(crypto => {
        crypto.addEventListener('click', async () => {
            const id = crypto.dataset.id;

            let datas = await getCryptoData(id);
            let graphic = await getCryptoGraphic(id);

            await renderCryptoDatas(datas);
            await renderCryptoGraphic(graphic);
        })
    })
}


init();