import React, { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
import {
  WORLD_REPORT,
  CONTINENT_NORTH_AMERICA,
  CONTINENTS,
  GET_COUNTRIES,
  GET_ALL_COUTRIES_REPORT,
  INDIVIDUAL_COUNTRY_REPORT,
  HISTORICAL_COUNTRY,
} from "../constants";
import { homeReducer } from "../reducers/homeReducer";

export const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {
  const [updateAllData, setU] = useState(true);
  const [homeState, dispatch] = useReducer(homeReducer, {
    loading: true,
    outputAll: null,
    countries: [],
    loadingCountries: true,
    regions: [],
    loadingRegion: true,
    region: null,
    loadRegionReport: true,
    regionReport: null,
    countriesAndCode: [],
    allcountriesReports: [],
    //search box
    target: null,
    searchCountriesResult: [],
    show: false,

    //individual country report
    idvReport: null,
    loadingIdvReport: true,

    // historical country data
    historical_data: {
      data: null,
      name: null,
    },
    formattedHistoricalData: {
      data: null,
      name: null,
    },
  });
  // search historical days idv country
  useEffect(() => {
    console.log(homeState.historical_data);
  }, [homeState.historical_data]);
  const fetchHistoricalCountry = (countryName, lastdays) => {
    axios
      .get(`${HISTORICAL_COUNTRY}${countryName}?lastdays=${lastdays}`)
      .then((res) => {
        dispatch({
          type: "SET_HISTORICAL_COUNTRY",
          payload: { data: res.data, name: countryName },
        });
      });
  };
  //reset data for historical_data and formatted historical_data
  const resetHistoricalData = () => {
    dispatch({ type: "RESET_HISTORICAL_DATA" });
  };

  // toast afer send email:
  const [emailToast, setEmailToast] = useState({
    message: "Email sent! Admin will response ASAP! 🥰",
    show: false,
  });
  //captcha
  const [captchaVerified, setCaptchaVerified] = useState(false);

  //email modal
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [delayShowCaptcha, setDelayShowCaptcha] = useState(false);
  // close search results
  const closeSearchResult = () => {
    dispatch({ type: "CLOSE_SEARCH_RESULT" });
  };

  // submit search box
  const findSearchedCountry = (e, searchWord) => {
    e.preventDefault();

    if (searchWord == "") dispatch({ type: "CLOSE_SEARCH_RESULT" });
    else
      dispatch({
        type: "FIND_SEARCH_COUNTRIES",
        payload: { searchWord: searchWord, target: e.target },
      });
  };
  // reset data after 10 minutes
  useEffect(() => {
    const time = setInterval(() => {
      setU(!updateAllData);
    }, 600000);
    return () => clearInterval(time);
  });
  //covid all case
  useEffect(() => {
    dispatch({ type: "LOADING", payload: true });
    axios.get(`${WORLD_REPORT}`).then((res) => {
      dispatch({ type: "OUTPUT_ALL", payload: res.data });
    });
    dispatch({ type: "LOAD_REGION_REPORT" });
    axios.get(`${CONTINENT_NORTH_AMERICA}`).then((res) => {
      dispatch({ type: "SET_REGION_REPORT", payload: res.data });
    });
    axios
      .get("https://covid-tracker-jerng.herokuapp.com/api/getCountries")
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "SET_COUNTRIES_AND_FLAG",
          payload: res.data.data.Response,
        });
      });
    axios.get(`${GET_ALL_COUTRIES_REPORT}`).then((res) => {
      dispatch({ type: "GET_ALL_COUTRIES_REPORT", payload: res.data });
    });
  }, [updateAllData]);

  //fetch report for individual country
  const fetchIndividualReport = (countryName) => {
    axios.get(`${INDIVIDUAL_COUNTRY_REPORT}${countryName}`).then((res) => {
      dispatch({ type: "INDIVIDUAL_COUNTRY_REPORT", payload: res.data });
    });
  };
  // fetch region and report base on region name
  const funcRegionReport = (regionName) => {
    dispatch({ type: "LOADING_REGION_REPORT" });
    axios
      .get(
        `${CONTINENTS}${
          regionName == "Australia/Oceania" ? "oceania" : regionName
        }?strict=false`
      )
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "SET_REGION_REPORT", payload: res.data });
      });
  };

  // fetch all 6 regions
  const loadRegions = (e) => {
    e.preventDefault();
    dispatch("LOADING_REGION");
    axios.get(`${CONTINENTS}`).then((res) => {
      dispatch({
        type: "SET_REGION",
        payload: res.data.map((each) => each.continent),
      });
    });
  };

  const homeContextData = {
    homeState,
    loadRegions,
    funcRegionReport,
    findSearchedCountry,
    closeSearchResult,
    fetchIndividualReport,
    //email modal
    showEmailModal,
    setShowEmailModal,
    // email toast
    emailToast,
    setEmailToast,
    //captcha
    captchaVerified,
    setCaptchaVerified,
    delayShowCaptcha,
    setDelayShowCaptcha,
    //historical_data
    fetchHistoricalCountry,
    resetHistoricalData,
  };

  return (
    <HomeContext.Provider value={homeContextData}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
