const functionApi = ''; //insert API url 

const getVisitorCount = () => {
    let count =30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then (response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementByID("counter).innerText = count;
                                }).catch(function(error){
            console.log(error);
        }
                                         }
