<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Partenaire
 * 
 * @property int $id_partenaire
 * @property string $name
 * @property string $adresse
 * @property string $contact
 *
 * @package App\Models
 */
class Partenaire extends Model
{
	protected $table = 'partenaires';
	protected $primaryKey = 'id_partenaire';
	public $timestamps = false;

	protected $fillable = [
		'name',
		'adresse',
		'contact'
	];
}
