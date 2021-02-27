import { useContext, useEffect } from 'react';
import SiteContext from "../SiteContext";

const useSiteLocation = (location) => {

  const { handleSiteLocation } = useContext(SiteContext);

  // console.log(location);
  useEffect(() => {
      handleSiteLocation(location.pathname);
      
  }, [handleSiteLocation, location.pathname]);

}

export default useSiteLocation;