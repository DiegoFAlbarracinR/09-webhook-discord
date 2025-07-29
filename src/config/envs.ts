import 'dotenv/config';
import { get } from 'env-var';

export const envs = {

    PORT: get('PORT').required().asPortNumber(),
    DISCORD_WEBHOOK_URK: get('DISCORD_WEBHOOK_URK').required().asString(),

}