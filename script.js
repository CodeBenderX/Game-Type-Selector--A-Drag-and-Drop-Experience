const draggablePicture = document.getElementById('draggablePicture');
draggablePicture.draggable = true
const dropBoxes = document.querySelectorAll('.drop-box');

let previousBox = null; // To keep track of the previous drop box

draggablePicture.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', e.target.id);
});

dropBoxes.forEach(box => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
        box.classList.add("hoverEffect");
    });

    box.addEventListener('dragleave', (e) => {
        e.preventDefault();
        box.classList.remove("hoverEffect");
    });

    box.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text');
        const draggableElement = document.getElementById(data);

        //append the draggable image to box
        box.appendChild(draggableElement);
        
        if (e.target.classList.contains('drop-box')) {
            e.target.appendChild(draggableElement);
        }
        previousBox = box;
        box.classList.remove("hoverEffect");

        //this will add space to the top all the boxes once the draggable image was dropped in any of the boxes.
        dropBoxes.forEach(box => {
            box.classList.add('with-space');
        });
    });
});

window.addEventListener('load', function() {
    const welcomePopup = document.getElementById('welcome-popup');
    
    //Hide the popup after 3.5 seconds
    setTimeout(function() {
        welcomePopup.classList.add('hidden');
    }, 3500);
});