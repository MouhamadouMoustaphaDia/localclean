<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Evenement
 * 
 * @property int $id
 * @property string $description
 * @property int $etat
 * @property float $longitude
 * @property float $lattitude
 * @property int $user_id
 * @property int $photo_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property string $deleted_at
 * 
 * @property User $user
 * @property Photo $photo
 *
 * @package App\Models
 */
class Evenement extends Model
{
	use SoftDeletes;
	protected $table = 'evenements';

	protected $casts = [
		'etat' => 'int',
		'longitude' => 'float',
		'lattitude' => 'float',
		'user_id' => 'int',
		'photo_id' => 'int'
	];

	protected $fillable = [
		'description',
		'etat',
		'longitude',
		'lattitude',
		'user_id',
		'photo_id'
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}

	public function photo()
	{
		return $this->belongsTo(Photo::class);
	}
}
