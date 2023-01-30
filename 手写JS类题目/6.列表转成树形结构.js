const list = [
  { id: "1", name: "父节点1", parentId: undefined },
  { id: "1-1", name: "子节点1-1", parentId: "1" },
  { id: "1-1-1", name: "子节点1-1-1", parentId: "1-1" },
  { id: "1-1-2", name: "子节点1-1-2", parentId: "1-1" },
  { id: "2", name: "父节点2", parentId: undefined },
  { id: "2-1", name: "子节点2-1", parentId: "2" },
];

// 递归参数：每次要对比的列表，父节点id，结点的子结点数组
function listTotree(list, id, children) {
  // 去列表里寻找结点父节点的id值与传入的id一样的项
  list.forEach((item) => {
    if (item.parentId === id) {
      // 加入父结点数组中
      children.push(item);
    }
  });
  // 寻找本层次结点的子节点数组
  children.forEach((child) => {
    // 创建接收本层次结点 子结点的数组
    child.children = [];
    // 递归
    listTotree(list, child.id, child.children);
    if (child.children.length === 0) {
      delete child.children;
    }
  });

  return children;
}

console.log(listTotree(list, undefined, []));

// function deepClone(value) {
//   if (typeof value === "object" && value !== null) {
//     const result = Array.isArray(value) ? [] : {};
//     for (const key in value) {
//       result[key] = deepClone(value[key]);
//     }
//     return result;
//   }
//   return value;
// }
// const result = deepClone(data2).reduce(function (acc, cur, idx, arr) {
//   // 检索当前元素的子元素; tips: 此时操作cur会改变arr本身
//   cur.cildren = arr.filter((item) => item.parentId === cur.id);
//   // 判断是否为根元素
//   return arr.filter((item) => !item.parentId);
// }, []);

// console.log(result);
