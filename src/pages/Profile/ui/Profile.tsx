import {ProfileInfo, ProfileOption} from "@/features/profile";


export const ProfilePage = () => {
    return (
        <div className='flex gap-16'>
            <section>
                <ProfileOption/>
            </section>
            <section className='pt-10'>
                <ProfileInfo/>
            </section>
        </div>
    )
}