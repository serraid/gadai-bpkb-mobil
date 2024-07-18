<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recaptchaSecret = '6LdbxRIqAAAAAP9BBtUm80vRuq3jBW-FWHmoH8wB';
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = [
        'secret' => $recaptchaSecret,
        'response' => $recaptchaResponse
    ];
    
    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        ]
    ];
    $context  = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    $result = json_decode($response);

    if ($result->success) {
        // reCAPTCHA verified successfully
        // Process form data
        $nama = $_POST['nama'];
        $nomor = $_POST['nomor'];
        $alamat = $_POST['alamat'];
        $jenis_kendaraan = $_POST['jenis_kendaraan'];
        $merk_type_kendaraan = $_POST['merk_type_kendaraan'];
        $plat_nomor = $_POST['plat_nomor'];
        $tahun_kendaraan = $_POST['tahun_kendaraan'];
        
        // Simpan data atau lakukan tindakan lainnya
        // Contoh: simpan data ke database, kirim email, dll.
        
        echo "Form submitted successfully.";
    } else {
        // reCAPTCHA verification failed
        echo "reCAPTCHA verification failed. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>