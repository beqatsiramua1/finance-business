const growthNum = document.querySelectorAll(".growth-num");
const businessGrowthContainer = document.querySelector(".business-growth");
let interval = 5000;

let CounterObserver = new IntersectionObserver((entries, observer)=> {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    growthNum.forEach(num=> {
        let startValue = 0;
        const endValue = parseInt(num.getAttribute("data-val"));
        const duration = Math.floor(interval / endValue);
        const counter = setInterval(()=> {
            startValue += 1;
            num.textContent = startValue;
            if (startValue === endValue) {
                clearInterval(counter);
            }
        }, duration)
    })
    observer.unobserve(businessGrowthContainer);

    console.log(entry);
    },
    {
        root: null,
        threshold: 0.4,
    }
);

CounterObserver.observe(businessGrowthContainer);


const hamburger = document.querySelector(".hamburger-icon");
const navbar = document.querySelector(".navbar-link");


// ააქტიურებს ჰანბურგერ აიქონს
let counterNum = 1;
hamburger.addEventListener("click", function() {
    counterNum++;
    if (counterNum % 2 === 0) {
        navbar.style.display = 'block';
        document.querySelector("body").style.overflowX = 'hidden';
    } else {
        navbar.style.display = 'none';
    }
})