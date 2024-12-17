import dayjs from 'dayjs';

export const getDisabledDate = <T, K extends keyof T>(data: T[], format: string, key: K) => {
    return data.map((dataItem) => dayjs(dataItem[key] as string, format).toDate());
};
