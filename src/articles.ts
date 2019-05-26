import createUUID from "usedjs/lib/createUUID";

export interface IArticle {
  id: string;
  name: string;
  url: string;
  date: string;
}

export type Articles = IArticle;

const articles = [
  {
    id: createUUID(),
    name: "创造性的使用 Console API！",
    url: "https://zhuanlan.zhihu.com/p/67048106",
    date: "2019-05-25"
  },
  {
    id: createUUID(),
    name: "v8 release v7.5",
    url: "https://zhuanlan.zhihu.com/p/66898244",
    date: "2019-05-24"
  },
  {
    id: createUUID(),
    name: "7个有用的JavaScript技巧",
    url: "https://zhuanlan.zhihu.com/p/65775445",
    date: "2019-05-13"
  },
  {
    id: createUUID(),
    name: "使用 Jest 和 Enzyme 测试 React 组件",
    url: "https://zhuanlan.zhihu.com/p/63297384",
    date: "2019-04-22"
  },
  {
    id: createUUID(),
    name: "理解 JavaScript 中的循环",
    url: "https://zhuanlan.zhihu.com/p/62246809",
    date: "2019-04-12"
  },
  {
    id: createUUID(),
    name: "ES5 to ESNext —  自 2015 以来 JavaScript 新增的所有新特性",
    url: "https://zhuanlan.zhihu.com/p/59535309",
    date: "2019-03-17"
  }
];

export default articles;