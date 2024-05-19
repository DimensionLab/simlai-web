import { RichTextSchema, type ISbNode } from "@storyblok/react/rsc";
import cx from "classnames";
import cloneDeep from "clone-deep";

export const customRichTextSchema = cloneDeep(RichTextSchema);

customRichTextSchema.nodes.heading = (node: ISbNode) => ({
  tag: [
    {
      tag: `h${node.attrs.level}`,
      attrs: {
        class: cx("font-bold", {
          "text-white text-2xl": node.attrs.level === 1,
          "text-white text-xl": node.attrs.level === 2,
          "text-white text-lg": node.attrs.level === 3,
          "text-white text-base": node.attrs.level === 4,
          "text-white text-sm": node.attrs.level === 5,
          "text-white text-xs": node.attrs.level === 6,
        }),
      },
    },
  ],
});

customRichTextSchema.nodes.paragraph = () => {
  return {
    tag: [
      {
        tag: "p",
        attrs: {
          class: "text-white",
        },
      },
    ],
  };
};

customRichTextSchema.nodes.image = (node: ISbNode) => {
  return {
    tag: [
      {
        tag: "img",
        attrs: {
          ...node.attrs,
          class: "w-full",
        },
      },
    ],
  };
};

customRichTextSchema.marks.link = (node: ISbNode) => {
  node.attrs.class = "text-white underline";
  return RichTextSchema.marks.link(node);
};

customRichTextSchema.marks.code = (node: ISbNode) => {
    return {
        tag: [
          {
            tag: "code",
            attrs: {
                ...node.attrs,
              class: "text-white after:content-[''] before:content-['']",
            },
          },
        ],
      };
  };

