const ec2 = document.querySelector('.aws')
const squares = document.querySelectorAll('.square')
const infoDisplay = document.querySelector('#info')

/*ec2.addEventListener('dragstart',dragStart)*/
ec2.addEventListener('drag',dragging)
ec2.addEventListener('dragstart',arrastaImagem)

squares.forEach(square => {
    square.addEventListener('dragover', dragOver)
    square.addEventListener('dragenter',dragEnter)
    square.addEventListener('dragleave',dragLeave)
    square.addEventListener('drop', dragDrop)
    square.addEventListener('dragend', dragEnd)
    square.addEventListener('drop', soltaImagem)
    square.addEventListener('dragover', permiteDrop)
})

let beingDragged

function dragStart(e){
    beingDragged = e.target
}
function dragDrop(e){
    e.target.append(beingDragged)
    //e.target.appendChild(beingDragged)
    e.target.classList.remove('highlight')   
}

function dragOver(e){
    e.preventDefault()
}

function dragging(){
    infoDisplay.textContent = beingDragged.id   
}
function dragEnter(e){
    e.target.classList.add('highlight')  
}

function dragLeave(e){
    e.target.classList.remove('highlight')
}
function dragEnd(e){
    e.target.classList.add('target')
    setTimeout(() => e.target.classList.remove('target'), 100)    
}
    
function soltaImagem(e) {
    e.preventDefault();
    var divDestino = e.target;
    var imagem = document.getElementById("EC2");
    var divDestinoId = divDestino.id;
    var imagemFoiSoltaNaDivCerta = (divDestinoId === "c" || divDestinoId === "e");
    
    divDestino.appendChild(imagem);
    if (imagemFoiSoltaNaDivCerta) {
      divDestino.appendChild(imagem);
      infoDisplay.textContent = 'Certo'
    } else {
        infoDisplay.textContent = 'Errado'
    }
    
  }
  
  function permiteDrop(e) {
    e.preventDefault();
  }
  
  function arrastaImagem(e) {
    e.dataTransfer.setData("text", e.target.id);
    beingDragged = e.target
    infoDisplay.textContent = beingDragged.id   
  }