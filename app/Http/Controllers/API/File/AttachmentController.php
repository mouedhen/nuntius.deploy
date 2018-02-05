<?php
/**
 * Created by PhpStorm.
 * User: chams
 * Date: 30/01/18
 * Time: 01:15
 */

namespace App\Http\Controllers\API\File;

use App\Models\Attachment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AttachmentController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|max:5000|mimes:' . $this->getAllowedFileTypes(),
            'attachable_id' => 'required|integer',
            'attachable_type' => 'required',
        ]);

        if ($fileUid = $request->file->store('/upload', 'public')) {
            return Attachment::create([
                'filename' => $request->file->getClientOriginalName(),
                'uid' => $fileUid,
                'size' => $request->file->getClientSize(),
                'mime' => $request->file->getMimeType(),
                'attachable_id' => $request->get('attachable_id'),
                'attachable_type' => $request->get('attachable_type'),
            ]);
        }
        return response(['msg' => 'Unable to upload your file.'], 400);
    }

    public function destroy(Attachment $attachment)
    {
        return (string) $attachment->delete();
    }

    private function getAllowedFileTypes()
    {
        return str_replace('.', '', config('attachment.allowed', ''));
    }
}