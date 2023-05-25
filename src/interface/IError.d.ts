interface IError {
    message: string;
    status: boolean;
    severity: AlertColor;
    payload?: any
}