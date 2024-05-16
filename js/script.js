var pro = document.querySelectorAll("#pro #item")

var div = document.querySelector("#chosedItems")

var btn = document.querySelector("#btn")

var shtotal = document.querySelector("#shtotal")

var totaly =0


pro.forEach(function(y){
    y.onclick= function(){
        div.innerHTML += "("+y.textContent+") <br>"
        totaly += +(y.getAttribute("price"))
        if(div.innerHTML!=""){
            btn.style.display="block"
        }
    }
})

btn.onclick = function(){
   shtotal.innerHTML =  "Total: $"+totaly
}