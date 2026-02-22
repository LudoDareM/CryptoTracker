/* ENDPOINT */

/* A) LISTA DELLE CRYPTO */
/* https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1 */


/* B) DETTAGLI CRYPTO */
/* https://api.coingecko.com/api/v3/coins/{id} */


/* C) GRAFICO 24H */
/* https://api.coingecko.com/api/v3/coins/{id}/market_chart?vs_currency=eur&days=1 */


const baseURL = "https://api.coingecko.com/api/v3";

export async function getCryptoList() {
    
    const res = await fetch(`${baseURL}/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1`);
    if (!res.ok) {
        throw new Error("Errore nel caricamento della lista crypto.");
    }

    return await res.json();

}


export async function getCryptoData(id) {
    const res = await fetch(`${baseURL}/coins/${id}`);
    if (!res.ok) {
        throw new Error("Errore nel caricamento dei dettagli.");
    }
    return await res.json();
}


export async function getCryptoGraphic(id) {
    const res = await fetch(`${baseURL}/coins/${id}/market_chart?vs_currency=eur&days=1`);
    if (!res.ok) {
        throw new Error("Errore nel caricamento del grafico.");
    }
    return await res.json();
}
