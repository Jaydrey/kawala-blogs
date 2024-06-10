import Image from "next/image";
import { Search, Notifications, NoteAlt } from "@mui/icons-material";

const Header = () => {
  return (
    <header
    className="w-[90%] mx-auto min-h-[100px] flex justify-between"
    >
      <div>
        <div>
          <Image
            src="/logo.png"
            width={150}
            height={100}
            alt="A logo of the website written Kawala Blogs"
          />
        </div>
      </div>
      <nav
      className="flex"
      >
        <ul
        className="flex gap-6"
        >
          <li>
            <div>
                <Search />
            </div>
          </li>
          <li>
            <div>
                <Notifications />
            </div>
          </li>
          <li>
            <div>
                <NoteAlt />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
