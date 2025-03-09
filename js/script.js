var copy = document.querySelectorAll(".btn-copy")



copy.forEach(function (item){
    item.onclick = function(){
        alert("تم نسخ النص ")
    }})
