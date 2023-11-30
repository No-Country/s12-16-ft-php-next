<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Article extends Model
{
    use HasFactory;

    protected $guarded = [
        "id",
        "timestamps",
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}