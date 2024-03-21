import { FetchProperty } from "../property/FetchProperty";
export const ClassLoader = async (classData) => {
    const data = classData.members
    let result = []
    data.forEach(async (e) => {
        try {
            let fetchdata = await fetch('/api/user/info',FetchProperty({user:{sub : e}},"POST"))
            fetchdata = await fetchdata.json()
            result.push(fetchdata)
        }catch (error){ 
            console.log("error fetching on " + e)
        }
    });
    return result
}