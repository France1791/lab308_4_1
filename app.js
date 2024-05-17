
const string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
function isBetter(str){
    let person = [];
   row = str.split('\n');
    console.log(row);

    for(i = 0; i<row.length; i++){
        person.push(row[i].split(','));
        console.log(person);
    }
    return person;
}

const newString = isBetter(string);
    const arr = [];
    for(i=1; i<newString.length; i++){
        const obj = {};
        for (j=0; j<newString[i].length; j++){
            obj[newString[0][j].toLowerCase()] = newString[i][j]
        }
        arr.push(obj);
    }
    console.log(arr);


// const person = {
//     ID : Number,
//     Name: String,
//     Occupation: String,
//     Age: Number
// };
// console.log(person["ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"]);