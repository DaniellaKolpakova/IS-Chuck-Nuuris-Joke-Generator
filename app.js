document.querySelector("get.jokes").addEventListener("click", getJokes); 

function getJokes(e){ 
    const number = document.querySelector('input[type=nimber]').value;

    fetch(`http://api.icndb.com/jokes/random/ ${number}`)
    .then(function(response){
        console.log(response)
        return response.json();

    })
    .then(function(data){
        let output  ="";
        
        data.value.forEach(joke => {

            output += `<li>${joke.joke}</li>`;

            console.log(output);
            
        });

        document.querySelector(".jokes").innerHTML
    });

    e.preventDefault();
}