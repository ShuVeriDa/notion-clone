import {FC} from 'react';
import {Logo} from "@/app/(marketing)/_components/logo";
import {Button} from "@/components/ui/button";

interface IFooterProps {
}

export const Footer: FC<IFooterProps> = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1f1f1f]">
      <Logo />
      <div className="md:ml-auto w-full flex justify-between md:justify-end items-center gap-x-2 text-muted-foreground">
        <Button size={"sm"} variant={"ghost"}>Privacy Policy</Button>
        <Button size={"sm"} variant={"ghost"}>Terms & Conditions</Button>
      </div>
    </div>
  );
};