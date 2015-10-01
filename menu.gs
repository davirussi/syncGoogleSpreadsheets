function onOpen(){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [{
    name : "Sync tables",
    functionName : "main"
  }];
  spreadsheet.addMenu("AWESOME - SYNC", entries);
};
