import { type NodeList } from "./index";

export const questions: NodeList = [
  {
    id: "closed_source",
    is_entry: true,
    text: "基于你的代码进行修改是否可以闭源？",
    options: [
      { text: "可以", next_id: "each_file_must_be_licensed" },
      { text: "不可以", next_id: "use_the_same_license" },
    ],
  },
  {
    id: "each_file_must_be_licensed",
    text: "每个文件都必须有许可证？",
    options: [
      { text: "这是必须的", next_id: "Apache_2.0" },
      {
        text: "这不是必须的",
        next_id: "derivative_software_uses_your_name_for_promotion",
      },
    ],
  },
  {
    id: "Apache_2.0",
    is_end: true,
  },
  {
    id: "derivative_software_uses_your_name_for_promotion",
    text: "衍生软件使用你的名字进行推广？",
    options: [
      { text: "是", next_id: "MIT" },
      { text: "否", next_id: "BSD" },
    ],
  },
  {
    id: "MIT",
    is_end: true,
  },
  {
    id: "BSD",
    is_end: true,
  },
  {
    id: "use_the_same_license",
    text: "新代码必须使用相同许可证吗?",
    options: [
      { text: "是", next_id: "GPL" },
      { text: "否", next_id: "MPL" },
    ],
  },
  {
    id: "GPL",
    is_end: true,
  },
  {
    id: "MPL",
    is_end: true,
  },
];
