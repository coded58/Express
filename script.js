const imageBox = document.querySelector('.display-img1');
// const offer1 = document.querySelector('.offer1');
// const offer2 = document.querySelector('.offer2');
// const offer3 = document.querySelector('.offer3');
const offers = document.querySelectorAll('.offer');


function handleClick() {
    const handleSrc = this.dataset['src'];
    imageBox.classList.add('come');
    imageBox.src = handleSrc;
}

offers.forEach(offer => {
    offer.addEventListener('click', handleClick)
});
imageBox.addEventListener('animationend', () => {
    imageBox.classList.remove('come')
})
// function handleClick() {
//     // if (imageBox.classList.contains("come")) {
//     //     imageBox.classList.remove("come");
//     //     // imageBox.classList.add("go");
//     //     imageBox.src = './image-folder/show1-img.png'
//     // } else if (imageBox.classList.contains("go")) {
//     //     // imageBox.classList.remove("go");
//     //     imageBox.classList.add("come");
//     // }
//     // else {
//     imageBox.src = './image-folder/show1-img.png'
//     if (imageBox.classList.contains("come")) {
//         imageBox.classList.remove("come");
//     } else {
//         imageBox.classList.add("come");
//     }
// }

// function handleClick2() {
//     //if (imageBox.classList.c ontains("come")) {
//     //     imageBox.classList.remove("come");
//     //     // imageBox.classList.add("go");
//     //     imageBox.src = './image-folder/show1-img2.png'
//     // } else if (imageBox.classList.contains("go")) {
//     //     // imageBox.classList.remove("go");
//     //     imageBox.classList.add("come");
//     // }
//     // else {
//     imageBox.src = './image-folder/show1-img2.png'
//     imageBox.classList.add('come');
//     // }
// }

// function handleClick3() {
//     // if (imageBox.classList.contains("come")) {
//     //     imageBox.classList.remove("come");
//     //     // imageBox.classList.add("go");
//     //     imageBox.src = './image-folder/show1-img3.png'
//     // } else if (imageBox.classList.contains("go")) {
//     //     // imageBox.classList.remove("go");
//     //     imageBox.classList.add("come");
//     // }
//     // else {
//     imageBox.src = './image-folder/show1-img3.png'
//     imageBox.classList.add('come');
// }
// // }
// offer1.addEventListener('click', handleClick);
// offer2.addEventListener('click', handleClick2);
// offer3.addEventListener('click', handleClick3);