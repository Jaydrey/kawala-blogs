"use client";
import Image from "next/image";
import { Search, Notifications, NoteAlt } from "@mui/icons-material";
import Link from "next/link";
import SearchForm from "./SearchForm";
import { usePathname } from "next/navigation";

const Header = () => {
  const paths = usePathname();
  const isActive = (path: string) => paths === path;
  return (
    <header className="w-full min-h-[90px] flex justify-between items-center sticky">
      <div className="flex items-center gap-4">
        <Link href="/">
          <div>
            <Image
              src="/logo.png"
              width={150}
              height={100}
              alt="A logo of the website written Kawala Blogs"
            />
          </div>
        </Link>
        <div className="hidden md:block">
          <SearchForm />
        </div>
      </div>
      <nav className="flex">
        <ul className="flex gap-6">
          <li className="md:hidden" key="search">
            <Link href="/search" aria-label="search blogs">
              <Search
                className={`text-gray-500 ${
                  isActive("/search") ? "text-gray-800" : "text-gray-500"
                }`}
              />
            </Link>
          </li>
          <li key="notification">
            <Link href="/notifications" aria-label="notification">
              <Notifications
                className={`text-gray-500 ${
                  isActive("/notifications") ? "text-gray-800" : "text-gray-500"
                }`}
              />
            </Link>
          </li>
          <li key="write">
            <Link href="/write" aria-label="write blog">
              <NoteAlt
                className={`text-gray-500 ${
                  isActive("/write") ? "text-gray-800" : "text-gray-500"
                }`}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
