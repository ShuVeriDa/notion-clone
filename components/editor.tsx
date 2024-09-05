"use client"

import {BlockNoteEditor, PartialBlock} from "@blocknote/core";
import {useTheme} from "next-themes";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
import {useCreateBlockNote} from "@blocknote/react";
import {BlockNoteView} from "@blocknote/mantine";
import {useMutation} from "convex/react";
import {api} from "@/convex/_generated/api";
import {useEdgeStore} from "@/lib/edgestore";

interface IEditorProps {
  onChange: (value: string) => void;
  initialContent?: string
  editable?: boolean
}

const Editor = (
  {
    editable,
    initialContent,
    onChange
  }: IEditorProps
) => {
  const {resolvedTheme} = useTheme()
  const {edgestore} = useEdgeStore()

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file
    })

    return response.url
  }

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
    uploadFile: handleUpload,
  })

  return (
    <div>
      <BlockNoteView editor={editor}
                     theme={resolvedTheme === "dark" ? "dark" : "light"}
                     onChange={() => onChange(JSON.stringify(editor.document, null, 2))}
                     editable={editable}

      />
    </div>
  );
};

export default Editor