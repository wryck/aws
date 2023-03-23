const ec2 = document.querySelector('.aws')
const squares = document.querySelectorAll('.square')
const infoDisplay = document.querySelector('#info')

ec2.addEventListener('dragstart', dragStart)
ec2.addEventListener('drag', dragging)

squares.forEach(square => {
    square.addEventListener('dragover', dragOver)
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragleave', dragLeave)
    square.addEventListener('drop', dragDrop)
    square.addEventListener('dragend', dragEnd)
})

let beingDragged

function dragStart(e) {
    beingDragged = e.target
}

function dragDrop(e) {
    e.target.append(beingDragged)
    e.target.classList.remove('highlight')
}

function dragOver(e) {
    e.preventDefault()
}

function dragging() {
    infoDisplay.textContent = beingDragged.id
}

function dragEnter(e) {
    e.target.classList.add('highlight')
}

function dragLeave(e) {
    e.target.classList.remove('highlight')
}

function dragEnd(e) {
    e.target.classList.add('target')
    setTimeout(() => e.target.classList.remove('target'), 100)
    infoDisplay.textContent = ''

}