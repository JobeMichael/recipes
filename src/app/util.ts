import { IContentful, IRecipe } from "~/interface";

export const getFormattedData = (data: IContentful): IRecipe[] => {
  return (
    data?.items?.map((item, id) => {
      const recipe = item.fields;
      const tags = recipe.tags?.map((tag) => tag.fields.name) || [];
      const chefId = recipe.chef?.sys?.id;
      const chef = chefId
        ? data.includes?.Entry?.find((entry) => entry.sys?.id === chefId)
            ?.fields
        : null;

      return {
        id,
        title: recipe.title,
        image: recipe.photo?.fields?.file?.url || "",
        tags,
        description: recipe.description,
        chefName: chef?.name || "",
      };
    }) || []
  );
};
