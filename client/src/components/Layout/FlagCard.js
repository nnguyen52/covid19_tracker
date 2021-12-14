import React, { useContext, useState, useEffect } from "react";
import { HomeContext } from "../../contexts/homeContext";

const FlagCard = ({ each }) => {
  const [code, setC] = useState();
  const {
    homeState: { countriesAndCode },
  } = useContext(HomeContext);
  useEffect(async () => {
    const contri = await countriesAndCode.find((ea) => ea.name == each);
    contri?.flag == undefined ? setC("no flag") : setC(contri.flag);
  }, [each]);
  if (code == undefined) return "no image";
  return (
    <img
      src={`https://www.countryflags.io/${code}/flat/64.png`}
      alt="flag image"
    />
  );
};

export default FlagCard;
