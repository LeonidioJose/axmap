declare module 'axmap' {
    type AxelMapOptions = {
        load: string | object
    }
    type path = string
    type forEachFunc = (key: string, value: any, index: number) => {}
}