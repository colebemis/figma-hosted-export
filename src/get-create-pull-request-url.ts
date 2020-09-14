import {owner, repo} from './repository.json'

/** Returns a URL to a page where the user can create a pull request with a given branch */
export default function getCreatePullRequestUrl(branchName: string) {
  return `https://github.com/${owner}/${repo}/compare/${branchName}?expand=1`
}
