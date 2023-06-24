// ----------- COMPONENTS ----------- 

export type getSectionBySidebarPropsType = {
    sidebar: string,
    section: number,
    setSection: any,
    hideModal: boolean,
    setHideModal: any
}

export type headerPropsType = {
    section: number
}

export type sidebarPropsType = {
    setSidebar: any,
    sidebar: string,
    section: number,
    setHideModal: any
}

// ----------- UI TYPES ----------- 

export type buttonPropsType = {
    type: string,
    value: string
}

export type inputPropsType = {
    type: string,
    id: string,
    placeholder: string,
    required: boolean,
    state: any,
    handleChange: any
}

export type labelPropsType = {
    htmlFor: string,
    label: string
}

export type radioPropsType = {
    radioOptions: Array<{
        name: string,
        value: string,
        label: string
    }>
}

export type selectPropsType = {
    type: string,
    id: string,
    placeholder: string,
    required: boolean,
    options: Array<{ option: string, value: string }>,
    handleChange: any,
    state: any
}

