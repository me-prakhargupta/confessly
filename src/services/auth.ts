import api from "@/lib/axios";

type SignupData = {
    email: string;
    password: string;
    fullname: string;
    username: string;
}

type SigninData = {
    email: string;
    username: string;
    password: string;
}

export const signupUser = async(data: SignupData) => {
    const res = await api.post("/api/v1/auth/signup", data);
    return res.data
};

export const signinUser = async(data: SigninData) => {
    const res = await api.post("/api/v1/auth/signin", data);
    return res.data;
};