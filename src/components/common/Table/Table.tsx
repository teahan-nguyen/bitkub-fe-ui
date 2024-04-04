import {
  ConfigProvider,
  Table as TableAnt,
  TableProps as TableAntProps,
} from "antd";
import "./Table.css";
import Image from "next/image";

type TableProps<DataType> = TableAntProps<DataType>;

export default function Table<DataType>(props: TableProps<DataType>) {
  const { dataSource, columns, loading } = props;
  return (
    <ConfigProvider
      table={{
        className: "",
        style: {},
      }}
      theme={{
        components: {
          Table: {
            borderColor: "var(--borderColor)",
            headerBg: "var(--headerBg)",
            colorTextHeading: "var(--colorTextHeading)",
            colorBgContainer: "var(--colorBgContainer)",
            rowHoverBg: "var(--rowHoverBg)",
            colorText: "var(--colorText)",
          },
        },
      }}
    >
      <TableAnt
        // @ts-ignore: Unreachable code error
        dataSource={dataSource}
        // @ts-ignore: Unreachable code error
        columns={columns}
        pagination={false}
        loading={loading}
        locale={{
          emptyText: () => {
            return (
              <div className="h-[277px] flex justify-center items-center">
                <div>
                  <Image
                    className=" mx-auto mb-2"
                    width={122}
                    height={120}
                    src={"/Empty_Folder.png"}
                    alt=""
                  />
                  <div className="font-medium text-[14px] leading-[20px] text-neutral-1-9 mb-4 dark:text-white">
                    No results were found.
                  </div>
                </div>
              </div>
            );
          },
        }}
        {...props}
      />
    </ConfigProvider>
  );
}
