"use client"

import {FC, ReactNode} from 'react';
import {useTheme} from "next-themes";
import EmojiPicker, {EmojiStyle, Theme} from "emoji-picker-react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

interface IIconPickerProps {
  onChange: (icon: string) => void
  children?: ReactNode
  asChild?: boolean
}

export const IconPicker: FC<IIconPickerProps> = (
  {
    asChild,
    children,
    onChange
  }
) => {
  const {resolvedTheme} = useTheme()
  const currentTheme = (resolvedTheme || "light") as keyof typeof themeMap

  const themeMap = {
    "dark": Theme.DARK,
    "light": Theme.LIGHT
  }

  const theme = themeMap[currentTheme]

  return (
    <Popover>
      <PopoverTrigger asChild={asChild}>
        {children}
      </PopoverTrigger>
      <PopoverContent className={"p-0 w-full border-none shadow-none"}>
        <EmojiPicker height={350}
                     theme={theme}
                     onEmojiClick={(data) => onChange(data.emoji)}
                     emojiStyle={EmojiStyle.APPLE}
        />
      </PopoverContent>
    </Popover>
  )
};