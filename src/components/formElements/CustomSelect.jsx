/* eslint-disable react/prop-types */
import { useState } from 'react';

const CustomSelect = ({ options, onSelect, value, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (value) => {
      setSelectedOption(value);
      onSelect(value);
      setIsOpen(false);
    };
  
  return (
    <div className="relative inline-block w-full">
        <div
        className="w-full outline-none px-5 py-4 rounded-md border border-solid border-secondary/10 focus:border-primary/30 flex justify-between items-center"
        onClick={toggleDropdown}
        >
          <span className=' text-text'>{selectedOption || placeholder}</span>
        </div>
        {isOpen && (
          <div className="w-full z-20 absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg ">
              {options.map((option) => (
              <div
                  key={option.value}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-200"
                  onClick={() => handleOptionClick(option.value)}
              >
                  {option.label}
              </div>
              ))}
          </div>
        )}
    </div>
  )
}

export default CustomSelect