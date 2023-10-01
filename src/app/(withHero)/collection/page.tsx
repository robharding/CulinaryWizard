import RecipeCollection from "@/components/RecipeCollection";
import { getUserAuth } from "@/lib/auth/utils";
import type { NextPage } from "next";
import { getServerSession } from "next-auth";
import { RedirectType, redirect } from "next/navigation";

interface CollectionPageProps {}

const CollectionPage: NextPage<CollectionPageProps> = async ({}) => {
  const { session } = await getUserAuth();
  if (!session?.user) {
    console.log("redirecting");
    redirect("/sign-in", RedirectType.push);
  }

  return (
    <>
      <RecipeCollection />
    </>
  );
};

export default CollectionPage;
