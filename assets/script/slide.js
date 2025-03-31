const slide = [
    ["assets/images/images-slide/palmiers.webp", "Palmiers au pied d’un immeuble"],
    ["assets/images/images-slide/drapeau.webp", "Drapeau en silhouette au coucher du soleil"],
    ["assets/images/images-slide/rocher-vagues.webp", "Roche noire frappée par les vagues"],
];

function changeSlide(sens) {
    const img = document.querySelector("img.img-slider");
    if (img) {
        const imgSrc = img.getAttribute('src');
        for (let el of slide) {
            const inArray = el.includes(imgSrc);
            if (inArray) {
                let num = slide.indexOf(el);
                num += sens;
                if (num < 0) {
                    num = slide.length - 1;
                } else if (num == slide.length) {
                    num = 0;
                }
                img.setAttribute('src', slide[num][0]);
                img.setAttribute('alt', slide[num][1]);
            }
        }
    }
}

// const slide = [
//     "assets/images/images-slide/palmiers.webp",
//     "assets/images/images-slide/drapeau.webp",
//     "assets/images/images-slide/rocher-vagues.webp",
//     // ["assets/images/images-slide/palmiers.webp", "Palmiers au pied d’un immeuble"],
//     // ["assets/images/images-slide/drapeau.webp", "Drapeau en silhouette au coucher du soleil"],
//     // ["assets/images/images-slide/rocher-vagues.webp", "Roche noire frappée par les vagues"],
// ];

// function changeSlide(sens) {
//     const img = document.querySelector("img.img-slider");
//     if (img) {
//     const imgSrc = img.getAttribute('src');
//         const inArray = slide.includes(imgSrc);
//         if (inArray) {
//             let num = slide.indexOf(imgSrc);
//             num += sens;
//             if (num < 0) {
//                 num = slide.length - 1;
//             } else if (num == slide.length) {
//                 num = 0;
//             }
//             img.setAttribute('src', slide[num]/*[0]*/);
//             // img.setAttribute('alt', slide[num][1]);
//         }
//     }
// }


setInterval(changeSlide, 5000, 1);
