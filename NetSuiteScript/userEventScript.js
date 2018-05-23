function beforeLoad(type,form)
{
   var newId = nlapiGetRecordId();
   var newType = nlapiGetRecordType();
   nlapiLogExecution('DEBUG','<Before Load Script> type:'+type+', RecordType: '+newType+', Id:'+newId);
}
function beforeSubmit(type)
{
   var newId = nlapiGetRecordId();
   var newType = nlapiGetRecordType();
   console.log("Hii this is user event log")
   nlapiLogExecution('DEBUG','<Before Submit Script> type:'+type+', RecordType: '+newType+', Id:'+newId);
}
function afterSubmit(type)
{
   var newId = nlapiGetRecordId();
   var newType = nlapiGetRecordType();
   console.log("Hii this is user event log")
   nlapiLogExecution('DEBUG','<After Submit Script> type:'+type+', RecordType: '+newType+', Id:'+newId);
}
