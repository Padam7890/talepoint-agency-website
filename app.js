const animateSets = document.querySelectorAll(".animate");
const hamburger = document.querySelector("#hamburger");
const toTop = document.querySelector(".to-top");

function animateText(txts) {
    const txtsLen = txts.length;
    let index = 0;

    const textInTimer = 2900;
    const textOutTimer = 2800;

    function animateParagraphs() {
        for (let i = 0; i < txtsLen; i++) {
            txts[i].classList.remove("text-in", "text-out");
        }

        txts[index].classList.add("text-in");

        setTimeout(function () {
            txts[index].classList.add("text-out");
        }, textOutTimer);

        setTimeout(function () {
            if (index == txtsLen - 1) {
                index = 0;
            } else {
                index++;
            }
            animateParagraphs();
        }, textInTimer);
    }

    animateParagraphs();
}


hamburger.addEventListener('click',()=>{
    const navMenu = document.querySelector("#nav-menu");
    navMenu.classList.toggle("active");
   


})

document.addEventListener('DOMContentLoaded', function () {
    animateSets.forEach((animateSet) => {
        const txts = animateSet.children;
        animateText(txts);
    });

    let copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);


    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function (question) {
        question.addEventListener('click', function () {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            const toggleIcon = this.querySelector('.toggle-icon');

            if (this.classList.contains('active')) {
                answer.style.display = 'block';
                toggleIcon.textContent = "-";

            } else {
                answer.style.display = 'none';
                toggleIcon.textContent = "+";
            }
        });
    });

  
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })
