export default class TokenHandler {
    static get() {
        if (typeof window !== 'undefined')
            return localStorage.getItem('accessToken')
    }
    static set(token: string) {
        if (typeof window !== 'undefined')
            return localStorage.setItem('accessToken', token)
    }
}
