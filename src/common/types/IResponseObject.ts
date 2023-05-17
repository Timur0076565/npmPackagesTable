import type {IPackage} from "@/common/types/IPackage";

export interface IObject {
    flags: {
        unstable: boolean;
    };
    package: IPackage;
    score: {
        detail: {
            maintenance: number;
            popularity: number;
            quality: number;
        };
        final: number;
    };
    searchScore: number;
}

export interface IResponseObject {
    time: string;
    total: number;
    objects: IObject[],
}
