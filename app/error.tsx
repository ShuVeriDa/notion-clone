"use client"

import {NextPage} from "next";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

interface IErrorProps {
}

const Error: NextPage<IErrorProps> = () => {
  return (
    <div className={"h-full flex flex-col items-center justify-center space-y-4"}>
      <h2 className={"text-xl font-medium"}>
        Something went wrong!
      </h2>
      <Button asChild>
        <Link href={"/documents"}>
          Go back
        </Link>
      </Button>
    </div>
  );
};
export default Error