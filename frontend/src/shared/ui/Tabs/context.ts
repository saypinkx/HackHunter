import { createContext } from 'react';

export const TabsContext = createContext<{
  activeTab?: string;
  onClick?: (tabId: string) => void;
}>({});
