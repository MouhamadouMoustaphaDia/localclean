<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Evenement
 * 
 * @property int $id_evenement
 * @property string|null $description
 * @property string|null $longitude
 * @property string|null $lattitude
 * @property bool $etat
 * @property Carbon|null $create_date
 * @property int $id_user
 * 
 * @property User $user
 * @property Collection|Photo[] $photos
 *
 * @package App\Models
 */
class Evenement extends Model
{
	protected $table = 'evenements';
	protected $primaryKey = 'id_evenement';
	public $timestamps = false;

	protected $casts = [
		'etat' => 'bool',
		'id_user' => 'int'
	];

	protected $dates = [
		'create_date'
	];

	protected $fillable = [
		'description',
		'longitude',
		'lattitude',
		'etat',
		'create_date',
		'id_user'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'id_user');
	}

	public function photos()
	{
		return $this->hasMany(Photo::class, 'id_evenement');
	}
}
