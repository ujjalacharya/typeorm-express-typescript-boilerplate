export const success = (data: any, error: null = null) => {
    return {
        status: "success",
        data: data,
        message: error
    }
}

export const failure = (error: string, data: null | string = null) => {
    return {
        status: "error",
        data: null,
        message: error
    }
}