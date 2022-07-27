const mainHTML = (data) => 
`
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous"/>
  </head>
  <body class="pb-5">
    
    <!-- Header -->
    <header class="bg-dark py-4 mb-5">
      <h1 class="text-center text-white">
        <i class="fas fa-users mr-1"></i>
        Team Profile
      </h1>
    </header>
    <!-- Profile Cards -->
    <main>
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">   
          ${data}       
        </div>
      </div>
    </main>
  </body>
  </html>
  <script src="https://kit.fontawesome.com/f908450ba9.js" crossorigin="anonymous"></script>
`

export { mainHTML };