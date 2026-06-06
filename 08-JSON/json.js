// JSON --- Javascript Object Notation
// note:
// json data ko store or transfer karna ka format hai.
// json same as js object ki tarha hota hai bus keys string ma hoti hai.

// json to object converson method
// JSON.parse()

// object to json converson method
// JSON.stringify()

// practical
// json data
let jsonData = `{
  "id": 1,
  "name": "Atif",
  "age": 24,
  "city": "Karachi",
  "skills": ["HTML", "CSS", "JavaScript", "React"],
  "education": {
    "institute": "Aptech",
    "course": "HDSE",
    "year": 3
  },
  "isStudent": true
}`;

// json to object converson
console.log(typeof jsonData) // json ki type string hoti hai
let obj = JSON.parse(jsonData)
console.log(typeof obj) // after converson type object ban jayegi

// object to json converson
let makeJson = JSON.stringify(obj)
console.log(typeof makeJson) // object ko wapis string yani json ma convert kia hai
