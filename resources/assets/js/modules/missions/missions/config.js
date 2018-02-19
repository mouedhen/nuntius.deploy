export function initialMissionData() {
    return {
        id: -1,
        label: null,
        status: null,
        // action: store
        // status: planned
        estimated_start_date: null,
        estimated_end_date: null,
        customer_id: null,
        customer: {},
        location_id: null,
        location: {},
        // action: cancel
        // status: canceled
        cancellation_cause: null,
        // action: validate
        // status: validated
        start_date: null,
        // action: launch
        // status: in_progress
        start_counter: null,
        fuel_unit_price: null,
        // action: finish
        // status: finished
        end_date: null,
        end_counter: null,

        tasks: [],
        transports: [],
    }
}

export function initialMissionDetails() {
    return {
        id: -1,
        label: null,

        estimated_start_date: null,
        estimate_end_date: null,
        customer_id: null,
        location_id: null,
    }
}
