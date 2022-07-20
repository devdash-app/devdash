/*
 * Copyright © 2022 Ewsgit
 * All rights reserved.
 * Licensed under the MIT License - https://ewsgit.github.io/devdash/copyright
 */

import React, {useState} from "react";
import Head from "next/head";
import PillButton from "../../../components/global/PillButton";

export default function _index() {
    const [tab, setTab] = useState("all")
    return <>
        <Head>
            <title>DevDash | Github</title>
        </Head>
        <div
            className={`w-full grid grid-rows-[auto,1fr] min-h-screen bg-bg-light-secondary dark:bg-bg-dark-secondary`}>
            <div
                className={`w-full h-64 flex items-center justify-center relative bg-content-normal shadow-2xl`}>
                <img className={"w-full h-full absolute top-0 left-0 opacity-75 pointer-events-none"}
                     src={require("./../../../assets/git.svg").default.src} alt=""/>
                <input className={`w-1/2 p-3 z-10 text-2xl text-center rounded-2xl`}
                       placeholder={`Search Github`}
                       type="text"/>
            </div>
            <div className={"grid grid-rows-[auto,1fr] h-full w-full"}>
                <div className={"flex w-full items-center justify-center pt-2 pb-2"}>
                    <PillButton title={"All"} onClick={() => {
                        setTab("all")
                    }}
                                toggled={tab === "all"}
                    />
                    {

                    }
                </div>
                <div></div>
            </div>
        </div>
    </>
}
