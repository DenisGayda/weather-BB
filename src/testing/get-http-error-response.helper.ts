import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

export function getHttpErrorResponse(config: HttpErrorConfig = {}): HttpErrorResponse {
	return new HttpErrorResponse({...defaultHttpErrorConfig, ...config})
}

interface HttpErrorConfig {
	error?: any;
	headers?: HttpHeaders;
	status?: number;
	statusText?: string;
	url?: string;
}

const defaultHttpErrorConfig: HttpErrorConfig = {
	error: null,
	headers: new HttpHeaders({}),
	status: 404,
	statusText: 'Error',
	url: 'url',
}
