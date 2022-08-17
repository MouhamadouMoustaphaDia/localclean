<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Photo
 * 
 * @property int $id_photo
 * @property string|null $name
 * @property int $id_evenement
 * 
 * @property Evenement $evenement
 *
 * @package App\Models
 */
class Photo extends Model
{
	protected $table = 'photos';
	protected $primaryKey = 'id_photo';
	public $timestamps = false;

	protected $casts = [
		'id_evenement' => 'int'
	];

	protected $fillable = [
		'name',
		'id_evenement'
	];

	public function evenement()
	{
		return $this->belongsTo(Evenement::class, 'id_evenement');
	}
}
