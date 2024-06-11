import {NextPage} from "next";
import {ReactNode} from "react";
import {Navbar} from "@/app/(marketing)/_components/navbar";

interface IMarketingLayoutProps {
  children: ReactNode
}

const MarketingLayout: NextPage<IMarketingLayoutProps> = ({ children}) => {
  return (
    <div className="h-full dark:bg-[#1f1f1f]">
      <Navbar />
      <main className="h-full pt-40">
        {children}
      </main>
    </div>
  );
};
export default MarketingLayout