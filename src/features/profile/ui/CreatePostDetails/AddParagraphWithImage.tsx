import {useEffect, useRef, useState} from 'react';
import {Textarea} from '@/components/ui/textarea.tsx';
import {v4 as uuidv4} from 'uuid';
import {Trash2} from 'lucide-react';
import {Button} from '@/components/ui/button.tsx';
import {UseImageUrl} from '@/shared/hooks/UseImageUrl.tsx';
import {Paragraph} from '@/entities/PostType.ts';
import {deleteItems} from "@/shared/utils/utils.ts";

export const AddParagraphWithImage = () => {
    const [paragraphs, setParagraphs] = useState<Paragraph[]>([{id: uuidv4(), value: '', images: []}]);
    const [file, setFile] = useState<File | null>(null);
    const [currentId, setCurrentId] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const imageUrl = UseImageUrl({file});

    useEffect(() => {
        if (imageUrl && currentId) {
            setParagraphs(
                paragraphs.map((paragraph: any) =>
                    paragraph.id === currentId
                        ? {...paragraph, images: [...paragraph.images, imageUrl]}
                        : paragraph
                )
            );
            setFile(null);
            setCurrentId(null);
        }
    }, [imageUrl, currentId]);

    const handleFileChange = (id: string, file: File) => {
        setCurrentId(id);
        setFile(file);
    };

    const handleInputClick = () => {
        fileInputRef.current?.click();
    };

    const addParagraph = () => {
        setParagraphs([...paragraphs, {id: uuidv4(), value: '', images: []}]);
    };


    const handleInputChange = (id: string, value: string) => {
        setParagraphs((prevParagraphs) =>
            prevParagraphs.map((paragraph) =>
                paragraph.id === id ? {...paragraph, value} : paragraph
            )
        );
    };

    return (
        <div className="space-y-4 p-4 mt-4 rounded-md shadow-lg">
            <p className="text-2xl py-2 font-medium">Paragraphs</p>
            <div className="space-y-6">
                {paragraphs.map((paragraph, index) => (
                    <div
                        key={paragraph.id}
                        className="flex items-start gap-4 pb-4"
                    >
                        <span className="text-lg font-semibold">{index + 1}.</span>
                        <Textarea
                            className="max-w-[500px] w-full"
                            placeholder={`Enter message for paragraph ${index + 1}`}
                            value={paragraph.value}
                            onChange={(e) => handleInputChange(paragraph.id, e.target.value)}
                        />
                        <div className="flex flex-col gap-3 items-center">
                            <Trash2
                                className="text-red-500 cursor-pointer hover:text-red-700 font-semibold transition"
                                onClick={() => deleteItems(paragraph.id,paragraphs,setParagraphs)}
                            />
                            <Button disabled={paragraph.images.length === 3}
                                    onClick={handleInputClick} className="w-30" variant="default">
                                Add photo
                            </Button>
                            <input
                                key={currentId}
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={(event) =>
                                    handleFileChange(paragraph.id, event.target?.files?.[0] as File)
                                }
                            />
                        </div>
                        {paragraph.images &&
                            paragraph.images.map((image) => (
                                <div className='pl-5 relative w-[120px] h-[120px]'>
                                    <img key={image} alt="image" src={image}
                                         className="absolute top-0 w-full h-full ml-5 object-cover"/>
                                </div>
                            ))}
                    </div>
                ))}
            </div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                onClick={addParagraph}
            >
                Add Paragraph
            </button>
        </div>
    );
};
