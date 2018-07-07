document.addEventListener('DOMContentLoaded', function() {
    notepadForm = document.querySelector('#notepadForm');
    notepadList = document.querySelector('#notepadList');

    //blok nowej notatki
    notepadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const textarea = this.querySelector('textarea');
        if (textarea.value !== '') {
            addTask(textarea.value);
            textarea.value = '';
        }
    });
    // blok dodanych notatek
    notepadList.addEventListener('click', function(e) {
        if (e.target.closest('.notepad-element-delete') !== null) {
            e.target.closest('.notepad-element').remove();
        }
    });

});

function addTask(text) {

    const notepad = document.createElement('div');
    notepad.classList.add('notepad-element');

    const notepadBar = document.createElement('div');
    notepadBar.classList.add('notepad-element-bar');

    const notepadDelete = document.createElement('button');
    notepadDelete.classList.add('button');
    notepadDelete.innerHTML = '<i class="fas fa-trash"></i>';
    notepadDelete.classList.add('notepad-element-delete');

    notepadBar.appendChild(notepadDelete);

    const notepadText = document.createElement('div');
    notepadText.classList.add('notepad-element-text');
    notepadText.innerText = text;

    notepad.appendChild(notepadBar);
    notepad.appendChild(notepadText);

    notepadList.append(notepad);
}
