document.getElementById('teamForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var teamName = document.getElementById('teamName').value;
    var apiUrl = `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${encodeURIComponent(teamName)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.teams && data.teams.length > 0) {
                var team = data.teams[0]; 
                displayTeamData(team);
            } else {
                document.getElementById('teamData').innerHTML = '<p>No teams found with that name.</p>';
            }
        })
        .catch(error => {
            document.getElementById('teamData').innerHTML = '<p>Error fetching data. Please try again later.</p>';
        });
});

function displayTeamData(team) {
    var teamInfo = `
        <h3>${team.strTeam}</h3>
        <img src="${team.strBadge}" alt="${team.strTeam} Badge" class="img-fluid" style="max-width: 150px;">
        <p><strong>Country:</strong> ${team.strCountry}</p>
        <p><strong>Stadium:</strong> ${team.strStadium}</p>
        <p><strong>Founded:</strong> ${team.intFormedYear}</p>
        <p><strong>Website:</strong> <a href="${team.strWebsite}" target="_blank">${team.strWebsite}</a></p>
    `;
    document.getElementById('teamData').innerHTML = teamInfo;
}
