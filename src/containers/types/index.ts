type contentType = Array<{
    htmlFor: string,
    label: string
    type: string,
    id: string,
    placeholder: string,
    required: boolean,
    options: Array<{ option: string, value: string }>
    style: object
}>

export type sectionPropsType = {
    SECTION_NAME: string,
    SECTION_DATA: Array<{
        headline: string,
        content: contentType
    }>,
    section: number,
    setSection: any,
    initialState: any,
    SECTION_RADIO_OPTION: any,
    hideModal: boolean,
    setHideModal: any
}

export type contentPropsType = {
    content: contentType,
    state: string,
    handleChange: any
}

export type dynamicPropsType = {
    type: string,
    id: string,
    placeholder: string,
    required: boolean,
    options: Array<{ option: string, value: string }>,
    state: string,
    handleChange: any
}

export type headlinePropsType = {
    headline: string
}

export type modalPropsType = {
    setHideModal: any
}

export type radioSectionPropsType = {
    SECTION_RADIO_OPTION: any
}