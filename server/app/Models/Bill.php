<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;

    protected $fillable = ['date_ended', 'id_user', 'description', 'id_provider', 'status'];

    public function User()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function Provider()
    {
        return $this->belongsTo(Provider::class, 'id_provider');
    }

    public function getDateEndedFormattedAttribute($value)
    {
        if($this->date_ended != null){
            $timestamp = strtotime($this->date_ended); 
            return date('d/m/Y', $timestamp );
        }
    }

    //convert nombre of status
    public function getStatusNameAttribute()
    {
        $status = $this->status;
        switch ($status) {
            case true:
                return $this->statusName = 'FINALIZADO';
                break;
            case false:
                return $this->statusName = 'INGRESADO';
                break;
        }
    }
}
