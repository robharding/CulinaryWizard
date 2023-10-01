import RecipeCollection from "@/components/RecipeCollection";
import { getUserAuth } from "@/lib/auth/utils";
import type { NextPage } from "next";
import { redirect } from "next/navigation";

interface CollectionPageProps {}

const CollectionPage: NextPage<CollectionPageProps> = async ({}) => {
  const { session } = await getUserAuth();
  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <>
      <RecipeCollection />
    </>
  );
};

export default CollectionPage;
