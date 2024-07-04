"use client"

import {NextPage} from "next";
import Image from "next/image";
import {useUser} from "@clerk/shared/react";
import {Button} from "@/components/ui/button";
import {PlusCircle} from "lucide-react";
import {useMutation} from "convex/react";
import {api} from "@/convex/_generated/api";
import {toast} from "sonner";

interface IDocumentsPageProps {
}

const DocumentsPage: NextPage<IDocumentsPageProps> = () => {
  const {user} = useUser()
  const create = useMutation(api.documents.create)

  const onCreate = () => {
    const promise = create({
      title: "Untitled"
    })

    toast.promise(promise, {
      loading: "Kerla yoza deş du...",
      success: "Kerla yosa dina!",
      error: "Kerla yoza daŋ ätto ca bälla."
    })
  }

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image src={"/consultants.png"}
             alt={"empty"}
             height={300}
             width={300}
      />
      <h2 className="text-lg font-medium">
        Marşa voġiyla {user?.firstName}i Yozaŋ çu
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className={"h-4 w-4 mr-2"}/>
        Yoza dazda
      </Button>
    </div>
  );
};
export default DocumentsPage