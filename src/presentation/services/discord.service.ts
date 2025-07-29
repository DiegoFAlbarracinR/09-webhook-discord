import { envs } from "../../config";

export class DiscordService {
    
    private readonly discordWebhookUrl: string = envs.DISCORD_WEBHOOK_URK;
    
    constructor(){}

    async notify( message: string ) {

        const body = {
            content: message,
            //embeds: [{
            //    image: { url: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTR6djI0cGluZmxyeDRmeDVvd2dudm85YWZ1cTdmdTRraDBrNG0ybyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif' }
            //}]
        }

        const resp = await fetch( this.discordWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( body ),
        });

        if ( !resp.ok ) {
            console.log(`Error sending message to discord: ${resp.statusText}`);
            return false;
        }

        return true;

    }

}