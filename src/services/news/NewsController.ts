import {getPlaces} from "./providers/OpenCageDataProvider";

export const getPlacesByName = async (q: string) => {
    if(q.length < 3) {
        return {
            type: "FeatureCollection",
            freatures: []
        };
    }

    return await getPlaces(q);
}