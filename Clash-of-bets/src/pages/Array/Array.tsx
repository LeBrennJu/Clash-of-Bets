import React, { useEffect, useState } from "react";
import Versus from "./Versus";
import "./Array.scss"
const Array = () => {


    return (
        <>
       
            <main className="array__container">

            <div className="array-title_container"><h2>Parier</h2></div>
            <div className="array-score_container">Points : <p> 600 </p></div>

            <section>
                <Versus />
            </section>
               
            </main>
        </>
    );
};

export default Array;

