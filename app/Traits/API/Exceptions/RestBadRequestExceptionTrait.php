<?php
/**
 * Created by PhpStorm.
 * User: chams
 * Date: 27/01/18
 * Time: 15:47
 */

namespace App\Traits\API\Exceptions;


use Illuminate\Http\JsonResponse;

trait RestBadRequestExceptionTrait
{
    /**
     * Return json response for generic bad request.
     *
     * @param string|array $payload
     * @param int $statusCode
     * @return JsonResponse
     */
    protected function badRequestException($payload = 'Bad request',
                                           int $statusCode = JsonResponse::HTTP_BAD_REQUEST): JsonResponse
    {
        $payload = $payload ?: [];
        return response()->json($payload, $statusCode);
    }
}