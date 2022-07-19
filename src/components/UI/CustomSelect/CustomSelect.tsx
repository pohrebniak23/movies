import React from "react";
import Select from 'react-select';

type Props = {
  selectedOption: any;
  setSelectedOption: any;
  options: any;
}

const customStyles = {
  option: (provided: any) => ({
    ...provided,
    fontSize: '14px'
  }),
  control: (provided: any) => ({
    ...provided,
    padding: '10px 12px',
    border: '1px solid var(--color-gray)',
    borderRadius: '8px',
    fontSize: '14px'
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: '0px',
    margin: '0px'
  }),
  input: (provided: any) => ({
    ...provided,
    margin: '0px'
  }),
  indicatorSeparator: () => ({
    display: 'none',
    padding: '0px'
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    padding: '0px',
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

export const CustomSelect: React.FC<Props> = ({ selectedOption, setSelectedOption, options }) => {
  return (
    <Select
      styles={customStyles}
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
    />
  );
};
