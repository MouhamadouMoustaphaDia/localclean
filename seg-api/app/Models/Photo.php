<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Photo
 * 
 * @property int $id
 * @property string $image
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property string $deleted_at
 * 
 * @property Collection|Evenement[] $evenements
 *
 * @package App\Models
 */
class Photo extends Model
{
	use SoftDeletes;
	protected $table = 'photos';

	protected $fillable = [
		'image'
	];

	public function evenements()
	{
		return $this->hasMany(Evenement::class);
	}
}
