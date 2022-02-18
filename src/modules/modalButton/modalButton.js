(function() {
    window.addEventListener("DOMContentLoaded", function() {
        function handleOpenModal(buttonId) {
            const modal = document.getElementById(buttonId)?.lastChild;
        
            return (event) => {
                modal.style.display = modal.style.display === "block" ? "none" : "block";   
                event.stopImmediatePropagation();             
            }
        }

        [...document.getElementsByClassName('modal-button')].forEach(button => {
            button.addEventListener('click', handleOpenModal(button.id))
        });
    })
})()