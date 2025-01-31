const functionapi = "https://<Azure-resume>.azurewebsites.net/visitcount"; 

window.addEventListener('load', () => {
    getVisitCount();
});

const getVisitCount = () => {
    fetch(functionapi)
        .then(response => response.json())
        .then(data => {
            console.log("Website called function API.");
            document.getElementById("counter").innerText = data.count;
        })
        .catch(error => {
            console.error("Error fetching visit count:", error);
        });
};
