import {useState,useEffect} from "react"
import Freecurrencyapi from '@everapi/freecurrencyapi-js';


function useCurrencyInfo(baseCurrency)
{
    // const [baseCurrency,setBaseCurrency] = useState("")
    const [convertedCurrencies,setConvertedCurrencies] = useState("")

    useEffect(() => {

        const fetchData = fetchDataAndLogResponse();
        // console.log(fetchData instanceof Promise)
        fetchData
        .then((result) => {
            // convertedCurrencies(result.data)
            console.log("result data")
            console.log(Object.keys(result.data))
            console.log(result.data)
            setConvertedCurrencies(result.data)
            console.log("result data")
          })
          .catch((error) => {
            console.error('Error fetching data:', error)
          })
          

        console.log("Hello");

        
    }, [baseCurrency]); // Add dependencies

    return convertedCurrencies; // Return the state for external usage
}
export default useCurrencyInfo;

async function fetchData() {
    return new Promise((resolve, reject) => {
      const oReq = new XMLHttpRequest();
  
      oReq.addEventListener("load", function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(this.responseText);
        } else {
          reject(new Error(`Request failed with status ${this.status}`));
        }
      });
  
      oReq.addEventListener("error", function () {
        reject(new Error("Network error"));
      });
  
      oReq.open("GET", "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_2zduhZ0OmTkEB3C2sYJKO6c0YWeyRXJfqXFF6b4M");
      oReq.send();
    });
  }
  
  async function fetchDataAndLogResponse() {
    try {
      const responseText = await fetchData();
      console.log( JSON.parse(responseText));
      console.log( responseText);
      return JSON.parse(responseText);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call fetchDataAndLogResponse to initiate the request
//  