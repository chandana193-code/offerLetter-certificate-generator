function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = sheet.getDataRange().getValues();

  if (data.length === 0) {
    return ContentService
      .createTextOutput(JSON.stringify([]))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const headers = data[0];
  const rows = data.slice(1);

  const rowLen = rows.length;
  const colLen = headers.length;

  const json = new Array(rowLen);

  for (let i = 0; i < rowLen; i++) {
    let obj = {};
    for (let j = 0; j < colLen; j++) {
      obj[headers[j]] = rows[i][j];
    }
    json[i] = obj;
  }

  return ContentService
    .createTextOutput(JSON.stringify(json))
    .setMimeType(ContentService.MimeType.JSON);
}