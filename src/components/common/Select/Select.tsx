import { Select as SelectAntLib, Spin } from "antd";
import { DefaultOptionType } from "antd/es/select";

import { isEmpty } from "lodash";
import { FocusEventHandler, useMemo, useState } from "react";

import Image from "next/image";
import Label from "../Input/Label";
import { cn } from "@/utils/tailwindUtils";
import FormError from "../Input/FormError";
import SVGArrowDownSelect from "@/components/svgs/SVGArrowDownSelect";
import SVGInputClearWithHover from "@/components/svgs/SVGInputClearWithHover";
import "./Select.css";

interface SelectAntProps {
  open?: boolean;
  size?: "small" | "middle" | "large";
  id?: string;
  labelRequired?: boolean;
  name: string;
  options: DefaultOptionType[];
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  selectClassName?: string;
  label?: string;
  labelClassName?: string;
  isMulti?: boolean;
  value: string | undefined;
  setValue: (_data: string | undefined) => any;
  onBlur?: FocusEventHandler<HTMLElement>;
  allowClear?: boolean;
  loading?: boolean;
  customFooter?: any;
  isSearchable?: boolean;
  onFocus?: () => void;
  onClear?: () => void;
  optionFilterProp?: string;
}

export default function Select({
  open,
  size = "middle",
  options,
  name,
  error = "",
  placeholder = "",
  disabled = false,
  className = "",
  selectClassName = "",
  label,
  labelClassName,
  id,
  labelRequired = false,
  isMulti = false,
  onBlur,
  value,
  setValue,
  allowClear = true,
  customFooter,
  loading,
  isSearchable = false,
  onFocus = undefined,
  onClear,
  optionFilterProp = "label",
}: SelectAntProps) {
  const [isOpen, setIsOpen] = useState(false);

  const computedId = useMemo(() => {
    return id ?? name ?? "";
  }, [id, name]);

  return (
    <div className={cn(`ant-select-wrapper w-full text-left`, className)}>
      <Label
        label={label}
        labelRequired={labelRequired}
        labelClassName={labelClassName}
        htmlFor={computedId}
      />

      <SelectAntLib
        suffixIcon={
          <div className="flex justify-center items-center w-[25px] h-[25px] overflow-hidden">
            <SVGArrowDownSelect
              isSmall={size === "small"}
              className={cn(
                `fill-grey-100 group-hover:fill-grey-200 transition`,
                isOpen
                  ? error
                    ? "fill-red-500 group-hover:fill-red-500"
                    : "fill-green-500 group-hover:fill-green-500"
                  : "",
              )}
            />
          </div>
        }
        size={size}
        // open={true}
        allowClear={
          allowClear
            ? {
                // clearIcon: <SVGInputClearWithHover className=" right-14 top-6" onClick={() => {}} />,
                clearIcon: (
                  <div className="flex justify-center items-center w-[25px] h-[25px] overflow-hidden transform translate-x-[-13px] translate-y-[-6px] ">
                    <SVGInputClearWithHover onClick={() => {}} />
                  </div>
                ),
              }
            : false
        }
        loading={loading}
        rootClassName={`ant-bitkub-select group ${
          error ? "ant-bitkub-select-error" : ""
        }`}
        showSearch={isSearchable}
        optionFilterProp={optionFilterProp}
        id={computedId}
        className={cn(`w-full`, selectClassName)}
        value={(() => {
          return isEmpty(value) || !value ? undefined : value;
        })()}
        onChange={(data) => {
          setValue(data);
        }}
        options={options}
        placeholder={placeholder}
        disabled={disabled}
        mode={isMulti ? "multiple" : undefined}
        onBlur={onBlur}
        onFocus={onFocus}
        onClear={onClear}
        notFoundContent={
          loading ? (
            <div className="flex items-center justify-center w-full h-[80px]">
              <Spin size="small" />
            </div>
          ) : (
            <div className="p-[16px] text-center">
              <Image
                className=" mx-auto mb-2"
                width={80}
                height={80}
                src={"/Empty_Folder.png"}
                alt=""
              />
              <div className="font-medium text-[14px] leading-[20px] text-slate-700 dark:text-slate-200 mb-4">
                No results were found.
              </div>
            </div>
          )
        }
        open={open}
        onDropdownVisibleChange={(open) => {
          const isOpenMenuAction = open === true;
          setIsOpen(isOpenMenuAction);
        }}
        dropdownRender={(menu) => {
          return (
            <>
              {menu}
              {customFooter && (
                <div className="py-[10px] px-[14px]">{customFooter}</div>
              )}
            </>
          );
        }}
      />
      {error && <FormError errorMessage={error} />}
    </div>
  );
}
