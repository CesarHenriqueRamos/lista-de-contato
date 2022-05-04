<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\User;

class UserController extends Controller
{
    // buscar todos os usuarios
    public function getUserAll(){
        $arr = ['error' => ''];

        $users = new User();
        $arr['list'] = $users-> all();

        return $arr;
    }
    // buscar dados do usuario
   public function getUser($id){
       
    $arr = ['error' => ''];
    $user = new User();
    $arr['list_item'] = $user-> find($id);

    return $arr;
   }
    //criar Usuarios
   public function createUser(Request $request){
    $arr = ['error' => ''];
    $rules = [
        'first_name' => 'required|min:3',
        'last_name'  => 'required|min:3',
        'rg'         => 'required|min:7',
        'cpf'        => 'required|min:11'
    ];
    //validando os dados
    $validato = Validator::make($request->all(),$rules);
    if($validato->fails()){
        $arr['error'] = $validato->messages();
        return $arr;
    }
        $first_name = $request-> input('first_name');
        $last_name = $request-> input('last_name');
        $rg = $request-> input('rg');
        $cpf = $request-> input('cpf');
        $phone = $request-> input('phone');
        $email = $request-> input('email');
        $whatsapp = $request-> input('whatsapp');
        
        // inserindo o registro
        $user = new User();
        $user->first_name   = $first_name;
        $user->last_name    = $last_name;
        $user->rg           = $rg;
        $user->cpf          = $cpf;
        $user->phone        = $phone;
        $user->email        = $email;
        $user->whatsapp     = $whatsapp;


        $user->save();
    return $arr;
   }
    //atualizar usuario
   public function updateUser($id,Request $request){
        $arr =  ['error'=> ''];
        $rules = [
            'first_name' => 'min:3',
            'last_name'  => 'min:3',
            'rg'         => 'min:7',
            'cpf'        => 'min:11'
        ];

        $validato = Validator::make($request->all(),$rules);
        if($validato->fails()){
            $arr['error'] = $validato->messages();
            return $arr;
        }
        
        $first_name = $request-> input('first_name');
        $last_name = $request-> input('last_name');
        $rg = $request-> input('rg');
        $cpf = $request-> input('cpf');
        $phone = $request-> input('phone');
        $email = $request-> input('email');
        $whatsapp = $request-> input('whatsapp');


        $user = new User();
        $user = $user->find($id);

        if($user){          
            
            // inserindo o registro  

            if($first_name){
                $user->first_name   = $first_name;                
            }
            if($last_name){
                $user->last_name    = $last_name;
            }
            if($rg){
                $user->rg           = $rg;
            }
            if($cpf){
                $user->cpf          = $cpf;
            }
            if($phone){
                $user->phone        = $phone;  
            }
            if($email){
                $user->email        = $email;
            }
            if($whatsapp){
                $user->whatsapp     = $whatsapp;
            }
        
            $user->save();

        }else{
            $arr['error'] = "O Usuario não foi encontrado";
            
        }

    return $arr;
   }
    //deletar Usuario
   public function deleteUser($id){
        $arr = ['error'=> ''];
        
        $user = new User();
        $user = $user->find($id);
        $user->delete();

        return $arr;
   }
}
