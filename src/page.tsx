import {Suspense} from "react";
import {Grid} from "./grid";

export const Page = () => {
    return <>
        <Suspense fallback={<>Loading...</>}>
            <Grid />
        </Suspense>
    </>
}
