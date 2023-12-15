<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movement extends Model
{
    use HasFactory;

    protected $fillable = ['quantity', 'id_bill', 'id_article'];

    public function Bill()
    {
        return $this->belongsTo(Bill::class, 'id_bill');
    }

    public function Article()
    {
        return $this->belongsTo(Article::class, 'id_article');
    }

    //validate id of related tables
    public static function ValidateIDRel(Request $request){
        if (!Bill::where('id', '=', $request->id_bill)->exists()) {
            $request->merge(['id_bill' => null]);
        }
        if (!Article::where('id', '=', $request->id_article)->exists()) {
            $request->merge(['id_article' => null]);
        }
        return $request;
    }
}
