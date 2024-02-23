export interface IProjectCategory {
    id: number,
    projectCategoryName: string
}

export interface IMember {
    userId: number;
    name: string;
    avatar: string;
}

export interface ICreator {
    id: number;
    name: string;
}

export interface IProject {
    members: IMember[];
    creator: ICreator;
    id: number;
    projectName: string;
    description: string;
    categoryId: number;
    categoryName: string;
    alias: string;
    deleted: boolean;
}