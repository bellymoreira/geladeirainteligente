function calculateStatus(dateStr) {
    const today = new Date();
    const productDate = new Date(dateStr);
  
    const diffTime = productDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    if (diffDays < 0) return "red";
    if (diffDays <= 3) return "yellow";
    return "green";
  }
  
  function addProduct() {
  
    const name = document.getElementById("productName").value;
    const date = document.getElementById("productDate").value;
  
    if (!name || !date) {
      alert("Preencha todos os campos!");
      return;
    }
  
    const status = calculateStatus(date);
  
    products.push({
      name: name,
      date: date,
      status: status,
      emoji: getEmoji(name)
    });
  
    renderProducts();
    renderUrgentIngredients();
    closeModal();
  
    console.log("Produto salvo:", name); // debug
  }