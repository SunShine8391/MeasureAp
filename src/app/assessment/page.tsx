"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { HiChevronLeft } from "react-icons/hi";
import { useState } from "react";
import { Step1 } from "./_components/step1";
import { Step2 } from "./_components/step2";
import { Step3 } from "./_components/step3";
import { Step4 } from "./_components/step4";
import { Step5 } from "./_components/step5";

export default function AssessmentPage() {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  return (
    <>
      <div className="p-5 flex flex-col gap-16">
        <div className="flex flex-row gap-[63px] items-center">
          <Button variant={"link"} onClick={() => router.back()}>
            <HiChevronLeft size={24} className="text-[#1A1C1E]" />
          </Button>
          <div className="font-extrabold text-base">New assessment</div>
        </div>
        <div className="flex flex-row gap-2.5 justify-center">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className={`h-1.5 w-10 rounded-[50px]`}
              style={{
                backgroundColor: index < step ? "#1A1C1E" : "#DCE4E8",
              }}
            />
          ))}
        </div>
        {step === 1 ? (
          <Step1 onSetStep={(value) => setStep(value)} />
        ) : step === 2 ? (
          <Step2 onSetStep={(value) => setStep(value)} />
        ) : step === 3 ? (
          <Step3 onSetStep={(value) => setStep(value)} />
        ) : step === 4 ? (
          <Step4 onSetStep={(value) => setStep(value)} />
        ) : step === 5 ? (
          <Step5 onSetStep={(value) => setStep(value)} />
        ) : null}
      </div>
    </>
  );
}
