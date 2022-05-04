<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\Contact;

class ContactController extends Controller
{
    // buscar dados do usuario
   public function getContact($id){
    $arr = ['error' => ''];
    $contact = new Contact();
    $arr['list_item'] = $contact->where('id_user', '=', '1')-> find($id);
    return $arr;
   }
    //criar Usuarios
   public function createContact(Request $request){
    $arr = ['error' => ''];
    $rules = [
        'id_user'   => 'required'
    ];
    //validando os dados
    $validato = Validator::make($request->all(),$rules);
    if($validato->fails()){
        $arr['error'] = $validato->messages();
        return $arr;
    }
        $id_user = $request-> input('id_user');
        $phone = $request-> input('phone');
        $email = $request-> input('email');
        $whatsapp = $request-> input('whatsapp');
        
        // inserindo o registro
        $contact = new Contact();

        $contact->id_user   = $id_user;
        $contact->phone     = $phone;
        $contact->email     = $email;
        $contact->whatsapp  = $whatsapp;

        $contact->save();
    return $arr;
   }
    //atualizar usuario
   public function updateContact(Request $request){
    $arr_error = ['error'=> ''];


    return $arr_error;
   }
    //deletar Usuario
   public function deleteContact(Request $request){
    $arr_error = ['error'=> ''];


    return $arr_error;
   }
}
