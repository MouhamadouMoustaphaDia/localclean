<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Evenement
 * 
 * @property int $id_evenement
 * @property string $description
 * @property Carbon $create_date
 * @property bool $etat
 * @property string $longitude
 * @property string $lattitude
 * @property int $id_user
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
		'create_date',
		'etat',
		'longitude',
		'lattitude',
		'id_user'
	];
}
