import * as Yup from 'yup';


export const InputDataSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Please Enter the Name"),
    // email: Yup.string().email().required("Please Enter the Name"),
    phone: Yup.number().min(10).max(13).required("Please Enter the Phone Number"),
    message: Yup.string().required("Please Enter The Message")
})