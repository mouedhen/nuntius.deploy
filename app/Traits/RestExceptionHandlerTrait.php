<?php
/**
 * Created by PhpStorm.
 * User: chams
 * Date: 24/01/18
 * Time: 00:07
 */

namespace App\Traits;

use Exception;
use Illuminate\Http\Request;

trait RestExceptionHandlerTrait
{
    use RestExceptions\RestModelNotFoundExceptionTrait;
    use RestExceptions\RestAuthenticationExceptionTrait;
    use RestExceptions\RestValidationExceptionTrait;
    use RestTrait;

    /**
     * Creates a new JSON response based on exception type.
     *
     * @param Request $request
     * @param Exception $e
     * @return \Illuminate\Http\JsonResponse
     */
    protected function getJsonResponseForException(Request $request, Exception $e)
    {
        switch (true) {
            case $this->isModelNotFoundException($e):
                return $this->modelNotFound();
            case $this->isAuthenticationException($e):
                return $this->authenticationException();
            case $this->isValidationException($e):
                return $this->validationException([
                    'message' => $e->getMessage(),
                    'errors' => $e->errors(),
                ]);
            default:
                return $this->badRequest(
                    [
                        'error' => $e->getMessage(),
                        'class' => get_class($e),
                    ]);
        }
    }

    /**
     * Returns json response for generic bad request.
     *
     * @param string $message
     * @param int $statusCode
     * @return \Illuminate\Http\JsonResponse
     */
    protected function badRequest($message = 'Bad request', $statusCode = 400)
    {
        return $this->jsonResponse(['error' => $message], $statusCode);
    }
}