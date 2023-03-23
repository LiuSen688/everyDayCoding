const obj = {
  amount: 100,
  tax_rate: 0.03,
  product_list: {
    order_id: 188,
    product_name: "进阶学习",
    children_obj: {
      end: "结束",
    },
  },
};

// const res = {
//     amount:100,
//     taxRate:0.03,
//     productList:{
//         orderId:188,
//         productName:'进阶学习',
//         childrenObj:{
//             end:'结束'
//         }
//     }
// }

const translate = (obj) => {
  let res = {};
  if (obj.constructor != Object) {
    return obj;
  }
  Object.keys(obj).forEach((key) => {
    let index = key.indexOf("_");
    let tmpObj = obj[key];
    if (index == -1) {
      res[key] = translate(tmpObj);
    } else {
      let deleteStr = key.slice(index, index + 2);
      let replaceStr = key.slice(index + 1)[0].toUpperCase();
      // console.log("replaceStr: ", replaceStr);
      let tmpKey = key.replace(deleteStr, replaceStr);
      res[tmpKey] = translate(obj[key]);
    }
  });
  //   console.log("res: ", res);
  return res;
};

console.log(translate(obj));
