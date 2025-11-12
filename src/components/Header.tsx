import { useEffect, useState } from "react";
import ThemeSelector from "./ThemeSelector/ThemeSelector";

const Header = () => {
    const [showThemeSelector, setShowThemeSelector] = useState(false);
    const appName = "Flow";

    useEffect(() => {
        document.title = appName;
    }, []);

    return (
        <>
            <h1 className=" text-primary-400 text-2xl text-center mb-4 font-bold">   
                {appName}
            </h1>
            <div>
                <button style={{ justifySelf: "end"}} onClick={() => setShowThemeSelector(!showThemeSelector)}>
                    {showThemeSelector ? "Close" : "Change Theme"}
                </button>
                {showThemeSelector && <ThemeSelector />}
            </div>
        </>
    );
}

export default Header;