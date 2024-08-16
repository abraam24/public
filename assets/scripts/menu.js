const beneficios = document.querySelector("#beneficios");
const banner = document.querySelector("#banner");
const registro = document.querySelector("#registro")



/*Menu Beneficios*/
beneficios.addEventListener("click", (f) =>{
    f.preventDefault();

    const sectionF = document.querySelector(".beneficios");
    sectionF .scrollIntoView({behavior: "smooth"});
})

/*Menu Banner*/
banner.addEventListener("click", (b) =>{
    b.preventDefault();

    const sectionB = document.querySelector(".banner");
    sectionB .scrollIntoView({behavior: "smooth"});
})

/*Menu Registro*/
registro.addEventListener("click", (r) =>{
    r.preventDefault();

    const sectionr = document.querySelector(".registro");
    sectionr .scrollIntoView({behavior: "smooth"});
})