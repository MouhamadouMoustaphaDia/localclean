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
 * @property string $name
 * @property int $id_evenement
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
}
