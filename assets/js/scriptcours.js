document.querySelectorAll('.signup-button').forEach(button => {
    button.addEventListener('click', function() {
        const parent = this.closest('.course');
        const instrument = parent.querySelector('.instrument-dropdown').value;
        const level = parent.querySelector('.level-dropdown').value;

        document.getElementById('selected-course').value = `${instrument} - ${level}`;
        document.getElementById('signup-form').style.display = 'block';
    });
});
