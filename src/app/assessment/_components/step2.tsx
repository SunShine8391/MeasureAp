import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AssessmentList } from "@/config/constants";
import { AssessmentItem } from "@/config/type";
import { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";

interface StepProps {
  onSetStep: (value: number) => void;
}

export const Step2 = ({ onSetStep }: StepProps) => {
  const [all, setAll] = useState<boolean>(false);
  const [assessmentList, setAssessmentList] = useState<AssessmentItem[]>([]);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-[14px] justify-center items-center">
        <div className="font-bold text-[#1A1C1E] text-2xl">
          Story ”Jill went to the shop”
        </div>
        <div className="flex flex-col gap-0.5">
          <div
            className={`${
              all ? "" : "truncate line-clamp-2 whitespace-normal"
            } font-medium text-[#6C7278] text-sm max-w-[262px] text-center`}
          >
            Full Description: "Jill went to the shop to buy candies. Afterwards
            instead of walking home, she took a cab. When she arrived home, she
            found her cat waiting at the door. She fed her cat and then sat down
            to enjoy her candies while watching her favorite TV show. Later, she
            called her friend to share the news about her day."
          </div>
          <div
            className="text-[#FF8E00] font-extrabold text-sm text-center cursor-pointer"
            onClick={() => setAll(!all)}
          >
            Show all
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[13px]">
        {AssessmentList.map((item) => (
          <Button
            variant={"outline"}
            className={`${
              assessmentList.some((obj) => obj.value === item.value)
                ? "border-orange-700"
                : "border-[#DCE4E8]"
            } p-4 flex flex-row gap-3 border-[2px] rounded-[13px] h-[77px] justify-start`}
            onClick={() =>
              setAssessmentList((prev) =>
                prev.some((obj) => obj.value === item.value)
                  ? prev.filter((obj) => obj.value !== item.value)
                  : [...prev, { label: item.label, value: item.value }]
              )
            }
          >
            <Checkbox
              checked={assessmentList.some((obj) => obj.value === item.value)}
              className={`${
                assessmentList.some((obj) => obj.value === item.value)
                  ? "border-[#EA7E41] !bg-[#EA7E41]"
                  : "border-gray-400"
              } w-7 h-7 rounded-3xl`}
            />
            <div className="text-[#1A1C1E] font-bold text-lg">{item.label}</div>
          </Button>
        ))}
      </div>
      <div className="flex flex-row gap-2.5 bottom-0 fixed w-full pb-5 pr-10">
        <Button
          variant={"outline"}
          className="rounded-[70px] w-[86] h-14 px-6 py-[13px] border-gray-400"
          onClick={() => onSetStep(1)}
        >
          <HiChevronLeft size={24} className="text-[#1A1C1E]" />
        </Button>
        <Button
          className="items-center rounded-[70px] w-full h-14 px-6 py-[13px] font-bold text-lg"
          onClick={() => onSetStep(3)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
