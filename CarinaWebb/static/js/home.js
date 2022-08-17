const galaxia = document.getElementById("galaxias")
const nebulosa = document.getElementById("nebulosas");
const estrela = document.getElementById("estrelas");
const todo = document.querySelector("body");
const todo_galaxia = 624.67372
const todo_nebulosa = 624.57372 + 298
const todo_estrela = todo_nebulosa + 298


window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;
    
    let altura_estrela = todo.clientHeight/1.2 - todo_nebulosa; 
    let altura_galaxia = todo.clientHeight/2.2 - todo_galaxia;
    let altura_nebulosa = todo.clientHeight/1.5 - todo_nebulosa

    let porcentagem_estrela = (scrollValue / altura_estrela) * 100;
    let porcentagem_galaxia = (scrollValue / altura_galaxia) * 100;
    let porcentagem_nebulosa = (scrollValue / altura_nebulosa) * 100;

    // console.log(porcentagem_galaxia)
    nebulosa.style.opacity = porcentagem_nebulosa + "%";
    estrela.style.opacity = porcentagem_estrela + "%";
    galaxia.style.opacity = porcentagem_galaxia + "%";
})