// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs")

fs.readFile("data.txt","utf-8" , function (error,data) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(data);

    const cleanedData = data.split(/\s+/).join(" ").trim();

fs.writeFile("data.txt", cleanedData, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("file cleaned success");
})



})