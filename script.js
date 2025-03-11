const radio = document.querySelector(".btn-1")
let cont = 1;

// Inicialmente, define o primeiro botão como ativo
document.getElementById("radio1").Checked = true;
document.querySelector('.navegaçaoauto div:nth-child(1)').classList.add('active');

setInterval(() => {
  proximaimg();
}, 5000);

function proximaimg() {
  // Incrementa o contador
  cont = cont > 3 ? 1 : cont + 1;

  // Marca a bolinha ativa e desmarca as outras
  updateActiveButton(cont);

  // Atualiza o rádio correspondente para a nova imagem
  document.getElementById('radio' + cont).checked = true;
}

function updateActiveButton(cont) {
  // Remove a classe 'active' de todas as bolinhas
  document.querySelectorAll('.navegaçaoauto div').forEach((btn) => {
    btn.classList.remove('active');
  });

  // Marca a bolinha correspondente como ativa
  document.querySelector('.navegaçaoauto div:nth-child(' + cont + ')').classList.add('active');
}

document.querySelectorAll('.manual .btn-1').forEach((button, index) => {
  button.addEventListener('click', () => {
    // Atualiza o contador baseado no botão clicado
    cont = index + 1;
    
    // Atualiza a bolinha ativa e a imagem
    updateActiveButton(cont);
    
    // Marca o rádio correspondente
    document.getElementById('radio' + cont).checked = true;
  });
});
