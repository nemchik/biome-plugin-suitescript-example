/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(["N/https"], (https) => {
  // noHardcodedSecrets is opt-in: biome.json adds it on top of the recommended config.
  const apiKey = "example-key-not-a-real-secret";

  function onRequest(context) {
    const response = https.get({
      url: "https://api.example.com/rates",
      headers: { "X-Api-Key": apiKey },
    });
    context.response.write(response.body);
  }

  return { onRequest };
});
