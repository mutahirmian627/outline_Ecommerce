import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl pt-10 text-center border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-20">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
      <div className="flex flex-col justify-center items-start gap-6 ">
        <p className="font-semibold text-xl text-gray-600">OUR STORE</p>
        <p className="text-gray-500">602 6th road <br />rawalpindi, Isb</p>
        <p className="text-gray-500"> Tel: 03236022290 <br /> Email: mianmutahir8786@gmail.com</p>
        <p className="font-semibold text-xl text-gray-600">Careers</p>
        <p className="text-gray-500">Learn more about us.</p>
        <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore why</button>
      </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
