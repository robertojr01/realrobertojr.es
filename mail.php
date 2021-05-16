<?php

if( isset($_POST['enviar']) ){
    if( !empty($_POST['nombre']) && !empty($_POST['email']) && !empty($_POST['mensaje']) && !empty($_POST['telefono']) ){
        
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        $mensaje_form = $_POST['mensaje'];
        $telefono = $_POST['telefono'];

        $mensaje_email = "Mensaje enviado por: $nombre \r\n";
        $mensaje_email .= "Su email es: $email \r\n";
        $mensaje_email .= "Telefono de contacto: $telefono";
        $mensaje_email .= "Mensaje: $mensaje_form \r\n";

        $asunto = 'EMAIL ENVIADO DESDE FORMULARIO';
        $email_enviar = 'jroberto007@icloud.com';

        mail($email_enviar, $asunto, $mensaje_email);

        header('Location:index.html');
    }
}