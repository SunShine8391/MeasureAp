"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import { RecentAssessment } from "@/components/views/home/recent-assessment";
import { RecentAssessmentLists } from "@/config/constants";
import { UserList } from "@/components/views/home/user-list";
import { Button } from "@/components/ui/button";
import { HiMiniPlus } from "react-icons/hi2";
import Image from "next/image";
import { imagePaths } from "@/config/image-paths";
import { useRouter } from "next/navigation";
import routes from "@/config/routes";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div className="w-[375px]">
        <div
          className="p-5 flex flex-col w-full justify-between"
          style={{ height: "calc(100vh - 56px)" }}
        >
          <UserList />
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-row items-center justify-between">
              <div className="text-[#1A1C1E] font-bold text-lg">
                Recent assessments
              </div>
              <div className="flex flex-row gap-1.5 justify-center items-center cursor-pointer">
                <div className="font-bold text-xs text-[#6C7278]">See more</div>
                <HiArrowNarrowRight className="h-3.5 w-3.5 text-[#6C7278]" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {RecentAssessmentLists.map((assessment, index) => (
                <RecentAssessment
                  key={index}
                  head={assessment.head}
                  description={assessment.description}
                />
              ))}
            </div>
          </div>
          <Button
            className="flex flex-row gap-1 items-center rounded-[70px] h-14"
            onClick={() => router.push(routes.home.details)}
          >
            <HiMiniPlus size={20} />
            <div className="font-bold text-lg">New assessment</div>
          </Button>
        </div>
        <div className="bottom-0 fixed w-full max-w-[375px]">
          <div className="h-14 flex flex-row gap-1.5 justify-around bg-white px-8">
            <div className="flex flex-col justify-center items-center w-15 cursor-pointer">
              <Image src={imagePaths.home} height={24} width={24} alt="" />
              <div className="font-medium text-xs text-gray-600">Home</div>
            </div>
            <div className="flex flex-col justify-center items-center w-15 cursor-pointer">
              <Image src={imagePaths.patient} height={24} width={24} alt="" />
              <div className="font-medium text-xs text-gray-600">Patients</div>
            </div>
            <div className="flex flex-col justify-center items-center w-15 cursor-pointer">
              <Image src={imagePaths.history} height={24} width={24} alt="" />
              <div className="font-medium text-xs text-gray-600">History</div>
            </div>
            <div className="flex flex-col justify-center items-center w-15 cursor-pointer">
              <Image src={imagePaths.settings} height={24} width={24} alt="" />
              <div className="font-medium text-xs text-gray-600">Settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
