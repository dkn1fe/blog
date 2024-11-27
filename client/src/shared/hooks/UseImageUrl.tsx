import { useEffect, useState } from "react";

interface UseImageUrlProps {
    file: File | null;
}

export const UseImageUrl = ({ file }: UseImageUrlProps): string | null => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {

        if (!file) {
            setImageUrl(null);
            return;
        }
        
        const type = file.type.split('/')[0];

        if (type !== 'image') {
            setImageUrl(null);
            return;
        }

        const url = URL.createObjectURL(file);
        setImageUrl(url);

        return () => {
            URL.revokeObjectURL(url);
        };
    }, [file]);

    return imageUrl;
};