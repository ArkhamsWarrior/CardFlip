const squares = document.querySelector('.lang-card');
const inner= document.querySelector(".cont-card")
let sayHello = () => {
    console.log('hello')

}

squares.addEventListener('mouseenter', () => {
squares.classList.add('hover');
})

squares.addEventListener('mouseleave', () => {
squares.classList.remove('hover');
})
inner.addEventListener('mouseenter', () => {
inner.classList.add('hover');
})

inner.addEventListener('mouseleave', () => {
inner.classList.remove('hover');
})




squares.addEventListener('click', () => {
    squares.classList.add("anime");
    setTimeout( () => {
        inner.classList.toggle("passive");
        squares.classList.toggle("new-pos");
        inner.classList.add('new-pos')
        squares.classList.remove('passive');
        //  squares.classList.remove("anime");
    }, 1000)
    setTimeout(()=> {
        inner.classList.remove("anime");
    }, 1100)
    
    
    console.log(squares.classList);
})
inner.addEventListener('click', () => {
    inner.classList.add('anime');
    setTimeout(() => {
        // squares.classList.toggle("anime");
        squares.classList.remove('new-pos', 'anime');
        // inner.classList.toggle("new-pos");
        inner.classList.remove("new-pos");
        inner.classList.add("passive");
        squares.classList.add("pos-anime");
        squares.classList.add('passive');


    }, 1000)
    
    setTimeout(()=> {
        squares.classList.remove("anime");
        squares.classList.remove("pos-anime");



        // squares.classList.add("pos-anime")
    }, 1100)
    setTimeout(() => {
        // squares.classList.remove("pos-anime")
    }, 2100)

    console.log(inner.classList);
})
// squares.forEach(sqaure => sqaure.addEventListener('mouseleave', () => {
//     sqaure.classList.remove("anime");
//     console.log(sqaure.classList);
// }))