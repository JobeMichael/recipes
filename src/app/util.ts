import { IContentful } from "~/interface";

export const getFormattedData = (data: IContentful) => {
  return (
    data?.items?.map((item) => {
      const recipe = item.fields;
      const tags = recipe.tags?.map((tag) => tag.fields.name) || [];
      const chefId = recipe.chef?.sys?.id;
      const chef = chefId
        ? data.includes?.Entry?.find((entry) => entry.sys?.id === chefId)
            ?.fields
        : null;

      return {
        title: recipe.title,
        image: recipe.photo?.fields?.file?.url || "",
        tags,
        description: recipe.description,
        chefName: chef?.name || "",
      };
    }) || []
  );
};
