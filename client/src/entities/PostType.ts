
export type Paragraph = {
    id: string;
    value: string;
    images: ImagesParagraph[];
};

export type ImagesParagraph = {
    id:string,
    url:string,
}