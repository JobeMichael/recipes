import { RECIPE } from "~/config/contentType";
import { IContentful } from "~/interface";
import { client } from "~/lib/client";
import Recipe from "~/module/Recipe/Recipe";
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
      <Recipe recipes={arrFields} />
    </main>
  );
}
