import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer
  .prompt([
    {
        type: "input",
        name: "website",
        message: "Enter the url:",
    }
  ])
  .then((answers) => {
    const URL = answers.website;
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream('qr-img.png'));
    fs.writeFile("Address.txt",URL,()=>{
      console.log("Data saved successfully.");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });