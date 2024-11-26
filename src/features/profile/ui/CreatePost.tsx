import {Button} from "@/components/ui/button.tsx";
import {useRef, useState} from "react";
import {PostName} from './CreatePostDetails/PostName'
import {UseImageUrl} from "@/shared/hooks/UseImageUrl.tsx";
import {BackgroundImageUpload} from "@/features/profile/ui/CreatePostDetails/BackgroundImageUpload.tsx";
import {AddTags} from "@/features/profile/ui/CreatePostDetails/AddTags.tsx";
import {AddParagraphWithImage} from "@/features/profile/ui/CreatePostDetails/AddParagraphWithImage.tsx";
import {X} from "lucide-react";
import {v4 as uuidv4} from 'uuid';

export const CreatePost = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ postName: '', tag: '' });
    const [file, setFile] = useState<File | null>(null);
    const [tagDeleteId, setTagDeleteId] = useState<null | string>(null);
    const [tags, setTags] = useState<{ id: string; tag: string }[]>([]);

    const backgroundPreviewUrl = UseImageUrl({ file });

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    // Вынести
    const onAddTags = (tag: string) => {
        const tagInfo = {
            id: uuidv4(),
            tag,
        };
        setTags([...tags, tagInfo]);
    };

    return (
        <>
            <div className="flex justify-end">
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    variant="default"
                    className="w-[200px]"
                >
                    Create Post
                </Button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
                    <div className="w-[80%] h-[90%] border border-black shadow-2xl bg-white rounded-xl relative">
                        <X
                            onClick={() => setIsOpen(false)}
                            className="absolute cursor-pointer top-2 right-4 hover:scale-75 duration-200"
                            size={24}
                        />
                        <div
                            className="p-4 h-full overflow-y-auto"
                            style={{ maxHeight: 'calc(90vh - 32px)' }}
                        >
                            <div className="mb-4">
                                <PostName />
                                <BackgroundImageUpload
                                    backgroundPreviewUrl={backgroundPreviewUrl}
                                    fileInputRef={fileInputRef}
                                    setFile={setFile}
                                    handleButtonClick={handleButtonClick}
                                />
                            </div>
                            <div>
                                <AddTags
                                    tags={tags}
                                    setTags = {setTags}
                                    onAddTags={onAddTags}
                                    setFormData={setFormData}
                                    tagDeleteId={tagDeleteId}
                                    formData={formData}
                                    setTagDeleteId={setTagDeleteId}
                                />
                                <AddParagraphWithImage />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
