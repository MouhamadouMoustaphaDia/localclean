<?php

namespace App\Http\Controllers;

//use App\Http\Requests\RegisterAuthRequest;

use App\Models\Evenement;
use App\Models\Profil;
use App\Models\User;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class userController extends Controller
{
    public $loginAfterSignUp = true;

    public function addProfil(Request $request)
    {
        try{  //ce Try catch permet de faire un rollback au cas où la transaction n'a pas abouti
            DB::beginTransaction();

            $profil = Profil::create([
            'name' => $request->get('name')
             ]);

        DB::commit();

         return response()->json([
            'success' => true,
            'profil' => $profil
        ]);

      }catch (\Exception $e){

        return response()->json([
            'success' => false,
        ]);

        DB::rollback();
       }

    }

    public function addEvenement(Request $request)
    {
        try{  //ce Try catch permet de faire un rollback au cas où la transaction n'a pas abouti
            DB::beginTransaction();

            $evenement = Evenement::create([
                'description' => $request->get('description'),
                'etat' => $request->get('etat'),
                'lieu' => $request->get('lieu'),
                'image' => $request->get('image'),
                'user_id' => $request->get('user_id'),//Foreignekey
             ]);

        DB::commit();

         return response()->json([
            'success' => true,
            'evenement' => $evenement
        ]);

      }catch (\Exception $e){

        return response()->json([
            'success' => false,
        ]);

        DB::rollback();
       }

    }

    public function getProfil()
    {
        return DB::table('profils')->get();
    }


    public function addUser(Request $request)
    {
        try{  //ce Try catch permet de faire un rollback au cas où la transaction n'a pas abouti
            DB::beginTransaction();

            $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
            'image' => $request->get('image'),
            'nbr_signalement' => $request->get('nbr_signalement'),
            'profil_id' => $request->get('profil_id'),//Foreignekey
             ]);



        $token = JWTAuth::fromUser($user);

        DB::commit();

         return response()->json([
            'success' => true,
            'user' => $user,
            'token' => $token
        ]);

      }catch (\Exception $e){

        return response()->json([
            'success' => false,
        ]);

        DB::rollback();
       }

    }

    public function getEvenement()
    {
        return DB::table('evenements')->get();
    }

    public function login(Request $request)
    {
        $input = $request->only('email', 'password');
        $jwt_token = null;

        if (!$jwt_token = JWTAuth::attempt($input)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid email or Password',
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
                'message' => 'Utilisateur deconnecte avec succes'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, l utilisateur ne peut pas etre deconnecte'
            ], 500);
        }
    }




    public function getAuthUser()
    {
        try {

            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['utilisateur exit pas'], 404);
            }

        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json(['token expiré'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json(['token invalide'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json(['token absent'], $e->getStatusCode());

        }

        return response()->json(compact('user'));
    }





}
