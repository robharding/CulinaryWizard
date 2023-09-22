import RecipeCollection from "@/components/RecipeCollection";
import { getUserAuth } from "@/lib/auth/utils";
import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface CollectionPageProps {}

const CollectionPage: NextPage<CollectionPageProps> = async ({}) => {
  return (
    <>
      <RecipeCollection />
    </>
  );
};

export default CollectionPage;
