#!/usr/bin/env node
const yargs = require("yargs");
const chalk = require("chalk");
const boxen = require("boxen");
const translate = require('@vitalets/google-translate-api');
const figlet = require("figlet");

const usage = chalk.keyword("violet")(
  "\nUsage: mycli -l <language> -s <sentence>\n" +
  boxen(
    chalk.green("\n" + "Translates a sentence to a specific language" + "\n"),
    { padding: 1, borderColor: "green", dimBorder: true, borderStyle: 'round' }
  ) +
  "\n"
);

const options = yargs
  .usage(usage)
  .option("l", {
    alias: "language",
    describe: "Translate to language",
    type: "string",
    demandOption: false,
  })
  .option("s", {
    alias: "sentence",
    describe: "Sentence to be translated",
    type: "string",
    demandOption: false,
  })
  .help(true)
  .argv;

console.log(chalk.yellow(figlet.textSync('Translator CLI', { horizontalLayout: 'full', font: 'Slant' })));

const args = yargs.argv;
let chosenLanguage = args.language;
let inputSentence = args.sentence;

translate(inputSentence, { to: chosenLanguage.toLowerCase() })
  .then(res => {
    const translatedOutput = chalk.green.bold("Translated Sentence:") + "\n" + chalk.greenBright(res.text);
    const outputBox = boxen(translatedOutput, { padding: 1, borderColor: 'green', dimBorder: true });
    console.log("\n" + outputBox + "\n");
  })
  .catch(err => {
    let errorMessage = '';
    if (err.code === 'ENOTFOUND') {
      errorMessage = chalk.red.bold("Error: DNS lookup failed - Host not found");
    } else {
      errorMessage = chalk.red.bold("Error: Couldn't understand your inputs");
    }
    const errorBox = boxen(errorMessage, { padding: 1, borderColor: 'red', dimBorder: true });
    console.log("\n" + errorBox + "\n");
  });
