/*class Animal{
    constructor(name, age, childs= null){
        this.name = name,
        this.age = age,
        this.childs = childs
    }
}
class Cats extends Animal{
    constructor(name, age, childs= null){
        super (name, age, childs)
    }
}
class Dogs extends Animal{
    constructor(name, age, childs= null){
        super (name, age, childs)
    }
}

function getAge(anim){
    let result = 0;
    if (anim.length>0){
        result += anim.reduce((ac, current)=>{
            let finalResult = +result
        })

    }
}
*/
/*
const text = document.querySelector('.div1')

setInterval(()=>{
 text.hidden = true
}, 1000)
setInterval(()=>{
    text.hidden = false
   }, 1100)

   */
/*
   const but = document.querySelector('.div1')
   const num = document.querySelector('.num')


   function func(){
    num.innerHTML++
     }
   but.addEventListener('dblclick', func)

   */ /*
   const movies =[
    {
        name:'terminator',
        description: "action",
        date:1996,
        img:'terminator',
        genre:'action'
    },
    {
        name:'titanic2',
        description: "some text",
        date:1994,
        img:'robocop',
        genre:"action"
    },
    {
        name:'home alone',
        description: "smth",
        date:1999,
        img:'alone',
        genre:"comedy"
    },
]


const render = (name,description,date,img,genre) =>{
return `   
 <div class="item">
        <button class ="btn">delete</button>
        <div class="name h">name:${name}</div>
        <div class="genre h">genre:${genre}</div>
        <div class="date h">date:${date}</div>
        <div class="desc h">description:${description}</div>
        <div class="pic h"> <img class="img" src="./assets/${img}.jpg" alt=""/></div>
</div>

`;
};





const films = movies.map(item =>{
   return render(item.name, item.description, item.date,item.img, item.genre)
}).join('')

const contWithCard = document.querySelector('.container');
contWithCard.innerHTML = films

////////////////////
const btn =document.querySelectorAll('.btn')

const handleDelete = (e)=>{
    let deleted = e.target.closest(".item");
    deleted.remove();

}
btn.forEach((item)=>{
    item.addEventListener('click', handleDelete)
});
console.log(btn)

///////////
const action = document.getElementById('action')
const handleFilter =()=>{
    const filteredMovies = movies.filter((i) => i.genre === 'action');
    const filmsFilter = filteredMovies.map(item =>{
        return render(item.name, item.description, item.date,item.img, item.genre)
     }).join('');
     contWithCard.innerHTML = filmsFilter;
     



}
action.addEventListener('click', handleFilter )

///////////
const date = document.querySelector('.sort')
const handleSort =()=>{
    const sortMovies = movies.sort((a,b) => a.date-b.date);
    const filmsSort = sortMovies.map(item =>{
        return render(item.name, item.description, item.date,item.img, item.genre)
     }).join('');
     contWithCard.innerHTML = filmsSort;
     



}
date.addEventListener('click', handleSort)


*/
/*
fetch("https://api.covidtracking.com/v1/states/current.json")
.then(res => res.json())
.then((data)=> console.log(data))

*/

/*
const render2 = (date, state,positive) => {
  return `   
     <div class="item">
            
            <div class="name h">name:${date}</div>
            <div class="genre h">genre:${state}</div>
            <div class="name h">name:${positive}</div>
           
            
    </div>
  `;
};

async function getCovid() {
  const url = "https://api.covidtracking.com/v1/states/current.json";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);


  console.log(data);
  const covid = data.map((i) => {
      return render2(i.date, i.state, i.positive);
    })
    .join("");


const res1 = document.querySelector(".container");
res1.innerHTML = covid;
}
getCovid();

*/
/////////////////////////////////////////////////////////////////////////////////////////////////

//altKey
//shiftKey
//ctrlKey

/*
  function shiftAlt(event){
      if(event.shiftKey && event.altKey){
          alert('hello')
      }
  }

  document.addEventListener('click', shiftAlt)


  function shiftAlt2(event){
    if(event.shiftKey){
        alert('hello again')
    }
}

document.addEventListener('keydown', shiftAlt2)

*/

/*
///preventDefault
const link = document.querySelector('.link')

const notDef = (e)=>{
e.preventDefault()
}

link.addEventListener('click', notDef)

*/

/*
const input1 = document.getElementById('1')
const input2 = document.getElementById('2')

//blur
//focus
//change
//input

/*
const handleBlur =(e)=>{
    console.log('blur')
}
input1.addEventListener('blur', handleBlur)
input2.addEventListener('focus', handleBlur)
*/

/*
const handleChange =(e)=>{
    console.log('handleChange',e.target.value)
}
input1.addEventListener('handleChange', handleChange)

const handleInput =(e)=>{
    console.log('handleInput',e.target.value)
}
input2.addEventListener('handleinput', handleInput)
*/
/*

const input1 = document.getElementById('1')
const input2 = document.getElementById('2')

const input1Res = (el)=>{
    if(el.target.value.length >3 ){
       input1.style.border = '5px solid red'
 }  else{
    input1.style.border = '5px solid black'
 }
}
input1.addEventListener('blur', input1Res)
*/



const input1 = document.getElementById("1");

const frase = document.createElement("div");
document.body.append(frase);
const btn = document.getElementById("btn");
const input1Res = (e) => {
  if (e.target.value.length > 3) {
    input1.classList.add("red");

    frase.textContent = "enter less than 3 symbols";
    btn.disabled = true;
    input1.after(`<div>${input1.value}</div>`)


  } else {
    input1.classList.remove("red");
    frase.textContent = "";
    btn.disabled = false;
    
  }
};
input1.addEventListener("input", input1Res);
