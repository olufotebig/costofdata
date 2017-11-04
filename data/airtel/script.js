function main() {
  let tables = document.getElementsByTagName("table");
  let data = []
  for (let i = 0; i < tables.length; i++) {
    data.push(...parseTable(tables[i]));
  }
  return {
    dateNow: Date.now(),
    data
  };
}

function parseTable(table) {
  let categoryTitle;

  let headers = [];
  let data = [];
  let tableWidth = table.children[0].children[0].children.length;
  for (let i = 0; i < tableWidth; i++) {
    headers.push(table.children[0].children[0].children[i].innerText);
  }
  categoryTitle = headers[0]; // hack for last table
  for (let i = 1; i < table.children[0].children.length; i++) {
    // navigating each tr
    let tr = table.children[0].children[i];
    let trChildrenLength = tr.children.length;
    let innerData = {};
    if (trChildrenLength >= tableWidth - 1) {
      if (trChildrenLength === tableWidth) {
        categoryTitle = tr.children[0].innerText;
      }
      for (let j = 1; j < trChildrenLength; j++) {
        let value = table.children[0].children[i].children[j].innerText;
        let akey = headers[j];
        let obj = {}
        innerData[akey] = value;
      }
      innerData['categoryTitle'] = categoryTitle;
      data.push(innerData);
    }

  }

  return data;
}

url = 'http://www.africa.airtel.com/wps/wcm/connect/AfricaRevamp/Nigeria/Home/Personal/Internet/TariffPlans/smartspeedoo-dataplans';

if (window.location.href === url) {
  copy(main());
}