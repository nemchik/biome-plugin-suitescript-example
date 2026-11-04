/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(["N/query"], (query) => {
  function onRequest(context) {
    const name = context.request.parameters.name;
    // Concatenating request input into SuiteQL allows injection.
    const rows = query
      .runSuiteQL({
        query: "SELECT id FROM customer WHERE companyname = '" + name + "'",
      })
      .asMappedResults();
    context.response.write(JSON.stringify(rows));
  }

  return { onRequest };
});
