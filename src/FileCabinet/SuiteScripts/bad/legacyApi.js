/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define([], () => {
  function beforeSubmit(context) {
    // nlapi* is the SuiteScript 1.0 API.
    const customer = nlapiLoadRecord("customer", context.newRecord.id);
    nlapiLogExecution("DEBUG", "Customer", customer.getFieldValue("companyname"));
  }

  return { beforeSubmit };
});
