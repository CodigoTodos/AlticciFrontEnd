async function sendIndex()
{
    let indexInput = document.getElementById("index-input").value;
    if(indexInput.length === 0)
        {
            indexInput = 0;
            document.getElementById("index-input").value = 0;
        }
        
    let response = await axios.get('http://localhost:8080/alticci/'+ indexInput)
    let responseData = response.data;
    document.getElementById("result").innerHTML = "The value for index " + indexInput + " is " + responseData + ".";        
    
}


