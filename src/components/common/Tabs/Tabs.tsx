import { Tabs as TabsAntLib } from "antd";

type ItemTab = {
  label: any;
  children: any;
  key: any;
};

interface TabsProps {
  items: ItemTab[];
  className?: string;
  activeKey: string;
  setActiveKey: (key: string) => void;
  destroyInactiveTabPane?: boolean;
}

export default function Tabs({
  items: items,
  className,
  setActiveKey,
  activeKey,
  destroyInactiveTabPane = false,
}: TabsProps) {
  return (
    <TabsAntLib
      destroyInactiveTabPane={destroyInactiveTabPane}
      className={className}
      activeKey={activeKey}
      onChange={(key: string) => {
        setActiveKey(key);
      }}
      items={items}
    />
  );
}
