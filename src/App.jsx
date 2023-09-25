import { useState } from "react";
import Button from "./components/Button";

function App() {
    const [color, setColor] = useState("white");

    const buttonColors = [
        "red",
        "blue",
        "pink",
        "purple",
        "black",
        "grey",
        "olive",
        "orange",
        "aqua",
        "magenta",
        "teal",
    ];
    return (
        <>
            <div
                className=" w-full h-screen duration-200"
                style={{ backgroundColor: color }}>
                <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                    <div
                        className="flex flex-wrap justify-center gap-3 shadow-lg px-2 py-2 rounded-xl"
                        style={{ backgroundColor: "white" }}>
                        {buttonColors.map((clr) => (
                            // eslint-disable-next-line react/jsx-key
                            <Button clr={clr} setColor={setColor} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
