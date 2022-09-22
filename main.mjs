import { getInput, setOutput } from "@actions/core";
import { cp } from "@actions/io";

const sourceFile = getInput("source-file", { required: true });
const destinationFile = getInput("destination-file", { required: true });

await cp(sourceFile, destinationFile);
setOutput("copied-file", destinationFile);
console.log(`Copied input file to ${destinationFile}`);
