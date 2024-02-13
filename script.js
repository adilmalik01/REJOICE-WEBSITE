




const scrollAnimation = () => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}

const Loader = () => {
    let tl = gsap.timeline()
    tl.from("#loader h3", {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
    })
    tl.to("#loader h3", {
        x: -40,
        opacity: 0,
        duration: 1,
        stagger: -0.2,
    })
    tl.to("#loader", {
        opacity: 0
    })
    tl.to("#loader", {
        display: 'none'
    })
}


const swiperJsCode = () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            duration: 600,
            disableOnInteraction: false,
        }
    });
}

const CursorFuntion = () => {
    let page1Content = document.querySelector(".page1-content")
    let page1Cursor = document.querySelector("#cursor")


    page1Content.addEventListener("mousemove", (event) => {
        gsap.to(page1Cursor, {
            x: event.x,
            y: event.y
        })
    })

    page1Content.addEventListener("mouseenter", (e) => {
        gsap.to(page1Cursor, {
            scale: 1,
            opacity: 1,
            display: 'flex'
        })
    })

    page1Content.addEventListener("mouseleave", (e) => {
        gsap.to(page1Cursor, {
            scale: 0,
            opacity: 0.4,
            display: 'none'
        })
    })



}




// const page6Funtion = () => {
//     let page6 = document.querySelector("#page6")
//     // let page6Cursor = document.querySelector(".cursorpage6")

//     page6.addEventListener("mousemove", (event) => {
//         gsap.to(".cursorpage6", {
//             x: event.x,
//             y: event.y,
//             position: 'fixed'
//         })
//     })

//     page6.addEventListener("mouseenter", (e) => {
//         gsap.to(".cursorpage6", {
//             scale: 1,
//             opacity: 1,
//             display: 'flex'
//         })
//     })
//     page6.addEventListener("mouseleave", (e) => {
//         gsap.to(".cursorpage6", {
//             scale: 0,
//             opacity: 0.4,
//             display: 'flex'
//         })
//     })


// }



Loader();
swiperJsCode();
CursorFuntion();
scrollAnimation()
// page6Funtion();











