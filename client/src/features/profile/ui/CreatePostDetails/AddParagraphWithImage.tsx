import { useEffect, useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { UseImageUrl } from "@/shared/hooks/UseImageUrl.tsx";
import { Paragraph } from "@/entities/PostType.ts";
import { addItems, deleteItems } from "@/shared/utils/utils.ts";
import { v4 as uuidv4 } from "uuid";

export const AddParagraphWithImage = () => {
  const [paragraphs, setParagraphs] = useState<Paragraph[]>([
    { id: uuidv4(), value: "", images: [] },
  ]);
  const [file, setFile] = useState<File | null>(null);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const fileInputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const imageUrl = UseImageUrl({ file });

  useEffect(() => {
    if (imageUrl && currentId) {
      setParagraphs(
        paragraphs.map((paragraph: any) =>
          paragraph.id === currentId
            ? {
                ...paragraph,
                images: [...paragraph.images, { id: uuidv4(), url: imageUrl }],
              }
            : paragraph
        )
      );
    }
  }, [imageUrl, currentId]);

  const handleFileChange = (id: string, file: File) => {
    setCurrentId(id);
    setFile(file);
  };

  const handleInputClick = (id: number) => {
    const fileRef = fileInputRefs.current[id];
    fileRef?.click();
  };

  const handleInputChange = (id: string, value: string) => {
    setParagraphs(
      paragraphs.map((paragraph) =>
        paragraph.id === id ? { ...paragraph, value } : paragraph
      )
    );
  };

  const handleDeleteImage = (paragraphId: string, imageId: string) => {
    setParagraphs(
      paragraphs.map((paragraph) =>
        paragraph.id === paragraphId
          ? { ...paragraph, images: deleteItems(imageId, paragraph.images) }
          : paragraph
      )
    );
  };

  return (
    <div className="space-y-4 p-4 mt-4 rounded-md shadow-lg">
      <p className="text-2xl py-2 font-medium">Paragraphs</p>
      <div className="space-y-6">
        {paragraphs.map((paragraph, index) => (
          <div key={paragraph.id} className="flex flex-col gap-4 pb-4">
            <div className="flex items-start gap-4">
              <span className="text-lg font-semibold">{index + 1}.</span>
              <Textarea
                className="max-w-[500px] w-full"
                placeholder={`Enter message for paragraph ${index + 1}`}
                value={paragraph.value}
                onChange={(e) =>
                  handleInputChange(paragraph.id, e.target.value)
                }
              />
              <div className="flex flex-col gap-3 items-center">
                <Trash2
                  className="text-red-500 cursor-pointer hover:text-red-700 font-semibold transition"
                  onClick={() =>
                    setParagraphs(deleteItems(paragraph.id, paragraphs))
                  }
                />
                <Button
                  disabled={paragraph.images.length === 3}
                  onClick={() => handleInputClick(index)}
                  className="w-30"
                  variant="default"
                >
                  Add photo
                </Button>
                <input
                  key={paragraph.id}
                  type="file"
                  ref={(el) => (fileInputRefs.current[index] = el)}
                  className="hidden"
                  onChange={(event) =>
                    handleFileChange(
                      paragraph.id,
                      event.target?.files?.[0] as File
                    )
                  }
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {paragraph.images.map((image) => (
                <div
                  key={image.id}
                  className="relative w-[120px] h-[120px] border rounded-md"
                >
                  <img
                    alt="image"
                    src={image.url}
                    className="absolute top-0 w-full h-full object-cover"
                  />
                  <Button
                    onClick={() => handleDeleteImage(paragraph.id, image.id)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-3 text-sm"
                  >
                    ✕
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        onClick={() =>
          setParagraphs(
            addItems(paragraphs, { id: uuidv4(), value: "", images: [] })
          )
        }
      >
        Add Paragraph
      </Button>
    </div>
  );
};
