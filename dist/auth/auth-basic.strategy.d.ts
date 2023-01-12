import { BasicStrategy as Strategy } from 'passport-http';
import { ConfigService } from '@nestjs/config';
declare const BasicStrategy_base: new (...args: any[]) => Strategy;
export declare class BasicStrategy extends BasicStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate: (req: any, username: string, password: string) => Promise<boolean>;
}
export {};
