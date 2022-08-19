import React, { useState } from "react";

export const SiblingsTwo = ({ data }) => {
    const [display, setDisplay] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setDisplay({ ...display, [name]: value })
    };

    console.log(display);
    const handleSubmit = () => {
        //setShowAlert(true);
        let alertText = "";
        for (let i in display) {
            alertText += `${display[i]} \n`
        }
        // for (const [key, value] of Object.entries({ hello: "🌎", wassup: "👀✨😍🔥" })) {
        //     alertText += `${value}\n`
        // }
        alert(alertText);
        // const r = display?.values?.map(d => console.log(d))
        // console.log(r)
        // const json = JSON.stringify(display);
        //alert(Object.values(display))
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    {data?.length > 0 && data.map(val => {
                        return (
                            <div key={val.name}>
                                <label htmlFor={val.name}>{val.label}</label>
                                <input type={val.type} name={val.name} onChange={handleChange}></input>
                            </div>
                        )
                    })}
                    <button type="submit">Submit</button>
                </form>
                {/* {showAlert && <div>
                    {Object.values(display).map(d => {
                        alert(d)
                        return (
                            <alert>{d}</alert>
                        )
                    })}
                </div>} */}
            </div>
        </>
    )
}