import React from "react";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

import { loggedState } from "@/src/atoms/state";

function PlayerIndex() {
    const [logged, setLogged] = useAtom(loggedState);
    const router = useRouter();

    if (logged.username) {
        router.push(`/player/${logged.username}`);
        return <div></div>;
    } else {
        router.push("/user/login");
        return <div></div>;
    }
}

export default PlayerIndex;
