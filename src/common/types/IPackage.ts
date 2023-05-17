export interface IPackageLinks {
    npm: string
    homepage: string
    repository: string
    bugs: string
}

export interface IUserInfo {
    name?: string;
    username: string;
    email: string;
}

export interface IPackage {
    name: string;
    version: number;
    description: string;
    keywords: string[];
    date: string;
    links: IPackageLinks;
    author: IUserInfo,
    publisher: IUserInfo,
    maintainers: IUserInfo[],
}
