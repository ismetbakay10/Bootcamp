// Takes 1 argument, a language code (e.g. "es", "de", "en")
// Returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works

function worldTranslator(language) {
  if (language == "tr") {
    console.log("Selam Dünya!");
  } else if (language == "fr") {
    console.log("Bonjour le monde!");
  } else {
    console.log("Hello world!");
  }
}

let result1 = worldTranslator();
let result2 = worldTranslator("tr");
let result3 = worldTranslator("fr");
