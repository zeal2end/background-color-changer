/* eslint-disable react/prop-types */
function Button(props) {
    return (
        <>
            <button
                className="outline-none px-4 rounded-full text-white shadow-lg"
                style={{ backgroundColor: props.clr }}
                onClick={() => props.setColor(props.clr)}>
                {props.clr}
            </button>
        </>
    );
}

export default Button;
