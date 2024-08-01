import access from "@/access/access"

export type loginUserInfo = {
    id: number;
    name: string;
    role: number
}

export type LoadingStatus = "loading" | "success" | "error"
