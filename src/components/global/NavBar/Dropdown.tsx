import React, { FunctionComponent } from "react";
import { useState } from "react";
import { createPopper } from "@popperjs/core";
import { prototype } from "stream";


const Dropdown :FunctionComponent = () => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef<HTMLButtonElement>();
    const popoverDropdownRef = React.createRef<HTMLInputElement>();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current!, popoverDropdownRef.current!, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    // bg colors
    return (
            <div className="flex flex-wrap">
                <div className="w-full sm:w-6/12 md:w-4/12 px-4">
                    <div className="relative inline-flex align-middle w-full">
                        <button
                            className="bg-blueGray-700 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                
                            type="button"
                            ref={btnDropdownRef}
                            onClick={() => {
                                dropdownPopoverShow
                                    ? closeDropdownPopover()
                                    : openDropdownPopover();
                            }}
                        >
                        Dropdown
                        </button>
                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ") +
                                ("bg-white " + "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1")
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (" text-blueGray-700")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Action
                            </a>
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (" text-blueGray-700")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Another action
                        </a>
                        <a
                            href="#pablo"
                            className=
                            "text-white text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "


                            onClick={e => e.preventDefault()}
                        >
                                Something else here
                            </a>
                            <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                            <a
                                href="#pablo"
                                className=
                                    "text-white text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                                    
                                onClick={e => e.preventDefault()}
                            >
                                Seprated link
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    );
};
export default Dropdown