import Settings from './src/settings';

export default {
  gitlab: {
    url: 'https://bitbox.plateforme-2cloud.com',
    token: process.env.GITLAB_TOKEN,
    projectId: Number(process.argv[2]),
    sessionCookie: process.env.GITLAB_SESSION,
  },
  github: {
    // baseUrl: 'https://github.mycompany.com:123/etc',
    // apiUrl: 'https//api.github.mycompany.com',
    owner: 'ubitransports',
    token: process.env.GITHUB_TOKEN,
    token_owner: process.env.GITHUB_TOKEN_OWNER,
    repo: process.argv[3],
    recreateRepo: false,
  },
  //s3: {
  //  accessKeyId: '{{accessKeyId}}',
  //  secretAccessKey: '{{secretAccessKey}}',
  //  bucket: 'my-gitlab-bucket',
  //},
  usermap: {
    'everneret': 'everneret',
    'mpadellini': 'mapad-oprate',
    'aschelch': 'aschelch',
    'nroman': 'nroman-ext',
    'afrancois': 'afrancois-ubitransport',
    'sholo': 's-holo',
    'thenon': 'thomas-henon',
  },
  projectmap: {
    // 'gitlabgroup/projectname.1': 'GitHubOrg/projectname.1',
    // 'gitlabgroup/projectname.2': 'GitHubOrg/projectname.2',
  },
  conversion: {
    useLowerCaseLabels: true,
  },
  transfer: {
    description: true,
    milestones: true,
    labels: true,
    issues: false,
    mergeRequests: true,
    releases: true,
  },
  debug: false,
  useIssueImportAPI: true,
  usePlaceholderMilestonesForMissingMilestones: true,
  usePlaceholderIssuesForMissingIssues: true,
  useReplacementIssuesForCreationFails: true,
  useIssuesForAllMergeRequests: false,
  filterByLabel: null,
  skipMergeRequestStates: [],
  skipMatchingComments: [],
  mergeRequests: {
    logFile: './merge-requests.json',
    log: false,
  },
} as Settings;

