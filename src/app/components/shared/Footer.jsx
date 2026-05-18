import footerImg from "@/assets/logo.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-green-50">
      <footer className="footer footer-horizontal footer-center text-neutral w-full md:w-9/12 mx-auto p-4">
        <aside>
          <Image
            src={footerImg}
            width={400}
            height={100}
            alt="footer-logo" />
          <p className="w-9/12 mx-auto text-center text-neutral/70">
            SkillSphere is an online learning platform designed to help learners build real-world skills through interactive courses and practical projects.
          </p>
        </aside>
        <nav>
          <h6 className="text-neutral text-lg font-semibold">Social Links</h6>
          <div className="grid grid-flow-col gap-4 text-base-100">
            <div className="bg-neutral w-7 h-7 flex items-center justify-center rounded-full">
              <a>
                <RiInstagramFill className="h-4 w-4" />
              </a>
            </div>
            <div className="bg-neutral w-7 h-7 flex items-center justify-center rounded-full">
              <a>
                <FaFacebookSquare className="h-4 w-4" />
              </a>
            </div>
            <div className="bg-neutral                              w-7 h-7 flex items-center justify-center rounded-full">
              <a>
                <FaXTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </nav>
        <div className="text-center mt-3">
          <h6 className="text-lg font-semibold mb-2 text-neutral/60">
            Contact Info
          </h6>
          <div className="flex flex-col md:flex-row gap-2 text-[16px] text-neutral/70">
            <div className="flex items-center gap-2 justify-center">
              <MdEmail />
              <span>support@skillsphere.com</span>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <MdPhone />
              <span>+880 1XXXXXXXXX</span>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <MdLocationOn />
              <span>Dhaka, Bangladesh</span>
            </div>

          </div>
        </div>
      </footer>
      <footer className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 text-neutral/60 text-[16px] border-t border-neutral/40 p-6 w-9/12 mx-auto">

        <aside className="grid-flow-col items-center">
          <p>© {new Date().getFullYear()} SkillSphere All right reserved</p>
        </aside>

        <div className="grid grid-flow-col gap-4">
          <Link href={"/privacy-policy"} className="hover:text-neutral transition">
            Privacy Policy
          </Link>
          <Link href={"/terms-of-service"} className="hover:text-neutral transition">
            Terms of Service
          </Link>
          <Link href={"/cookies"} className="hover:text-neutral transition">
            Cookies
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;