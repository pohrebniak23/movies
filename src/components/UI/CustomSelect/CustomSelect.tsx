import React, { CSSProperties } from 'react';
import Select, { SingleValueProps } from 'react-select';
import { Genres } from '../../../shared/types/IFilter';

type Props = {
  selectedOption: Genres;
  setSelectedOption: any;
  options: Genres[];
};

const customStyles: any = {
  option: (provided: CSSProperties) => ({
    ...provided,
    fontSize: '14px',
  }),
  control: (provided: CSSProperties) => ({
    ...provided,
    padding: '10px 12px',
    border: '1px solid var(----additional-color)',
    borderRadius: '8px',
    fontSize: '14px',
  }),
  valueContainer: (provided: CSSProperties) => ({
    ...provided,
    padding: '0px',
    margin: '0px',
  }),
  input: (provided: CSSProperties) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
    padding: '0px',
  }),
  dropdownIndicator: (provided: CSSProperties) => ({
    ...provided,
    padding: '0px',
  }),
  singleValue: (provided: CSSProperties, state: SingleValueProps) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

export const CustomSelect: React.FC<Props> = ({
  selectedOption,
  setSelectedOption,
  options,
}) => {
  return (
    <Select
      styles={customStyles}
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
    />
  );
};
