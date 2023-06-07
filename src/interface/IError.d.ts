interface IError {
    message: string;
    errorStatus: boolean;
    severity: AlertColor;
    payload?: any
}