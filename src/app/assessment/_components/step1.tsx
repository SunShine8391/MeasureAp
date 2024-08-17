import { Button } from "@/components/ui/button";
import { useState } from "react";

interface StepProps {
  onSetStep: (value: number) => void;
}

export const Step1 = ({ onSetStep }: StepProps) => {
  const [correct, setCorrect] = useState<boolean>(true);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-[14px] justify-center items-center">
        <div className="font-bold text-[#1A1C1E] text-[22px]">
          How many fingers do you see?
        </div>
        <div className="font-medium text-[#6C7278] text-sm max-w-[276 px] text-center">
          Please show the patient a certain amount of fingers and follow their
          reaction.
        </div>
      </div>
      <div className="flex flex-col gap-[13px]">
        <Button
          variant={"outline"}
          className={`${
            correct ? "border-orange-700" : "border-[#DCE4E8]"
          } p-4 rounded-[13px] h-[77px] text-[#1A1C1E] font-bold text-lg justify-start`}
          onClick={() => setCorrect(true)}
        >
          Correct
        </Button>
        <Button
          variant={"outline"}
          className={`${
            correct ? "border-[#DCE4E8]" : "border-orange-700"
          } p-4 rounded-[13px] h-[77px] text-[#1A1C1E] font-bold text-lg justify-start`}
          onClick={() => setCorrect(false)}
        >
          Incorrect
        </Button>
      </div>
      <div className="bottom-0 fixed w-full pb-5 pr-10">
        <Button
          className="items-center rounded-[70px] w-full h-14 px-6 py-[13px] font-bold text-lg"
          onClick={() => onSetStep(2)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
