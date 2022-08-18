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
 * @property bool $etat
 * @property string $lieu
 * @property string $image
 * @property Carbon $created_at
 * @property string $deleted_at
 * @property int $user_id
 * 
 * @property User $user
 *
 * @package App\Models
 */
class Evenement extends Model
{
	use SoftDeletes;
	protected $table = 'evenements';
	public $timestamps = false;

	protected $casts = [
		'etat' => 'bool',
		'user_id' => 'int'
	];

	protected $fillable = [
		'description',
		'etat',
		'lieu',
		'image',
		'user_id'
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}
}
