"use strict";(self.webpackChunkguidelines=self.webpackChunkguidelines||[]).push([[3442],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),u=i,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6101:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:2},l="Validations",o={unversionedId:"backend/NextJS/validation",id:"backend/NextJS/validation",title:"Validations",description:"Validations Guide",source:"@site/docs/backend/NextJS/validation.md",sourceDirName:"backend/NextJS",slug:"/backend/NextJS/validation",permalink:"/docs/backend/NextJS/validation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/NextJS/validation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/backend/NextJS/basics"},next:{title:"CRUD Operations",permalink:"/docs/backend/NextJS/crud"}},s={},d=[{value:"Validations Guide",id:"validations-guide",level:2},{value:"Getting Started",id:"getting-started",level:3},{value:"Validations Code Snippets",id:"validations-code-snippets",level:3},{value:"Mandatory Validation &amp; Sanitization",id:"mandatory-validation--sanitization",level:3},{value:"First Name Validation",id:"first-name-validation",level:3},{value:"Last Name Validation",id:"last-name-validation",level:3},{value:"Password Validation",id:"password-validation",level:3},{value:"Email Validation",id:"email-validation",level:3},{value:"Enum Validation",id:"enum-validation",level:3},{value:"Amount Validation",id:"amount-validation",level:3},{value:"Mongo Object Validation",id:"mongo-object-validation",level:3},{value:"OTP Validation",id:"otp-validation",level:3},{value:"Mobile Validation",id:"mobile-validation",level:3},{value:"URL Validation",id:"url-validation",level:3},{value:"Zip Validation",id:"zip-validation",level:3},{value:"Boolean Validation",id:"boolean-validation",level:3},{value:"DB Query Validation",id:"db-query-validation",level:3},{value:"File Upload Validation",id:"file-upload-validation",level:3}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"validations"},"Validations"),(0,i.kt)("h2",{id:"validations-guide"},"Validations Guide"),(0,i.kt)("p",null,"Will use a package called ",(0,i.kt)("a",{parentName:"p",href:"https://express-validator.github.io/docs/"},"express-validator")," for all backend validations in NextJS"),(0,i.kt)("p",null,"Command to install the package: ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install --save express-validator")),(0,i.kt)("p",null,"express-validator is a set of ",(0,i.kt)("a",{parentName:"p",href:"http://expressjs.com/"},"express.js")," middlewares that wraps ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/validatorjs/validator.js"},"validator.js")," validator and sanitizer functions"),(0,i.kt)("h3",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Create NextJS Middleware Helper Method inside the lib folder ",(0,i.kt)("inlineCode",{parentName:"p"},"/lib/init-middleware.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="lib/init-middleware.js"',title:'"lib/init-middleware.js"'},"export default function initMiddleware(middleware) {\n  return (req, res) =>\n    new Promise((resolve, reject) => {\n      middleware(req, res, (result) => {\n        if (result instanceof Error) {\n          return reject(result);\n        }\n        return resolve(result);\n      });\n    });\n}\n")),(0,i.kt)("p",null,"Create NextJS Validator Middleware to handle error and response out as ",(0,i.kt)("inlineCode",{parentName:"p"},"/lib/validate-middleware.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="lib/validate-middleware.js"',title:'"lib/validate-middleware.js"'},"export default function validateMiddleware(validations, validationResult) {\n  return async (req, res, next) => {\n    await Promise.all(validations.map((validation) => validation.run(req)));\n\n    const errors = validationResult(req);\n    if (errors.isEmpty()) {\n      return next();\n    }\n\n    res.status(422).json({ errors: errors.array() });\n  };\n}\n\n")),(0,i.kt)("p",null,"Now it's time to integrate validate rules and middleware into your NextJS API Routes. You can use any validator.js's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/validatorjs/validator.js#validators"},"validator functions")," as sample below \ud83d\udc47"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="pages/api/demo/index.js"',title:'"pages/api/demo/index.js"'},'import dbConnect from "../../../lib/dbConnect";\nimport initMiddleware from "../../../lib/init-middleware";\nimport validateMiddleware from "../../../lib/validate-middleware";\nimport { check, validationResult } from "express-validator";\nimport User from "../../../models/User";\nimport formidable from "formidable";\n\nexport const config = {\n  api: { bodyParser: false }\n};\n\nconst validateBody = initMiddleware(\n  validateMiddleware(\n    [\n      check("first_name")\n        .isLength({ min: 1, max: 40 })\n        .withMessage("must be at least 5 chars long")\n        .escape()\n        .trim(), \n        .blacklist("\\\\[\\\\]"),\n      check("email").isEmail().withMessage("This is an invalid email"),\n      check("gender").isIn(["male", "female"]),\n      check("amount").isDecimal(),\n      check("mongo").isMongoId(),\n      check("otp").isNumeric({ no_symbols: true }).isLength({ min: 5, max: 5 }),\n      check("mobile").isMobilePhone("en-IN"),\n      check("zip").isPostalCode("IN"),\n      check("verified").isBoolean().withMessage("Bool is invalid"),\n    ],\n    validationResult\n  )\n);\n\nexport default async function handler(req, res) {\n\n    const { method } = req;\n\n    await dbConnect();\n\n    switch (method) {\n      case "POST":\n        try {\n        \n          const form = new formidable.IncomingForm();\n          form.uploadDir = "./";\n          form.keepExtensions = true;\n          form.parse(req, async (err, fields, files) => {\n\n              let sizeinb = files.image.size; \n\n              const bytesToMegaBytes = (bytes) => bytes / 1024 ** 2;\n              let size = bytesToMegaBytes(sizeinb).toFixed(2);\n              let type = files.image.mimetype;\n\n              req.body = fields; \n              \n              await validateBody(req, res);\n\n              const errors = validationResult(req);\n\n              if (!errors.isEmpty()) {\n                return res.status(422).json({ errors: errors.array() });\n              }\n\n              res.status(200).json({ success: true, errors: [] });    \n          });\n          \n        } catch (error) {\n          res.status(400).json({ success: false });\n        }\n\n        break;\n\n      default:\n        res.status(400).json({ success: false });\n        break;\n    }\n  \n}\n')),(0,i.kt)("h3",{id:"validations-code-snippets"},"Validations Code Snippets"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mandatory Validations")," - There validations are must for every field to avoid security attacks. They include basics like input sanitization & preventing SQL Injections. We will not be mentioning the mandatory validations in the code snippets after this.\n",(0,i.kt)("strong",{parentName:"p"},"Remember")," to add it for every field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request. "),(0,i.kt)("h3",{id:"mandatory-validation--sanitization"},"Mandatory Validation & Sanitization"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="mandatory"',title:'"mandatory"'},'check("field_name")\n        .isEmpty() // Check whether the field is empty or not \n        .escape() // prevents HTML code from being inserted\n        .trim(), // removes extra spaces to the right and left of the string \n        .blacklist("\\\\[\\\\]"), //remove characters that appear in the blacklist. The characters are used in a RegExp and so you will need to escape some chars\n        .withMessage("Custom error message here") // Customizing Error Messages\n')),(0,i.kt)("h3",{id:"first-name-validation"},"First Name Validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="first_name"',title:'"first_name"'},'check("first_name")\n       .isLength({ min: 1, max: 40 })\n')),(0,i.kt)("h3",{id:"last-name-validation"},"Last Name Validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="last_name"',title:'"last_name"'},'check("last_name")\n       .isLength({ min: 1, max: 40 })\n')),(0,i.kt)("h3",{id:"password-validation"},"Password Validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="password"',title:'"password"'},'check("password").isStrongPassword({\n        minLength: 6,\n        minLowercase: 1,\n        minUppercase: 1,\n        minNumbers: 1,\n        minSymbols: 1,\n        returnScore: false,\n        pointsPerUnique: 1,\n        pointsPerRepeat: 0.5,\n        pointsForContainingLower: 10,\n        pointsForContainingUpper: 10,\n        pointsForContainingNumber: 10,\n        pointsForContainingSymbol: 10,\n      }),\n')),(0,i.kt)("h3",{id:"email-validation"},"Email Validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="email"',title:'"email"'},'check("email")\n       .isEmail()\n       .normalizeEmail() // canonicalizes an email address e.g. "foo+bar@icloud.com" becomes "foo@icloud.com"\n')),(0,i.kt)("h3",{id:"enum-validation"},"Enum Validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="enum"',title:'"enum"'},'check("gender")\n      .isIn(["male", "female"])\n')),(0,i.kt)("h3",{id:"amount-validation"},"Amount Validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="amount"',title:'"amount"'},'check("amount")\n      .isFloat()\n      .isFloat({ min: 7.22, max: 9.55 }) // optional \n')),(0,i.kt)("h3",{id:"mongo-object-validation"},"Mongo Object Validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="mongoobj_id"',title:'"mongoobj_id"'},'check("mongoobj_id")\n      .isMongoId()\n')),(0,i.kt)("h3",{id:"otp-validation"},"OTP Validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="otp"',title:'"otp"'},'check("otp")\n      .isNumeric({ no_symbols: true }).isLength({ min: 5, max: 5 }), // 5 digit OTP\n')),(0,i.kt)("h3",{id:"mobile-validation"},"Mobile Validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="mobile"',title:'"mobile"'},'check("mobile")\n      .isMobilePhone("en-IN") // accepts 9966612345 & +919966612345\n      // change country code for appropriate country checks \n')),(0,i.kt)("h3",{id:"url-validation"},"URL Validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="url"',title:'"url"'},'check("url")\n      .isURL({\n        protocols: ["https"],\n        require_tld: true,\n        require_protocol: true,\n        allow_query_components: true,\n        validate_length: true,\n      })\n')),(0,i.kt)("h3",{id:"zip-validation"},"Zip Validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="zip"',title:'"zip"'},'check("zip")\n      .isPostalCode("IN"), // change country code according\n')),(0,i.kt)("h3",{id:"boolean-validation"},"Boolean Validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="verified"',title:'"verified"'},'check("verified")\n      .isBoolean(), \n')),(0,i.kt)("h3",{id:"db-query-validation"},"DB Query Validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="email exists check"',title:'"email',exists:!0,'check"':!0},'check("email")\n      .custom((value) => {\n        return User.findOne({ email: value }).then((user) => {\n          if (user) {\n            return Promise.reject("E-mail already in use");\n          }\n        });\n      })\n')),(0,i.kt)("h3",{id:"file-upload-validation"},"File Upload Validation"),(0,i.kt)("p",null,"This is a bit different from other validations, we use an npm package called ",(0,i.kt)("inlineCode",{parentName:"p"},"formidable")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="file upload"',title:'"file','upload"':!0},'const form = new formidable.IncomingForm();\nform.uploadDir = "./";\nform.keepExtensions = true;\nform.parse(req, async (err, fields, files) => {\n\n    // image is the name of the file field\n    let sizeinb = files.image.size; // file size in bytes   \n\n    const bytesToMegaBytes = (bytes) => bytes / 1024 ** 2; // convert bytes to mb \n    let size = bytesToMegaBytes(sizeinb).toFixed(2); \n    let type = files.image.mimetype; // check file mimetype \n\n    if(type == "image/png" || type == "image/jpeg") // file type validation \n    {\n        if(size < 100) // file size validation \n        {\n\n        }\n    }  \n});\n')),(0,i.kt)("p",null,"Always validate and sanitize the variables before performing Database operations.\nEspecially, if you are performing ",(0,i.kt)("strong",{parentName:"p"},"write")," requests. "),(0,i.kt)("p",null,"Will create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"genericActions.js")," file inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," folder. This file has some standard functions which will be used in CRUD operations."),(0,i.kt)("p",null,"This has been written specifically for ",(0,i.kt)("strong",{parentName:"p"},"MongoDB")," only."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="DELETE request"',title:'"DELETE','request"':!0},' case "DELETE":\n  try {\n    \n    let params = req.body // or req.query or req.params \n\n    // Validate the parameters \n\n    // Always check whether the user deleting the record has access to the record  \n    \n    let delObj = {\n        "modal": "User",\n        "url": url,\n        "type": "findById",\n        "id": userID \n    }\n\n    await generic.deleteRecord(delObj) // updating is_del=true in database  \n\n    // incase you want to delete the record from database completely  \n    await generic.deleteRecordPermanently(delObj) \n\n    res.status(200).json({ success: true });\n\n  } catch (error) {\n    // add error handling \n    res.status(500).json({ success: false });\n  }\n  break;\n')))}m.isMDXComponent=!0}}]);