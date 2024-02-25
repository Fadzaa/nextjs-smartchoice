import instancerealcount from "./instance-realcount";

export default async function timestamp() {
    try {
        const res = await instancerealcount.get(
            `/?fbclid=IwAR0a2GszDjvjCo69KiFAgvMSuFaDzNgSA0UDhgdKgOktfQMvPfvtJk7RYng`,
            
        );
        return res.data.data;
        
    }catch (err) {
        throw err;
    }
}