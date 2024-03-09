import React from "react";

function Alert(props) {
    const Capitalize = (text) => {
        const txt = text.toLowerCase();
        return txt.charAt(0).toUpperCase() + txt.slice(1);
    };

    return (
        <div style={{ height: "50px" }}>
            {props.alert && (
                <div
                    className={`alert alert-${props.alert.type} alert-dismissible fade show`}
                    role="alert"
                >
                    <strong>{Capitalize(props.alert.type)}</strong> :{" "}
                    {Capitalize(props.alert.msg)}
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                </div>
            )}
        </div>
    );
}

export default Alert;
