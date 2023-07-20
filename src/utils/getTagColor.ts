export const getTagColor = (tag: string) => {
  switch (tag) {
    case "gluten free":
      return "green";
    case "dairy free":
      return "blue";
    case "vegan":
      return "purple";
    default:
      return "gray";
  }
};
