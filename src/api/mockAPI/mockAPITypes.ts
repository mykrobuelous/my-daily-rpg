import { XPType } from '../../data/XPType';
import { IDBrand } from '../../utils/types/BrandType';

export type UnionUndefinedHelper<T> = T | undefined;

export const mockAPICalls = {
    addQuest: 'LOCAL/ADD_QUEST',
    deleteQuest: 'LOCAL/DELETE_QUEST',
} as const;

export type MockAPICallsType = (typeof mockAPICalls)[keyof typeof mockAPICalls];

export type ParamsType = string | IDBrand;

export type BodyType =
    | AddTypeHelper<'LOCAL/ADD_QUEST', XPType, IDBrand>
    | AddTypeHelper<'LOCAL/DELETE_QUEST', DeleteQuestType>;

export type DeleteQuestType = {
    habitID: IDBrand;
    questID: IDBrand;
};

export type AddTypeHelper<
    KCall extends MockAPICallsType,
    TBody,
    TParams extends ParamsType | undefined = undefined,
> = {
    call: KCall;
    body: TBody;
    params?: TParams;
};

export type CallAPIType = <T extends BodyType>(options: T) => void;
