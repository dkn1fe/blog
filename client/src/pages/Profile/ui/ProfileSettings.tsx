import {ProfileOption, Settings} from "@/features/profile";


export const ProfileSettings = () => {
    return (
        <>
            <div className='flex gap-16'>
                <section>
                    <ProfileOption/>
                </section>
                <section className='pt-10'>
                    <Settings/>
                </section>
            </div>
        </>
    )
}