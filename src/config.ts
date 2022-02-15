export default class Config {
  packageName: string;
  vsc: boolean;
  editorconfig: boolean;
  eslint: boolean;
  prettier: boolean;
  mocha: boolean;
  coverage: boolean;
  docs: boolean;
  gh_pages: boolean;
  commitizen: boolean;
  changelog: boolean;
  ci: boolean;
  ci_choice: 'None' | 'Circle' | 'Travis' | 'GitHub';
  extensions: string[];

  constructor() {
    this.packageName = 'my-awesome-project';
    this.vsc = true;
    this.editorconfig = true;
    this.eslint = true;
    this.prettier = true;
    this.mocha = true;
    this.coverage = true;
    this.docs = true;
    this.gh_pages = true;
    this.commitizen = true;
    this.changelog = true;
    this.ci = true;
    this.ci_choice = 'Circle';
    this.extensions = [];
  }
}
