import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export function TransformError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error';
    if (typeof error === 'string') {
        errorMessage = error;
    } else if ( error.error instanceof ErrorEvent ) {
        errorMessage = `Error ! ${error.error.message}`;
    } else if (error.status) {
        errorMessage = `Request failed with ${error.status} ${error.statusText}`;
    }
    return throwError(errorMessage);
}
