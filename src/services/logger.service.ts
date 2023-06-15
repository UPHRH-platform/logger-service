import { Injectable } from "@nestjs/common";
import * as fs from 'fs';

@Injectable()
export class LoggerService {
    private readonly logFilePath: string = "../logs/events.log";

    public logEvent(event: any): void {
        const logEntry = JSON.stringify(event);
        fs.appendFileSync(this.logFilePath, `${logEntry}\n`);   
    }
}