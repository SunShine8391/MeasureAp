import { imagePaths } from "@/config/image-paths";
import Image from "next/image";

interface RecentAssessmentProps {
  head: string;
  description: string;
}

export const RecentAssessment = ({
  head,
  description,
}: RecentAssessmentProps) => {
  return (
    <div className="flex flex-row w-full items-center justify-between h-14 p-3 rounded-xl bg-white">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row gap-2 items-center h-[35px] py-2 px-3 bg-[#E7974D1F] w-[267px] rounded-xl">
          <div className="font-extrabold text-orange-600 text-sm rounded-[30px]">
            {head}
          </div>
          <div className="h-[5px] w-[5px] bg-orange-700 rounded-2xl"></div>
          <div className="font-medium text-orange-600 text-sm">
            {description}
          </div>
        </div>
        <Image src={imagePaths.right} width={20} height={20} alt="" />
      </div>
    </div>
  );
};
