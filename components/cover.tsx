"use client"

import {FC} from 'react';
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {ImageIcon, X} from "lucide-react";
import {useCoverImage} from "@/hooks/use-cover-image";
import {useMutation} from "convex/react";
import {api} from "@/convex/_generated/api";
import {useParams} from "next/navigation";
import {Id} from "@/convex/_generated/dataModel";

interface ICoverProps {
  url?: string
  preview?: boolean
}

export const Cover: FC<ICoverProps> = (
  {
    url,
    preview
  }
) => {
  const params = useParams()
  const coverImage = useCoverImage()
  const removeCoverImage = useMutation(api.documents.removeCoverImage)

  const onRemove = () => {
    removeCoverImage({
      id: params.documentId as Id<"documents">
    })
  }

  return (
    <div className={cn(
      "relative w-full h-[35vh] group",
      !url && "h-[12vh]",
      url && "bg-muted"
    )}>
      {!!url && (
        <Image src={url}
               alt={"Cover"}
               fill
               className={"object-cover"}
        />
      )}
      {url && !preview && (
        <div className={"opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2"}>
          <Button className={"text-muted-foreground text-xs"}
                  onClick={coverImage.onOpen}
                  variant={"outline"}
                  size={"sm"}
          >
            <ImageIcon className={"h-4 w-4 mr-2"}/>
            Change cover
          </Button>

          <Button className={"text-muted-foreground text-xs"}
                  onClick={onRemove}
                  variant={"outline"}
                  size={"sm"}
          >
            <X className={"h-4 w-4 mr-2"}/>
            Remove
          </Button>

        </div>
      )}
    </div>
  );
};