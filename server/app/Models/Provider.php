<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    use HasFactory;

    protected $table = 'providers';

    protected $fillable = ['name', 'cuit', 'direction', 'location', 'email', 'tel'];

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = strtoupper($value);
    }

    public function setDirectionAttribute($value)
    {
        $this->attributes['direction'] = strtoupper($value);
    }

    public function setLocationAttribute($value)
    {
        $this->attributes['location'] = strtoupper($value);
    }

    public function setEmailAttribute($value)
    {
        $this->attributes['email'] = strtolower($value);
    }
}
