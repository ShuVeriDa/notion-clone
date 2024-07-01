"use client"

import {NextPage} from "next";
import Image from "next/image";
import {useUser} from "@clerk/shared/react";
import {Button} from "@/components/ui/button";
import {PlusCircle} from "lucide-react";

interface IDocumentsPageProps {
}

const DocumentsPage: NextPage<IDocumentsPageProps> = () => {
  const {user} = useUser()
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image src={"/consultants.png"}
             alt={"empty"}
             height={300}
             width={300}
      />
      <h2 className="text-lg font-medium">
        Marşa voġiyla {user?.firstName}i Yozan çu
      </h2>
      <Button>
        <PlusCircle className={"h-4 w-4 mr-2"}/>
        Yoza yazda
      </Button>
    </div>
  );
};
export default DocumentsPage