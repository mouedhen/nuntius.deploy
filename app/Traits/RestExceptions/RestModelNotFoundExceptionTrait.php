<?php
/**
 * Created by PhpStorm.
 * User: chams
 * Date: 24/01/18
 * Time: 03:31
 */

namespace App\Traits\RestExceptions;

use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;

trait RestModelNotFoundExceptionTrait
{
    // use RestTrait;

    /**
     * Returns json response for Eloquent model not found exception.
     *
     * @param string $message
     * @param int $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    protected function modelNotFound($message = 'Record not found', $statusCode = 404)
    {
        return $this->jsonResponse(['error' => $message], $statusCode);
    }

    /**
     * Determines if the given exception is an Eloquent model not found.
     *
     * @param Exception $e
     * @return bool
     */
    protected function isModelNotFoundException(Exception $e)
    {
        return $e instanceof ModelNotFoundException;
    }
}