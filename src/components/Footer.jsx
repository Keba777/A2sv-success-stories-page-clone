import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="">
      <h3 className="flex  justify-center mb-6">Follow us on Social Media</h3>
      <div className="flex space-x-10 justify-center mb-5">
        <span className=" p-2 rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer">
          <AiOutlineMail color="#ff0000" className="w-6 h-6" />
        </span>
        <span className=" p-2 rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer">
          <AiFillLinkedin color="#0077B5" className="w-6 h-6" />
        </span>
        <span className=" p-2 rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer">
          <BsInstagram color="#bc2a8d" className="w-6 h-6" />
        </span>
        <span className=" p-2 rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer">
          <BsFacebook color="#1877F2" className="w-6 h-6" />
        </span>
        <span className=" p-2 rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer">
          <BsTwitter color="#1DA1F2" className="w-6 h-6" />
        </span>
        <span className=" p-2 rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer">
          <BsYoutube color="#FF0000" className="w-6 h-6" />
        </span>
      </div>
      <div className="border-t-2 mb-5">
        <p className="mt-4 flex justify-center text-sm font-light">
          &copy; Copyright 2023{" "}
          <strong className="px-1"> A2SV Foundation.</strong> All rights
          reserved.{" "}
          <a
            href="https://a2sv.org/privacy-policy"
            className="px-1 text-blue-900"
          >
            Privacy Policy
          </a>
          |{" "}
          <a
            href="https://a2sv.org/cookie-policy"
            className="px-1 text-blue-900"
          >
            Cookie Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
