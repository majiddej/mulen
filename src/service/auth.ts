import http from "./http-common";

type GetTokenDataType = {
    username: string,
    password: string,
}

type TokenEndpoint = {
    data: any
}

export const getToken = (data: GetTokenDataType | undefined): Promise<TokenEndpoint> => {
    console.log("in get token")
    return http.post("/api/Auth/login", data)
}

export const refreshToken = (refreshToken: string) => {
    return http.post("/api/Auth/refresh", {'refresh': refreshToken})
}
