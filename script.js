function getId(id){
    return document.getElementById(id);
}
function getIdInnerTExt(id){
    return document.getElementById(id).innerText;
}
getId('cart-container').addEventListener("click",function(e){
   
    if(e.target.className.includes("heart-icon")){
        const total = Number(getId("heart-main").innerText) + 1;
        getId("heart-main").innerText = total;
    }

    else if((e.target.className.includes("call")) && Number(getId("coin").innerText)>= 20){
        const serviceName = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        // console.log(serviceName)
        const serviceNumber = e.target.parentNode.parentNode.childNodes[3].childNodes[5].innerText;
        // const serviceIcon = e.target.childNodes[1];
        const parent = document.getElementById("history-container");
        const newCart = document.createElement("div");
        let currentDate = new Date().toLocaleTimeString("en-US");
        newCart.innerHTML=`
        <div class="flex gap:4 w-45 mb:20 flex justify-between items-center gap:4 bg:FAFAFA shadow rounded-md p-3"">
          <div>
            <h1 class="text-[#10px]">${serviceName}</h1>
            <h1 class="text[#5C5C5C]">${serviceNumber}</h1>
          </div>
          <h1>${currentDate}</h1>
        </div>
        `
        parent.append(newCart);
        alert("📞 Calling " +serviceName + " "+ serviceNumber);

      
        const currentCoins = Number(getId("coin").innerText) - 20;
        getId("coin").innerText = currentCoins;
    }
    else if(Number(getId("coin").innerText) < 20){
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে ২০ কয়েন লাগবে")
    }
    else if(e.target.className.includes("copy")){
        const serviceNumber = e.target.parentNode.parentNode.childNodes[3].childNodes[5].innerText;
        navigator.clipboard.writeText(serviceNumber);
        alert("Number Successfully Copied. You can paste anywhere");

        const totalcopied = Number(getId("copied").innerText) + 1;
        getId("copied").innerText = totalcopied;
    }
})
getId("clear").addEventListener("click",function(){
    getId("history-container").innerHTML = "";
})



