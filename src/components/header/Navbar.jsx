// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button, Navbar as NavbarFlow } from "flowbite-react";

export const Navbar = () => {
    return (
        <div>
            <NavbarFlow fluid rounded>
                <NavbarFlow.Brand>
                    <img src="https://www.narolasolutions.com/images/ms-365/consulting/3.png" className="mr-3 h-10 sm:h-9" alt="Mekong-Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Mekong App</span>
                </NavbarFlow.Brand>
                <div className="flex md:order-2">
                    <Button>Get started</Button>
                    <NavbarFlow.Toggle />
                </div>
                <NavbarFlow.Collapse>
                    <NavbarFlow.Link href="#" active>
                        Home
                    </NavbarFlow.Link>
                    <NavbarFlow.Link href="#">About</NavbarFlow.Link>
                    <NavbarFlow.Link href="#">Services</NavbarFlow.Link>
                    <NavbarFlow.Link href="#">Pricing</NavbarFlow.Link>
                    <NavbarFlow.Link href="#">Contact</NavbarFlow.Link>
                </NavbarFlow.Collapse>
            </NavbarFlow>
        </div>
    )
}
