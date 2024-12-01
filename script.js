const keys = document.querySelectorAll(".key")
console.log(keys)

keys.forEach(key =>{
    key.addEventListener("click", () =>{
        const audioKey = key.getAttribute("data-key");
        const audio = document.querySelector(`audio[data-key="${ audioKey }"]`);

        key.classList.add('playing');
        audio.currentTime = 0;//start at 0
        audio.play();

    setTimeout(() => {
        key.classList.remove('playing');
    }, 100);
    })
})


window.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key="${event.key.toUpperCase()}"]`);
    const key = document.querySelector(`.key[data-key="${event.key.toUpperCase()}"]`);
    if (!audio) return; 
  
    key.classList.add('playing');
    audio.currentTime = 0; // Start at 0
    audio.play();
  
    setTimeout(() => {
        key.classList.remove('playing');
    }, 100);
  });