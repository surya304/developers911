# API Requests 

## Generic GET, POST, PUT & DELETE Requests

```javascript title="serverRequests.js"

async function serverRequest(serverdata) {
​
     // var data = {
    //     request_method: "GET", // POST // PUT // GET
    //     request_url: "/api/profile",
    //     request_header: "form"// form , jsondata
    //     body_data:{}// form , jsondata
    // }
​
    const { request_method, request_url, request_header, body_data } = serverdata;
​
    let final_request_object = { method: request_method };
    if (request_method !== 'GET') {
        if (request_header === 'form') {
            final_request_object.body = body_data;
        } else {
            final_request_object.headers = { "Content-Type": "application/json" };
            final_request_object.body = body_data;
        }
    }
​
    try {
        const res = await fetch(request_url, final_request_object);
        const data = await res.json();
​
        let finalreturnObj = { error: true , errorMessage: [], status:200 , data: undefined };
        if (data.errors) {
            finalreturnObj.error = true;
            finalreturnObj.errorMessage = data.errors;
            finalreturnObj.status = data.status;
        } else{
            finalreturnObj = { error: false, data:data };
        }
​
        return finalreturnObj;
    } catch (error) {
         finalreturnObj.error = true;
         finalreturnObj.errorMessage = error;
         finalreturnObj.status = 500 
        return finalreturnObj
    }
}
​
​
​
function statusMessage(response){
​
​
    switch (response.status) {
        case 200:
          // OK - The request was successful
          return "The request was successful";
​
        case 400:
          // Bad Request - The request was malformed or invalid
          return "The request was malformed or invalid";
        case 401:
          // Unauthorized - The request requires authentication
          return response.json().then(err => Promise.reject(err));
        case 403:
          // Forbidden - The request is not authorized for the current user
          return response.json().then(err => Promise.reject(err));
        case 404:
          // Not Found - The requested resource could not be found
          return response.json().then(err => Promise.reject(err));
      
        case 500:
          // Internal Server Error - An unexpected error occurred on the server
          return response.json().then(err => Promise.reject(err));
 
        case 503:
          // Service Unavailable - The server is currently unable to handle the request
          return response.json().then(err => Promise.reject(err));
        default:
          // Unexpected status code
          return response.json().then(err => Promise.reject(err));
​
    }
}
module.exports = { serverRequest,statusMessage };

```


## Calling APIs from Next.js 

### GET Request 

```javascript title="sample.jsx"

let finalData = {
        request_method: "GET", 
        request_url: "/api/multiupload",
    }
        
  var finalObj= await serverRequest(finalData);
 
  setLoader(false); // Show Loader 
  
    if (finalObj.error == true) { // Error 
      console.log("Error>>>", finalObj.errorMessage)
    }else{  // Success  
      console.log("Success>>>", finalObj)
    }
```


### POST Request with FormData 

```javascript title="sample.jsx"

let formData = new FormData()
formData.append("input1", input1Value); // Add Key Value pairs

let finalData = {
        request_method: "POST", 
        request_url: "/api/multiupload",
        request_header: "form",
        body: formData 
    }
        
  var finalObj= await serverRequest(finalData);
 
  setLoader(false); // Show Loader 
  
    if (finalObj.error == true) { // Error 
      console.log("Error>>>", finalObj.errorMessage)
    }else{  // Success  
      console.log("Success>>>", finalObj)
    }
```

### POST Request with JSON object  

```javascript title="sample.jsx"

let formData = {
    "name": input1Value,
    "email": input2Value 
}

let finalData = {
        request_method: "POST", 
        request_url: "/api/multiupload",
        request_header: "jsondata",
        body: JSON.stringify(formData) 
    }
        
  var finalObj= await serverRequest(finalData);
 
  setLoader(false); // Show Loader 
  
    if (finalObj.error == true) { // Error 
      console.log("Error>>>", finalObj.errorMessage)
    }else{  // Success  
      console.log("Success>>>", finalObj)
    }
```


### PUT Request with FormData 

```javascript title="sample.jsx"

let formData = new FormData()
formData.append("input1", input1Value); // Add Key Value pairs

let finalData = {
        request_method: "PUT", 
        request_url: "/api/multiupload",
        request_header: "form",
        body: formData 
    }
        
  var finalObj= await serverRequest(finalData);
 
  setLoader(false); // Show Loader 
  
    if (finalObj.error == true) { // Error 
      console.log("Error>>>", finalObj.errorMessage)
    }else{  // Success  
      console.log("Success>>>", finalObj)
    }
```

### PUT Request with JSON object  

```javascript title="sample.jsx"

let formData = {
    "name": input1Value,
    "email": input2Value 
}

let finalData = {
        request_method: "PUT", 
        request_url: "/api/multiupload",
        request_header: "jsondata",
        body: JSON.stringify(formData) 
    }
        
  var finalObj= await serverRequest(finalData);
 
  setLoader(false); // Show Loader 
  
    if (finalObj.error == true) { // Error 
      console.log("Error>>>", finalObj.errorMessage)
    }else{  // Success  
      console.log("Success>>>", finalObj)
    }
```


### DELETE Request 

```javascript title="sample.jsx"

let formData = {
    "id": input1Value,
    "key": input2Value 
}

let finalData = {
        request_method: "DELETE", 
        request_url: "/api/multiupload",
        request_header: "jsondata",
        body: JSON.stringify(formData) 
    }
        
  var finalObj= await serverRequest(finalData);
 
  setLoader(false); // Show Loader 
  
    if (finalObj.error == true) { // Error 
      console.log("Error>>>", finalObj.errorMessage)
    }else{  // Success  
      console.log("Success>>>", finalObj)
    }
```