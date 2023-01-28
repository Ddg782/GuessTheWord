let words=[
    {
        name:"ХОЛОДИЛЬНИК",
        descr:"холодная коробка"
    },
    {
        name:"ДОМ",
        descr:"в нем живут"
    },
    {
        name:"КИСЛОРОД",
        descr:"им дышат"
    },
    {
    name:"ЖАБА",
    descr:"земноводное обитающее в болоте"
    }
]
let lettersRU = ["А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я"]
let word,secretWord,userLetters,lives
let buttonsContainer=document.querySelector(".buttons")
let hintsText=document.querySelector(".hints")
let attemptsText=document.querySelector(".attempts span")
let openText=document.querySelector(".open")
lettersRU.forEach(function(letter){
    let button=document.createElement("button")
    button.classList.add("letter")
    button.innerHTML=letter
    buttonsContainer.appendChild(button)
})
let buttons=buttonsContainer.querySelectorAll(".letter")
startGame()
buttonsContainer.onclick=function(event){
    let target=event.target
    if (target.classList.contains("letter")){
        console.log(target.innerHTML)
        userLetters.push(target.innerHTML)
        openText.innerHTML=getOpenText()
        if(secretWord.indexOf(target.innerHTML)!=-1){
            target.classList.add("right")
        }
        else{
            lives--
            attemptsText.innerHTML=lives
        }
        target.disabled=true
    }
    else if(target.classList.contains("new_game")){
        startGame()
    }
    if(lives==0){
        buttons.forEach(function(button){
            button.disabled=true
            if(secretWord.indexOf(button.innerHTML)!=-1){
                button.classList.add("right")
            }
        })
        openText.innerHTML=secretWord
    }
}
function getRandInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
    }
function getOpenText(){
    let text=""
    for(let letter of secretWord){
        if(userLetters.indexOf(letter)!=-1){
            text+=letter
        }
        else{
            text+="_"
        }
    }
    return text
}
function startGame(){
    word=words[getRandInt(0,words.length-1)]
    secretWord=word.name
    userLetters=[]
    lives=secretWord.length
    attemptsText.innerHTML=lives
    hintsText.innerHTML=word.descr
    openText.innerHTML=getOpenText()
    buttons.forEach((button)=>{
        button.disabled=false
        button.classList.remove("right")
    })
}
/*
1. Создать переменную счетчик попыток (attempts). Сделать так, чтобы у человека было столько попыток, сколько букв в секретном слове. 
2. При ошибке человека, (когда буква на которую нажали отсутствует в секретном) уменьшать попытки и на сайте тоже менять текст попыток. 
3. Если у человека 0 попыток, то сделать так, чтобы он больше не мог нажимать играть. 
И показать в openText польностью секретное слове. 

*/