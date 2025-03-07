function removeImages() {
    // Lista de extensões de arquivo de imagem conhecidas
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg', '.ico'];
  
    // Função para verificar se um atributo termina com uma extensão de imagem
    function attributeEndsWithImageExtension(attributeValue) {
      if (!attributeValue) return false;
      const lowerCaseValue = attributeValue.toLowerCase();
      return imageExtensions.some(extension => lowerCaseValue.endsWith(extension));
    }
  
    // Remove tags com atributos que terminam com extensões de imagem
    document.querySelectorAll('*').forEach(element => {
      const attributes = element.attributes;
      for (let i = 0; i < attributes.length; i++) {
        if (attributeEndsWithImageExtension(attributes[i].value)) {
          element.remove();
          break; // Remove o elemento e passa para o próximo
        }
      }
    });
  
    // Remove tags de imagem padrão
    document.querySelectorAll('img, picture, image').forEach(element => element.remove());
  
    // Remove imagens de fundo CSS
    document.querySelectorAll('*').forEach(element => {
      element.style.backgroundImage = 'none';
      element.style.listStyleImage = 'none';
    });
  }
  
  // Execute a remoção de imagens inicialmente
  removeImages();
  
  // Crie um observador de mutações
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      // Verifique se algum nó foi adicionado
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        removeImages();
      }
    });
  });
  
  // Configure o observador para monitorar mudanças no DOM
  observer.observe(document.body, {
    childList: true, // Monitora adições e remoções de nós filhos
    subtree: true // Monitora mudanças em todos os nós descendentes
  });