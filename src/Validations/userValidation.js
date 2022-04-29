import * as yup from 'yup';

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    
    // email: yup.string().email(),
    // horoscopeSign: yup.string().required(),
    // timeFrame:yup.string().required()

    
})
