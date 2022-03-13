
let cont = document.querySelector(".container");

for (let i = 1; i <= 9; i++) {
    let elem = document.createElement("div");
    elem.className = "elem";   

    let rate_bold = "";
    let rate_pale = "";
    let j = cats[i-1].rate;
    while (j--) {
        rate_bold += "<i class=\"fa-solid fa-paw\"></i>";
    }
    let k = 10 - cats[i-1].rate;
    while (k--) {
        rate_pale += "<i class=\"fa-solid fa-paw null\"></i>";
    }
    let age_word = "";
    if (cats[i-1].age === 1) {age_word = "год";}  else {
        if (cats[i-1].age <= 5) {age_word = "года"} else {age_word = "лет"}
    }
    elem.innerHTML = "<a data-fancybox href=\"#hidden" + i + "\"><div class=\"card\"><div class=\"card__foto\" style=\"background-image: url(" + cats[i-1].img_link + ")\"></div><h2 class=\"card__name\">" + cats[i-1].name + "</h2><div class=\"cat__rate\">" + rate_bold + rate_pale + "</div></div></a><div style=\"display: none; width: 700px; border-radius: 10px;\" id=\"hidden" + i + "\"><div class=\"fancy_card\"> <div class=\"fancy__foto\" style=\"background-image:url(" + cats[i-1].img_link + ")\"></div><div class=\"fancy_info\"><h1 class=\"fancy_info__name\">" + cats[i-1].name + "</h1><h2 class=\"fancy_info__age\">" + cats[i-1].age + " " + age_word + "</h2><p class=\"fancy_info__about\">" + cats[i-1].description  + "</p></div></div></div>";
       
    console.log(i);
    console.log(cats[i-1].name);
    console.log(elem.innerHTML);
    
    cont.appendChild(elem);

}






 

