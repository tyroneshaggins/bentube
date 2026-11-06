function showVideo(id, button) {

    document.querySelectorAll('.video-pane').forEach(pane => {
        pane.classList.remove('active');
    });

    document.querySelectorAll('.video-tabs button').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
    button.classList.add('active');
}