import { Block } from '../core';

const logInfo = (info:string) => {
    console.log(info);
};

export default (components:Block[]) => {
    console.log(components);
    const errorComponentNames = components
        .filter(({ state: { error } }:any) => error)
        .map(({ props: { name } }:any) => name);

    const emptyComponentNames = components
        .filter(({ state: { value } }:any) => !value)
        .map(({ props: { name } }:any) => name);

    const data = components.reduce((
        acc,
        { props: { id }, state: { value } }:any,
    ) => ({
        ...acc,
        [id]: value,
    }), {});
    logInfo(JSON.stringify(data));

    if (errorComponentNames.length || emptyComponentNames.length) {
        errorComponentNames.forEach((component) => {
            logInfo(`${component} has wrong value`);
        });

        emptyComponentNames.forEach((component) => {
            logInfo(`${component} is empty`);
        });

        return false;
    }

    return false;
};
