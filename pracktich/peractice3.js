

function changeFontStyle(e){
    const textArea = document.querySelector('#text-area')
    if(e.target.id === 'text-bold'){
        e.target.classList.toggle('active');
        textArea.classList.toggle('text-bold');
    }
    if(e.target.id === 'text-italic'){
        e.target.classList.toggle('active');
        textArea.classList.toggle('italic');
    }
    if(e.target.id === 'text-underline'){
        e.target.classList.toggle('active');
        textArea.classList.toggle('underline');
    }
    if(e.target.id === 'text-left'){
        e.target.classList.toggle('active');
        textArea.classList.toggle('text-left');
    }
    if(e.target.id === 'text-center'){
        e.target.classList.toggle('active');
        textArea.classList.toggle('text-center');
    }
    if(e.target.id === 'text-right'){
        e.target.classList.toggle('active');
        textArea.classList.toggle('text-right');
    }
    if(e.target.id === 'text-aline'){
        e.target.classList.toggle('active');
        textArea.classList.toggle('text-aline');
    }
    // if(e.target.id === 'text-center'){
    //     e.target.classList.toggle('active');
    //     textArea.classList.toggle('text-center');
    // }
    // if(e.target.id === 'text-right'){
    //     e.target.classList.toggle('active');
    //     textArea.classList.toggle('text-right');
    // }
}

const buttonAction = document.querySelector('#action');
buttonAction.addEventListener('click', changeFontStyle)




