import React, { useEffect } from "react";

export const SiblingsOne = ({setData}) => {

    useEffect(() => {
        setData([
            {
              label: "Name",
              type: "text",
              name: "name"
            },
            {
              label: "Phone number",
              type: "number",
              name: "phoneNumber"
            }
          ])
    }, [])

    return (
        <>
            <div>Siblings1</div>
        </>
    )
}