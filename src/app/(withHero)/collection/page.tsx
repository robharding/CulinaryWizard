import { getUserAuth } from "@/lib/auth/utils";
import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface CollectionPageProps {}

const CollectionPage: NextPage<CollectionPageProps> = async ({}) => {
  return <div>Your collection!</div>;
};

export default CollectionPage;
