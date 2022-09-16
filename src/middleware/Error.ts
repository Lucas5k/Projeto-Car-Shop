import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import errorCatalog, { ErrorType } from '../errors/catalog';

const errorHandler: ErrorRequestHandler = ( 
  err: Error | ZodError, 
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) { 
    return res.status(400).json({ message: err.issues });
  }

  const messageAsErrorType = err.message as keyof typeof ErrorType;

  const mappedError = errorCatalog[messageAsErrorType];
  if (mappedError) {
    const { httpStatus, message } = mappedError;
    return res.status(httpStatus).json({ message });
  }

  return res.status(400).json({ message: 'internal error' });
};

export default errorHandler;