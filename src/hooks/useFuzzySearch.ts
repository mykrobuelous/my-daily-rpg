import { FlattenObjectKeys } from '@/types/typehelpers/FlattenKeysHelper';
import Fuse, { IFuseOptions } from 'fuse.js';
import { useMemo } from 'react';

const fuseOptions = <T>(): IFuseOptions<T> => ({
    threshold: 0.5,
});

const useFuzzySearch = <T>(data: T[], searchKey: string, keys: FlattenObjectKeys<T>[]): T[] => {
    const fuse = useMemo(() => {
        const newFuse = new Fuse(data, { keys, ...fuseOptions<T>() });
        return newFuse;
    }, [data, keys]);

    const searchResults = searchKey ? fuse.search(searchKey).map((results) => results.item) : data;

    return searchResults;
};

export default useFuzzySearch;
