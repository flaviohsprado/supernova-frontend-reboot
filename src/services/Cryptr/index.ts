import Cryptr from 'cryptr'

class CryptrService {
    private readonly secret: string
    private readonly cryptr: Cryptr

    constructor() {
        this.secret = String(process.env.NEXT_PUBLIC_CRYPTR_SECRET)

        if (!this.secret) throw new Error('Cryptr secret not found')

        this.cryptr = new Cryptr(
            String(process.env.NEXT_PUBLIC_CRYPTR_SECRET),
            {
                pbkdf2Iterations: 1000,
                saltLength: 16,
            }
        )
    }

    public async encrypt(string: string): Promise<string> {
        return this.cryptr.encrypt(string)
    }

    public async decrypt(string: string): Promise<any> {
        return this.cryptr.decrypt(string)
    }
}

export default new CryptrService()
