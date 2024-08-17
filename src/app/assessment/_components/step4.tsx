import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AssessmentStep4List } from "@/config/constants";
import { AssessmentStep4Item } from "@/config/type";
import Image from "next/image";
import { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";

interface StepProps {
  onSetStep: (value: number) => void;
}

export const Step4 = ({ onSetStep }: StepProps) => {
  const [animalList, setAnimalList] = useState<AssessmentStep4Item[]>([]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-[14px] justify-center items-center pb-4">
        <div className="font-bold text-[#1A1C1E] text-2xl">
          Identify the animals
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="font-medium text-[#6C7278] text-sm max-w-[262px] text-center">
            Please show the patient the following animals and check their
            response.
          </div>
        </div>
      </div>
      {AssessmentStep4List.map((item: AssessmentStep4Item) => (
        <>
          <div className="border border-solid border-[#DCE4E8]" />
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-3 items-center justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Image
                    src={item.imagePath}
                    height={67}
                    width={67}
                    alt=""
                    className="cursor-pointer"
                  />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] border-0 bg-transparent">
                  <Image src={item.imagePath} height={322} width={322} alt="" />
                </DialogContent>
              </Dialog>

              <div className="font-bold text-[#1A1C1E] text-base">
                {item.label}
              </div>
            </div>
            <Switch
              className={`${
                animalList.some((obj) => obj.value === item.value)
                  ? "!bg-[#EA7E41]"
                  : "!bg-[#BAC1CC]"
              } h-[30px]`}
              onClick={() =>
                setAnimalList((prev) =>
                  prev.some((obj) => obj.value === item.value)
                    ? prev.filter((obj) => obj.value !== item.value)
                    : [
                        ...prev,
                        {
                          imagePath: item.imagePath,
                          label: item.label,
                          value: item.value,
                        },
                      ]
                )
              }
            />
          </div>
        </>
      ))}
      <div className="flex flex-row gap-2.5 bottom-0 fixed w-full pb-5 pr-10">
        <Button
          variant={"outline"}
          className="rounded-[70px] w-[86] h-14 px-6 py-[13px] border-gray-400"
          onClick={() => onSetStep(3)}
        >
          <HiChevronLeft size={24} className="text-[#1A1C1E]" />
        </Button>
        <Button
          className="items-center rounded-[70px] w-full h-14 px-6 py-[13px] font-bold text-lg"
          onClick={() => onSetStep(5)}
        >
          Finish
        </Button>
      </div>
    </div>
  );
};
