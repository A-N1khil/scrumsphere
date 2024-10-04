export class DataHolder {

    private _data: any;
    private _status: RequestStatus;
    private _error: any;

    constructor(data: any, status: RequestStatus, error: any) {
        this._data = data;
        this._error = error;
        this._status = status;
    }

    get data(): any {
        return this._data;
    }

    set data(value: any) {
        this._data = value;
    }

    get status(): RequestStatus {
        return this._status;
    }

    set status(value: RequestStatus) {
        this._status = value;
    }

    get error(): any {
        return this._error;
    }

    set error(value: any) {
        this._error = value;
    }
}

export enum RequestStatus {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    LOADING = 'LOADING'
}