/* eslint-disable */
import EditIcon from "@/components/svgs/Edit";
import TrashIcon from "@/components/svgs/Trash";
import { EStatusBadge } from "@/enums";

interface CardProps {
  label: string;
  title: string;
  statusBadge?: EStatusBadge;
  data: string;
  handleFirstButton?: () => void;
  firstButtonTitle: string;
  handleSecondButton?: () => void;
  secondButtonTitle: string;
}

export const Card = ({
  label,
  title,
  statusBadge = EStatusBadge.ACTIVE,
  data,
  handleFirstButton,
  firstButtonTitle,
  handleSecondButton,
  secondButtonTitle,
}: CardProps) => {
  const statusMappingClasses = {
    [EStatusBadge.ON_QUEUE]:
      "bg-[#fffdf7] text-[#F9BF1F] border border-[#F9BF1F]",
    [EStatusBadge.CRAWLING]:
      "bg-grey-50 text-[#878787CC] border border-[#878787CC]",
    [EStatusBadge.ERROR]: "bg-red-50 text-red-500 border border-red-500",
    [EStatusBadge.ACTIVE]:
      "bg-green-50 text-green-active border border-green-400",
    [EStatusBadge.INACTIVE]: "bg-grey-50 text-[#818181] border border-grey-100",
  };

  return (
    <div className="w-[250px] h-[204px] hover:bg-green-50 rounded-2xl shadow-md px-6 py-3 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-[#B6B7B9]">{label}</p>
          <div
            className={`${statusMappingClasses[statusBadge]} h-[22px] px-2 text-xs flex justify-center items-center rounded-[4px]`}
          >
            {statusBadge}
          </div>
        </div>
        <div>{title}</div>
      </div>
      <div>
        <div className="text-sm text-[#595959]">
          <div>Data Usage:</div> <div>{data}</div>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-green-50 flex justify-center items-center cursor-pointer">
              <TrashIcon />
            </div>

            <div className="w-8 h-8 rounded-full bg-green-50 flex justify-center items-center cursor-pointer">
              <EditIcon />
            </div>
          </div>
          <div className="space-y-1">
            <button
              onClick={handleFirstButton}
              className="w-[88px] h-8 bg-green-500 text-sm text-white leading-5 rounded-[10px] font-semibold flex justify-center items-center"
            >
              {firstButtonTitle}
            </button>
            <button
              onClick={handleSecondButton}
              className="w-[88px] h-8 border border-[#101015] text-sm leading-5 rounded-[10px] font-semibold flex justify-center items-center"
            >
              {secondButtonTitle}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
