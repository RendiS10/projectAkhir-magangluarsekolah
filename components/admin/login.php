<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Halaman Login</title>
    <link rel="stylesheet" href="../../public/css/login.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body>
<section>
        <div class="login-container">
            <img src="../../public/assets/images/logo/LS-logo-master.png" alt="Logo Luarsekolah" />
            <fieldset>
                <legend>Action</legend>
                <form id="loginForm" method="POST" action="">
                    <ul>
                        <li>
                            <label for="username">Username/Email</label>
                            <input type="email" name="username" id="username" placeholder="Masukan Username/Email Anda!" required />
                        </li>
                        <li>
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Masukan Password Anda!" required />
                        </li>
                        <li>
                            <input type="submit" value="Login" name="submit" />
                        </li>
                        <li class="aksi">
                            <a href="../index.html">Kembali Ke Home</a>
                        </li>
                    </ul>
                </form>
                </fieldset>
        </div>
    </section>