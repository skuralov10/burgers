<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $street = $_POST['street'];
    $house = $_POST['house'];
    $corps = $_POST['corps'];
    $apartment = $_POST['apartment'];
    $floor = $_POST['floor'];
    $comment = $_POST['comment'];    
    $pay = $_POST['form__radio'];
    $disturb = $_POST['dont-disturb']; // 1 или null
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Дом: ' . $house . '</li>
            <li>Корпус: ' . $corps . '</li>
            <li>Квартира: ' . $apartment . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарий: ' . $comment . '</li>
            <li>Способ оплаты: ' . $pay . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <skpitbul@gmail.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('skuralov@mail.ru', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);
?>