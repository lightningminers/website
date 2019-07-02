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
    name: "来用 SVG 和 CSS 画朵云彩吧",
    url: "https://zhuanlan.zhihu.com/p/71775049",
    date: "2019-06-30"
  },
  {
    id: createUUID(),
    name: "async/await应知应会",
    url: "https://zhuanlan.zhihu.com/p/70556182",
    date: "2019-06-24"
  },
  {
    id: createUUID(),
    name: "How to make your HTML responsive by adding a single line of CSS",
    url: "https://zhuanlan.zhihu.com/p/69809343",
    date: "2019-06-19",
    author: "hanxiansen"
  },
  {
    id: createUUID(),
    name: "Using SVG",
    url: "https://zhuanlan.zhihu.com/p/69306347",
    date: "2019-06-15",
    author: "chenmf"
  },
  {
    id: createUUID(),
    name: "A Guide to Node.js Logging",
    url: "https://zhuanlan.zhihu.com/p/68755650",
    date: "2019-06-11",
    author: "icepy"
  },
  {
    id: createUUID(),
    name: "前端组件设计原则",
    url: "https://zhuanlan.zhihu.com/p/67050593",
    date: "2019-05-26"
  },
  {
    id: createUUID(),
    name: "CSS中z-index的工作原理解析",
    url: "https://zhuanlan.zhihu.com/p/67050413",
    date: "2019-05-26"
  },
  {
    id: createUUID(),
    name: "React Hooks Tutorial",
    url: "https://zhuanlan.zhihu.com/p/67050282",
    date: "2019-05-26"
  },
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