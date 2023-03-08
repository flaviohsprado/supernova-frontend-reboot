import { parseCookies, setCookie } from 'nookies'

export default class TokenHandler {
    static get() {
        const { 'nextauth.token': accessToken } = parseCookies()
        return accessToken
    }
    static set(token: string) {
        setCookie(undefined, 'nextauth.token', token)
    }
}
