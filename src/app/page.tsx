import RecipeDetailPage from "~/components/RecipeDetail/RecipeDetail";
import RecipeListItem from "~/components/RecipeListItem/RecipeListItem";
import Badge from "~/components/UI/Badge";
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
  console.log("🚀 ~ file: page.tsx:18 ~ Home ~ arrFields:", arrFields);

  return (
    <main>
      <Badge color="red">New</Badge>
      <Badge color="green">Updated</Badge>

      <RecipeDetailPage recipe={arrFields[0]} />
      {arrFields?.map((item) => (
        <RecipeListItem key={item.id} image={item.image} title={item.title} />
      ))}
    </main>
  );
}
