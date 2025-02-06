import { LevelDataType } from '@/data/XPData';
import { IDBrand } from '@/types/brand.types';

export type AddXPDataAPIType = {
    id: IDBrand;
    experienceID: IDBrand;
    questDetails: {
        quest: string;
        points: number;
        level: LevelDataType;
    };
};

export type ResponseAPIType<T> = { message: string } & (
    | {
          success: true;
          data: T;
      }
    | {
          success: false;
          error: Error | string;
      }
);
