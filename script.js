let percent= -1
const percent_text= document.getElementById('update-percent')
const text= document.getElementById('text')

function increasePercent() {
    if(percent + 1 < 100){
        let rand = getRandomNumber(1, 5);
        if(percent > 68 && percent + rand < 100) {
            percent += rand
        } else {
            percent++
        }
        percent_text.innerText = percent.toString()
        let rand2 = getRandomNumber(3, 98)
        setTimeout(increasePercent, rand2 * 1000 + rand2 * 52);
    }
    // else {
    //     text.innerText = "Restarting"
    // }
}

increasePercent()

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}