import api from "@/lib/axios";

type SignupData = {
    email: string;
    password: string;
    fullname: string;
    username: string;
}

type SigninData = {
    identifier: string;
    password: string;
}

type MessageData = {
    username: string;
    content: string;
}

export const signupUser = async(data: SignupData) => {
    const res = await api.post("/api/v1/auth/signup", data);
    return res.data
};

export const signinUser = async(data: SigninData) => {
    const res = await api.post("/api/v1/auth/signin", data);
    return res.data;
};

export const sendMessage = async(data: MessageData) => {
    const res = await api.post("/api/v1/messages/send", data);
    return res.data;
};