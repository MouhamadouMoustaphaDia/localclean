<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class User
 *
 * @property int $id_user
 * @property string|null $name
 * @property string $email
 * @property string $password
 * @property int|null $nbr_signalement
 * @property string $profil
 * @property Carbon|null $create_date
 *
 * @property Collection|Evenement[] $evenements
 *
 * @package App\Models
 */
class User extends Model
{
	protected $table = 'users';
	protected $primaryKey = 'id_user';
	public $timestamps = false;

	protected $casts = [
		'nbr_signalement' => 'int'
	];

	protected $dates = [
		'create_date'
	];

	protected $hidden = [
		'password'
	];

	protected $fillable = [
		'name',
		'email',
		'password',
		'nbr_signalement',
		'profil',
		'create_date'
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

	public function evenements()
	{
		return $this->hasMany(Evenement::class, 'id_user');
	}
}
