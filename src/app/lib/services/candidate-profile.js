import instance from "@/app/lib/services/instance";

export default async function candidateProfile(id) {
    try {
        const res = await instance.get(
            `/candidate_profile/${id}`
        );
        return res.data.data;
    }catch (err) {
        throw err;
    }
}