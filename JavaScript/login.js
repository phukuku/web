
         var input = document.querySelector('.pass');
         var show = document.querySelector('.show');
         show.addEventListener('click', active);
         function active(){
           if(input.type === "password"){
             input.type = "text";
             show.style.color = "#1DA1F2";
             show.textContent = "Ẩn";
              show.style.color = "red";
           }else{
             input.type = "password";
             show.textContent = "Hiện";
             show.style.color = "red";
           }
         }
 
                const togglePassword = document.querySelector('#togglePassword');
                const password = document.querySelector('#password');
                togglePassword.addEventListener('click', function (e) {
                const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                password.setAttribute('type', type);
                this.classList.toggle('fa-eye-slash');
});
          