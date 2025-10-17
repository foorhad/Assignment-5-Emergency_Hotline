function getId(id){
    return document.getElementById(id);
}
function getIdInnerTExt(id){
    return document.getElementById(id).innerText;
}
getId('cart-container').addEventListener("click",function(e){
    console.log("Hear symbol successfully connected")
   
    if(e.target.className.includes("heart-icon")){
        const total = Number(getId("heart-main").innerText) + 1;
        getId("heart-main").innerText = total;
    }
})