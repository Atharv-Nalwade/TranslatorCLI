![LogoImg](./images/TitleImg.png)


# Translator CLI 👨‍💻

A command-line interface (CLI) tool for translating sentences into a specific language using the Google Translate API. 🌐🔠

## Description 📝

Translator CLI is a Node.js application that allows you to easily translate sentences into different languages. It provides a simple and intuitive interface to enter the sentence and specify the target language. 💬🌍

## Installation 🚀

Make sure you have Node.js installed on your machine. Then, follow these steps to install the Translator CLI globally:

1. Clone the repository or download the code files.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to install the dependencies:

```shell
npm install
```
4. After the dependencies are installed, run the following command to create a global symlink:

```shell
npm link
```
5. Once the global symlink is created, you need to install the package globally. Run the following command:

```shell
npm install -g translatorcli
```

## Usage 🎯

To use the Translator CLI, open a terminal or command prompt and enter the following command:

```shell
translate -l <language> -s <sentence>
```

Replace `<language>` with the target language you want to translate the sentence into, and `<sentence>` with the sentence you want to translate.

### Example ✨

To translate the sentence "Hello, how are you?" into French, use the following command:

```shell
translate -l fr -s "Hello, how are you?"
```

The translated output will be displayed as follows:

![Terminal Output](./images/OutputImg.png)


## Options ⚙️

The Translator CLI supports the following options:

- `-l, --language`: Specifies the target language for translation. Use the language code 
                    (e.g., "fr" for French, "es" for Spanish).
- `-s, --sentence`: Specifies the sentence to be translated.

## Author ✍️

- Author: Atharv N

## Dependencies 📦

The Translator CLI relies on the following dependencies:

- [@vitalets/google-translate-api](https://www.npmjs.com/package/@vitalets/google-translate-api) 🌐
- [boxen](https://www.npmjs.com/package/boxen) 📦
- [chalk](https://www.npmjs.com/package/chalk) 🖍️
- [figlet](https://www.npmjs.com/package/figlet) 🖼️
