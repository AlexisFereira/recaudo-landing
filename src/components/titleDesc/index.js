import React from "react";

function TitleDesc ({text,description,direction="center",litle}) {
    return (
        <div className={`wc text-${direction}`}>
            <p className={litle ? "ttll": "ttl"}>{text}</p>
            {description && <p>{description}</p>}
        </div>
    )
};

export default TitleDesc ;
