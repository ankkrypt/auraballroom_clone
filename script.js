const carousal_items = document.querySelectorAll(".carousal_item");
const btn_carousal_prev = document.querySelector(".btn_carousal_prev");
const btn_carousal_next = document.querySelector(".btn_carousal_next");


let carousal_items_index = 0;

btn_carousal_next.addEventListener("click",()=>{

    //remove the active class from all items
    carousal_items.forEach((item)=>{
        item.classList.remove("active");
    });

    //increment index or revert to 0
    if(carousal_items_index >= carousal_items.length-1){
        carousal_items_index = 0;
    } else {
        carousal_items_index++;
    }
    carousal_items[carousal_items_index].classList.add("active");
});

btn_carousal_prev.addEventListener("click",()=>{

    //remove the active class from all items
    carousal_items.forEach((item)=>{
        item.classList.remove("active");
    });

    //decrement index or revert to max index
    if (carousal_items_index <= 0) {
        carousal_items_index = carousal_items.length - 1;
    } else {
        carousal_items_index--; // Clean post-decrement
    }

    carousal_items[carousal_items_index].classList.add("active");
});


setInterval(()=>{

    //remove the active class from all items
    carousal_items.forEach((item)=>{
        item.classList.remove("active");
    });

    //decrement index or revert to max index
    if (carousal_items_index <= 0) {
        carousal_items_index = carousal_items.length - 1;
    } else {
        carousal_items_index--; // Clean post-decrement
    }

    carousal_items[carousal_items_index].classList.add("active");
},4000);