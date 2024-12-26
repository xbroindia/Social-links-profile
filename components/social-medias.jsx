import React from "react";
import { Link } from "react-router";
import "./social-medias.css"

export default function Social_medias(){
    return(
        <div className="social-medias">
            <Link className="link1" href={"#"}>GitHub</Link>
            <Link className="link1" href={"#"}> Frontend Mentor</Link>
            <Link className="link1" href={"#"}>LinkedIn</Link>
            <Link className="link1" href={"#"}> Twitter</Link>
            <Link className="link1" href={"#"}>Instagram</Link>
        </div>
    )
}