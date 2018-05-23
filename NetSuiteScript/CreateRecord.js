// Create Sales order with two items and two different shipping addresses

function createSalesRecord() {
  var record = nlapiCreateRecord('salesorder');
  record.setFieldValue('entity', 8665); //set customer ID
  // Set values for the first item
  record.setLineItemValue('item', 'item', 1, 851); //set item id as last argument
  record.setLineItemValue('item', 'quantity', 1, 1);
  record.setLineItemValue('item', 'shipaddress', 1, 256095); // set shipping id as last argument
  // record.setLineItemValue('item', 'shipmethod', 1, 37);
  // Set values for the second item
  record.setLineItemValue('item', 'item', 2, 549);
  record.setLineItemValue('item', 'quantity', 2, 1);
  record.setLineItemValue('item', 'shipaddress', 2, 256095);
  // record.setLineItemValue('item','shipmethod', 2, 37);
  var id = nlapiSubmitRecord(record, true);
  nlapiLogExecution('DEBUG', 'Sales Order Id', id);
}

function createTranscationItemFulfillment() {
  var itemfulfillment = nlapiTransformRecord('salesorder', 28441, 'itemfulfillment');
  itemfulfillment.setLineItemValue('item', 'location', 1, 6 itemfulfillment.setLineItemValue('item', 'location', 2, 6);
  var fulfillmentId = nlapiSubmitRecord(itemfulfillment, true);
   nlapiLogExecution('DEBUG', 'itemfulfillment Id', fulfillmentId);
  }
function generateInvoice(){
  var invoice = nlapiTransformRecord('salesorder', 28441, 'invoice');
  var fulfillmentId = nlapiSubmitRecord(invoice, true);
  nlapiLogExecution('DEBUG', 'invoice Id', fulfillmentId);
}
