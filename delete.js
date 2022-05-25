
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

   */
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
date.addEventListener('click', handleSort )
