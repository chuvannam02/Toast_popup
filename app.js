
function toast({
    title = '',
    message = '', 
    type = '', 
    duration = 3000}) {
        const main = document.getElementById('toast');
        if (main) {
            const toast = document.createElement('div');

            // Auto Remove toast
            const autoRemove =setTimeout(function() {
                main.removeChild(toast);
            }, duration + 1000);

            // Remove toast when clicked
            toast.onclick = function(e) {
                if (e.target.closest('.toast__close')) {
                    main.removeChild(toast);
                    clearTimeout(autoRemove);
                }
            }
            const icons = {
                success: 'fa-solid fa-circle-check',
                error: 'fa-solid fa-circle-exclamation'
            };
            // toFixed(2) để lấy 2 chữ số thập phân sau dấu phẩy
            const delay = (duration / 100).toFixed(2);
            const icon = icons[type];
            toast.classList.add('toast', `toast--${type}`);
            toast.style.animation = 
            `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards;
            // /* 3s sau mới mờ đi, thời gian mờ = 1s */
            `

            toast.innerHTML = `
                    <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h2 class="toast__header">${title}</h2>
                    <p class="toast__content">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            `;
            main.appendChild(toast);
            
        } else {

        }

    } {
};

function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Kết nối tới máy chủ thành công',
        type: 'success',
        duration:5000
    })
}

function showErrorToast() {
    toast({
        title: 'Error',
        message: 'Xảy ra lỗi trong quá trình đăng nhập',
        type: 'error',
        duration:5000
    })
}