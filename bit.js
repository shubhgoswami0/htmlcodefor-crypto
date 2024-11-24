// Fetch data from the CoinGecko API and render it using Chart.js
async function fetchCryptoData() {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30'
      );
      const data = await response.json();
  
      const labels = data.prices.map(price => {
        const date = new Date(price[0]);
        return date.toLocaleDateString();
      });
  
      const prices = data.prices.map(price => price[1]);
  
      renderChart(labels, prices);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  // Function to render the chart using Chart.js
  function renderChart(labels, data) {
    const ctx = document.getElementById('cryptoChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Bitcoin Price (USD)',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Price in USD'
            }
          }
        }
      }
    });
  }
  
  // Call the function to fetch data and display it on the chart
  fetchCryptoData();
  function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  }
  
  