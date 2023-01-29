const data = [
  {
    id: "1",
    name: "父节点1",
    children: [
      {
        id: "1-1",
        name: "子节点1-1",
        children: [
          {
            id: "1-1-1",
            name: "子节点1-1-1",
          },
          {
            id: "1-1-2",
            name: "子节点1-1-2",
            children: [
              {
                id: "1-1-1-1",
                name: "子节点1-1-1-1",
              },
              {
                id: "1-1-1-2",
                name: "子节点1-1-1-2",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "父节点2",
    children: [
      {
        id: "2-1",
        name: "子节点2-1",
      },
    ],
  },
];

// 第一种写法
const list = [];
function treeToList(trees) {
  // 获取树结点内容，写入 list
  const convertList = (tree) => {
    const node = {};
    node.id = tree.id;
    node.name = tree.name;
    list.push(node);
  };
  // 循环处理每个数组项
  trees.forEach((tree) => {
    convertList(tree);
    // 如果该项有children属性，继续递归
    if (tree.children) {
      treeToList(tree.children);
    } else {
      return;
    }
  });
  return list;
}
// treeToList(data);
// console.log("list=>", list);

// 第二种写法
function treeToList(data) {
  let res = [];
  // 直接递归遍历到该数组项最深层
  const dfs = (tree) => {
    tree.forEach((item) => {
      // 如果有 children 属性，继续递归
      if (item.children) {
        dfs(item.children);
        delete item.children;
      }
      // 如果本层没有 children 属性，则直接推入 res
      res.push(item);
    });
  };
  dfs(data);
  console.log("res", res);
  return res;
}

// treeToList(data);
