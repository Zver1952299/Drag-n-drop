const item = document.querySelector('.item'),
      placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('drop', dragdrop);
})

function dragstart(e) {
    e.target.classList.add('hold');
    setTimeout(() => e.target.classList.add('hide'), 0);
}

function dragend(e) {
    placeholders.forEach(pl => {
        pl.classList.remove('hovered')
    }); 
    
    e.target.className = 'item';
}

function dragover(e) {
    e.preventDefault();
}

function dragenter() {
    placeholders.forEach(pl => {
        pl.classList.add('hovered')
    });
}

function dragdrop(e) {
    e.target.append(item);
}