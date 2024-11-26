import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {X} from "lucide-react";
import {FC} from "react";
import {deleteItems} from "@/shared/utils/utils.ts";

interface AddTagsProps {
    setFormData: (value: { [id: string]: string; tag: string }) => void,
    tags: { id: string, tag: string }[],
    onAddTags: (tag: string) => void,
    setTagDeleteId: (id: string) => void,
    setTags: (value: any[]) => void,
    tagDeleteId: string | null,
    formData: Record<string, string>

}

export const AddTags: FC<AddTagsProps> = ({
                                              setFormData,
                                              tags,
                                              setTags,
                                              onAddTags,
                                              setTagDeleteId,
                                              tagDeleteId,
                                              formData,
                                          }) => {

    const changeFormData = (value: string) => {
        setFormData({...formData, tag: value})
    }

    return (
        <>
            <p className='text-2xl py-2 font-medium'>Tags</p>
            <div className='flex flex-col'>
                <div className='flex'>
                    <Input onChange={(event) => changeFormData(event.target.value)}
                           type='text'
                           className='w-full max-w-md' placeholder='Tags'/>
                    <Button onClick={() => onAddTags(formData.tag)} className='w-30'>Add</Button>
                </div>
                <div className='flex gap-2 pt-4'>
                    {tags && tags.map(item => (
                        <>
                            <div className='relative'>
                                <p key={item.id}
                                   onMouseEnter={() => setTagDeleteId(item.id)}
                                   className='text-white min-w-10 rounded-lg shadow-xl text-sm bg-[#4B6BFB] p-2 relative'>
                                    <span className='text-white font-bold'>#</span>{item.tag}
                                </p>
                                {item.id === tagDeleteId && (
                                    <X color='red'
                                       onClick={() => deleteItems(item.id, tags,setTags)}
                                       className='absolute bg-gray-300/[0.40] cursor-pointer w-full h-full top-0 left-0'/>
                                )}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}