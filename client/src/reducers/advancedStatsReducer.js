export const advancedStatsReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_COUNTRIES_AND_PROVINCES": {
      let f = []; // f is formatted
      const res1 = Object.values(action.payload.res1);
      const res2 = Object.values(action.payload.res2);
      const len = res1.length > res2.length ? res1.length : res2.length;
      for (let i = 0; i < len; i++) {
        if (res1[i] != undefined) {
          if (f.indexOf(res1[i].county) < 0) f.push(res1[i].county);
          if (f.indexOf(res1[i].country) < 0) f.push(res1[i].country);
          if (f.indexOf(res1[i].province) < 0) f.push(res1[i].province);
          if (f.indexOf(res2[i].county) < 0) f.push(res2[i].county);
          if (f.indexOf(res2[i].country) < 0) f.push(res2[i].country);
          if (f.indexOf(res2[i].province) < 0) f.push(res2[i].province);
        } else {
          if (f.indexOf(res2[i].county) < 0) f.push(res2[i].county);
          if (f.indexOf(res2[i].country) < 0) f.push(res2[i].country);
          if (f.indexOf(res2[i].province) < 0) f.push(res2[i].province);
        }
      }
      return {
        ...state,
        allCountries_Provinces_Counties: f.filter((e) => e !== null),
        loading: false,
      };
    }
    case "SET_FETCHED_DATA": {
      return {
        ...state,
        output: {
          type: action.payload.output.type,
          param: action.payload.output.param,
          reportData: action.payload.data,
        },
        loadingFetching: false,
      };
    }
    case "RESET_OUTPUT": {
      return {
        ...state,
        output: {
          type: null,
          param: null,
          reportData: null,
        },
      };
    }
    case "RESET_HISTORICAL_DATA": {
      return {
        ...state,
        historical_data: {
          data: null,
        },
      };
    }
    case "SET_HISTORICAL_DATA": {
      let tempArr = [];
      const fo2 = Object.entries(action.payload.data.timeline).map((e) => [
        e[0],
        Object.entries(e[1]),
      ]);
      let numberDay = fo2[0][1].length;
      console.log(numberDay);
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
      console.log(tempArr);
      return {
        ...state,
        historical_data: formattedData,
      };
    }
    default:
      return state;
  }
};
