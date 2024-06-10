import Image from "next/image";
import { Search, Notifications, NoteAlt } from "@mui/icons-material";

const Header = () => {
  return (
    <header className="w-full min-h-[90px] flex justify-between items-center sticky">
      <div>
        <a href="/">
          <div>
            <Image
              src="/logo.png"
              width={150}
              height={100}
              alt="A logo of the website written Kawala Blogs"
            />
          </div>
        </a>
      </div>
      <nav className="flex">
        <ul className="flex gap-6">
          <li>
            <a href="/search" aria-label="search blogs">
              <Search className="text-gray-500" />
            </a>
          </li>
          <li>
            <a href="/notifications" aria-label="notification">
              <Notifications className="text-gray-500" />
            </a>
          </li>
          <li>
            <a href="/write" aria-label="write blog">
              <NoteAlt className="text-gray-500" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
