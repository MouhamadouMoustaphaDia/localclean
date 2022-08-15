<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterAuthRequest;
use App\Models\Evenement;
use App\Models\User;
use App\Models\Partenaire;
use Illuminate\Http\Request;
use JWTAuth;
use PhpParser\Builder\Param;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{
    public $loginAfterSignUp = true;


    // Insert on table user
    public function register(RegisterAuthRequest $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->profil = $request->profil;
        $user->nbr_signalement =$request->nbr_signalement;
        $user->create_date = $request->create_date;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        $user->save();

        if ($this->loginAfterSignUp) {
            return $this->login($request);
        }

        return response()->json([
            'success' => true,
            'data' => $user
        ], 200);
    }


    public function show()
    {
        $partenaire = Partenaire::find(1) ;
        return  $partenaire;
    }



    public function login(Request $request)
    {
        $input = $request->only('email', 'password');
        $jwt_token = null;

        if (!$jwt_token = JWTAuth::attempt($input)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid Email or Password',
            ], 401);
        }

        return response()->json([
            'success' => true,
            'token' => $jwt_token,
        ]);
    }

    public function logout(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ]);

        try {
            JWTAuth::invalidate($request->token);

            return response()->json([
                'success' => true,
                'message' => 'User logged out successfully'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the user cannot be logged out'
            ], 500);
        }
    }

    public function getAuthUser(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ]);

        $user = JWTAuth::authenticate($request->token);

        return response()->json(['user' => $user]);
    }

    // Insert on table partenaire
    public function addPartenaire(Request $request)
    {
        $partenaire = new Partenaire();
        $partenaire->name = $request->name;
        $partenaire->adresse = $request->adresse;
        $partenaire->contact = $request->contact;
        $partenaire->save();
    }


    public function addEvenement(Request $request)
    {
        $evenement = new Evenement();
        $evenement->description = $request->description;
        $evenement->etat = $request->etat;
        $evenement->longitude = $request->longitude;
        $evenement->lattitude = $request->lattitude;
        $evenement->create_date = $request->create_date;
        $evenement->save();
    }
}
