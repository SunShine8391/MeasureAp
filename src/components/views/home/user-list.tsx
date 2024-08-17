import { imagePaths } from "@/config/image-paths";
import Image from "next/image";

export const UserList = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-3">
        <Image src={imagePaths.avatar01} height={42} width={42} alt="" />
        <div className="flex flex-col text-left gap-1">
          <div className="font-medium text-xs text-[#6C7278]">Welcome Back</div>
          <div className="text-[#1A1C1E] text-base font-bold">Dr. Johnson</div>
        </div>
      </div>
      <div className="flex flex-col text-right gap-1">
        <div className="font-medium text-xs text-[#6C7278]">Monday</div>
        <div className="text-[#1A1C1E] text-base font-bold">16 April, 2024</div>
      </div>
    </div>
  );
};
