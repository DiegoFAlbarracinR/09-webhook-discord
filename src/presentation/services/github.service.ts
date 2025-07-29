import { GitHubIssuePayload, GitHubStarPayload } from "../../interfaces";

export class GitHubService {
    constructor() {
        // Initialize any properties or dependencies here if needed
    }

    onStart( payload: GitHubStarPayload ): string {

        let message: string;
        const { action, sender, repository, starred_at } = payload;
        message = `User at: ${ sender.login } ${ action } star on ${ repository.full_name }`;
        
        return message;

    }

    onIssue( payload: GitHubIssuePayload ): string {

        let message: string;
        const { action, issue, } = payload;
        message =  `Un hanled issue event ${ action }`;

        if( action === 'opened' ){
            message = `An issue was opened with this title: ${ issue.title }`;
        }

        if( action === 'closed' ){
            message = `An issue was closed by: ${ issue.user.login }`;
        }

        if( action === 'reopened' ){
            message = `An issue was reopened by: ${ issue.user.login }`;
        }
        console.log( message );
        return message;

    }
}   