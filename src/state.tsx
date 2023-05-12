import {atom} from "jotai";
import {atomWithLocation} from "jotai-location";

const locationAtom = atomWithLocation();
export const getLocationId = atom((get) => {
    return get(locationAtom).searchParams?.get("id");
}) ;

export const stateOne = atom(async () => {
    const response = await simulateServer(1000);
    return response;
})

export const stateTwo = atom( async (getter) => {
    const skip = getter(getLocationId);
    if(!skip) return 0;
    const response = await simulateServer(1000);
    return response;
});


const simulateServer = (delay: number): Promise<number> => {
    return new Promise(resolve => setTimeout(() => resolve(Math.random()), delay));
}
