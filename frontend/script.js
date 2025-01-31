const functionapi = "http://127.0.0.1:5000/visitcount"; // Change this to your Azure URL after deployment

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
