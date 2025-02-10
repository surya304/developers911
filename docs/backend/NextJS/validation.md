---
sidebar_position: 2
---

# Validations


## Validations Guide 

Will use a package called [express-validator](https://express-validator.github.io/docs/) for all backend validations in NextJS

Command to install the package: `npm install --save express-validator`

express-validator is a set of [express.js](http://expressjs.com/) middlewares that wraps [validator.js](https://github.com/validatorjs/validator.js) validator and sanitizer functions


### Getting Started

Create NextJS Middleware Helper Method inside the lib folder `/lib/init-middleware.js`

```jsx title="lib/init-middleware.js"
export default function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}
```

Create NextJS Validator Middleware to handle error and response out as `/lib/validate-middleware.js`

```jsx title="lib/validate-middleware.js"
export default function validateMiddleware(validations, validationResult) {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(422).json({ errors: errors.array() });
  };
}

```

Now it's time to integrate validate rules and middleware into your NextJS API Routes. You can use any validator.js's [validator functions](https://github.com/validatorjs/validator.js#validators) as sample below 👇

```jsx title="pages/api/demo/index.js"
import dbConnect from "../../../lib/dbConnect";
import initMiddleware from "../../../lib/init-middleware";
import validateMiddleware from "../../../lib/validate-middleware";
import { check, validationResult } from "express-validator";
import User from "../../../models/User";
import formidable from "formidable";

export const config = {
  api: { bodyParser: false }
};

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check("first_name")
        .isLength({ min: 1, max: 40 })
        .withMessage("must be at least 5 chars long")
        .escape()
        .trim(), 
        .blacklist("\\[\\]"),
      check("email").isEmail().withMessage("This is an invalid email"),
      check("gender").isIn(["male", "female"]),
      check("amount").isDecimal(),
      check("mongo").isMongoId(),
      check("otp").isNumeric({ no_symbols: true }).isLength({ min: 5, max: 5 }),
      check("mobile").isMobilePhone("en-IN"),
      check("zip").isPostalCode("IN"),
      check("verified").isBoolean().withMessage("Bool is invalid"),
    ],
    validationResult
  )
);

export default async function handler(req, res) {

    const { method } = req;

    await dbConnect();

    switch (method) {
      case "POST":
        try {
        
          const form = new formidable.IncomingForm();
          form.uploadDir = "./";
          form.keepExtensions = true;
          form.parse(req, async (err, fields, files) => {

              let sizeinb = files.image.size; 

              const bytesToMegaBytes = (bytes) => bytes / 1024 ** 2;
              let size = bytesToMegaBytes(sizeinb).toFixed(2);
              let type = files.image.mimetype;

              req.body = fields; 
              
              await validateBody(req, res);

              const errors = validationResult(req);

              if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
              }

              res.status(200).json({ success: true, errors: [] });    
          });
          
        } catch (error) {
          res.status(400).json({ success: false });
        }

        break;

      default:
        res.status(400).json({ success: false });
        break;
    }
  
}
```

### Validations Code Snippets  

**Mandatory Validations** - There validations are must for every field to avoid security attacks. They include basics like input sanitization & preventing SQL Injections. We will not be mentioning the mandatory validations in the code snippets after this. 
**Remember** to add it for every field in the `PUT` or `POST` request. 

### Mandatory Validation & Sanitization


```jsx title="mandatory"
check("field_name")
        .isEmpty() // Check whether the field is empty or not 
        .escape() // prevents HTML code from being inserted
        .trim(), // removes extra spaces to the right and left of the string 
        .blacklist("\\[\\]"), //remove characters that appear in the blacklist. The characters are used in a RegExp and so you will need to escape some chars
        .withMessage("Custom error message here") // Customizing Error Messages
```        

### First Name Validation

```jsx title="first_name"
check("first_name")
       .isLength({ min: 1, max: 40 })
```

### Last Name Validation

```jsx title="last_name"
check("last_name")
       .isLength({ min: 1, max: 40 })
```

### Password Validation

```jsx title="password"
check("password").isStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: false,
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10,
        pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10,
      }),
```

### Email Validation

```jsx title="email"
check("email")
       .isEmail()
       .normalizeEmail() // canonicalizes an email address e.g. "foo+bar@icloud.com" becomes "foo@icloud.com"
```

### Enum Validation

```jsx title="enum"
check("gender")
      .isIn(["male", "female"])
```

### Amount Validation

```jsx title="amount"
check("amount")
      .isFloat()
      .isFloat({ min: 7.22, max: 9.55 }) // optional 
```

### Mongo Object Validation

```jsx title="mongoobj_id"
check("mongoobj_id")
      .isMongoId()
```

### OTP Validation

```jsx title="otp"
check("otp")
      .isNumeric({ no_symbols: true }).isLength({ min: 5, max: 5 }), // 5 digit OTP
```

### Mobile Validation

```jsx title="mobile"
check("mobile")
      .isMobilePhone("en-IN") // accepts 9966612345 & +919966612345
      // change country code for appropriate country checks 
```

### URL Validation

```jsx title="url"
check("url")
      .isURL({
        protocols: ["https"],
        require_tld: true,
        require_protocol: true,
        allow_query_components: true,
        validate_length: true,
      })
```

### Zip Validation

```jsx title="zip"
check("zip")
      .isPostalCode("IN"), // change country code according
```

### Boolean Validation

```jsx title="verified"
check("verified")
      .isBoolean(), 
```

### DB Query Validation


```jsx title="email exists check"
check("email")
      .custom((value) => {
        return User.findOne({ email: value }).then((user) => {
          if (user) {
            return Promise.reject("E-mail already in use");
          }
        });
      })
```

### File Upload Validation

This is a bit different from other validations, we use an npm package called `formidable`

```jsx title="file upload"
const form = new formidable.IncomingForm();
form.uploadDir = "./";
form.keepExtensions = true;
form.parse(req, async (err, fields, files) => {

    // image is the name of the file field
    let sizeinb = files.image.size; // file size in bytes   

    const bytesToMegaBytes = (bytes) => bytes / 1024 ** 2; // convert bytes to mb 
    let size = bytesToMegaBytes(sizeinb).toFixed(2); 
    let type = files.image.mimetype; // check file mimetype 

    if(type == "image/png" || type == "image/jpeg") // file type validation 
    {
        if(size < 100) // file size validation 
        {

        }
    }  
});
```



Always validate and sanitize the variables before performing Database operations.
Especially, if you are performing **write** requests. 

Will create a file called `genericActions.js` file inside the `lib` folder. This file has some standard functions which will be used in CRUD operations.

This has been written specifically for **MongoDB** only.



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