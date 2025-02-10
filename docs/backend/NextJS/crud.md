---
sidebar_position: 3
---

# CRUD Operations

## CRUD Guide 

Always validate and sanitize the variables before performing Database operations.
Especially, if you are performing **write** requests. 

Will create a file called `genericActions.js` file inside the `lib` folder. This file has some standard functions which will be used in CRUD operations.

This has been written specifically for **MongoDB** only.


### genericActions.js File 

```javascript title="lib/genericActions.js"
// All the Generic Functions which will be used through out the app will go here

import * as moment from "moment";


import User from "../../models/user";
import Category from "../../models/category";
import SubCategory from "../../models/sub_category";

// Function to Pick which Object the operations should be performed 
function getObject(name) {
  switch (name) {
    case "User":
      return User;

    case "Category":
      return Category;

    case "SubCategory":
      return SubCategory;
  }
}

// GET Request 
const fetchRecords = (data) => {
  let url = data.url;

  let query = undefined;

  if (data.type == "find") {
    query = getObject(data.modal).find(data.condition);

    if (data.limit) {
      query.limit(data.limit);
    }

    if (data.skip) {
      query.skip(data.skip);
    }
  } else if (data.type == "findById") {
    query = getObject(data.modal).findById(data.id);
  } else if (data.type == "findOne") {
    query = getObject(data.modal).findOne(data.condition);
  }

  if (data.selectFields) {
    query.select(data.selectFields);
  }
  else
  {
    reject("selectFields is Missing");
  }

  if (data.populate) { 
    for (let i = 0; i < data.populate.length; i++) {
      let obj = data.populate[i].select;
      let key = getKeyByValue(obj, 1);

      if (key == "all") {
        // Populate all fields
        if (data.populate[i].hasOwnProperty("match")) {
          let newObj = {
            match: data.populate[i].match,
            path: data.populate[i].path,
          };
          query.populate(newObj);
        } else {
          query.populate(data.populate[i].path);
        }
      } else {
        query.populate(data.populate[i]);
      }
    }
  }

  if (data.orderBy) {
    if (data.orderByKey) {
      let order = -1;
      if (data.orderBy == "asc") {
        order = 1;
      }

      if (data.orderByKey == "name") {
        query.sort({ name: order });
      }
      if (data.orderByKey == "created_at") {
        query.sort({ created_at: order });
      }
      if (data.orderByKey == "email") {
        query.sort({ email: order });
      }
    } else {
      if (query.orderBy == "desc") {
        query.sort({ created_at: 1 });
      } else {
        query.sort({ created_at: -1 });
      }
    }
  }

  return new Promise(function (resolve, reject) {
    query.exec(function (err, result) {
      if (err) {
        errorLog(url, err);
        reject(err);
      } else {
        if (result) {
          resolve(result);
        } else {
          resolve([]);
        }
      }
    });
  });
};


// PUT Request 
const updateRecord = (data) => {
  let url = data.url;
  let updateFields = data.updateFields;

  let query = undefined;

  if (data.type == "findOne") {
    query = getObject(data.modal).findOne(data.condition);
  } else {
    query = getObject(data.modal).findById(data.id);
  }


  if (data.selectFields) {    
    query.select(data.selectFields);
  }
  else
  {
    reject("selectFields is Missing");
  }

  return new Promise(function (resolve, reject) {
    query.exec(function (err, result) {
      if (err) {
        errorLog(url, err);
        reject(err);
      } else {
        if (result) {
          for (let i = 0; i < updateFields.length; i++) {
            result[updateFields[i].key] = updateFields[i].value;
          }

          result.save(function (err1, updatedResult) {
            if (err1) {
              errorLog(url, err1);
              reject(err1);
            } else {
              resolve(updatedResult);
            }
          });
        } else {
          resolve("empty");
        }
      }
    });
  });
};


// DELETE Request 
const deleteRecord = (data) => {
  let url = data.url;
  let query = getObject(data.modal).findById(data.id);

  return new Promise(function (resolve, reject) {
    query.exec(function (err, result) {
      if (err) {
        errorLog(url, err);
        reject(err);
      } else {
        result.is_del = true;

        result.save(function (err1) {
          if (err1) {
            errorLog(url, err1);
            reject(err1);
          } else {
            resolve("deleted");
          }
        });
      }
    });
  });
};

// DELETE Request 
const deleteRecordPermanently = (data) => {
  let url = data.url;
  let query = getObject(data.modal).findById(data.id);

  return new Promise(function (resolve, reject) {
    query.exec(function (err, result) {
      if (err) {
        errorLog(url, err);
        reject(err);
      } else {
        result.remove(function (err1) {
          if (err1) {
            errorLog(url, err1);
            reject(err1);
          } else {
            resolve("deleted");
          }
        });
      }
    });
  });
};


// GET Request 
const getRecordsCount = (data) => {
  let url = data.url;

  let p = getObject(data.modal).find(data.condition);

  return new Promise(function (resolve, reject) {
    p.countDocuments(function (err, count) {
      if (err) {
        errorLog(url, err);
        reject(err);
      } else {
        resolve(count);
      }
    });
  });
};


function hasJsonStructure(str) {
  if (typeof str !== "string") return false;
  try {
    const result = JSON.parse(str);
    const type = Object.prototype.toString.call(result);
    return type === "[object Object]" || type === "[object Array]";
  } catch (err) {
    return false;
  }
}

const errorLog = (url, errorObj) => {
  if (
    process.env.NODE_ENV == "production" ||
    process.env.NODE_ENV == "staging"
  ) {
    let nowDate = new Date();
    let errorText = "";
    if (errorObj) {
      if (hasJsonStructure(errorObj)) {
        errorText = JSON.stringify(errorObj);
      } else {
        errorText = errorObj;
      }
    }
    let errorFile =
      "Time - " +
      moment().format("DD-MMM-YYYY h:mm:ss a") +
      "\n" +
      "URL - " +
      url +
      "\n" +
      "Error - " +
      errorText +
      "\n\n";

    let fileName = moment(nowDate).format("DD-MMM-YYYY") + "-logs.txt";

    // Add Code to Send Error to CloudWatch
  } else {
    console.log("Error in URL>>>>>", url);
    console.log("Error Details>>>>>", errorObj);
  }
};


function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}


module.exports = {
  errorLog,
  fetchRecords,
  deleteRecord,
  updateRecord,
  getRecordsCount,
  deleteRecordPermanently,
};
```

### GET Request

```javascript title="GET request"
 case "GET":
  try {
    
    let url = req.url 
    let params = req.query // or req.params 

    // Validate the parameters 

    // Fetch Single Record

     let getObj = {
      "modal": "User", // This should be defined in genericActions.js file getObject function 
      "url": url, // will use this for logging 
      "type": "findOne", 
      "selectFields": ["name", "email"], // specify the fields for retreiving 
      "condition": { "name": "Anirudh" }, // this will vary based on your logic
      "populate": [ // Incase you want to populate inner objects 
        { path: "country_id", select: { name: 1 } },
        { path: "city_id", select: { name: 1 } },
      ],
    };

    let userInfo = await fetchRecords(getObj); 

    // Fetch Single Record based on Mongo ObjectID
     
    let getObj = {
      "modal": "User", 
      "url": url, 
      "type": "findById", 
      "id": "mongoobjectid",
      "selectFields": ["name", "email"]
    };

    let userInfo = await fetchRecords(getObj); 
    
    // Fetch Multiple Records 

    let getObj = {
      "modal": "User", 
      "url": url, 
      "type": "find", 
      "condition": {"is_del": false},
      "selectFields": ["name", "email"]
    };

    let userInfo = await fetchRecords(getObj); 


    // Fetch only count instead of records 

    let getObj = {
      "modal": "User", 
      "url": url, 
      "condition": {"is_del": false}
    };

    let usersCount = await getRecordsCount(getObj); 

    res.status(200).json({ success: true, data: userInfo });

  } catch (error) {
    // add error handling 
    res.status(500).json({ success: false });
  }
  break;
```


### POST Request

```javascript title="POST request"
 case "POST":
  try {
    
    let params = req.body // or req.query or req.params 

    // Validate the parameters 

    let userObj = new User({
      "name": req.body.name,
      "email": req.body.email,
      "password": hash,
      "created_at": new Date(),
      "updated_at": new Date(),
    });

    
    userObj.save(async function (err, result) {
      if (err) {
        res.status(500).json({ success: false });
      } else {
        res.status(200).json({ success: true, data: result });
      }
    });


  } catch (error) {
    // add error handling 
    res.status(500).json({ success: false });
  }
  break;
```

### PUT Request

```javascript title="PUT request"
 case "PUT":
  try {
    
      let params = req.body // or req.params or req.query 

      // Validate the parameters 

      // Update Based on Mongo ObjectID

      let updateFields = [ 
  
          { "key": "name", "value": "Johnny Bravo" },
          { "key": "company", "value": "Awesome Inc" },
          { "key": "updated_at", "value": new Date() },
      ]
  
      let updateObj = {
          "modal": "User",
          "url": url,
          "id": "mongoobjectid",
          "type": "findById",
          "updateFields": updateFields,
          "selectFields": ["name", "email"]
      }
    
      await generic.updateRecord(updateObj)
    
    
      // Update Based on Condition

      let updateFields = [ 
  
          { "key": "name", "value": "Johnny Bravo" },
          { "key": "company", "value": "Awesome Inc" },
          { "key": "updated_at", "value": new Date() },
      ]
  
      let updateObj = {
          "modal": "User",
          "url": url,
          "type": "findOne",
          "updateFields": updateFields,
          "condition": { "email": "johnny@awesome.com" },
          "selectFields": ["name", "email"]
      }
    
      let userInfo = await generic.updateRecord(updateObj)

      res.status(200).json({ success: true, data: userInfo });


  } catch (error) {
    // add error handling 
    res.status(500).json({ success: false });
  }
  break;
```

### DELETE Request

```javascript title="DELETE request"
 case "DELETE":
  try {
    
    let params = req.body // or req.query or req.params 

    // Validate the parameters 

    // Always check whether the user deleting the record has access to the record  
    
    let delObj = {
        "modal": "User",
        "url": url,
        "type": "findById",
        "id": userID 
    }

    await generic.deleteRecord(delObj) // updating is_del=true in database  

    // incase you want to delete the record from database completely  
    await generic.deleteRecordPermanently(delObj) 

    res.status(200).json({ success: true });

  } catch (error) {
    // add error handling 
    res.status(500).json({ success: false });
  }
  break;
```