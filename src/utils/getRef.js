export default function getRef(obj) {
    return obj.ref['@ref'].split('/')[2];
};