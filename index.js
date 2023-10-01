// LogIn form javascript

let input = document.querySelectorAll("input");
        let label = document.querySelectorAll("label");
        let submit = document.getElementById("btn_submit");
        let a = input.length;
        for (let i = 0; i < a; i++) {
            function slide() {
                label[i].classList.remove("slider_1");
                label[i].style.transition = "transform ease-in-out 0.4s";
                label[i].classList.add("slider_2")
                input[i].style.background = '#e8f0fe';
            }
            function undo() {
                if (input[i].value == "") {
                    label[i].classList.add("slider_1")
                    label[i].classList.remove("slider_2")
                    input[i].style.background = '';
                }   
            }
            input[i].addEventListener("focusin", slide);
            input[i].addEventListener("focusout", undo);
            input[i].addEventListener("keydown", (e) => {
                if(e.key==="Enter"){
                e.preventDefault();
                    if(i + 1 < a){
                    input[i+1].focus();
                }
                else{
                    submit.focus();
                }
                }
            });
        }