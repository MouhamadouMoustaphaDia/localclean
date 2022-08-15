<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

/**
 * Class User
 *
 * @property int $id_user
 * @property string $name
 * @property string $email
 * @property int $password
 * @property int $nbr_signalement
 * @property string $profil
 * @property Carbon $create_date
 *
 * @package App\Models
 */
class User extends Model
{
	protected $table = 'users';
	protected $primaryKey = 'id_user';
	public $timestamps = false;

	protected $casts = [
		'password' => 'int',
		'nbr_signalement' => 'int'
	];

	protected $dates = [
		'create_date'
	];


	protected $fillable = [
		'name',
		'email',
		'password',
		'nbr_signalement',
		'profil',
		'create_date'
	];

    use Notifiable;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
