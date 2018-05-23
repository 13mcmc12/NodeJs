
//Define return columns
function createSavedSearch(){
var filters = new Array();
filters[0] = new nlobjSearchFilter('salesrep', 'customer', 'anyOf', -5, null );
filters[1] = new nlobjSearchFilter('formulatext', null, 'startswith', 'a');
var columns = new Array();

columns[0] = new nlobjSearchColumn( 'salesrep' );
columns[1] = new nlobjSearchColumn( 'expectedclosedate' );
columns[2] = new nlobjSearchColumn( 'entity' );
columns[3] = new nlobjSearchColumn('email', 'customer');
columns[4] = new nlobjSearchColumn('email', 'salesrep');
//Create the saved search
var search = nlapiCreateSearch( 'Transaction', filters, columns );
var searchId = search.saveSearch('Transaction Saved Search v1 Script1.0', 'customsearch_sr1');
}

function loadSavedSearches(){
  var savedSearch = nlapiLoadSearch('transaction'/*type*/, 'customsearch_sr1'/*id*/);
  /*Do operations like addFilter, addColumn*/


}
