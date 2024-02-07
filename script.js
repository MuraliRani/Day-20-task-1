// Function to fetch a random Chuck Norris joke
function fetchJoke() {
    fetch('https://api.chucknorris.io/jokes/random').then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch joke');
            }
            return response.json();
        })
        .then(data => {
            const jokeContainer = document.getElementById('jokeContainer');
            jokeContainer.innerHTML = `<p>${data.value}</p>`;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}

// Event listener for fetch button click
document.getElementById('fetchJokeBtn').addEventListener('click', fetchJoke);
