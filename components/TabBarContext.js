import React, { createContext, useState } from 'react';

const TabBarContext = createContext();

const TabBarProvider = ({ children }) => {
  const [tabBarIcons, setTabBarIcons] = useState({});

  const setTabBarIcon = (routeName, icon) => {
    setTabBarIcons({ ...tabBarIcons, [routeName]: icon });
  };

  return (
    <TabBarContext.Provider value={{ tabBarIcons, setTabBarIcon }}>
      {children}
    </TabBarContext.Provider>
  );
};

export { TabBarContext, TabBarProvider };