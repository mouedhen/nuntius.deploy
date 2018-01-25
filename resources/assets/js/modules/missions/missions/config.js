export function initialMissionData() {
    return {
        id: -1,
        estimated_start_date: null,
        estimated_end_date: null,
        service_type: 'ground_work',
        customer_id: null,
        location_id: null,
        fuel_unit_price: null,
        start_counter: null,
        end_counter: null,
    }
}

export function missionDetails() {
    return {
        id: -1,
        label: null,
        estimated_start_date: null,
        estimate_end_date: null,
        service_type: null,
        customer: {},
        location: {},
        step: null,
        created_at: null,
        updated_at: null,
        tasks: [],
        missions_delays_logs: [],
        fuel_unit_price: null,
        start_counter: null,
        end_counter: null,
    }
}
