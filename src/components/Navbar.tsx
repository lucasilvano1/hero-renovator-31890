import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <svg
            className="h-5 w-auto hidden sm:block"
            viewBox="0 0 284 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#logo-gradient)"
              fillRule="evenodd"
              d="M40 8.5H18A9.5 9.5 0 0 0 8.5 18v22a9.5 9.5 0 0 0 9.5 9.5h22a9.5 9.5 0 0 0 9.5-9.5V18A9.5 9.5 0 0 0 40 8.5ZM18 0C8.059 0 0 8.059 0 18v22c0 9.941 8.059 18 18 18h22c9.941 0 18-8.059 18-18V18c0-9.941-8.059-18-18-18H18Z"
              clipRule="evenodd"
            />
            <defs>
              <linearGradient
                id="logo-gradient"
                x1=".08"
                x2="57.92"
                y1="29"
                y2="29"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#26C0FF" />
                <stop offset=".2" stopColor="#E600C2" />
                <stop offset=".4" stopColor="#FF494E" />
                <stop offset=".6" stopColor="#FFA13E" />
                <stop offset=".8" stopColor="#FFC837" />
                <stop offset="1" stopColor="#00CC3D" />
              </linearGradient>
            </defs>
            <path
              fill="currentColor"
              d="M277.188 51.057c-6.867 0-10.084-3.774-10.084-9.775v-15.9h-5.259v-7.053h5.568v-6.743l7.362-1.732h.619v8.475h7.733v7.053h-7.733v14.106c0 3.031 1.237 4.33 4.145 4.33a10.43 10.43 0 0 0 3.093-.495h.619v6.93c-1.732.556-3.774.804-6.063.804Z"
            />
            <path
              fill="currentColor"
              d="M254.169 14.308c-3.403 0-5.135-1.856-5.135-5.073 0-3.031 1.732-4.95 5.135-4.95 3.217 0 5.135 1.919 5.135 4.95 0 3.217-1.918 5.073-5.135 5.073Zm4.083 36.192h-8.29V18.33h8.29V50.5Z"
            />
            <path
              fill="currentColor"
              d="M227.074 51.057c-6.991 0-11.26-4.145-11.26-10.023 0-6.124 4.331-9.96 12.992-9.96 2.784 0 5.197.31 7.176.99V29.28c0-2.784-1.794-4.702-5.568-4.702-3.402 0-5.382 1.732-5.382 4.145h-7.795c0-3.155 1.175-5.816 3.464-7.857 2.351-2.042 5.63-3.093 9.899-3.093 8.476 0 13.673 4.701 13.673 11.445V50.5h-7.363l-.618-3.34h-.248c-1.979 2.598-4.949 3.897-8.97 3.897Zm1.979-6.558c4.207 0 6.929-2.66 6.929-5.94v-.68c-1.794-.68-3.959-1.052-6.372-1.052-3.526 0-5.568 1.547-5.568 3.836 0 2.29 1.794 3.836 5.011 3.836Z"
            />
            <path
              fill="currentColor"
              d="M203.321 50.5h-7.857V18.33h6.991l.619 4.887h.247c1.671-3.588 4.455-5.383 8.352-5.383h2.351v7.672h-2.907c-4.95 0-7.796 3.34-7.796 9.218V50.5Z"
            />
            <path
              fill="currentColor"
              d="M184.081 51.057c-6.867 0-10.084-3.774-10.084-9.775v-15.9h-5.259v-7.053h5.568v-6.743l7.362-1.732h.619v8.475h7.733v7.053h-7.733v14.106c0 3.031 1.237 4.33 4.145 4.33a10.43 10.43 0 0 0 3.093-.495h.619v6.93c-1.732.556-3.774.804-6.063.804Z"
            />
            <path
              fill="currentColor"
              d="M155.106 50.5h-7.857V18.33h6.991l.619 4.887h.247c1.67-3.588 4.454-5.383 8.352-5.383h2.351v7.672h-2.908c-4.949 0-7.795 3.34-7.795 9.218V50.5Z"
            />
            <path
              fill="currentColor"
              d="M127.122 51.057c-5.011 0-8.909-1.547-11.631-4.578-2.66-3.032-4.021-7.053-4.021-12.002 0-4.95 1.361-8.971 4.083-12.064 2.722-3.094 6.558-4.64 11.569-4.64 4.949 0 8.785 1.546 11.507 4.64 2.722 3.093 4.083 7.114 4.083 12.064 0 4.887-1.361 8.908-4.083 12.002-2.66 3.031-6.496 4.578-11.507 4.578Zm7.177-16.58c0-6.25-2.413-9.404-7.177-9.404-4.764 0-7.177 3.155-7.177 9.404 0 6.186 2.413 9.28 7.177 9.28 4.764 0 7.177-3.094 7.177-9.28Z"
            />
            <path
              fill="currentColor"
              d="M85.363 50.5h-8.475V7.193h18.56c4.33 0 7.795 1.3 10.393 3.96 2.599 2.66 3.898 6 3.898 10.146 0 4.207-1.299 7.671-3.96 10.332-2.598 2.66-6.063 4.021-10.331 4.021H85.363V50.5Zm0-35.759v13.301h8.538c4.764 0 7.177-2.227 7.177-6.743 0-4.207-2.66-6.558-7.177-6.558h-8.538Z"
            />
          </svg>
          {/* Mobile logo placeholder */}
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 sm:hidden"></div>
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center space-x-1">
        <a
          href="/explore"
          className="rounded-full px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          Explore
        </a>
        <a
          href="/points"
          className="relative rounded-full px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          Points
          <span className="absolute -top-0.5 -right-1.5 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full uppercase">
            New!
          </span>
        </a>
        <a
          href="/about"
          className="rounded-full px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          About
        </a>
        <a
          href="/blog"
          className="rounded-full px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          Blog
        </a>
      </div>

      {/* Desktop Auth Buttons */}
      <div className="hidden sm:flex items-center space-x-2 ml-auto">
        <Button variant="ghost" size="sm" className="rounded-full">
          Login
        </Button>
        <Button
          size="sm"
          className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90"
        >
          Sign up
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden ml-auto">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute right-0 top-full mt-1 w-52 bg-background border border-border rounded-lg shadow-lg p-3 sm:hidden">
          <div className="flex flex-col space-y-1">
            <a
              href="/explore"
              className="rounded-full px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Explore
            </a>
            <a
              href="/points"
              className="relative rounded-full px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Points
              <span className="absolute top-1 right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full uppercase">
                New!
              </span>
            </a>
            <a
              href="/about"
              className="rounded-full px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="/blog"
              className="rounded-full px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </a>
            <div className="pt-2 border-t border-border">
              <Button variant="ghost" size="sm" className="w-full rounded-full mb-2">
                Login
              </Button>
              <Button
                size="sm"
                className="w-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;