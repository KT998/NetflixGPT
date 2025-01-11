import React from "react";
import { setLanguageSelectValue } from "../../slice/configSlice";
import { useDispatch } from "react-redux";
import { langSelectOptions } from "../../utils/langConstants";

const LanguageSelect = () => {
  const dispatch = useDispatch();
  const selectChangeHandler = (event) => {
    dispatch(setLanguageSelectValue(event.target.value));
  };
  return (
    <select
      className="text-white bg-purple-700 hover: border rounded-lg h-[45px] mr-4 px-2"
      onChange={(e) => selectChangeHandler(e)}
    >
      {langSelectOptions.map((lang) => (
        <option
          key={lang.identifier}
          value={lang.identifier}
          className="hover:bg-red-700"
        >
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;
