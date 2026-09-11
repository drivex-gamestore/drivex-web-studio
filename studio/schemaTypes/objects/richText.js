export default {
  name: "richText",
  title: "Rich Text",
  type: "array",
  of: [
    {
      type: "block",
      styles: [{ title: "Normal", value: "normal" }],
      lists: [],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            name: "linkField", 
            title: "Link",
            type: "link", 
          },
        ],
      },
    },
  ],
};
