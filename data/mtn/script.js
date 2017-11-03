function main() {
  let $items = $('.pricing-table > .accordion').children();
  let data = [];
  $items.map((index, listItem) => {
    data.push(parseListItem(listItem));
  });
  return {
    dateNow: Date.now(),
    data
  };
}

function parseListItem(listItem) {
  let categoryTitle = listItem.children[0].children[0].innerText;
  let rowItems = $(listItem.children[1].children[0].children[0].children);
  let data = [];
  rowItems.map((index, rowItem) => {
    data.push(parseRowItem(rowItem));
  })
  return {
    categoryTitle,
    data
  }
}

function parseRowItem(rowItem) {
  let dataBundleSize = rowItem.children[0].children[0].innerText;
  let dataBundleCost = rowItem.children[0].children[1].innerText;
  let dataBundleDuration = rowItem.children[0].children[2].innerText;
  let dataBundleInstruction = rowItem.children[0].children[3].innerText;
  return {
    dataBundleSize,
    dataBundleCost,
    dataBundleDuration,
    dataBundleInstruction
  }
}

let url = 'https://www.mtnonline.com/data-plan';

if (window.location.href === url) {
  copy(main());
}