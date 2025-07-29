import express from 'express';
import { envs } from './config';
import { GitHubController } from './presentation/github/controller';
import { GithubSha256Middleware } from './presentation/middleware/github-sha256.middleware';

( () => {
    main();
} )();

function main() {

    const app = express();
    const controller = new GitHubController();

    app.use(express.json()); // Middleware to parse JSON bodies

    app.use(GithubSha256Middleware.verifyGitHubSignature);

    app.post('/api/github', controller.webhookHandler);

    app.listen( envs.PORT, () => {
        console.log(`App running on port ${envs.PORT}`); 
    });

}