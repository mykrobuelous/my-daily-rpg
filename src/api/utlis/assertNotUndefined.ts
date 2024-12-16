import { cleanError } from '../../utils/function/cleanError';
import { ErrorAPI } from './ErrorAPI';

function assertNotUndefined<T>(type: string, value: T | undefined): asserts value is T {
    if (value === undefined) {
        throw new Error(cleanError(ErrorAPI.valueUndefined(type)));
    }
}

export { assertNotUndefined };
