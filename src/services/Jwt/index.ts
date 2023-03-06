import jwt from 'jsonwebtoken'

export class JwtService {
    private static readonly secret = process.env.NEXT_PUBLIC_JWT_SECRET

    static async decode<T>(token: string): Promise<T> {
        console.log('token', token)
        return jwt.verify(token, String(JwtService.secret)) as T
    }

    static sign(payload: string | object | Buffer): string {
        return jwt.sign(payload, String(JwtService.secret))
    }
}
