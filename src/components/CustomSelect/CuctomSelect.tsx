import React from 'react';
import Select, { SingleValue, StylesConfig } from 'react-select';

type SelectOption = {
  value: string;
  label: string;
};

const customStyles: StylesConfig<SelectOption, false> = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? '1px solid #313237' : '1px solid #B4BDC3',
    boxShadow: 'none',
    borderRadius: 'none',
    ':hover': {
      borderColor: '#89939a',
    },
  }),
  placeholder: base => ({
    ...base,
    color: '#313237',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: '#b4bdc3',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.2s ease-in-out',
    ':hover': {
      color: '#b4bdc3',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? '#fafbfc'
      : state.isFocused
        ? '#fafbfc'
        : '#fff',
    color: state.isSelected
      ? '#313237'
      : state.isFocused
        ? '#313237'
        : '#89939A',

    ':hover': {
      color: '#313237',
      backgroundColor: '#fafbfc',
    },
  }),
};

type CustomSelectProps = {
  options: SelectOption[];
  value: SelectOption | null;
  onChange: (newValue: SingleValue<SelectOption> | null) => void;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  ...props
}) => {
  return (
    <Select
      {...props}
      styles={customStyles}
      value={value}
      onChange={onChange}
    />
  );
};
