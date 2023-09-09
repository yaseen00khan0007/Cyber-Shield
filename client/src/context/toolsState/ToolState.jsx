import ToolContext from "./ToolContext";

const ToolState = (props) => {

    const arrayOfTools = [
        {
            name: "Tool1",
            description: "Desc of Tool1",
            url: "http...........",
        },
        {
            name: "Tool2",
            description: "Desc of Tool2",
            url: "http...........",
        },
        {
            name: "Tool3",
            description: "Desc of Tool3",
            url: "http...........",
        },
        {
            name: "Tool4",
            description: "Desc of Tool4",
            url: "http...........",
        },
        {
            name: "Tool5",
            description: "Desc of Tool5",
            url: "http...........",
        },
    ];

    return (
        <ToolContext.Provider value={{arrayOfTools}}>
            {props.children}
        </ToolContext.Provider>
    );
}

export default ToolState;