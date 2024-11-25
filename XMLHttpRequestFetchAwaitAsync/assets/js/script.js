fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countryList = document.getElementById('country-list');
    
    data.forEach(country => {
      const countryCard = document.createElement('div');
      countryCard.classList.add('country-card');

      countryCard.innerHTML = `
        <img src="${country.flags.svg}" alt="${country.name.common} Flag">
        <div class="info">
          <h3>${country.name.common}</h3>
          <p>Region: ${country.region}</p>
          <p>Subregion: ${country.subregion}</p>
          <p>Population: ${country.population.toLocaleString()}</p>
        </div>
      `;
      
      countryList.appendChild(countryCard);
    });
  })
  .catch(error => {
    console.error('Error fetching country data:', error);
  });
