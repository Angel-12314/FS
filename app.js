var body = document.querySelector('body')
//var button = document.querySelector('button') 
var input = document.querySelector('input')
var list = document.querySelector('ul')
var Add = document.querySelector('#Add') 
var Mode = document.querySelector('#Mode') 
var chores = []


const mode = (event) => {
    body.classList.toggle('dark')
}

var deleteItem = (value) =>{
    const index = chores.indexOf(value)
    console.log(index)
    chores.splice(index,1)
    console.log(chores)
    
}

const callbackfunc = (event) =>{
    const inputValue = input.value
    //console.log(inputValue)
        if (chores.includes(inputValue)) {
            console.log('already exists')
        }
        else {
            chores.push(inputValue)
            console.log(event.target)
            console.log(input.value)
            const element = document.createElement('li')
            const textNode = document.createTextNode(inputValue)
            element.appendChild(textNode)
            list.appendChild(element)
            element.addEventListener('click', (e) => {
                deleteItem(e.target.remove())
            })
        }
    
}

Add.addEventListener('click',callbackfunc)
Mode.addEventListener('click',mode)

