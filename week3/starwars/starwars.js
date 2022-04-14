// declare any necessary variables
// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

function getFromSWAPI() {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}

// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.

function fetchData()
{
    queryType = document.querySelector("#queryType").value;
    itemID = document.querySelector("#itemID").value;
    getFromSWAPI();
}
function updateInfo(info)
{
    document.querySelector("#dataLabel1").textContent = `Person Name:`;
    document.querySelector("#dataValue1").textContent = `${info.name}`;
    document.querySelector("#dataLabel2").textContent = `Hair Color:`; 
    document.querySelector("#dataValue2").textContent = `${info.hair_color}`; 
    
}