let taskIdCounter = 2;

function add_task(button){
    const task = button.parentNode;
    const clone = task.cloneNode(true);

    clone.id = 'task-' + taskIdCounter;
    taskIdCounter++;

    // Réinitialiser les checkboxes
    const checkboxes = clone.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.id = 'check-' + taskIdCounter;
        checkbox.checked = false; // Réinitialiser la checkbox
    });

    const textareas = clone.querySelectorAll('textarea');
    textareas.forEach((textarea) => {
        textarea.value = ''; // Réinitialiser le texte du textarea
    });
    
    // Mettre à jour les attributs onclick des boutons
    const buttons = clone.querySelectorAll('i');
    buttons.forEach((button) => {
        if (button.classList.contains('fa-plus')) {
            button.setAttribute('onclick', 'add_task(this)');
        } else if (button.classList.contains('fa-minus')) {
            button.setAttribute('onclick', 'remove_task(this)');
        } else if (button.type == "checkbox"){
            button.id = 'check-' + taskIdCounter;
            button.checked = false; // Réinitialiser la checkbox
        }
    });

    task.parentNode.appendChild(clone);
}

function checked_task(taskElement) {
    
}

function remove_task(button){
    const task = button.parentNode;
    task.parentNode.removeChild(task);
    taskIdCounter--;
}
