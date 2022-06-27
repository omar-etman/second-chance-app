import { Disclosure } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import React from "react";
import { classNames } from "utils/classNames";

type props = {
    details: {
        key: number;
        name: string;
        items: string[];
    }[]
}
const AnimalDetails: React.FC<props> = ({ details }) => {
  return (
    <div className="border-t divide-y divide-gray-200">
      {details.map((detail) => (
        <Disclosure as="div" key={detail.name}>
          {({ open }) => (
            <>
              <h3>
                <Disclosure.Button className="relative flex items-center justify-between w-full py-6 text-left group">
                  <span
                    className={classNames(
                      open ? "text-white transition-all duration-300" : "text-gray-100 transition-all duration-300",
                      "text-sm font-medium"
                    )}
                  >
                    {detail.name}
                  </span>
                  <span className="flex items-center ml-6">
                    {open ? (
                      <MinusSmIcon
                        className="block w-6 h-6 text-gray-200 transition-all duration-300 group-hover:text-white"
                        aria-hidden="true"
                      />
                    ) : (
                      <PlusSmIcon
                        className="block w-6 h-6 text-gray-200 transition-all duration-300 group-hover:text-white"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel as="div" className="pb-6 prose-sm prose">
                <ul role="list">
                  {detail.items?.map((item) => (
                    <li key={item} className="text-gray-100">
                      {item}
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default AnimalDetails;
