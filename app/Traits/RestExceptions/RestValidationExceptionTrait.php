<?php
/**
 * Created by PhpStorm.
 * User: chams
 * Date: 24/01/18
 * Time: 03:12
 */

namespace App\Traits\RestExceptions;

use Exception;
use Illuminate\Validation\ValidationException;

trait RestValidationExceptionTrait
{
    // use RestTrait;

    protected function validationException(
        $data = ['message' => 'The given data was invalid.', 'code' => 0, 'errors' => []],
        $statusCode = 422)
    {
        return $this->jsonResponse(['error' => $data['message'], 'code' => $data['code'], 'data' => $data['errors']],
            $statusCode);
    }

    protected function isValidationException(Exception $e)
    {
        return $e instanceof ValidationException;
    }
}