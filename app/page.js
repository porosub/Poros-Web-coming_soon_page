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
    <main className="relative flex flex-col items-center justify-center w-screen h-screen px-[1rem] bg-[#ffde5c72]">
      <div className="relative z-10 flex items-center justify-center text-center ">
        <h1 className="jt text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[8rem] xl:text-[9rem] 2xl:text=[10rem] ">
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
      <div className="absolute z-10 bottom-5 flex flex-col gap-3 w-[250px] max-md:w-[175px]">
        <div className="flex justify-between ">
          <a
            href="https://www.instagram.com/porosfilkom/"
            target="_blank"
            className="hover:text-white cursor-pointer transition bg-[black] hover:bg-[#29Ac4A] p-3 rounded-full text-[#29AC4A] "
          >
            <FontAwesomeIcon
              className="font-bold w-[35px] h-[35px] max-md:w-[20px] max-md:h-[20px]"
              icon={faInstagram}
            />
          </a>
          <a
            href="https://twitter.com/poros_ub"
            target="_blank"
            className="hover:text-white cursor-pointer transition bg-[black] hover:bg-[#29Ac4A] p-3 rounded-full text-[#29AC4A] "
          >
            <FontAwesomeIcon
              className="font-bold w-[35px] h-[35px] max-md:w-[20px] max-md:h-[20px]"
              icon={faXTwitter}
            />
          </a>
          <a
            href="https://www.youtube.com/@POROSUB"
            target="_blank"
            className="hover:text-white cursor-pointer transition bg-[black] hover:bg-[#29Ac4A] p-3 rounded-full text-[#29AC4A] "
          >
            <FontAwesomeIcon
              className="font-bold w-[35px] h-[35px] max-md:w-[20px] max-md:h-[20px]"
              icon={faYoutube}
            />
          </a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FontAwesomeIcon
            className="font-bold w-[20px] h-[20px] max-md:w-[20px] max-md:h-[20px]"
            icon={faEnvelope}
          />{" "}
          <p className="font-['Staatliches'] tracking-[2px] lg:text-[1.25rem]">
            porosub@gmail.com
          </p>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center z-[-10">
        <div className="w-[40vw] h-[40vw] image"></div>
      </div>
    </main>
  );
}
