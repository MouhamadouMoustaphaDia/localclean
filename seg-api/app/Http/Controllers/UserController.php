<?php

namespace App\Http\Controllers;

//use App\Http\Requests\RegisterAuthRequest;
use App\Models\User;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Hash;
use App\Models\UserBoulangery;
use App\Models\Boulangery;
use Illuminate\Support\Facades\DB;

class userController extends Controller
{
    public $loginAfterSignUp = true;
    
    public function register(Request $request)
    {
        try{  //ce Try catch permet de faire un rollback au cas où la transaction n'a pas aboutis
            DB::beginTransaction();

            $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
            'profil' => $request->get('profil'),
            'nbr_signalement' => $request->get('nbr_signalement'),
             ]);  
         
             //si tu veux tu peux utiliser cette requête d'insertion, c'est quasiment la mm chose
      /*  $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->profil = $request->profil;
        $user->nbr_signalement = $request->nbr_signalement;
        $user->save();
        */
        

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
