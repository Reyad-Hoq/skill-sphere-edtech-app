import footerImg from "@/assets/logo3.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer footer-horizontal footer-center text-neutral w-9/12 mx-auto  p-10">
        <aside>
          <Image
            src={footerImg}
            width={300}
            height={100}
            alt="footer-logo" />
          <p >
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
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

      </footer>
      <footer className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 text-neutral/60 text-sm border-t border-neutral/40 p-10 w-9/12 mx-auto">
        <aside className="grid-flow-col items-center">
          <p>© {new Date().getFullYear()} SkillSphere All right reserved</p>
        </aside>

        <div className="grid grid-flow-col gap-4">
          <a>
            Privacy Policy
          </a>
          <a>
            Terms of Service
          </a>
          <a>
            Cookies
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;