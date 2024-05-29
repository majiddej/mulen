import http from "./http-common";

type GetTokenDataType = {
    username: string,
    password: string,
    captcha_key: string,
    captcha_value: string
}

type TokenEndpoint = {
    data: any
}

export const getToken = (data: GetTokenDataType | undefined): Promise<TokenEndpoint> => {
    return http.post("/api/v1/users/token/", data)
}

export const refreshToken = (refreshToken: string) => {
    return http.post("/api/v1/users/token/refresh/", {'refresh': refreshToken})
}

export const govSSORedirect = (code: string | null) => {
    return http.get(`/common/api/v1/gov-sso-verify/?code=${code}`)
}