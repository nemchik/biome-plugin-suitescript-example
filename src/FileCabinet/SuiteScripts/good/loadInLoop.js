/**
 * @NApiVersion 2.1
 * @NScriptType ScheduledScript
 */
define(["N/record"], (record) => {
  function execute() {
    const ids = [101, 102, 103];
    ids.forEach((id) => {
      // submitFields updates the field without loading the whole record.
      record.submitFields({
        type: "salesorder",
        id,
        values: { memo: "processed" },
      });
    });
  }

  return { execute };
});
