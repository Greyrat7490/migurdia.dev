const sensitivity = 0.008
const box = document.querySelector('.rotatable')

let mouseX = window.innerWidth / 2
let mouseY = window.innerHeight / 2

let request_frame = true

function update() {
    const rotateY = (mouseX - window.innerWidth / 2) * sensitivity
    const rotateX = -(mouseY - window.innerHeight / 2) * sensitivity
    box.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`

    request_frame = true
}

function onMouseMove(e) {
    mouseX = e.clientX
    mouseY = e.clientY

    if (request_frame) {
        request_frame = false
        requestAnimationFrame(update)
    }
}

document.addEventListener('mousemove', onMouseMove);
