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

// 期望结果：
let result = [
  { id: '1', name: '父节点1' },
  { id: '1-1', name: '子节点1-1' },
  { id: '1-1-1', name: '子节点1-1-1' },
  { id: '1-1-2', name: '子节点1-1-2' },
  { id: '1-1-1-1', name: '子节点1-1-1-1' },
  { id: '1-1-1-2', name: '子节点1-1-1-2' },
  { id: '2', name: '父节点2' },
  { id: '2-1', name: '子节点2-1' }
]


// 第一种写法
const list = [];
function treeToList1(trees) {
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
      treeToList1(tree.children);
    } else {
      return;
    }
  });
  console.log("list=>", list);
  return list;
}
treeToList1(data);

// 第二种写法
function treeToList2(data) {
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

// treeToList2(data);
