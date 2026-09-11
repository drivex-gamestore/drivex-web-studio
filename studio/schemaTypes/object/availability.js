export default {
  name: "availability",
  title: "Availability",
  type: "object",
  fields: [
    {
      name: "isAvailable",
      title: "Is Available",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "text",
      title: "Availability Text",
      type: "text",
      rows: 2,
    },
  ],
};