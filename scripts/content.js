window.addEventListener("load", (event) => {
    try{
    const element = document.getElementById("undefined").getAttribute("src");
    document.location.href = element;
    } catch(error){
        try{
            const element = document.getElementByTag("video").getAttribute("src");
            document.location.href = element;
        }
        catch(error){

        };
    };
    
});
