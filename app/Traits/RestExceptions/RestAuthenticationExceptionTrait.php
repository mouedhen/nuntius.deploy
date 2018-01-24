<?php
/**
 * Created by PhpStorm.
 * User: chams
 * Date: 24/01/18
 * Time: 03:12
 */

namespace App\Traits\RestExceptions;

use Exception;
use Illuminate\Auth\AuthenticationException;

trait RestAuthenticationExceptionTrait
{
    /**
     * Returns json response for Eloquent model not found exception.
     *
     * @param string $message
     * @param int $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    protected function authenticationException($message = 'Unauthorized', $statusCode = 401)
    {
        return $this->jsonResponse(['error' => $message], $statusCode);
    }

    /**
     * Determines if the given exception is an Eloquent model not found.
     *
     * @param Exception $e
     * @return bool
     */
    protected function isAuthenticationException(Exception $e)
    {
        return $e instanceof AuthenticationException;
    }
}