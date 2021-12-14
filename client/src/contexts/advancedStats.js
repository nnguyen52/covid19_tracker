import React, { useEffect, useState, useReducer, createContext } from "react";
import axios from "axios";
import {
  GET_ALL_COUNTRIES_AND_PROVINCES,
  GET_ALL_COUNTIES,
  GET_ALL_COUNTIES_WORLDOM,
  HISTORICAL_COUNTRY,
  INDIVIDUAL_COUNTRY_REPORT,
} from "../constants";
import { advancedStatsReducer } from "../reducers/advancedStatsReducer";
export const AdvancedStatsContext = createContext();
const AdvancedStatsProvider = ({ children }) => {
  const [advancedStats, dispatch] = useReducer(advancedStatsReducer, {
    loading: true,
    allCountries_Provinces_Counties: [],
    //input type: province or state or country
    output: {
      type: null,
      param: null,
      reportData: null,
    },
    loadingFetching: true,
    historical_data: {
      data: null,
      name: null,
    },
  });
  const fetchHistoricalData = (param, lastDays) => {
    console.log(param, lastDays);
    axios
      .get(`${HISTORICAL_COUNTRY}${param}?lastdays=${lastDays}`)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "SET_HISTORICAL_DATA",
          payload: { data: res.data, name: param },
        });
      })
      .catch((err) => {
        // dispatch({ type: "ERROR_HIDE_CHART" });
        console.log(err);
      });
  };
  useEffect(() => {
    axios.get(GET_ALL_COUNTRIES_AND_PROVINCES).then((res) => {
      axios.get(GET_ALL_COUNTIES).then((res2) => {
        dispatch({
          type: "SET_ALL_COUNTRIES_AND_PROVINCES",
          payload: { res1: res.data, res2: res2.data },
        });
      });
    });
  }, []);
  const resetHistoricalData = () => {
    dispatch({ type: "RESET_HISTORICAL_DATA" });
  };
  //reset output
  const resetOuput = () => {
    dispatch({ type: "RESET_OUTPUT" });
  };

  const findReportRegardless = (input) => {
    //get county (jucsee ver)
    //get state (worldom ver)? wrong
    //get country (worldom ver)? wrong

    axios
      .get(`${GET_ALL_COUNTIES}${input}`)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "SET_FETCHED_DATA",
          payload: {
            data: Object.entries(res.data[0]),
            output: { param: input, type: "countyJhucsse" },
          },
        });
      })
      .catch((err) => {
        //get country(worldom ver)
        console.log("failed get states jhuc");
        console.log(`${INDIVIDUAL_COUNTRY_REPORT}${input}`);
        axios
          .get(`${INDIVIDUAL_COUNTRY_REPORT}${input}`)
          .then((res) => {
            console.log(res.data);
            dispatch({
              type: "SET_FETCHED_DATA",
              payload: {
                data: res.data,
                output: { param: input, type: "countryWorlddom" },
              },
            });
          })
          .catch((err) => {
            console.log("failed get country worldom");
            console.log(`${GET_ALL_COUNTIES_WORLDOM}${input}`);

            axios
              .get(`${GET_ALL_COUNTIES_WORLDOM}${input}`)
              .then((res) => {
                console.log(res.data);
                dispatch({
                  type: "SET_FETCHED_DATA",
                  payload: {
                    data: res.data,
                    output: { param: input, type: "countyWorlddom" },
                  },
                });
              })
              .catch((err) => {
                console.log("server error");
                dispatch({
                  type: "SET_FETCHED_DATA",
                  payload: {
                    data: null,
                    output: { param: input, type: "fetch_failed" },
                  },
                });
              });
          });
      });
  };
  const advancedStatsContextData = {
    advancedStats,
    findReportRegardless,
    resetOuput,
    fetchHistoricalData,
    resetHistoricalData,
  };
  return (
    <AdvancedStatsContext.Provider value={advancedStatsContextData}>
      {children}
    </AdvancedStatsContext.Provider>
  );
};
export default AdvancedStatsProvider;
