import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text:sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <a href="/"><li>Home</li></a>
            <a href="/about"><li>About us</li></a>
            <a href="/collection"><li>Collection</li></a>
            <a href="/contact"><li>Contact</li></a>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a href="tel:03236022290" className="hover:underline">
                03236022290
              </a>
            </li>
            <li>
              <a
                href="mailto:mianmutahir8786@gmail.com"
                className="hover:underline"
              >
                mianmutahir8786@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ outline.com - All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
