
export interface GitHubIssuePayload {
    action:     string;
    issue:      Issue;
    repository: Repository;
    sender:     Sender;
}

interface Issue {
    url:                      string;
    repository_url:           string;
    labels_url:               string;
    comments_url:             string;
    events_url:               string;
    html_url:                 string;
    id:                       number;
    node_id:                  string;
    number:                   number;
    title:                    string;
    user:                     Sender;
    labels:                   any[];
    state:                    string;
    locked:                   boolean;
    assignee:                 null;
    assignees:                any[];
    milestone:                null;
    comments:                 number;
    created_at:               Date;
    updated_at:               Date;
    closed_at:                null;
    author_association:       string;
    active_lock_reason:       null;
    sub_issues_summary:       SubIssuesSummary;
    body:                     string;
    reactions:                Reactions;
    timeline_url:             string;
    performed_via_github_app: null;
    state_reason:             null;
}

interface Reactions {
    url:         string;
    total_count: number;
    "+1":        number;
    "-1":        number;
    laugh:       number;
    hooray:      number;
    confused:    number;
    heart:       number;
    rocket:      number;
    eyes:        number;
}

interface SubIssuesSummary {
    total:             number;
    completed:         number;
    percent_completed: number;
}

interface Sender {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                string;
    user_view_type:      string;
    site_admin:          boolean;
}

interface Repository {
    id:                          number;
    node_id:                     string;
    name:                        string;
    full_name:                   string;
    private:                     boolean;
    owner:                       Sender;
    html_url:                    string;
    description:                 string;
    fork:                        boolean;
    url:                         string;
    forks_url:                   string;
    keys_url:                    string;
    collaborators_url:           string;
    teams_url:                   string;
    hooks_url:                   string;
    issue_events_url:            string;
    events_url:                  string;
    assignees_url:               string;
    branches_url:                string;
    tags_url:                    string;
    blobs_url:                   string;
    git_tags_url:                string;
    git_refs_url:                string;
    trees_url:                   string;
    statuses_url:                string;
    languages_url:               string;
    stargazers_url:              string;
    contributors_url:            string;
    subscribers_url:             string;
    subscription_url:            string;
    commits_url:                 string;
    git_commits_url:             string;
    comments_url:                string;
    issue_comment_url:           string;
    contents_url:                string;
    compare_url:                 string;
    merges_url:                  string;
    archive_url:                 string;
    downloads_url:               string;
    issues_url:                  string;
    pulls_url:                   string;
    milestones_url:              string;
    notifications_url:           string;
    labels_url:                  string;
    releases_url:                string;
    deployments_url:             string;
    created_at:                  Date;
    updated_at:                  Date;
    pushed_at:                   Date;
    git_url:                     string;
    ssh_url:                     string;
    clone_url:                   string;
    svn_url:                     string;
    homepage:                    null;
    size:                        number;
    stargazers_count:            number;
    watchers_count:              number;
    language:                    null;
    has_issues:                  boolean;
    has_projects:                boolean;
    has_downloads:               boolean;
    has_wiki:                    boolean;
    has_pages:                   boolean;
    has_discussions:             boolean;
    forks_count:                 number;
    mirror_url:                  null;
    archived:                    boolean;
    disabled:                    boolean;
    open_issues_count:           number;
    license:                     License;
    allow_forking:               boolean;
    is_template:                 boolean;
    web_commit_signoff_required: boolean;
    topics:                      any[];
    visibility:                  string;
    forks:                       number;
    open_issues:                 number;
    watchers:                    number;
    default_branch:              string;
}

interface License {
    key:     string;
    name:    string;
    spdx_id: string;
    url:     string;
    node_id: string;
}
