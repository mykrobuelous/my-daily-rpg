export type ResponseType<T> = { message: string } & (
    | {
          success: true;
          data: T;
      }
    | {
          success: false;
          error: Error | string;
      }
);
