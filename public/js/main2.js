document.addEventListener("DOMContentLoaded", function () {
    const btnDescription = document.querySelector('.btn-description');
    const btnAdditional = document.querySelector('.btn-additional');
    const btnReviews = document.querySelector('.btn-reviews');
    const Additional = document.querySelector('.additional');
    const Description = document.querySelector('.description');
    const Reviews = document.querySelector('.reviews');

    function toggleDisplay(tabToShow, btnTab) {
        [Description, Additional, Reviews].forEach(tab => {
            if (tab === tabToShow) {
                tab.classList.remove("hidden");
            } else {
                tab.classList.add("hidden");
            }
        });

        [btnDescription, btnAdditional, btnReviews].forEach(btn => {
            if (btn === btnTab) {
                btn.style.border = "1px solid #878787";
                btn.style.color = "black";
            } else {
                btn.style.border = "none";
                btn.style.color = "#878787";
            }
        });
    }

    btnDescription.addEventListener("click", function () {
        toggleDisplay(Description, btnDescription);
    });

    btnAdditional.addEventListener("click", function () {
        toggleDisplay(Additional, btnAdditional);
    });

    btnReviews.addEventListener("click", function () {
        toggleDisplay(Reviews, btnReviews);
    });
});




document.addEventListener("DOMContentLoaded", function () {
    // Đặt mã JavaScript ở đây
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
});