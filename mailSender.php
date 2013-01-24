<?php
/**
 * Created by JetBrains PhpStorm.
 * User: egor
 * Date: 24.01.13
 * Time: 10:58
 * To change this template use File | Settings | File Templates.
 */

 $mailTo = 'scsware@ya.ru';
 $subject = 'Обратная связь DDL-Group';
 $message = '';
 $hdrs = "Content-type: text/plain; charset = utf-8";


if (isset($_POST['company']) && !empty($_POST['company'])) {$company = $_POST['company']; $message .= 'Компания: '.$company.'<br>';}
if (isset($_POST['name']) && !empty($_POST['name'])) {$name = $_POST['name']; $message .= 'Имя: '.$name.'<br>';}
if (isset($_POST['phone']) && !empty($_POST['phone'])) {$phone = $_POST['phone']; $message .= 'Телефон: '.$phone.'<br>';}
if (isset($_POST['email']) && !empty($_POST['email'])) {$email = $_POST['email']; $message .= 'E-mail: '.$email.'<br>';}
if (isset($_POST['message']) && !empty($_POST['message'])) {$mess = $_POST['message']; $message .= 'Сообщение: '.$mess.'<br>';}

if(isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['name']) && !empty($_POST['name']) && isset($_POST['message']) && !empty($_POST['message'])){
    require 'phpMailer/class.phpmailer.php';

    try {
        $mail = new PHPMailer(true); //New instance, with exceptions enabled

        $mail->IsSMTP();                           // tell the class to use SMTP
        $mail->SMTPAuth   = true;                  // enable SMTP authentication
        $mail->Port       = 465;                    // set the SMTP server port
        $mail->Host       = "smtp.gmail.com"; // SMTP server
        $mail->Username   = "taktikatest@gmail.com";     // SMTP server username
        $mail->Password   = "aQEgn47S2LpfM";            // SMTP server password

        $mail->IsSendmail();  // tell the class to use Sendmail

        $mail->SetFrom('info@ddl-group.ru', 'DDL');

        $mail->AddAddress($mailTo);
        $mail->Subject  = $subject;
        $mail->WordWrap   = 80; // set word wrap

        $mail->MsgHTML($message);

        $mail->IsHTML(true); // send as HTML

        $mail->Send();
        echo 'Message has been sent.';
    } catch (phpmailerException $e) {
        echo $e->errorMessage();
    }
}