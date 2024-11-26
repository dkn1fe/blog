import {useFormik, FormikValues} from "formik";
import {notificationResponse, settingsOption} from "@/shared/utils/authList.ts";
import {Input} from "@/components/ui/input.tsx";
import {ChangeEvent, useRef, useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {AppDispatch, RootState} from "@/app/providers/StoreProvider/config/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {changeAvatar, changeEmail, changeName, changePhone} from "@/app/providers/StoreProvider/config/ProfileSlice.ts";
import {UseMessage} from "@/shared/hooks/UseMessage.tsx";
import * as Yup from "yup";
import {UseImageUrl} from "@/shared/hooks/UseImageUrl.tsx";

export const Settings = () => {
    const [inputSubmitType, setInputSubmitType] = useState('');
    const [file, setFile] = useState<File | null>(null)
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const dispatch = useDispatch<AppDispatch>()
    const message = useSelector((state: RootState) => state.profileSlice.notificationMessage)

    const status = notificationResponse[message]
    const notification = UseMessage({type: 'Settings', message, status})
    const avatarUrl = UseImageUrl({file})


    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            phone: '',
            avatar: '',
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().trim(),
            email: Yup.string().email().trim(),
            phone: Yup.string()
                .trim()
                .test('isNumeric', 'Phone must be a valid number', value => !value || /^\+\d+$/.test(value)),
            avatar: Yup.mixed()
                .test('fileType', 'Only image files are allowed', value => {
                    if (!value) return true;
                    const supportedFormats = ['image/webp', 'image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
                    return supportedFormats.includes(value.type);
                })
                .test('fileSize', 'File size is too large', value => {
                    if (!value) return true;
                    return value.size <= 5 * 1024 * 1024;
                }),
        }),
        onSubmit: (values: FormikValues) => {
            let {username, email, phone, avatar} = values;
            const formData = new FormData()

            switch (inputSubmitType) {
                case 'username':
                    dispatch(changeName({username}));
                    break;
                case 'email':
                    dispatch(changeEmail({email}));
                    break;
                case 'phone':
                    dispatch(changePhone({phone}));
                    break;
                case 'avatar':
                    if (avatar) formData.append('avatar', avatar)
                    avatar = formData.get('avatar')
                    dispatch(changeAvatar({avatar}))
            }
            formik.resetForm();
        }

    });

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files?.[0];


        if (!file) return;
        formik.setFieldValue('avatar', file)
        setFile(file)

    };


    return (
        <div>
            <h3 className='text-4xl font-semibold'>Profile settings</h3>
            <form onSubmit={formik.handleSubmit} className='mt-6 grid gap-5'>
                {settingsOption.map(item => (
                    <div key={item.id}>
                        <label
                            htmlFor={item.label}
                            className='block text-sm font-medium'>
                            {item.title}
                        </label>
                        <div className='flex pt-2'>
                            <Input
                                onClick={() => setInputSubmitType(item.label)}
                                id={item.label}
                                ref={fileInputRef}
                                className='w-64 focus:outline-none'
                                name={item.label}
                                required={item.label === inputSubmitType}
                                type={item.type}
                                onChange={item.type === 'file' ? handleFileChange : formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={item.type !== 'file' ? formik.values[item.label] : undefined}
                            />
                            <Button type='submit' className='w-32'>
                                Submit
                            </Button>
                        </div>
                        {formik.touched[item.label] && formik.errors[item.label] && (
                            <div className='text-red-600 text-xs pt-2'>
                                {formik.errors[item.label] as string}
                            </div>
                        )}
                    </div>
                ))}
            </form>
            {notification}
            {avatarUrl && (
                <div className='mt-4'>
                    <p className='font-medium'>Avatar:</p>
                    <div className='flex gap-6 items-center mt-2'>
                        <img src={avatarUrl} alt="Avatar Preview" className='w-32 h-32 mt-2 object-cover rounded-full'/>
                        <Button onClick={handleButtonClick} className='w-30'>Change photo</Button>
                    </div>
                </div>
            )}
        </div>
    );
};
