/**
 * @NApiVersion 2.1
 * @NScriptType ScheduledScript
 */
define(["N/record", "N/search"], (record, search) => {
  function execute() {
    const ids = [101, 102, 103];
    ids.forEach((id) => {
      // One record.load per iteration burns governance units.
      const order = record.load({ type: "salesorder", id });
      order.setValue({ fieldId: "memo", value: "processed" });
      order.save();
    });
  }

  return { execute };
});
