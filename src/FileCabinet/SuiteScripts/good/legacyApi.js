/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(["N/log"], (log) => {
  function beforeSubmit(context) {
    // Read from the record being saved; loading it again in beforeSubmit is not allowed.
    log.debug({
      title: "Customer",
      details: context.newRecord.getValue({ fieldId: "companyname" }),
    });
  }

  return { beforeSubmit };
});
