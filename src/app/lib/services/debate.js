import instance from "@/app/lib/services/instance";

export default async function Debate() {
    try {
        const res = await instance.get(
            `/debate`
        );
        return res.data.data;
    }catch (err) {
        throw err;
    }
}