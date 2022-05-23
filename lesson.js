/*let a ={
    1:a,
    2:blur,
}

Object.keys(ar)
Object.values(ar)
Object.entries(ar)

setTimeout(()=>{
    console.log(i)
}, 9000)

setInterval(()=>{
    console.log(1)
}, 5000)
*/

/*const div1 = document.getElementById('div1')
console.log(div1)
const div2 = document.getElementById('div2')
console.log(div2)
const div3 =document.querySelector('.div3')
console.log(div3)

/*div1.innerHTML ='123111'*/
/*div1.hidden=true
div2.innerHTML = 'smth'
div3.innerHTML = 'text' 

*/

/*const div1 = document.getElementById('div1')
const fontForDiv = document.createElement('div')
fontForDiv.innerHTML = 'some text'
fontForDiv.className = 'className'
fontForDiv.id = 'id'
div1.append(fontForDiv)
*/

//append
//prepend

/*

const contMain = document.getElementById('div')

contMain.className = 'cont-main'

const borderCont = document.createElement('div')
borderCont.className = 'border'
contMain.append(borderCont)


const fieldSet = document.createElement('fieldset')
fieldSet.className = 'fieldset'
borderCont.append(fieldSet)





const inputFirst = document.createElement('input')
inputFirst.className = 'input'
inputFirst.type ='text'
inputFirst.value ='userName'

fieldSet.append(inputFirst)

const inputSecond = document.createElement('input');
inputSecond.className = 'input';
inputSecond.type ='number';
inputSecond.value ='11223344';
fieldSet.append(inputSecond);
const form = document.createElement('form')
fieldSet.append(form)
form.append(inputFirst)
form.append(inputSecond) // добавление формы



/*const fieldSet = document.createElement('fieldset')
fieldSet.className = 'fieldset';
contMain.append(feildset);*/





/*

function createInput(className, type,value, appendBlock){
    const inputSecond = document.createElement('input')
    inputSecond.className = className
    inputSecond.type =type
    inputSecond.value = value
    fieldSet.append(inputSecond)

}

createInput('input',"text","userName", borderCont)
createInput('input',"text","userName", borderCont)
createInput('input',"password","userName", borderCont);


const input3 = document.createElement('input')
fieldSet.append(input3)
input3.type = 'password'
form.append(inputSecond)




const label1 = 'smth text text';
label1.className = 'label1'
const legendInp = document.createElement('legend');
fieldSet.prepend(legendInp)
legendInp.prepend(label1)


const divElem = document.createElement('div')
contMain.append(divElem)
divElem.className = 'divElem'
/*divElem.remove()*/
/*
const newId = document.getElementById('newId')
newId.classList.add('class')
newId.classList.remove('class')
console.log(newId.classList.contains('class'))

newId.classList.toggle('newId2')*/



/*function sayHello (){
    alert('hello')
}
*//*
const elem = document.getElementById('newId')
function sayHello (){
const divEl = document.createElement('div')
divEl.innerText ='a'
elem.prepend(divEl)
const divEl2 = document.createElement('div')
divEl2.innerText ='hello'
*/
  
             /////////другие слова NB

/*
const btn = document.getElementById('btn')

function hover() {

btn.classList.add('red')

}


function notHover(){
    btn.classList.remove('red')
}

*/
/*
const btn = document.getElementById('btn')
function sayHi(){
    console.log('hello')
}
btn.addEventListener('mouseover', sayHi)

*/

/*
const btn = document.getElementById('btn')




const popupFind= document.querySelector('.hidden')
function sayHi(){
    popupFind.classList.toggle('visible')
}
btn.addEventListener('click',sayHi)
*/
/*

const btn = document.querySelectorAll('.btn')
function func(event){
    console.log(event.target)
}
btn.forEach((i)=>{
    i.addEventListener('click', func)}
    )


    */

  
    const ar =[
        {
            name:'terminator',
            description: "action",
            date:1994,
            img:'terminator',
            genre:'action'
        },
        {
            name:'robocop',
            description: "some text",
            date:1994,
            img:'robocop',
            genre:"action"
        },
        {
            name:'home alone',
            description: "smth",
            date:1999,
            img:'home alone',
            genre:"comedy"
        },
    ]