import React from "react";

interface NavbarProps {
  options: string[];
  currentOption?: string;
  onChangeOption?: (new_option: string) => void;
}

let Navbar: React.FC<NavbarProps> = ({
  options,
  currentOption = "",
  onChangeOption,
}: NavbarProps) => {
  return (
    <nav className="w-4/5 bg-blue-100 flex flex-wrap justify-evenly py-2 my-4 rounded-3xl mx-auto">
      {options.map((option) => {
        if (option === currentOption)
          return (
            <button key={option} className="font-bold">
              {option}
            </button>
          );
        else
          return (
            <button
              key={option}
              onClick={() => {
                onChangeOption && onChangeOption(option);
              }}
            >
              {option}
            </button>
          );
      })}
    </nav>
  );
};

Navbar = React.memo(Navbar);
export default Navbar;
