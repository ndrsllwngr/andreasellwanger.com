import React from 'react'
import {ThemeChanger} from "@/components/theme-changer";

export const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row items-center justify-between my-12">
        <p className="">© 2021</p>
        <div className="flex flex-row items-center justify-center">
          <ThemeChanger/>
        </div>
      </div>
    </div>
  );
};
