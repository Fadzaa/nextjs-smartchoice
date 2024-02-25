import instancerealcount from "./instance-realcount";

export default async function statistic() {
    try {
        const res = await instancerealcount.get(
            `/?fbclid=IwAR0a2GszDjvjCo69KiFAgvMSuFaDzNgSA0UDhgdKgOktfQMvPfvtJk7RYng`,
            
        );
        return res.data.data.progress;
        
    }catch (err) {
        throw err;
    }
}