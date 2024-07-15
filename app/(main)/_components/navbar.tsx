"use client"

import {FC} from 'react';
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {useParams} from "next/navigation";
import {Id} from "@/convex/_generated/dataModel";
import {MenuIcon} from "lucide-react";
import {Title} from "@/app/(main)/_components/title";

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
      <nav className="bg-background dark:bg-[#1f1f1f] px-3 py-2 w-full flex items-center">
        <Title.Skeleton />
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
          <Title initialData={document} />
        </div>
      </nav>
    </>
  );
};