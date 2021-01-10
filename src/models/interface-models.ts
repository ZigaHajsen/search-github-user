export interface GithubUserModel {
  avatar_url: string;
  html_url: string;
  name: string;
  company: null | string;
  blog: null | string;
  location: null | string;
  bio: null | string;
  twitter_username: null | string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

export interface GithubFollowerModel {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface GithubReposModel {
  name: string;
  stargazers_count: number;
  language: null | string;
  forks: number;
}

export interface GithubRequestsModel {
  limit: number;
  remaining: number;
}

export interface ErrorsModel {
  show: boolean;
  msg: string;
}

export interface LoadingModel {
  isLoading: boolean;
}

export interface DataSmall {
  label: string;
  value: number;
}

export interface DataBig extends DataSmall {
  stars: number;
}
