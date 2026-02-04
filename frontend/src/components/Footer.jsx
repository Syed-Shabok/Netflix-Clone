import React from "react";

const Footer = () => {
  return (
    <div className="text-[#737373] md:px-10">
      <div className="pt-20 pb-10 w-[95%] mx-auto">
        <p>Developed by Syed Shabok</p>
        <p>
          Read about Netflix TV shows and movies and watch bonus videos on
          Tudum.com
        </p>
      </div>

      <p className="pb-5 w-[95%] mx-auto">Questions? Contact us.</p>

      <div className="w-[95%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-7 text-sm pb-10">
        <ul className="flex flex-col gap-2">
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
