const alertBanner = document.getElementById('alert');
alertBanner.innerHTML = `
    <div class="alert-banner">
        <div class="new_message">Alert: 3 new messages</div>
        <div class="close">x</div>
    </div>`;
   
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("close")) {
    alertBanner.style.display = "none"
    }
});
