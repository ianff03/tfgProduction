<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;

use Illuminate\Database\Eloquent\Model;

class Botiga extends Model
{
    use Notifiable;

    protected $fillable = [
        'nom','descripcio', 'telf_1', 'telf_2', 'direccio', 'cp', 'poblacio', 'provincia', 'email', 'instagram', 'facebook', 'twitter', 'nif', 'cif'
    ];

    //taula
    protected $table = 'botigues';

    protected function user()
    {
        return $this->belongsTo('App\Models\User', 'id_usuari');
    }
}
