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
    message: string;
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
    const res = await api.post("/api/v1/message/send", data);
    return res.data;
};

export const shareThought = async(thought: string) => {
    const res = await api.post("/api/v1/thought/share", {
        thought}
    );
    return res.data;
};

export const getUser = async(token: string) => {
    const res = await api.get("api/v1/auth/me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return res.data;
};

export const signoutUser = async() => {
    const res = await api.post("/api/v1/auth/logout");
    return res.data;
};