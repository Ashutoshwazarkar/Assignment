const Restaurentmenu = {
    restaurentName: "ashfgas",
    address: "Baner",
    city: "Pune",
    menu: {
      panjabi: {
        dish: "hakhs",
        price: 100,
      },
      indiandish: {
        dish: "pavbhaji",
        price: 120,
      },
    },
  };
  
  const addnewmenu = (category, dish, newprice) => {
    Restaurentmenu.menu[category] = { dish, price: newprice };
  };
  
  addnewmenu("itali", "pizza", "200");
  
  const updateprice = (category, newprice) => {
    if (Restaurentmenu.menu[category]) {
      Restaurentmenu.menu[category].price = newprice;
    } else {
      console.log(`Category ${category} not found.`);
    }
  };
  
  updateprice("indiandish", 100);
  
  console.log(Restaurentmenu);
  