export function initialCustomerData() {
    return {
        id: -1,
        label: null,
        label_id: null,
        name: null,
        cin_passport: null,
        tax_registration_number: null,
        phone_number: null,
        email: null,
        category: null,
        address: null,
        created_at: null,
        updated_at: null,
        contacts: [],
        missions: [],
    }
}

export function initialContactData() {
    return {
        id: -1,
        label: null,
        label_id: null,
        customer_id: -1,
        name: null,
        phone_number: null,
        email: null,
        address: null,
        created_at: null,
        updated_at: null,
    }
}
