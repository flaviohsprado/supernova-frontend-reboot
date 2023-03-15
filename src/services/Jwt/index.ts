import jwt from 'jsonwebtoken'

export class JwtService {
    private static readonly secret = process.env.NEXT_PUBLIC_JWT_SECRET

    static async decode<T>(token: string): Promise<T> {
        return jwt.verify(token, String(JwtService.secret)) as T
    }

    static sign(payload: string | object | Buffer): string {
        return jwt.sign(payload, String(JwtService.secret))
    }

    static verifyExpiration(token: string): boolean {
        // @ts-ignore
        const { payload } = jwt.decode(token, { complete: true })

        return payload.exp < Date.now() / 1000
    }
}
