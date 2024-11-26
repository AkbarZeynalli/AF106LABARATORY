document.getElementById('jokeButton').addEventListener('click', function() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json()) 
        .then(data => {
            console.log(data);
            
            if (data.type === 'single') {
                document.getElementById('jokeText').textContent = data.joke;
            } else {
                document.querySelector(".setup").textContent =
                data.setup;
                document.getElementById("jokeText").textContent= 
                data.delivery;
            }
        })
        .catch(error => {
            document.getElementById('jokeText').textContent = 'Failed to load joke. Please try again later.';
            console.error('Error fetching joke:', error);
        });
});
