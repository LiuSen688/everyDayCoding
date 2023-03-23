// 生成SKU
// 已知规格数据
const spu = "AB1234567";
const specList = [
  ["red", "yellow"],
  ["XL", "S"],
  ["a1", "a2"],
  ["b1", "b2"],
];

/** 
  输出结果：
 AB1234567-red-XL-a1-b1;
 AB1234567-red-XL-a1-b2;
 AB1234567-red-XL-a2-b1;
 AB1234567-red-XL-a2-b2;
 AB1234567-red-S-a1-b1;
 AB1234567-red-S-a1-b2;
 AB1234567-red-S-a2-b1;
 AB1234567-red-S-a2-b2;
 AB1234567-yellow-XL-a1-b1;
 AB1234567-yellow-XL-a1-b2;
 AB1234567-yellow-XL-a2-b1;
 AB1234567-yellow-XL-a2-b2;
 AB1234567-yellow-S-a1-b1;
 AB1234567-yellow-S-a1-b2;
 AB1234567-yellow-S-a2-b1;
 AB1234567-yellow-S-a2-b2;
  ....
*/

// 请完善如下createSKU函数及注释信息以符合输出结果;
/**
 * @param
 * @return
 */
function createSKU(specList) {
    let tmpStr = '';
    for(let i = 0;i<specList.length;i++) {
        
    }
}
