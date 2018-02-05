<?php
/**
 * Created by PhpStorm.
 * User: chams
 * Date: 27/01/18
 * Time: 15:09
 */

namespace App\Traits\API\Exceptions;


use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\JsonResponse;

trait RestAuthenticationExceptionTrait
{
    /**
     * Check if the given exception is an Authentication Exception.
     *
     * @param \Exception $exception
     * @return bool
     */
    protected function isAuthenticationException(\Exception $exception): bool
    {
        return $exception instanceof AuthenticationException;
    }

    /**
     * Return a json response for Authentication Exception
     *
     * @param string $message
     * @param int $statusCode
     * @return JsonResponse
     */
    protected function authenticationException(string $message = 'Unauthorized',
                                               int $statusCode = JsonResponse::HTTP_UNAUTHORIZED): JsonResponse
    {
        return response()->json($message, $statusCode);
    }
}