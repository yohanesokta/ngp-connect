import { FetchProperty } from "../property/FetchProperty";

export const ClassLoader = async (classData) => {
    const data = classData.members;
    let result = [];

    for (const e of data) {
        try {
            let fetchdata = await fetch('/api/user/info', FetchProperty({user: {sub: e}}, "POST"));
            fetchdata = await fetchdata.json();
            if (fetchdata.data) {
                result.push(fetchdata);
            }
        } catch (error) {
            console.error(error);
            return
            // handle error if needed
        }
    }

    if (result.length >= 1) {
        return result;
    }else {
        return false
    }
}