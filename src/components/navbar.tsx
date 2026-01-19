import { Link, useLocation } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./toggleDark";

const navigation = [
  { name: "Home", href: "/" },
  { name: "My Projects", href: "/myprojects" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="min-h-full ">
      <Disclosure
        as="nav"
        className=" shadow-2xl py-1 border-b border-blue-600/30 
  dark:border-gray-700 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 
  dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center justify-between w-full">
              <div className="shrink-0">
                <h1 className="text-2xl text-white font-bold italic tracking-tight drop-shadow-sm">
                  DKF Web
                </h1>
              </div>
              <div className="hidden md:block ms-8">
                <div className="flex items-baseline space-x-4">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          isActive
                            ? "bg-blue-900/70 dark:bg-blue-800/70 text-white shadow-lg border-blue-400/50 dark:border-blue-300/50"
                            : "text-blue-100 dark:text-gray-200 hover:bg-blue-700/80 dark:hover:bg-gray-700/80 hover:text-white dark:hover:text-white border-blue-500/30 dark:border-gray-600/30",
                          "rounded-lg px-4 py-2.5 text-sm font-semibold backdrop-blur-sm border transition-all duration-200 hover:shadow-md hover:scale-105"
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="pr-6 ">
                <ThemeToggle />
              </div>
            </div>

            <div className="flex md:hidden">
              <DisclosureButton className="inline-flex items-center justify-center rounded-lg bg-blue-900/60 dark:bg-gray-800/60 p-2 text-blue-100 dark:text-gray-200 hover:bg-blue-700 dark:hover:bg-gray-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-blue-800 dark:focus:ring-offset-gray-800 backdrop-blur-sm border border-blue-400/30 dark:border-gray-600/30">
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden bg-blue-900/95 dark:bg-gray-800/95 backdrop-blur-md border-t border-blue-600/30 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    isActive
                      ? "bg-blue-800 dark:bg-gray-700 text-white shadow-sm border-blue-400/50 dark:border-gray-600"
                      : "text-blue-100 dark:text-gray-200 hover:bg-blue-700/80 dark:hover:bg-gray-700 hover:text-white dark:hover:text-white border-blue-500/30 dark:border-gray-600/30",
                    "block rounded-lg px-3 py-3 text-base font-semibold transition-all duration-200 border mx-2 hover:translate-x-2"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              );
            })}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
