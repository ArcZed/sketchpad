const canvas = document.querySelector('body');
const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', (e) =>{
    createSquares();
});
function createSquares(){
    for(let i=0; i<16; i++){
        for(let u=0; u<16; u++){
            let squares = document.createElement('div');
            squares.classList.add('squares');
            container.appendChild(squares);
            squares.addEventListener('mouseover', (e)=>{
            squares.style.backgroundColor = 'blue';
            });
        }
    }
}
