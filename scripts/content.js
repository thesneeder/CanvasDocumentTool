window.addEventListener("load", (event) => {
    try{
    const element = document.getElementById("undefined").getAttribute("src");
    if (confirm("Open in new tab?")) {
        document.location.href = element;
    }
    
    } catch(error){
        
    };
});
