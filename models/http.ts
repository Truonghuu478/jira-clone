


export interface HTTPResponse<T>{
    statusCode: number,
    message: string,
    content: T
    dateTime: string
}