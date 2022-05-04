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
        
        // inserindo o registro
        $user = new User();
        $user->first_name   = $first_name;
        $user->last_name    = $last_name;
        $user->rg           = $rg;
        $user->cpf          = $cpf;

        $user->save();
    return $arr;
   }
    //atualizar usuario
   public function updateUser(Request $request){
    $arr_error = ['error'=> ''];


    return $arr_error;
   }
    //deletar Usuario
   public function deleteUser(Request $request){
    $arr_error = ['error'=> ''];


    return $arr_error;
   }
}
