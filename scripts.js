const canvas = document.querySelector('body');
const container = document.querySelector('.container');

let numSquares = 0;

let red = 0;
let green = 0;
let blue = 0;
let color = 


document.addEventListener('DOMContentLoaded', (e) =>{
    createSquares();
    createButton();
});

function getRandomRGB(){
    red = Math.floor(Math.random()*256);
    green = Math.floor(Math.random()*256);
    blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`
}

function createSquares(size = 16){
    for(let i=0; i<size; i++){
        let column = document.createElement('div');
        column.classList.add('column')
        container.appendChild(column);
        for(let u=0; u<size; u++){
            let squares = document.createElement('div');
            squares.classList.add('squares');
            column.appendChild(squares);
            squares.addEventListener('mouseover', (e)=>{
                let opacity = window.getComputedStyle(squares).getPropertyValue('opacity');
                rgb = getRandomRGB();
                squares.style.backgroundColor = rgb;
                squares.style.opacity = `${opacity - 0.1}`;
                console.log(opacity)
            });
        }
    }
}

function createButton(){
    let btn = document.createElement('button');
    canvas.appendChild(btn);
    btn.textContent = 'Reset';
    btn.addEventListener('click', (e)=>{
        numSquares = prompt('Choose number of squares per side from 1 to 100');
        if(numSquares <= 100){
            if(numSquares == 0){
                numSquares = 16;
            }
            clearCanvas();
            createSquares(numSquares);
        }
        else if(numSquares > 100){
            alert('TOO MUCHHH');
        }
    })

}

function clearCanvas(){
    container.innerHTML = '';
}