import React from "react";
import { FaMemory } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";
import { MdStorage } from "react-icons/md";

interface Props {
  title: string;
  desc: string;
  type: string;
}

const StatsBox = ({ title, desc, type }: Props) => {
  return (
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/3">
      <div className="bg-gray-900 relative flex flex-col min-w-0 break-words shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-row -mx-3">
            <div className="flex-none w-4/5 max-w-full px-3">
              <div>
                <p className="mb-0 font-sans font-semibold text-sm">{title}</p>
                <h5 className="mb-0 font-bold">{desc}</h5>
              </div>
            </div>
            <div className="px-3 text-center basis-1/3">
              <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 flex justify-center items-center">
                {type === "memory" && (
                  <FaMemory className="text-2xl text-white" />
                )}
                {type === "disk" && (
                  <MdStorage className="text-2xl text-white" />
                )}
                {type === "cpu" && <FiCpu className="text-2xl text-white" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBox;
