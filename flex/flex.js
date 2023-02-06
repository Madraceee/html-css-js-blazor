const wrapButton = document.getElementById("wrapBtn")
const dirBtn = document.getElementById("dirBtn")
const container1 = document.getElementById("c1");

wrapButton.addEventListener('change',()=>{
    container1.style.flexWrap=wrapButton.value;
});

dirBtn.addEventListener("change",()=>{
    container1.style.flexDirection = dirBtn.value;
    if(dirBtn.value==="column"){
        container1.style.height = "400px";
    }
    else{
        container1.style.height = "70px";
    }
});

const rowGap = document.getElementById("rowGap");
const colGap = document.getElementById("colGap")
const container2 = document.getElementById("c2")

rowGap.addEventListener("change",()=>{
    container2.style.rowGap = `${rowGap.value}px`;
})

colGap.addEventListener("change",()=>{
    container2.style.columnGap = `${colGap.value}px`;
})


const alignBtn = document.getElementById("alignItm");
const container3 = document.getElementById("c3")

alignBtn.addEventListener("change",()=>{
    container3.style.alignItems = alignBtn.value;
});


const alignContentBtn = document.getElementById("alignContent");
const container4 = document.getElementById("c4");

alignContentBtn.addEventListener("change",()=>{
    container4.style.alignContent = alignContentBtn.value;
})
