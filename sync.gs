/// Define a class like this
function Syncer(sourceSpreadsheetID, sourceWorksheetName, destinationSpreadsheetID, destinationWorksheetName){

  // Add object properties like this
  this.sourceSpreadsheetID = sourceSpreadsheetID;
  this.sourceWorksheetName = sourceWorksheetName;
  
  this.destinationSpreadsheetID = destinationSpreadsheetID;
  this.destinationWorksheetName = destinationWorksheetName;
}

Syncer.prototype.log = function(){
  Logger.log("Logging object " + this.sourceSpreadsheetID + " " + this.sourceWorksheetName + " " + this.destinationSpreadsheetID + " " + this.sourceWorksheetName);
}

Syncer.prototype.importData = function(){
  var thisSpreadsheet = SpreadsheetApp.openById(this.sourceSpreadsheetID);
  var thisWorksheet = thisSpreadsheet.getSheetByName(this.sourceWorksheetName);
  var thisData = thisWorksheet.getDataRange();
  var toSpreadsheet = SpreadsheetApp.openById(this.destinationSpreadsheetID);
  var toWorksheet = toSpreadsheet.getSheetByName(this.destinationWorksheetName);
  var toRange = toWorksheet.getRange(1, 1, thisData.getNumRows(), thisData.getNumColumns())
  toRange.setValues(thisData.getValues());  
}
