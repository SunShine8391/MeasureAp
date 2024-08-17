"use client";

import { Button } from "@/components/ui/button";
import { HiMiniPlus } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import routes from "@/config/routes";

export default function Home() {
  const router = useRouter();
  const [cognitive, setCognitive] = useState<string>("");
  const [applicable, setApplicable] = useState<string>("");
  const [patient, setPatient] = useState<string>("");

  return (
    <>
      <div
        className="p-5 flex flex-col gap-10 w-full"
        style={{ height: "calc(100vh - 76px)" }}
      >
        <div className="flex flex-row gap-[63px] items-center">
          <Button variant={"link"} onClick={() => router.back()}>
            <HiChevronLeft size={24} className="text-[#1A1C1E]" />
          </Button>
          <div className="font-extrabold text-base">New assessment</div>
        </div>
        <div className="flex flex-col gap-[33px]">
          <div className="flex flex-col gap-1">
            <div className="text-gray-600 font-bold text-sm">
              Cognitive status
            </div>
            <Select
              value={cognitive}
              onValueChange={(value) => setCognitive(value)}
            >
              <SelectTrigger
                className={`${
                  cognitive ? "text-[#1A1C1E]" : "text-gray-600"
                } w-full h-14 rounded-[7px] font-medium text-base border-gray-200}`}
              >
                <SelectValue placeholder="Select cognitive status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Cognition">Cognition</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <div
              className={`${
                cognitive ? "text-gray-600" : "text-gray-400"
              } font-bold text-sm`}
            >
              Applicable measures
            </div>
            <Select
              disabled={cognitive.length === 0}
              value={applicable}
              onValueChange={(value) => setApplicable(value)}
            >
              <SelectTrigger
                className={`${
                  applicable ? "text-[#1A1C1E]" : "text-gray-600"
                } w-full h-14 rounded-[7px] font-medium text-base border-gray-200}`}
              >
                <SelectValue placeholder="Select applicable measures" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">SLUMS</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <div
              className={`${
                applicable ? "text-gray-600" : "text-gray-400"
              } font-bold text-sm`}
            >
              Patient
            </div>
            <Select
              disabled={applicable.length === 0}
              value={patient}
              onValueChange={(value) => setPatient(value)}
            >
              <SelectTrigger
                className={`${
                  patient ? "text-[#1A1C1E]" : "text-gray-600"
                } w-full h-14 rounded-[7px] font-medium text-base border-gray-200}`}
              >
                <SelectValue placeholder="Enter patient name or ID" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">John Smith</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="bottom-0 fixed w-full px-5 pb-5">
        <Button
          disabled={
            patient.length === 0 ||
            applicable.length === 0 ||
            cognitive.length === 0
          }
          className="flex flex-row gap-1 items-center rounded-[70px] h-14 w-full"
          onClick={() => router.push(routes.home.complete)}
        >
          <HiMiniPlus size={20} />
          <div className="font-bold text-lg">New assessment</div>
        </Button>
      </div>
    </>
  );
}
