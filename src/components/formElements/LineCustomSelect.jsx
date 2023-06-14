/* eslint-disable react/prop-types */
import { useState } from 'react';
import { RxCaretRight } from 'react-icons/rx';

const SelectItem = ({ label, value, name, handleOptionClick  }) => {
  const id = `radio-${name}-${value}`;

  const handleClick = () => {
    handleOptionClick(value);
  };

  return (
    <div className="px-4 py-2 cursor-pointer group" onClick={handleClick}>
      <input
        id={id}
        type="radio"
        name={name}
        className="hidden"
        value={value}
      />
      <label htmlFor={name} className="flex items-center cursor-pointer group-hover:text-primary">
        <span className="w-4 h-4 inline-block rounded-full border border-gray-500 mr-5 group-hover:border-primary"></span>
        {label}
      </label>
    </div>
  );
};

const LineCustomSelect = ({ options, onSelect, placeholder }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (value) => {
      console.log("select value", value)
      setSelectedOption(value);
      onSelect(value);
      setIsOpen(false);
    };

  return (
    <div className="relative inline-block w-full">
    <div
    className="w-full outline-none px-0 py-[10px] cursor-pointer border-b focus-within:border-primary border-solid border-[#737373] focus:border-primary/30 flex justify-between items-center"
    onClick={toggleDropdown}
    >
      <span className=" text-gray-400">{selectedOption || placeholder}</span>
      <RxCaretRight className={` ${isOpen ? 'rotate-90':''} text-xl transition-all ease-linear `}/>
    </div>
    {isOpen && (
      <div className="w-full z-20 absolute mt-1 py-5 px-5 bg-white border border-gray-300 rounded-md shadow-lg ">
          {options.map((option) => (
            <SelectItem
              key={option.value}
              label={option.label}
              value={option.value}
              name="selectOption"
              handleOptionClick={handleOptionClick}
            />
          ))}
      </div>
    )}
</div>
  )
}


 
export default LineCustomSelect