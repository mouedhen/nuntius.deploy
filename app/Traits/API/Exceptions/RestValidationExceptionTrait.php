<?php
/**
 * Created by PhpStorm.
 * User: chams
 * Date: 27/01/18
 * Time: 15:36
 */

namespace App\Traits\API\Exceptions;


use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

trait RestValidationExceptionTrait
{
    /**
     * Check if the given exception is a Validation Exception.
     *
     * @param \Exception $exception
     * @return bool
     */
    protected function isValidationException(\Exception $exception): bool
    {
        return $exception instanceof ValidationException;
    }

    /**
     * Return a json response for Validation Exception
     *
     * @param array $data
     * @param string $message
     * @param int $statusCode
     * @return JsonResponse
     */
    protected function validationException(array $data = [],
                                           string $message = 'The given data was invalid.',
                                           int $statusCode = JsonResponse::HTTP_UNPROCESSABLE_ENTITY): JsonResponse
    {
        return response()->json([$message, $data], $statusCode);
    }
}