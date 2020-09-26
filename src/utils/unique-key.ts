const _map = new WeakMap();
let _index = 0;

export default (obj) => {
    let key = _map.get(obj);
    if (!key) {
        key = 'weak-key-' + _index++;
        _map.set(obj, key);
    }
    return key;
};