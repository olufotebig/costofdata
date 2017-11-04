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
  let categoryTitle = table.previousElementSibling.innerText;

  let headers = [];
  let data = [];
  let tableWidth = table.children[0].children[0].children.length;
  for (let i = 0; i < tableWidth; i++) {
    headers.push(table.children[0].children[0].children[i].innerText);
  }

  for (let i = 1; i < table.children[0].children.length; i++) {
    let innerData = {};
    if (table.children[0].children[i].children.length === tableWidth) {
      for (let j = 0; j < tableWidth; j++) {
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

let url = 'http://www.gloworld.com/ng/personal/data/data-plans/';

if (window.location.href === url) {
  copy(main());
}