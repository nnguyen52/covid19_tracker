export const homeReducer = (state, action) => {
  switch (action.type) {
    case "LOADING": {
      return { ...state, loading: action.payload };
    }
    case "OUTPUT_ALL": {
      return { ...state, outputAll: action.payload, loading: false };
    }
    case "LOADING_REGION": {
      return { ...state, loadingRegion: true };
    }
    case "LOADING_REGION_REPORT": {
      return { ...state, loadRegionReport: true };
    }

    case "SET_REGION_REPORT": {
      return {
        ...state,
        regionReport: action.payload,
        loadRegionReport: false,
        countries: action.payload.countries,
      };
    }
    case "SET_REGION": {
      const formatted = Array.from(
        new Set(action.payload.map(JSON.stringify))
      ).map(JSON.parse);
      return { ...state, regions: formatted, loadingRegion: false };
    }
    case "SET_COUNTRIES_AND_FLAG": {
      const formatted = action.payload.map((e) => ({
        name: e.Name,
        flag: e.Alpha2Code,
      }));
      return { ...state, countriesAndCode: formatted };
    }

    case "GET_ALL_COUTRIES_REPORT": {
      return {
        ...state,
        allcountriesReports: action.payload,
      };
    }
    case "FIND_SEARCH_COUNTRIES": {
      const foundSearchCountries = state.allcountriesReports.filter((each) =>
        each.country
          .toLowerCase()
          .replace(/\s/g, "")
          .trim()
          .includes(
            action.payload.searchWord.trim().toLowerCase().replace(/\s/g, "")
          )
      );
      return {
        ...state,
        target: action.payload.target,
        searchCountriesResult: foundSearchCountries,
        show: true,
      };
    }
    case "CLOSE_SEARCH_RESULT": {
      return { ...state, show: false };
    }
    case "INDIVIDUAL_COUNTRY_REPORT": {
      return { ...state, idvReport: action.payload, loadingIdvReport: false };
    }
    case "SET_HISTORICAL_COUNTRY": {
      let tempArr = [];
      console.log(action.payload);
      const fo2 = Object.entries(action.payload.data.timeline).map((e) => [
        e[0],
        Object.entries(e[1]),
      ]);
      let numberDay = fo2[0][1].length;
      if (fo2.length == 3) {
        for (let i = 0; i < numberDay; i++) {
          tempArr.push({
            name: `${fo2[0][1][i][0]}`,
            cases: `${fo2[0][1][i][1]}`,
            deaths: `${fo2[1][1][i][1]}`,
            recovery: `${fo2[2][1][i][1]}`,
          });
        }
      } else {
        for (let i = 0; i < numberDay; i++) {
          tempArr.push({
            name: `${fo2[0][1][i][0]}`,
            cases: `${fo2[0][1][i][1]}`,
            deaths: `${fo2[1][1][i][1]}`,
          });
        }
      }

      const formattedData = {
        data: tempArr,
        name: action.payload.name,
      };
      console.log(formattedData.data);
      return {
        ...state,
        historical_data: action.payload,
        formattedHistoricalData: formattedData,
      };
    }
    case "RESET_HISTORICAL_DATA": {
      return {
        ...state,
        historical_data: {
          data: null,
          name: null,
        },
        formattedHistoricalData: {
          data: null,
          name: null,
        },
      };
    }
    default:
      return state;
  }
};
