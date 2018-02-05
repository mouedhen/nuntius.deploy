<?php
/**
 * Created by PhpStorm.
 * User: chams
 * Date: 27/01/18
 * Time: 15:32
 */

namespace App\Traits\API\Exceptions;


use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;

trait RestModelNotFoundExceptionTrait
{
    /**
     * Check if the given exception is an Eloquent Model Not Found Exception.
     *
     * @param \Exception $exception
     * @return bool
     */
    protected function isModelNotFoundException(\Exception $exception): bool
    {
        return $exception instanceof ModelNotFoundException;
    }

    /**
     * Return a json response for Eloquent Model Not Found Exception
     *
     * @param string $message
     * @param int $statusCode
     * @return JsonResponse
     */
    protected function modelNotFoundException(string $message = 'Not found.',
                                              int $statusCode = JsonResponse::HTTP_NOT_FOUND): JsonResponse
    {
        return response()->json($message, $statusCode);
    }
}