//This is an example of use copy a sheet from origin to destination, you will need the sheet names and sheets ids.
// You could get the sheet ids using this
// Browser.msgBox('Spreadsheet key: ' + SpreadsheetApp.getActiveSpreadsheet().getId());
// this function will pop a msgbox inside the spreadsheet window with its id
// you could get the id directly from the link of the sheet too.
// Make sure the sheet names exist

function main() { 
  var destSpreadsheetID = "ID destination";
  var destSheet = "Destination Sheet";
  var oriSpreadsheetID = "ID origin";
  var oriSheet = "Origin Sheet";
  
  // Instantiate new objects with 'new'
  var mySheet = new Syncer(oriSpreadsheetID, oriSheet, destSpreadsheetID, destSheet);
  
  mySheet.log();
  mysheet.importData();
}
