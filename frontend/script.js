window.addEventListener('load', () => {
    getVisitCount();
});

const functionapi = "https://your-api-url.com/visitcount"; // Replace with actual API endpoint

const getVisitCount = () => {
    fetch(functionapi)
        .then(response => response.json())
        .then(data => {
            console.log("Website called function API.");
            document.getElementById("counter").innerText = data.count;
        })
        .catch(error => {
            console.error("Error fetching visit count:", error);
            document.getElementById("counter").innerText = "Error loading count";
        });
};
