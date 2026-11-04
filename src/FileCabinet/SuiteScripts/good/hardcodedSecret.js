/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(["N/https", "N/runtime"], (https, runtime) => {
  function onRequest(context) {
    // The key lives in a script parameter, not in source control.
    const apiKey = runtime.getCurrentScript().getParameter({
      name: "custscript_rates_api_key",
    });
    const response = https.get({
      url: "https://api.example.com/rates",
      headers: { "X-Api-Key": apiKey },
    });
    context.response.write(response.body);
  }

  return { onRequest };
});
