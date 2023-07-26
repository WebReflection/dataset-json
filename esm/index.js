/*! (c) Andrea Giammarchi - ISC */
const { parse, stringify } = JSON;
const { defineProperty, getOwnPropertyDescriptor } = Object;

const handler = {
    get: (dataset, name) => {
        const value = dataset[name];
        return name === 'json' && value != null ? parse(value) : value;
    },
    set: (dataset, name, value) => {
        dataset[name] = name === 'json' ? stringify(value) : value;
        return true;
    }
};

const wm = new WeakMap;
for (const proto of [HTMLElement.prototype, SVGElement.prototype]) {
    const { get } = getOwnPropertyDescriptor(proto, 'dataset');
    defineProperty(proto, 'dataset', {
        get() {
            let proxy = wm.get(this);
            if (!proxy) wm.set(this, proxy = new Proxy(get.call(this), handler));
            return proxy;
        }
    });
}
