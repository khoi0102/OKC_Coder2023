
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    const userAvatar = document.getElementById('userAvatar');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        const email = prompt('Please enter your email:');
        if (email) { 
            const password = prompt('Please enter your password:');
            if (password) { 
                
                const initials = email.charAt(0).toUpperCase(); 
                userAvatar.innerText = initials; // 
                userAvatar.style.display = 'block'; 
                loginButton.style.display = 'none'; 
            }
        }
    });
});

