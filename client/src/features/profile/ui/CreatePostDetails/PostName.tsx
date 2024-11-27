import {Input} from "@/components/ui/input.tsx";


export const PostName = () => {
    return (
        <>
            <p className="text-2xl py-2 font-medium">Post name</p>
            <Input type="text" className="w-full max-w-md" placeholder="Enter post name"/>
        </>
    )
}