let chart = null;

export async function renderCryptoGraphic(graphic) {
    console.log(graphic);
    
    let orari = graphic.prices.map(p => {
        const date = new Date(p[0]);
        return date.getHours() + ":" + String(date.getMinutes()).padStart(2, "0");
    });

    let valori = graphic.prices.map(p => p[1]);

    const ctx = document.querySelector("canvas").getContext("2d");

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: orari,
            datasets: [{
                label: "Prezzo",
                data: valori,
                borderColor: "white",
                borderWidth: 2,
                tension: 0.3
            }]
        },
        options: {
            scales: {
                x: {
                    display: true,
                    ticks: {
                        color: "white"
                    },
                    grid: {
                        color: "rgba(255, 255, 255, 0.5)"
                    }
                },
                y: {
                    display: true,
                    ticks: {
                        color: "white"
                    },
                    grid: {
                        color: "rgba(255, 255, 255, 0.5)"
                    }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

}