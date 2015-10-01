# Sync Google Spreadsheets

This is a simple scripted way of syncing google spreadsheets.
You can easy sync two sheets in different files
I tryed to make the code as clear as possible

# How to use
Copy all content of the files to google scripts (inside of the destination sheet).

Then simple call main function

function main() { 
  var destSpreadsheetID = "ID destination";
  var destSheet = "Destination Sheet";
  var oriSpreadsheetID = "ID origin";
  var oriSheet = "Origin Sheet";
  
  var mySheet = new Syncer(oriSpreadsheetID, oriSheet, destSpreadsheetID, destSheet);
  mysheet.importData();
}

