<?php
/**
 * Created by PhpStorm.
 * User: chams
 * Date: 27/01/18
 * Time: 15:46
 */

namespace App\Traits\API\Exceptions;


use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

trait RestExceptionHandlerTrait
{
    use RestAuthenticationExceptionTrait;
    use RestBadRequestExceptionTrait;
    use RestModelNotFoundExceptionTrait;
    use RestValidationExceptionTrait;

    /**
     * @param Request $request
     * @param \Exception|ValidationException $exception
     * @return JsonResponse
     */
    protected function getJsonResponse(Request $request, $exception): JsonResponse
    {
        switch (true) {
            case $this->isAuthenticationException($exception):
                return $this->authenticationException();
            case $this->isModelNotFoundException($exception):
                return $this->modelNotFoundException();
            case $this->isValidationException($exception):
                return $this->validationException($data = $exception->errors());
            default: return $this->badRequestException(
                [
                    'error' => $exception->getMessage(),
                    'class' => get_class($exception),
                    'trace' => $exception->getTrace(),
                ],
                JsonResponse::HTTP_BAD_REQUEST
            );
        }
    }
}