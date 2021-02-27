import { useState, createContext } from 'react';

const SiteContext = createContext();

const SiteContextProvider = ({children}) => {

  const [ siteLocation, setSiteLocation ] = useState('/');

  const handleSiteLocation = async (location) => {
    setSiteLocation(location); 
  }

  console.log('SiteContext, siteLocation =', siteLocation);

  return (
    <SiteContext.Provider value={{ siteLocation, handleSiteLocation }}>
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext;
export { SiteContextProvider };