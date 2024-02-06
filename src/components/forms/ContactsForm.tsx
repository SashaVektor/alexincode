import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
import { toastStyle } from "../../constants"
import { PhoneInput } from "react-international-phone"
import { useState } from "react"
import { useAppDispatch } from "../../store/hooks"
import { onClose } from "../../store/slices/modalSlice"
import { CgSpinner } from "react-icons/cg"

const ContactFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be more than 1 letter"
    }),
    email: z.string().email(),
    description: z.string().min(2, {
        message: "Descr must be more than 1 letter"
    }),
})

type FormValues = z.infer<typeof ContactFormSchema>


const ContactsForm = ({ isModal }: { isModal?: boolean }) => {
    const [phone, setPhone] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { t } = useTranslation()
    const dispatch = useAppDispatch();

    const { register, handleSubmit, reset,
        formState: { isSubmitting, isValid }
    } = useForm<FormValues>({
        resolver: zodResolver(ContactFormSchema), defaultValues: {
            name: "",
            description: "",
            email: ""
        }
    })

    const onSubmit: SubmitHandler<FormValues> = async (values) => {
        const template = isModal ? import.meta.env.VITE_TEMPLATE1 : import.meta.env.VITE_TEMPLATE2
        const serviceId = import.meta.env.VITE_SERVICE_ID
        const publicKey = import.meta.env.VITE_PUBLIC_KEY

        setIsLoading(true)

        emailjs.send(serviceId, template, {
            from_name: values.name,
            to_name: "Alex",
            from_email: values.email,
            to_email: "veklichalexandr@icloud.com",
            message: values.description,
            phone,
        }, publicKey).then(() => {
            toast.success(t("modal.message"), toastStyle)
            dispatch(onClose());
            reset();
        }, (error: any) => {
            console.log(error);
            toast.error("Something went wrong", toastStyle)
            dispatch(onClose());
        }).finally(() => setIsLoading(false))

    }

    return (
        <form
            className={`w-full sm:max-w-xl md:max-w-2xl ${isModal ? "lg:max-w-3xl" : ""} flex flex-col gap-4 lg:gap-5`}
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                type="text"
                placeholder={`${t('contacts.name')}`}
                className="w-full bg-transparent border-2 border-textgray focus:outline-none focus:border-gold px-3 py-2 rounded-lg text-white md:text-lg lg:text-xl placeholder:text-textgray"
                required
                {...register("name")}
                aria-label="User name"
            />
            <input
                type="email"
                placeholder={`${t('contacts.email')}`}
                className="w-full bg-transparent border-2 border-textgray focus:outline-none focus:border-gold px-3 py-2 rounded-lg text-white md:text-lg lg:text-xl placeholder:text-textgray"
                required
                {...register("email")}
                aria-label="User email"

            />
            {isModal ? <PhoneInput
                defaultCountry="ua"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                hideDropdown
                aria-label="Phone number"
                style={{
                    width: "100%",
                    backgroundColor: "transparent",
                    border: "2px solid #707070",
                    outline: "none",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "18px",
                    padding: "8px 12px"
                }}
                inputStyle={{
                    width: "100%",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    color: "white",
                    fontSize: "18px",

                }}
                countrySelectorStyleProps={{
                    buttonStyle: {
                        border: "none",
                    },
                }}
            /> : null}
            <textarea
                placeholder={`${t('contacts.descr')}`}
                className="w-full h-32 bg-transparent border-2 border-textgray focus:outline-none focus:border-gold px-3 py-2 rounded-lg text-white md:text-lg lg:text-xl placeholder:text-textgray resize-none"
                required
                {...register("description")}
                aria-label="User description"
            />
            <button
                className={`px-3 py-2 w-full ${isLoading ? "bg-transparent" : "bg-blue"} rounded-lg border-2 border-blue text-white hover:bg-transparent duration-300 transition disabled:cursor-not-allowed`}
                disabled={isSubmitting || !isValid || isLoading}
            >
                {isLoading
                ? <CgSpinner 
                className="animate-spin text-white mx-auto text-2xl"
                /> 
                : t("contacts.button")}
            </button>
        </form>
    )
}

export default ContactsForm
