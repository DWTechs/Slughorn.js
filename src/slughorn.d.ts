export interface Options {
    separator?: string;
    maxLength?: number;
    seo?: boolean;
}

declare function convert(url: string, options?: Options): string|false;
export { convert };