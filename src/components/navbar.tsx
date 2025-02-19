import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Me", href: "about", current: false },
  { name: "My Projects", href: "#", current: false },
  { name: "Contacts", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className="p-4 shadow-2xl "
          style={{
            background: "rgb(55,63,81)",
            backgroundImage:
              "linear-gradient(90deg, rgba(55,63,81,1) 0%, rgba(73,80,96,1) 41%, rgba(94,101,115,1) 63%, rgba(248,249,250,1) 100%)",
          }}
        >
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between ">
              <div className="flex items-center">
                <div className="shrink-0">
                  <h1 className="text-xl text-white font-bold italic">
                    DKF Web
                  </h1>
                </div>
                <div className="ms-7 hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "text-[#dcdcdc] "
                            : "text-[#dcdcdc] hover:bg-gray-700 hover:text-white font-bold",
                          "rounded-md px-3 py-2 text-[20px] font-normal"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
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

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </>
  );
}
