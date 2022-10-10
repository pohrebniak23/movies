import React, { ReactNode } from "react";
import { Tab, Tabs as TabsContainer, TabList, TabPanel } from "react-tabs";
import "./Tabs.sass";

type Props = {
  tabsList: {
    label: string;
    component: ReactNode;
  }[];
};

export const Tabs: React.FC<Props> = ({ tabsList }) => {
  return (
    <TabsContainer>
      <TabList>
        {tabsList.map((item: any) => (
          <Tab key={item.label}>{item.label}</Tab>
        ))}
      </TabList>

      {tabsList.map((item: any) => (
        <TabPanel key={item.label}>{item.component}</TabPanel>
      ))}
    </TabsContainer>
  );
};
