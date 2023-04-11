window.addEventListener("load", (event) => {
    try{
    const element = document.getElementById("undefined").getAttribute("src");
    if (confirm("Open in new tab?")) {
        window.close();
        window.open(element);
      }
    } catch(error){
        
    };
});
