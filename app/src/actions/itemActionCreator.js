
export function submitItem(itemName) {
  // http://ma3tk.hateblo.jp/entry/2016/06/20/182232
  // これによると通信はここでするみたい
  // axios.post('/items').then((response) => {
  //   console.log(response);
  // }).catch((response) => {
  //   console.log(response);
  // });
  return {
    type: "SUBMIT_ITEM",
    itemName: itemName,
  };
}

