import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center w-screen h-screen bg-[#ffde5c72]">
      <div className="relative z-10 flex items-center justify-center text-center ">
        <h1 className="jt --debug">
          <span className="jt__row">
            <span className="jt__text">Something new is coming</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Something new is coming</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Something new is coming</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text ">Something new is coming</span>
          </span>
        </h1>
      </div>
      <div className="absolute z-10 flex bottom-5  w-[350px] justify-between cursor-pointer">
        <a
          href=""
          className="hover:text-white transition bg-[black] hover:bg-[#29Ac4A] p-3 rounded-full text-[#29AC4A]"
        >
          <FontAwesomeIcon
            className="font-bold w-[35px]  h-[35px] "
            icon={faInstagram}
          />
        </a>
        <a
          href=""
          className="hover:text-white transition bg-[black] hover:bg-[#29Ac4A] p-3 rounded-full text-[#29AC4A]"
        >
          <FontAwesomeIcon
            className="font-bold w-[35px]  h-[35px] "
            icon={faXTwitter}
          />
        </a>
        <a
          href=""
          className="hover:text-white transition bg-[black] hover:bg-[#29Ac4A] p-3 rounded-full text-[#29AC4A]"
        >
          <FontAwesomeIcon
            className="font-bold w-[35px]  h-[35px] "
            icon={faYoutube}
          />
        </a>
        <a
          href=""
          className="hover:text-white transition bg-[black] hover:bg-[#29Ac4A] p-3 rounded-full text-[#29AC4A]"
        >
          <FontAwesomeIcon
            className="font-bold w-[35px]  h-[35px] "
            icon={faEnvelope}
          />
        </a>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center z-[-10">
        <div className="w-[40vw] h-[40vw] image"></div>
      </div>
    </main>
  );
}
