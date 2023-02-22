function toggleMode() {
  const html = document.documentElement

  //  if(html.classList.contains('light')){
  //    html.classList.remove('light')
  //  } else {
  //    html.classList.add('light')
  //  }

  html.classList.toggle("light")

  //pega a tag img
  const img = document.querySelector(".profile img")
  //subdtitui imagem
  if (html.classList.contains('light')) {
    //se tiver light mode, mantem imagem padrão
    img.setAttribute('src', '../assets/img/profile-light.png')
  } else {
    //se tiver sem light mode, muda para dark
    img.setAttribute('src', '../assets/img/profile-dark.png')
  }


  if (html.classList.contains('light')) {
    img.setAttribute('alt', 'Foto profissional de André Rodrgues sorrindo, com fundo claro, barba e usando camisa preta')
  } else {
    img.setAttribute('alt', 'Foto profissional de André Rodrgues sorrindo, com fundo escuro, barba e usando camisa preta')
  }
}