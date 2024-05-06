"use client";

import { CookieIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function CookieConsent({ demo = false, onAcceptCallback = () => { }, onDeclineCallback = () => { } }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hide, setHide] = useState(false);

    const accept = () => {
        setIsOpen(false);
        document.cookie = "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        setTimeout(() => {
            setHide(true);
        }, 700);
        onAcceptCallback();
    };

    const decline = () => {
        setIsOpen(false);
        setTimeout(() => {
            setHide(true);
        }, 700);
        onDeclineCallback();
    };

    useEffect(() => {
        try {
            setIsOpen(true);
            if (document.cookie.includes("cookieConsent=true")) {
                if (!demo) {
                    setIsOpen(false);
                    setTimeout(() => {
                        setHide(true);
                    }, 700);
                }
            }
        }
        catch (e) {
            // console.log("Error: ", e);
        }
    }, []);

    return (
        <div className={cn("fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700", !isOpen ? "transition-[opacity,transform] translate-y-8 opacity-0" : "transition-[opacity,transform] translate-y-0 opacity-100", hide && "hidden")}>
            <div className="dark:bg-black bg-black rounded-md m-3 border border-border border-gray-100/20 dark:border-gray-100/20 shadow-lg dark:shadow-none">
                <div className="grid gap-2">
                    <div className="border-b border-border dark:border-gray-100/20 border-gray-100/20 h-14 flex items-center justify-between p-4">
                        <h1 className="text-lg font-medium">We use cookies</h1>
                        <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm font-normal text-start">
                            We use cookies to ensure you get the best experience on our website. For more information on how we use cookies, please see our cookie policy.
                            <br />
                            <br />
                            <span className="text-xs">By clicking &quot;<span className="font-medium opacity-80">Accept</span>&quot;, you agree to our use of cookies.</span>
                            <br />
                            <a href="https://www.dimensionlab.org/privacy-policy.html" className="text-xs underline">Learn more.</a>
                        </p>
                    </div>
                    <div className="flex gap-2 p-4 py-5 border-t border-border border-gray-100/20 dark:border-gray-100/20 dark:bg-background/20">
                        <button className="w-full bg-btnPurple px-4 py-2 rounded" type="button" onClick={accept}>Accept</button>
                        <button className="w-full bg-lightBg px-4 py-2 rounded" type="button" onClick={decline}>Decline</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
