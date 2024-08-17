"use client";

import { imagePaths } from "@/config/image-paths";
import routes from "@/config/routes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AssessmentComplete() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(routes.assessment.dashboard);
    }, 1500);
  }, []);

  return (
    <div className="flex flex-col gap-2 pt-24 items-center justify-center">
      <Image src={imagePaths.loading} width={288} height={200} alt="" />
      <div className="text-[#1A1C1E] font-extrabold text-base">
        Loading assessment
      </div>
    </div>
  );
}
