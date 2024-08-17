import { Button } from "@/components/ui/button";
import { HiChevronLeft } from "react-icons/hi";

interface StepProps {
  onSetStep: (value: number) => void;
}

export const Step3 = ({ onSetStep }: StepProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-[14px]">
        <div className="text-[#6C7278] font-medium text-sm text-center">
          Recall question:
        </div>
        <div className="text-[#1A1C1E] font-bold text-2xl text-center">
          Read the sentences
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-[#6C7278] text-sm font-medium">
          Proin ultrices fringilla et scelerisque sed duis massa nulla. Eget
          arcu urna ipsum in neque ornare. Integer placerat rhoncus purus est ut
          ultrices. Pharetra amet faucibus tincidunt mattis in enim. Duis
          pharetra integer adipiscing quisque elementum lacus porta. Sit diam
          aliquam quisque purus tortor.
        </div>
        <div className="text-[#6C7278] text-sm font-medium">
          Ut turpis consectetur massa libero. Habitant lobortis dictum pretium
          et tortor facilisi in enim porttitor. Purus porta pulvinar sit
          ultrices aliquam ultrices lacus quam. Gravida etiam facilisis enim
          purus ornare quis donec leo dignissim. Etiam at non aliquam quis.{" "}
        </div>
        <div className="text-[#6C7278] text-sm font-medium">
          Pellentesque pellentesque at amet vitae turpis hac in. Felis eu purus
          vel interdum accumsan lorem dictu.
        </div>
      </div>
      <div className="flex flex-row gap-2.5 bottom-0 fixed w-full pb-5 pr-10">
        <Button
          variant={"outline"}
          className="rounded-[70px] w-[86] h-14 px-6 py-[13px] border-gray-400"
          onClick={() => onSetStep(2)}
        >
          <HiChevronLeft size={24} className="text-[#1A1C1E]" />
        </Button>
        <Button
          className="items-center rounded-[70px] w-full h-14 px-6 py-[13px] font-bold text-lg"
          onClick={() => onSetStep(4)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
