import RecipeListItem from "~/components/RecipeListItem/RecipeListItem";
import { RECIPE } from "~/config/contentType";
import { IContentful } from "~/interface";
import { client } from "~/lib/client";
import { getFormattedData } from "./util";

async function getData(contentType: string): Promise<IContentful> {
  const response = await client.getEntries({
    content_type: contentType,
  });

  return response;
}

export default async function Home() {
  const data = await getData(RECIPE);
  const arrFields = getFormattedData(data);

  return (
    <main>
      {arrFields?.map((item, index) => (
        <RecipeListItem key={index} image={item.title} title={item.title} />
      ))}
    </main>
  );
}
