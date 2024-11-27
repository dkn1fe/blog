import {Button} from "@/components/ui/button.tsx";
import {FC, LegacyRef} from "react";

interface BackgroundImageUploadProps {
    backgroundPreviewUrl: string
    fileInputRef: LegacyRef<HTMLInputElement> | undefined,
    setFile: (file: File | null) => void,
    handleButtonClick: () => void
}


export const BackgroundImageUpload: FC<BackgroundImageUploadProps> = ({
     backgroundPreviewUrl,
     fileInputRef,
     setFile,
     handleButtonClick
    }) => {
    return (
        <div className="space-y-2 pt-6">
            <p className="text-lg font-medium">Upload Background Image</p>
            <label
                htmlFor="file-upload"
                className={`${!backgroundPreviewUrl ? 'border-2 border-dashed border-black hover:bg-gray-100 transition duration-200' : ''} flex items-center justify-center w-full max-w-md h-[300px] rounded-lg cursor-pointer  overflow-hidden`}
            >
                <div className="relative w-[400px] h-[300px]">
                    {backgroundPreviewUrl && (
                        <img
                            src={backgroundPreviewUrl}
                            alt="Preview"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        />
                    )}
                    {!backgroundPreviewUrl && (
                        <div
                            className="flex flex-col items-center justify-center w-full h-full text-gray-500">
                            <p className="text-sm">Click to upload or drag and drop</p>
                            <p className="text-xs">(Supported formats: JPG, PNG)</p>
                        </div>
                    )}
                </div>
            </label>
            <input
                id="file-upload"
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={(event) => setFile(event.currentTarget?.files[0] as File)}
            />
            {backgroundPreviewUrl && (
                <Button onClick={handleButtonClick} className="mt-8 ml-6 w-30">
                    Change Photo
                </Button>
            )}
        </div>
    )
}