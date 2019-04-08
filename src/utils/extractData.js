import getRef from './getRef';

export default function extractData(obj) {
    return {
        ref: getRef(obj),
        ...obj.data,
    }
}