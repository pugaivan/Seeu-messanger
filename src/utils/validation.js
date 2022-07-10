export const validate = (values, errors) => {
    Object.keys(values).map((key) => {
        console.log(values[key].value)
        const validationRule = getValidationRule(key)
        const validationRegex = new RegExp(validationRule.value)
        if (values[key].required && !values[key].value) {
            errors[key] = { message: "this field is required" }
        } else if (!validationRegex.test(values[key].value)) {
            errors[key] = { message: validationRule.message }
        } else {
            delete errors[key];
        }
    })

    return errors
}


const getValidationRule = (field) => {
    const rules = {
        phoneNumber: {
            value: /^[0-9]*$/,
            message: 'phone must contain only numbers'
        },
        password: {
            value: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){6,}$/,
            message: "Your password must be at least 6 characters, and include at least one letter and a number"
        },
        firstName: {
            value: /^[a-zA-Z]+$/g,
            message: 'name must contain only letters'
        },
        lastName: {
            value: /^[a-zA-Z]+$/g,
            message: 'last name must contain only letters'
        }
    }
    return rules[field]
}