"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {TwitterIcon,InstagramIcon} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="flex flex-col items-center m-2 mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 sm:m-10 text-light dark:text-dark">
  
      <div className="flex items-center mt-8">
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="transition-all duration-200 hover:scale-125 ease" />
        </a>
        <a
            href={siteMetadata.instagram}
            className="inline-block w-6 h-6 mr-4"
            aria-label="Reach out to me via Instagram"
            target="_blank"
            rel="noopener noreferrer"
        >
          <InstagramIcon className="transition-all duration-200 hover:scale-125 ease" />
        </a>
      </div>


      <div className="relative flex flex-col items-center justify-center w-full px-8 py-6 mt-8 font-medium border-t border-solid border-light md:flex-row">
        <span className="text-center">
          &copy;2024 Mikanseiboys. All rights reserved.
        </span>
   

      </div>
    </footer>
  );
};

export default Footer;