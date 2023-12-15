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

    public function scopeName($query, $name)
    {
        if($name) {
            return $query->where('name', 'like', '%' . $name . '%');
        }
        return $query;
    }

    public function scopeUnit($query, $unit)
    {
        if($unit) {
            return $query->where("unit", $unit);
        }
        return $query;
    }

    public function scopeCategories($query, $categories)
    {
        if($categories) {
            return $query->where("id_categorie", $categories);
        }
        return $query;
    }

    public function scopePrice($query, $price)
    {
        if($price) {
            return $query->where('price', '<=', $price);
        }
        return $query;
    }

    public function scopeDate($query, $date)
    {
        if($date) {
            return $query->where('created_at', '>=', $date);
        }
        return $query;
    }
}