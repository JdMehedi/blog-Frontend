// src/components/ApplicationData.js
import { useEffect, useState } from "react";
import { getToken, fetchData } from "../services/apiServices";
import { CONFIG } from "../config";
import Emonitoringlist from "../pages/Emonitoringlist";

const ApplicationData = () => {
  const [processData, setProcessingData] = useState([]);
  const [requestData, setRequestedData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmonitoringDetails = async () => { 
      try {
        const token = await getToken();

        const processingData = await fetchData(CONFIG.APP_API_URL, token, { type: "0" });
        const requestedData = await fetchData(CONFIG.APP_API_URL, token, { type: "1" });

        setProcessingData(processingData.data);
        setRequestedData(requestedData.data);
      } catch (err) {
        console.log(err)
        setError("Failed to fetch insight db Data. Please try again later.");
      }
    };
 
    fetchEmonitoringDetails(); 
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
     <Emonitoringlist processData={processData} requestData={requestData} />
    </div>
  );
};

export default ApplicationData;
