import { ReactElement } from 'react'
import { Popover} from '@headlessui/react'
import { navRoutes} from '../utils/navTabs'
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/outline';
import NavBarDropDown from './NavBarDropDown';


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
const NavBar:React.FC = () => {
  return (
    <>
      <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
            {navRoutes.map((route) => (
              <Link href={route.href} key={route.key}>
                <a className="font-light text-gray-200 text-[1.2rem] hover:text-white hover: text-shadow-2 hover:text-shadow-white">
                  {route.name}
                </a>
              </Link>
            ))}
            <Popover className="relative">
              {({ open }: { open: boolean }): ReactElement => (
                <>
                  <Popover.Button
                    className={classNames(
                      open
                        ? "text-gray-200 text-[1.2rem] font-light self-center focus:none"
                        : "text-[1.2rem] font-light text-white",
                      "group bg-none flex items-center font-light hover:text-white "
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open
                          ? " text-gray-200 rotate-180 transition-all duration:200"
                          : " text-white transition-all duration:200",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  <NavBarDropDown/>
                </>
              )}
            </Popover>
          </Popover.Group>
    </>
  )
}

export default NavBar