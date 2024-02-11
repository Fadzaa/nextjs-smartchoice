import instance from "@/app/lib/services/instance";

export default async function candidatePair(id) {
    try {
        const res = await instance.get(
            `/candidate_pair/${id}`
        );
        return res.data.data;
    }catch (err) {
        throw err;
    }
}