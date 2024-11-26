import {FC, useEffect, useState} from "react";

interface UseImageUrlProps {
    file: File | null
}

export const UseImageUrl: FC<UseImageUrlProps> = ({file}) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null)

    useEffect(() => {

        const type = file && file.type.split('/')[0]

        if (!file) return;
        const url = URL.createObjectURL(file)
        setImageUrl(url)

        if (type === 'image') return;
        setImageUrl(null);

        return () => {
            URL.revokeObjectURL(url);
        };

    }, [file]);


    return imageUrl

}