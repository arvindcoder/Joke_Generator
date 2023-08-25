const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn')
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
const getJoke = ()=>{
    jokeContainer.classList.remove("fade")
    fetch(url)
    .then(res=>{
        console.log(res);
        return res.json()
    })
    .then(item=>{
        jokeContainer.classList.add("fade");
        jokeContainer.textContent = `${item.joke}`;  
    })
    .catch(error=>console.log(error.message))

}
getJoke();
btn.addEventListener('click',getJoke)