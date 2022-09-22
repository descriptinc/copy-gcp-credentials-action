import { getInput } from "@actions/core";
import { rmRF } from "@actions/io";

const destinationFile = getInput("destination-file", { required: true });

await rmRF(destinationFile);
console.log(`Cleaned file at ${destinationFile}`);
