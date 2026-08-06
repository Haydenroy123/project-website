```javascript id="8v2m0m"
// FreshNest Cleaning Website Interactions


// Smooth scroll for buttons

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", () => {

        if(button.innerText.includes("Quote") || button.innerText.includes("Book")) {

            document.querySelector("#contact").scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});



// Scroll reveal animation

const sections = document.querySelectorAll("section, .card, .review, .features div");


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .15
});


sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});




// Animated numbers

const numbers = document.querySelectorAll(".features h3");


numbers.forEach(number => {


    let target = parseInt(number.innerText);

    let count = 0;


    let interval = setInterval(()=>{


        count += Math.ceil(target / 50);


        if(count >= target){

            count = target;

            clearInterval(interval);

        }


        if(number.innerText.includes("%")){

            number.innerText = count + "%";

        }

        else if(number.innerText.includes("Years")){

            number.innerText = count + " Years";

        }

        else{

            number.innerText = count + "+";

        }


    },40);


});




// Fake quote calculator

const quoteButton = document.querySelector(".quote button");


quoteButton.addEventListener("click", ()=>{


    let size = prompt(
        "What size home needs cleaning?\n\n1 - Apartment\n2 - Small Home\n3 - Large Home"
    );


    let price;


    if(size === "1"){

        price = "$80-$120";

    }

    else if(size === "2"){

        price = "$120-$200";

    }

    else if(size === "3"){

        price = "$200-$350";

    }

    else {

        price = "Contact us for pricing";

    }


    alert(
        "Your estimated cleaning price is: " + price
    );


});




// Add loading effect

window.addEventListener("load",()=>{

    document.body.style.opacity = "1";

});
```
