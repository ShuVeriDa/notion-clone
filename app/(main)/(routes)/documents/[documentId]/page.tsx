"use client"

import {NextPage} from "next";
import {Id} from "@/convex/_generated/dataModel";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {Toolbar} from "@/components/toolbar";
import {Cover} from "@/components/cover";

interface IDocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  }
}

const DocumentIdPage: NextPage<IDocumentIdPageProps> = (
  {
    params
  }
) => {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId
  })

  if (document === undefined) {
    return <div>
      Loading...
    </div>
  }

  if (document === null) {
    return <div>Not found</div>
  }

  return (
    <div className={"pb-40"}>
     <Cover url={document.coverImage} />
      <div className={"md:max-w-3xl lg:max-w-4xl mx-auto"}>
        <Toolbar initialData={document}/>
      </div>
    </div>
  );
};
export default DocumentIdPage