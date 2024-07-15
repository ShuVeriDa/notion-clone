"use client"

import {FC} from 'react';
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {useParams} from "next/navigation";
import {Id} from "@/convex/_generated/dataModel";
import {MenuIcon} from "lucide-react";
import {Title} from "@/app/(main)/_components/title";
import {Banner} from "@/app/(main)/_components/banner";
import {Menu} from "@/app/(main)/_components/menu";

interface INavbarProps {
  isCollapsed: boolean,
  onResetWidth: () => void,
}

export const Navbar: FC<INavbarProps> = (
  {
    isCollapsed,
    onResetWidth
  }
) => {
  const params = useParams()

  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">
  })

  if (document === undefined) {
    return (
      <nav className="bg-background dark:bg-[#1f1f1f] px-3 py-2 w-full flex items-center justify-between">
        <Title.Skeleton/>
        <div className={"flex items-center gap-x-2"}>
          <Menu.Skeleton />
        </div>
      </nav>
    )
  }

  if (document === null) {
    return null
  }

  return (
    <>
      <nav className={"bg-background dark:bg-[#1f1f1f] px-3 py-2 w-full flex items-center gap-x-4"}>
        {isCollapsed && (
          <MenuIcon role={"button"}
                    onClick={onResetWidth}
                    className={"h-6 w-6 text-muted-foreground"}
          />
        )}
        <div className={"flex items-center justify-between w-full"}>
          <Title initialData={document}/>
          <div className={"flex items-center gap-x-2"}>
            <Menu documentId={document._id}/>
          </div>
        </div>
      </nav>
      {document.isArchived && (
        <Banner documentId={document._id}/>
      )}
    </>
  );
};