const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');
    // const errorMessage = () => {
    //     inputForm.innerHTML += '<p style="color:red">ID invalid. Please enter a valid ID from the above list.</p>';
    // }
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        title.innerText = data.title;
        summary.innerText = data.summary;
    });
  });
}

document.addEventListener('DOMContentLoaded', init);