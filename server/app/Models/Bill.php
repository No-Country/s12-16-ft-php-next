<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;


    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function movement() 
    {
        return $this->hasOne(Movement::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
