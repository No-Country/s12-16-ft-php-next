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

    public function category()
    {
        return $this->belongsTo(Category::class, 'id_categorie');
    }

    public function incrementquantity($mode, $num)
    {
        if ($mode){
            $updatenum = $this->quantity+$num;
        }else{
            $updatenum = $this->quantity-$num;
        }
        $this->update([
            'quantity' => $updatenum,
        ]);
    }
}