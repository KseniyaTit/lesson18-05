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



const contMain = document.getElementById('div')

contMain.className = 'cont-main'

const borderCont = document.createElement('div')
borderCont.className = 'border'
contMain.append(borderCont)


/*const fieldSet = document.createElement('fieldset')
fieldSet.className = 'fieldset'*/





const inputFirst = document.createElement('input')
inputFirst.className = 'input'
inputFirst.type ='text'
inputFirst.value ='userName'

borderCont.append(inputFirst)


const form = document.createElement('form')
borderCont.append(form)
form.append(inputFirst)
form.append(inputSecond) // добавление формы



const fieldSet = document.createElement('fieldset')
fieldSet.className = 'fieldset'
contMain.append(feildset)




const inputSecond = document.createElement('input')
inputSecond.className = 'input'
inputSecond.type ='number'
inputSecond.value ='11223344'
borderCont.append(inputSecond)


function createInput(className, type,value, appendBlock){
    const inputSecond = document.createElement('input')
    inputSecond.className = className
    inputSecond.type =type
    inputSecond.value = value
    borderCont.append(inputSecond)

}

createInput('input',"text","userName", borderCont)
createInput('input',"text","userName", borderCont)
createInput('input',"password","userName", borderCont)