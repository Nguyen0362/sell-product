// sidebar

// menu sidebar
const buttonMenubar = document.querySelectorAll(".header .menubar");
if(buttonMenubar.length > 0){
    const sidebarContent = document.querySelector("header .sidebar-content-closer");
    const sidebar = document.querySelectorAll(".header .sidebar-content");
    const menuCloser = document.querySelector(".header .menu-closer");
    const sidebarMenu = document.querySelector(".header .mobile-menu__sidebar-menu");
    buttonMenubar.forEach((button) => {
        button.addEventListener("click", () => {
            sidebarContent.classList.add("active");
            sidebar.forEach((item) => {
                item.classList.add("active");
            });
            menuCloser.classList.add("active");
            sidebarMenu.classList.add("active");
        });
    })

    const buttonSideWidget = document.querySelectorAll(".header .close-side-widget");
    if(buttonSideWidget.length > 0){
        buttonSideWidget.forEach((button) => {
            button.addEventListener("click", () => {
                sidebarContent.classList.remove("active");
                sidebar.forEach((item) => {
                    item.classList.remove("active");
                });
                menuCloser.classList.remove("active");
                sidebarMenu.classList.remove("active");
            });
        })
    }

    sidebar.forEach((items) => {
        items.addEventListener("click", () => {
            sidebarContent.classList.remove("active");
            items.classList.remove("active");
            menuCloser.classList.remove("active");
            sidebarMenu.classList.remove("active");
        });
    });
}
// End menu sidebar

// cart sidebar
const buttonCart = document.querySelectorAll(".header .cart");
if(buttonCart.length > 0){
    const sidebarCartCloser = document.querySelector("header .sidebar-cart-closer");
    const sidebarCart = document.querySelector(".header .sidebar-cart"); 
    const closeCartButton = document.querySelector(".header .close-cart-button");

    buttonCart.forEach((button) => {
        button.addEventListener("click", () => {
            sidebarCartCloser.classList.add("active");
            sidebarCart.classList.add("active");
        })
    });
    
    sidebarCartCloser.addEventListener("click", () => {
        sidebarCartCloser.classList.remove("active");
        sidebarCart.classList.remove("active");
    })

    closeCartButton.addEventListener("click", () => {
        sidebarCartCloser.classList.remove("active");
        sidebarCart.classList.remove("active");
    })
}
// End cart sidebar

// End sidebar

// menu fixed
const header = document.querySelector(".header");
if(header){
    let sticyHeader = document.querySelector(".sticy-header"); // Chọn menu
    let scrollToTop = document.querySelector(".scrollToTop"); // Chọn menu
    let menuOffset = header.offsetHeight;
    window.addEventListener("resize", ()=>{
        menuOffset = header.offsetHeight;
        console.log(menuOffset);
    });
    
    window.addEventListener("scroll", function () {
        console.log(window.scrollY);
        if (window.scrollY > menuOffset) {
            sticyHeader.classList.add("active", "animate__animated", "animate__fadeInDown");
            scrollToTop.classList.add("bottom-[30px]", "translate-y-[0]");
        } else {
            sticyHeader.classList.remove("active", "animate__animated", "animate__fadeInDown");
            scrollToTop.classList.remove("bottom-[30px]", "translate-y-[0]");
        }
    });

    scrollToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    })
}
// End menu fixed

// toggle menu
const menuArrow = document.querySelectorAll(".header .mobile-menu__sidebar-menu .pages-dropdown-menu .menuarrow");

if (menuArrow.length > 0) {
    menuArrow.forEach((button) => {
        button.addEventListener("click", async () => {
            button.classList.toggle("rotate-90");
            let dropdown = button.parentElement.nextElementSibling;
            if (dropdown) {
                if (dropdown.style.display === "block") {
                    dropdown.style.maxHeight = dropdown.scrollHeight + "px"; 
                    setTimeout(() => {
                        dropdown.style.maxHeight = "0";
                        dropdown.style.opacity = "0";
                    }, 10);

                    setTimeout(() => {
                        dropdown.style.display = "none";
                    }, 300);
                } else {
                    dropdown.style.display = "block";
                    dropdown.style.opacity = "0";
                    dropdown.style.maxHeight = "0";

                    setTimeout(() => {
                        let height = dropdown.scrollHeight + "px";
                        dropdown.style.maxHeight = height;
                        dropdown.style.opacity = "1";
                    }, 10);
                }
            }
        });
    });
}
// End toggle menu

// swiper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".bestSellerSwiper", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
        576: {
          slidesPerView: 2, // Khi màn hình >= 640px hiển thị 2 slide
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2, // Khi màn hình >= 768px hiển thị 3 slide
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
    },
});

document.querySelector(".swiper").addEventListener("mouseenter", function () {
    swiper.autoplay.stop();
});

// Tiếp tục autoplay khi rời chuột
document.querySelector(".swiper").addEventListener("mouseleave", function () {
    swiper.autoplay.start();
});
// End swiper