function logout() {
    $.removeCookie('mytoken');
    alert('로그아웃!')
    window.location.href = '/login'
}

function onTop(){
    $("html, body").animate({scrollTop: 0}, "slow");
    return false;
}

function uploadPost(){
    let doc_user_id = $('#post_userId').val();
    let doc_post_title = $('#post_title').val();
    let doc_post_data = $('#post_soundCloudData').val();
    let doc_post_message = $('#post_message').val();
    let doc_post_mood = $('#post_selectMood').val();
    let doc_post_date = new Date();

    console.log(doc_user_id, doc_post_title, doc_post_data, doc_post_message, doc_post_mood, doc_post_date);
}

document.addEventListener('DOMContentLoaded', () => {
// Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

// Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

// Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

// Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});