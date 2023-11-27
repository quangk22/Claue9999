const showMenuButton = document.querySelector("#show-menu");
const menuShow = document.querySelector("#menu");
const header2 = document.querySelector('.header2');

// Hàm để hiển thị hoặc ẩn menu
function toggleMenu() {
    if (menuShow) { // Kiểm tra xem menuShow có tồn tại không
        menuShow.classList.toggle("hidden");
    }
}

// Sự kiện khi click vào show-menu
if (showMenuButton) { // Kiểm tra xem showMenuButton có tồn tại không
    showMenuButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Ngăn chặn sự kiện click xung quanh lan truyền vào menu
        toggleMenu();
    });
}

// Sự kiện khi click bất kỳ nơi nào trên tài liệu (để ẩn menu)
document.addEventListener("click", function () {
    if (menuShow && !menuShow.classList.contains("hidden")) { // Kiểm tra menuShow có tồn tại và không ẩn
        toggleMenu();
    }
});

// Ngăn chặn sự kiện click trên menu lan truyền lên tài liệu
if (menuShow) { // Kiểm tra xem menuShow có tồn tại không
    menuShow.addEventListener("click", function (event) {
        event.stopPropagation();
    });
}

// phần này cho menu
window.addEventListener('scroll', function () {
    if (header2 && window.scrollY > 0) { // Kiểm tra header2 có tồn tại và xử lý khi cuộn trang
        header2.classList.add('fixed', 'top-0', 'left-0', 'right-0');
    } else if (header2) { // Kiểm tra header2 có tồn tại và xử lý khi không cuộn
        header2.classList.remove('fixed', 'top-0', 'left-0', 'right-0');
    }
});
// sản phẩm 

// end sản phẩm
// 
// Lấy tham chiếu đến phần tử <input> và các nút
const numberInput = document.querySelector('.customNumberInput');
const decreaseButton = document.querySelector('.decreaseButton');
const increaseButton = document.querySelector('.increaseButton');

let currentValue = 1; // Giá trị ban đầu

// Xử lý sự kiện khi nút "-" được nhấn
if (decreaseButton) {
    decreaseButton.addEventListener('click', function () {
        if (currentValue) {
            currentValue--;
            numberInput.value = currentValue;
        }
        
    });
}

// Xử lý sự kiện khi nút "+" được nhấn
if (increaseButton) {
    increaseButton.addEventListener('click', function () {
        currentValue++;
        numberInput.value = currentValue;
        console.log("đã click");
    });
}
// 

// 
// sliderSP

document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    if (nextButton) {
        nextButton.onclick = function () {
            let lists = document.querySelectorAll('.card');
            document.getElementById('slide').appendChild(lists[0]);
        }
    }
    if (prevButton) {
        prevButton.onclick = function () {
            let lists = document.querySelectorAll('.card');
            document.getElementById('slide').prepend(lists[lists.length - 1]);
        }
    }
})
// cart
const btnCart = document.getElementById('show_cart');
const showCart = document.getElementById('cart_mini');
const cart_mini = document.getElementById('cart_mini2');
const closeCart = document.getElementById('close_cart');

if(btnCart){
    btnCart.addEventListener('click', function () {
        showCart.classList.remove('hidden');
    
        // Sử dụng setTimeout để thiết lập transition sau khi element đã được hiển thị
        setTimeout(function () {
            cart_mini.style.transform = 'translateX(0)';
            cart_mini.style.transition = 'transform 500ms ease-in-out';
        }, 0);
    });
}
if(closeCart){
    closeCart.addEventListener('click', function () {
        cart_mini.style.transform = 'translateX(320px)';
        cart_mini.style.transition = 'transform 500ms ease-in';
    
        // Sử dụng setTimeout để ẩn element sau khi transition hoàn thành
        setTimeout(function () {
            showCart.classList.add('hidden');
        }, 500);
    });
}

// search
const openFormButton = document.getElementById('openForm');
const closeFormButton = document.getElementById('closeForm');
const myForm = document.getElementById('myForm');
if(openFormButton){

    openFormButton.addEventListener('click', function () {
        myForm.classList.remove('hidden');
    })
}
if(closeFormButton){

    closeFormButton.addEventListener('click', function () {
        myForm.classList.add('hidden');
    })
}
// chi tiết SP

// 
/**Slideshow CTSP */
// Đặt biến slideIndex để theo dõi slide hiện tại
// Hàm hiển thị slide
let slideIndex2 = 1;
let startX = null;

function showSlides2(n) {
  const slides = document.querySelectorAll(".slideshow-image");

  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slides.length > 0) {
    slides[slideIndex2 - 1].style.display = "block";
  }
}

function prevSlide2() {
  showSlides2(slideIndex2 -= 1);
}

function nextSlide2() {
  showSlides2(slideIndex2 += 1);
}

function touchStart(event) {
  startX = event.touches[0].clientX;
}

function touchEnd(event) {
  if (startX === null) {
    return;
  }

  const endX = event.changedTouches[0].clientX;
  const deltaX = startX - endX;

  if (deltaX > 50) {
    nextSlide2();
  } else if (deltaX < -50) {
    prevSlide2();
  }

  startX = null;
}
showSlides2(slideIndex2);
// Hàm để chuyển đến slide trước
function prevSlide() {
    showSlides(slideIndex2 -= 1);
}

// Hàm để chuyển đến slide tiếp theo
function nextSlide() {
    showSlides(slideIndex2 += 1);
}

// Hiển thị slide đầu tiên khi tải trang
// showSlides(slideIndex2);

// check Out
const btn_show_login = document.getElementById("show-formLogin");
const form_Login = document.getElementById("form-login");

if (btn_show_login) {
    btn_show_login.addEventListener('click', function(){
        form_Login.classList.toggle("hidden");
    });
}
const btn_show_code = document.getElementById("show-fromCode");
const form_code = document.getElementById("form-code");
if (btn_show_code) {
    btn_show_code.addEventListener('click', function(){
        form_code.classList.toggle("hidden");
    });
}
// meu mobi
const btn_mobi = document.getElementById("show-mobi");
const menu_mobi = document.getElementById("menu-mobi");
const close_mobi = document.getElementById("close_mobi");
const mobi = document.getElementById("mobi");
if(btn_mobi){

    btn_mobi.addEventListener('click', function(){
        menu_mobi.classList.remove('hidden');
        setTimeout(function () {
            mobi.style.transform = 'translateX(0)';
            mobi.style.transition = 'transform 500ms ease-in-out';
        }, 0);
    
    });
}
if (close_mobi) {
    close_mobi.addEventListener('click', function(){
        mobi.style.transform = 'translateX(-320px)';
         mobi.style.transition = 'transform 500ms ease-in';

    // Sử dụng setTimeout để ẩn element sau khi transition hoàn thành
    setTimeout(function () {
        menu_mobi.classList.add('hidden');
    }, 500);
    });
}

